using EmployeeDetailAPI.Data;
using EmployeeDetailAPI.Models;
using System.Collections.Generic;
using System.Linq;

namespace EmployeeDetailAPI.Business
{
        // Provides business logic related to employee operations.
        // Inherits EmployeeDataLayer to access employee data.
        public class EmployeeBusinessLayer : EmployeeDataLayer
        {
            // Filters the list of all employees to find one by ID.
            public Employee GetEmployeeById(int id) => GetAllEmployees().FirstOrDefault(e => e.Id == id);
        }
}
