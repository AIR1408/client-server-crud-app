using Microsoft.EntityFrameworkCore;
using test_webapi.Models;

namespace test_webapi.Data
{


    public class GradeRepository : IRepository<Grade>
    {
        private TodoContext _context;
        public GradeRepository(TodoContext context)
        {
            _context = context;
        }

        public  void Create(Grade entity)
        {
            
            _context.Add(entity);
            _context.SaveChanges();
        }

        public void Delete(long id)
        {
            var item = Get(id);
            if(item != null)    
                _context.Grade.Remove(item);
            _context.SaveChanges();

        }

        public Grade Get(long id)
        {
            return _context.Grade.Find(id);
        }

        public IEnumerable<Grade> GetAll()
        {
            return _context.Grade.ToList();
        }

        public void Update(Grade entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            _context.SaveChanges();
        }
    }
}