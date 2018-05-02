using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace EShipment.Data.Migrations
{
    public partial class AddOrder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "UserNameIndex",
                table: "AspNetUsers");

            //migrationBuilder.DropIndex(
            //    name: "IX_AspNetUserRoles_UserId",
            //    table: "AspNetUserRoles");

            migrationBuilder.DropIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles");

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    ID = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ApplicationUser_Id = table.Column<string>(nullable: true),
                    BLNumber = table.Column<string>(nullable: true),
                    ContainerNumber = table.Column<string>(nullable: true),
                    Destination = table.Column<string>(nullable: true),
                    DischargedPort = table.Column<string>(nullable: true),
                    ETA = table.Column<DateTime>(nullable: false),
                    ETD = table.Column<DateTime>(nullable: false),
                    Mark = table.Column<string>(nullable: true),
                    Measurement = table.Column<float>(nullable: false),
                    NumbOfGoods = table.Column<int>(nullable: false),
                    Number = table.Column<string>(nullable: true),
                    ProductDescription = table.Column<string>(nullable: true),
                    ReceiveOrderDate = table.Column<DateTime>(nullable: false),
                    Weight = table.Column<float>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Orders_AspNetUsers_ApplicationUser_Id",
                        column: x => x.ApplicationUser_Id,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "OrderStatus",
                columns: table => new
                {
                    ID = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Order_Id = table.Column<string>(nullable: true),
                    orderID = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderStatus", x => x.ID);
                    table.ForeignKey(
                        name: "FK_OrderStatus_Orders_orderID",
                        column: x => x.orderID,
                        principalTable: "Orders",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_ApplicationUser_Id",
                table: "Orders",
                column: "ApplicationUser_Id");

            migrationBuilder.CreateIndex(
                name: "IX_OrderStatus_orderID",
                table: "OrderStatus",
                column: "orderID");

            //migrationBuilder.AddForeignKey(
            //    name: "FK_AspNetUserTokens_AspNetUsers_UserId",
            //    table: "AspNetUserTokens",
            //    column: "UserId",
            //    principalTable: "AspNetUsers",
            //    principalColumn: "Id",
            //    onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.DropForeignKey(
            //    name: "FK_AspNetUserTokens_AspNetUsers_UserId",
            //    table: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "OrderStatus");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropIndex(
                name: "UserNameIndex",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true);

            //migrationBuilder.CreateIndex(
            //    name: "IX_AspNetUserRoles_UserId",
            //    table: "AspNetUserRoles",
            //    column: "UserId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName");
        }
    }
}
