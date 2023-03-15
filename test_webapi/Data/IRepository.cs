namespace test_webapi.Data
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> GetAll();
        T Get(long id);
        void Create(T item);
        void Update(T item);
        void Delete(long id);
    }
}