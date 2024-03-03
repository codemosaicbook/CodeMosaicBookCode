# .NET Narratives: Weaving the Backend Tapestry - HandsOn Solution

Welcome to the solution guide for Chapter 6's HandsOn exercise. This directory hosts the `.NET Core WebAPI` project, `EmployeeDetailAPI`, designed to complement the Angular application developed in Chapter 5. Together, these projects demonstrate a full-stack application architecture.

## Introduction

This solution is a crucial part of "Chapter 6: .NET Narratives: Weaving the Backend Tapestry." It focuses on developing the backend part of the EmployeeDetail component using .NET Core WebAPI, interacting with a simulated database to fetch and display employee data. 

## Pre-requisites

Before diving into this solution, we **strongly recommend** that you:

1. **Complete Chapter 5** to understand the frontend part of this application.
2. **Read through Chapter 6** to grasp the concepts of .NET Core WebAPI.
3. **Attempt the HandsOn assignment independently** before referring to this solution to enhance your learning experience.

## Running the Project in Visual Studio

To run the `EmployeeDetailAPI` project using Visual Studio, follow these steps for a seamless setup and testing experience:

1. **Connect to Git within Visual Studio:**
    - Open Visual Studio.
    - Use the built-in Git features to clone the repository. Go to `View` > `Team Explorer`, click on the `Manage Connections` icon, and then select `Clone`. Enter the `<repository-url>` and choose the desired local path.

2. **Open the Project:**
    - Navigate to the cloned repository's directory (`Chapter6\EmployeeDetailAPI\EmployeeDetailAPI`).
    - Double-click on `EmployeeDetailAPI.sln` to open the solution in Visual Studio.

3. **Set Up the Startup Project:**
    - Right-click on the `EmployeeDetailAPI` project in the Solution Explorer.
    - Select `Set as Startup Project`.

4. **Build the Project:**
    - Go to `Build` > `Build Solution` to compile the project.

5. **Run the Application:**
    - Press `F5` or click on the `Start Debugging` button to run the application.
    - Visual Studio will automatically open a web browser with the Swagger UI for the API, typically at `https://localhost:5001/swagger`.

6. **Test the API:**
    - Use the Swagger UI to test the API endpoints. You can execute GET requests to fetch all employees or a specific employee by ID directly from the interface.

7. **(Optional) Prepare for Database Integration:**
    - Currently, the application uses a simulated data layer (`Data/EmployeeDataLayer.cs`). In upcoming chapters, we will discuss connecting this data layer to a real database, specifically focusing on setting up Azure SQL and integrating it with .NET.
    - This step will require modifications to the data layer to use Entity Framework Core for database operations, which will be covered in detail.

By following these steps, you should have the `EmployeeDetailAPI` running and accessible via Swagger UI, ready for further experimentation and learning.

Happy coding!


## Connecting to the Angular Frontend

After completing the next steps outlined in Chapter 5, update the Angular `EmployeeDataService` to fetch data from this .NET Core WebAPI instead of using hardcoded data. Refer to Chapter 5's solution guide for detailed instructions. For a seamless integration, keep in mind:

- **CORS Configuration:** Ensure CORS is properly configured in the .NET Core WebAPI to accept requests from your Angular app's host address. This setup is crucial to prevent CORS-related errors.

- **Angular Providers:** For Angular standalone components, ensure services are provided correctly. If encountering service-related errors, verify that all necessary providers are included.

- **API Endpoints:** Double-check the API endpoints in your Angular service to ensure they match those exposed by your .NET Core WebAPI.

- **Localhost Port Adjustments:** If your Angular app is hosted on a port different from the default (`http://localhost:4200`), adjust the CORS policy in the .NET Core WebAPI accordingly.

Refer to the substitution files provided in the repository for examples and detailed configurations. These files include necessary adjustments for API calls, providers, and CORS settings to facilitate communication between your Angular frontend and .NET Core backend.


## Structure and Implementation

The `EmployeeDetailAPI` project follows a three-layer architecture:

- **Data Layer (`Data/EmployeeDataLayer.cs`):** Simulates a data repository for employees.
- **Business Layer (`Business/EmployeeBusinessLayer.cs`):** Contains business logic for processing employee data.
- **Presentation Layer (Controllers):** Handles HTTP requests and responses.

## Conclusion

By completing this exercise, you've taken an important step towards mastering full-stack development with Angular and .NET Core WebAPI. This project lays a foundation for further exploration into more advanced topics, such as database integration, which we'll cover in upcoming chapters.

Happy coding!
