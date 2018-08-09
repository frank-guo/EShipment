using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace EShipment.Repositories
{
  public interface IRepository<TEntity> : IDisposable where TEntity : class
  {
    Task<IEnumerable<TEntity>> Get(
        Expression<Func<TEntity, bool>> filter = null,
        string includeProperties = "");
    TEntity GetByID(long id);
    Task<TEntity> GetByID(string id);
    void Insert(TEntity entity);
    EntityEntry<TEntity> InsertAndReturn(TEntity entity);
    bool Delete(long id);
    void Update(TEntity entityToUpdate);
  }
}
