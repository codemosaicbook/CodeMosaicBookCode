# Chapter 5: Angular Adventures: Crafting Smart User Interfaces - HandsOn Solution

Welcome to the solution guide for Chapter 5's HandsOn assignment. This directory contains the complete Angular project, `employee-details-app`, designed to help you understand and apply the concepts discussed in Chapter 5 of our Angular series.

## Introduction

This solution is a part of "Chapter 5: Angular Adventures: Crafting Smart User Interfaces." It serves as a practical example to complement the theoretical concepts explored within the chapter. The project demonstrates how to build a responsive user interface that interacts with services to display data dynamically.

## Pre-requisites

Before diving into this solution, we **strongly recommend** that you:

1. **Read through Chapter 5** thoroughly to grasp the fundamental concepts of Angular, focusing on components, services, and data binding.
2. **Attempt the HandsOn assignment on your own.** This is crucial for solidifying your understanding and skills.
3. **Refer to this solution only after trying to complete the assignment independently.** This approach will enhance your learning experience and problem-solving skills.

## Running the Project

To get the project up and running on your local machine, follow these steps:

1. **Clone the repository:** Ensure you have Git installed on your system. Open a terminal and run:
   ```cmd
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**
   ```cmd
   cd <pathOfRepository>/Part1/Chapter5/EmployeeDetailsApp/employee-details-app
   ```

3. **Install dependencies:** Make sure you have Node.js and npm installed. Then, run:
   ```cmd
   npm install
   ```

5. **Serve the application:** Start the development server:
   ```cmd
   ng serve -o
   ```

5. **View the application:** Open your web browser and go to `http://localhost:4200/`. You should see the employee details application running.

## Integrating with an API

Once you've completed the next chapter and are ready to work with APIs, this solution includes a set of **substitution files** located in the `Substitution files` folder. These files are designed to replace parts of the application to fetch data from an API instead of using hardcoded data.

### Steps for Substitution:

1. **Stop your development server** if it's running.

3. Navigate to the `Substitution files` folder.

4. **Replace the corresponding files** in the `employee-details-app` with the ones provided in the `Substitution files` folder.

5. **Ensure your API server is running.** Adjust the `apiUrl` in the substituted service file to match your API endpoint.

6. **Restart the development server** and verify that the application now fetches data from your API.

## Conclusion

We hope this solution enhances your understanding of Angular and serves as a valuable reference as you progress through your Angular learning journey. Remember, the key to mastering Angular is consistent practice and exploration.

Happy coding!
