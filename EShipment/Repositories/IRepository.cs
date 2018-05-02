using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace EShipment.Repositories
{
  public interface IRepository<TEntity> : IDisposable where TEntity : class
  {
    IEnumerable<TEntity> Get(
        Expression<Func<TEntity, bool>> filter = null,
        string includeProperties = "");
    TEntity GetByID(long id);
    void Insert(TEntity entity);
    EntityEntry<TEntity> InsertAndReturn(TEntity entity);
    void Delete(long id);
    void Update(TEntity entityToUpdate);
  }
}
