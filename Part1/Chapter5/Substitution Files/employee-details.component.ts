import { Component } from '@angular/core';
import { EmployeeDataService, Employee } from '../employee-data-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  providers: [EmployeeDataService],
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
    this.employeeDataService.getAllEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  onSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const employeeId = Number(selectElement.value);
    if (!isNaN(employeeId)) {
      this.employeeDataService.getEmployeeById(employeeId).subscribe(data => {
        this.selectedEmployee = data;
      });
    }
  }
}
