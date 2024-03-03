using EmployeeDetailAPI.Models;

namespace EmployeeDetailAPI.Data
{
    // This class simulates the data layer responsible for accessing employee data.
    // In a real-world scenario, this would interact with a database.
    public class EmployeeDataLayer
    {
        private static List<Employee> employees = new List<Employee>
        {
            new Employee { Id = 1, Name = "Alice", Role = "Developer", Department = "IT" },
            new Employee { Id = 2, Name = "Bob", Role = "Project Manager", Department = "Business" },
            new Employee { Id = 3, Name = "Charlie", Role = "Designer", Department = "Creative" },
            new Employee { Id = 4, Name = "Diana", Role = "QA Engineer", Department = "Quality Assurance" },
            new Employee { Id = 5, Name = "Evan", Role = "System Administrator", Department = "IT" },
            new Employee { Id = 6, Name = "Fiona", Role = "HR Specialist", Department = "Human Resources" },
            new Employee { Id = 7, Name = "George", Role = "Marketing Coordinator", Department = "Marketing" },
            new Employee { Id = 8, Name = "Hannah", Role = "Financial Analyst", Department = "Finance" },
            new Employee { Id = 9, Name = "Ian", Role = "Customer Service Representative", Department = "Support" },
            new Employee { Id = 10, Name = "Jasmine", Role = "Sales Executive", Department = "Sales" }
            // Define more employees as necessary
        };

        // Retrieves all employees without filtering.
        public IEnumerable<Employee> GetAllEmployees() => employees;
    }
}
