using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace OzonExpress.Models
{
    public class User
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        [JsonIgnore] public string Password { get; set; }
    }
}
