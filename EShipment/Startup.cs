using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using EShipment.Data;
using EShipment.Models;
using EShipment.Services;
using EShipment.Repositories;
using EShipment.UnitOfWorks;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Security.Claims;

namespace EShipment
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddDbContext<ApplicationDbContext>(options =>
          options.UseLazyLoadingProxies().UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

      services.AddIdentity<ApplicationUser, IdentityRole>()
          .AddEntityFrameworkStores<ApplicationDbContext>()
          .AddDefaultTokenProviders();
      services.ConfigureApplicationCookie(options => { options.ExpireTimeSpan = TimeSpan.FromMinutes(30); });

      services.AddAuthentication()
      .AddCookie(cfg => cfg.SlidingExpiration = true)
      .AddJwtBearer(cfg =>
      {
        cfg.RequireHttpsMetadata = false;
        cfg.SaveToken = true;

        cfg.TokenValidationParameters = new TokenValidationParameters()
        {
          ValidIssuer = Configuration["Tokens:Issuer"],
          ValidAudience = Configuration["Tokens:Issuer"],
          IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Tokens:Key"]))
        };

      });

      // Add application services.
      services.AddTransient<IEmailSender, EmailSender>();

      services.AddMvc();
      services.AddAuthorization(options =>
      {
        options.AddPolicy("adminUser", policy => {
          //The statement below can be used to specify the authentication scheme for this poliy
          //policy.AuthenticationSchemes.Add(JwtBearerDefaults.AuthenticationScheme);
          policy.RequireClaim(ClaimTypes.Role, Constant.String.JwtClaim.Admin);
        });

        options.AddPolicy("managerUser", policy => {
          policy.RequireClaim(ClaimTypes.Role, Constant.String.JwtClaim.Manager);
        });
      });

      services.AddTransient<IOrderService, OrderService>();
      services.AddTransient<IUserService, UserService>();
      services.AddTransient<IRepository<Order>, Repository<Order>>();
      services.AddTransient<IRepository<OrderStatus>, Repository<OrderStatus>>();
      services.AddTransient<IUnitOfWork, UnitOfWork>();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env, IServiceProvider services)
    {
      if (env.IsDevelopment())
      {
          app.UseBrowserLink();
          app.UseDeveloperExceptionPage();
          app.UseDatabaseErrorPage();
      }
      else
      {
          app.UseExceptionHandler("/Home/Error");
      }

      app.UseDefaultFiles();
      app.UseStaticFiles();

      app.UseAuthentication();

      app.UseMvc(routes =>
      {
          routes.MapRoute(
              name: "default",
              template: "{controller=Home}/{action=Index}/{id?}");
      });

      CreateUserRoles(services).Wait();
    }

    private async Task CreateUserRoles(IServiceProvider serviceProvider)
    {
      var RoleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
      var UserManager = serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();

      IdentityResult roleResult;
      //Adding Addmin Role    
      var roleCheck = await RoleManager.RoleExistsAsync(Constant.String.JwtClaim.Admin);
      if (!roleCheck)
      {
        //create the roles and seed them to the database    
        roleResult = await RoleManager.CreateAsync(new IdentityRole(Constant.String.JwtClaim.Admin));
      }

      roleCheck = await RoleManager.RoleExistsAsync(Constant.String.JwtClaim.Manager);
      if (!roleCheck)
      {
        //create the roles and seed them to the database    
        roleResult = await RoleManager.CreateAsync(new IdentityRole(Constant.String.JwtClaim.Manager));
      }

      roleCheck = await RoleManager.RoleExistsAsync(Constant.String.JwtClaim.Regular);
      if (!roleCheck)
      {
        //create the roles and seed them to the database    
        roleResult = await RoleManager.CreateAsync(new IdentityRole(Constant.String.JwtClaim.Regular));
      }

      //Assign admin role to the main User here for admin management    
      ApplicationUser user = await UserManager.FindByEmailAsync("frank@hotmail.com");
      var User = new ApplicationUser();
      await UserManager.AddToRoleAsync(user, Constant.String.JwtClaim.Admin);

      //Assign manager role to the main User here for management    
      await UserManager.AddToRoleAsync(user, Constant.String.JwtClaim.Manager);
    }
  }
}
