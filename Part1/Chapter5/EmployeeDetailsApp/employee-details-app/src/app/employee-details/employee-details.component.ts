import { Component } from '@angular/core';
import { EmployeeDataService, Employee } from '../employee-data-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent {
  employees: Employee[] = []; // Stores the list of employees
  selectedEmployee: any; // Stores the currently selected employee

  // Inject the EmployeeDataService into the component
  constructor(private employeeDataService: EmployeeDataService) { }

  // OnInit lifecycle hook to populate employees when the component initializes
  ngOnInit(): void {
    this.employees = this.employeeDataService.getAllEmployees();
  }

  // Method triggered on selecting an employee from the dropdown
  onSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement; // Type assertion
    const employeeId = Number(selectElement.value);
    if (!isNaN(employeeId)) {
      this.selectedEmployee = this.employeeDataService.getEmployeeById(employeeId);
    }
  }
}
