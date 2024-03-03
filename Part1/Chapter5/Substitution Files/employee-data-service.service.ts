import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http'; // <-- Import HttpClientModule
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
  private apiUrl = 'https://localhost:7284/api/employee'; // Update with your API's base URL

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
