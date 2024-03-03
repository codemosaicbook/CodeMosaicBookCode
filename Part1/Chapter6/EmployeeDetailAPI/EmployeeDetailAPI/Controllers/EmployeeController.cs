using Microsoft.AspNetCore.Mvc;
using EmployeeDetailAPI.Business;
using EmployeeDetailAPI.Models;
using System.Collections.Generic;

namespace EmployeeDetailAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    // Manages HTTP requests for employee operations.
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeBusinessLayer _employeeBusinessLayer;

        public EmployeeController()
        {
            // Initializes the business layer, which includes data layer functionality.
            _employeeBusinessLayer = new EmployeeBusinessLayer();
        }

        /// <summary>
        /// Fetches all employees directly using the inherited data layer functionality.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult<IEnumerable<Employee>> GetAllEmployees()
        {
            return Ok(_employeeBusinessLayer.GetAllEmployees());
        }

        /// <summary>
        /// Fetches a single employee by ID using business layer logic for filtering.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public ActionResult<Employee> GetEmployeeById(int id)
        {
            var employee = _employeeBusinessLayer.GetEmployeeById(id);
            if (employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }
    }
}
