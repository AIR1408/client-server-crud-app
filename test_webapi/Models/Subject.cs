namespace test_webapi.Models
{
    public class Subject
    {
        public long Id { get; set; }
        public string? Name { get; set; }
        public List<Teacher>? Teachers {get; set;}
    }
}
