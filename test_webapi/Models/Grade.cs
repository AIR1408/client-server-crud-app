using System.ComponentModel.DataAnnotations;

namespace test_webapi.Models
{
    public class Grade
    {
        public long Id { get; set; }
        public string? Name { get; set; }

        public int TeacherId {get; set;}

        public List<Pupil>? Pupils {get; set;}
    }
}
