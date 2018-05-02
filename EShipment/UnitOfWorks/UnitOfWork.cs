using EShipment.Data;
using EShipment.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EShipment.UnitOfWorks
{
    public class UnitOfWork : IUnitOfWork
    {
      private readonly ApplicationDbContext entities = null;
      public Dictionary<Type, object> repositories = new Dictionary<Type, object>();

      public UnitOfWork(ApplicationDbContext entities)
      {
        this.entities = entities;
      }

      public IRepository<T> Repository<T>() where T : class
      {
        if (repositories.Keys.Contains(typeof(T)) == true)
        {
          return repositories[typeof(T)] as IRepository<T>;
        }

        IRepository<T> repo = new Repository<T>(entities);
        repositories.Add(typeof(T), repo);
        return repo;
      }

      public void SaveChanges()
      {
        entities.SaveChanges();
      }
  }
}
