namespace EmployeeDetailAPI.Models
{
    // Represents an employee entity in the system.
    public class Employee
    {
        public int Id { get; set; } // Unique identifier for the employee
        public string Name { get; set; } // Name of the employee
        public string Role { get; set; } // Role of the employee within the company
        public string Department { get; set; } // Department the employee belongs to
    }
}
