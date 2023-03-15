using Microsoft.EntityFrameworkCore;
using test_webapi.Models;

namespace test_webapi.Data
{


    public class SubjectRepository : IRepository<Subject>
    {
        private TodoContext _context;
        public SubjectRepository(TodoContext context)
        {
            _context = context;
        }

        public  void Create(Subject entity)
        {
            
            _context.Add(entity);
            _context.SaveChanges();
        }

        public void Delete(long id)
        {
            var item = Get(id);
            if(item != null)    
                _context.Subject.Remove(item);
            _context.SaveChanges();

        }

        public Subject Get(long id)
        {
            return _context.Subject.Find(id);
        }

        public IEnumerable<Subject> GetAll()
        {
            return _context.Subject;
        }

        public void Update(Subject entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            _context.SaveChanges();
        }
    }
}