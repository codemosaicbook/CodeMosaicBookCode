import { Injectable } from '@angular/core';

// Define an interface for Employee objects
export interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
}

@Injectable({
  providedIn: 'root' // This service is available throughout the app
})
export class EmployeeDataService {
  // Hardcoded list of employees
  private employees: Employee[] = [
    { id: 1, name: 'Alice', role: 'Developer', department: 'IT' },
    { id: 2, name: 'Bob', role: 'Designer', department: 'Creative' },
    // Add more employees as needed
  ];

  constructor() { }

  // Method to retrieve all employees
  getAllEmployees() {
    return this.employees;
  }

  // Method to retrieve a single employee by their ID
  getEmployeeById(id: number) {
    return this.employees.find(employee => employee.id === id);
  }
}
