USE TechFusionDB;
GO

-- Insert a new employee
INSERT INTO Employees (ID, Name, Position, Age) VALUES (1, 'John Doe', 'Software Developer', 30);
GO

-- Insert multiple employee records
INSERT INTO Employees (ID, Name, Position, Age) VALUES 
(2, 'Jane Smith', 'Project Manager', 35),
(3, 'Alice Johnson', 'Database Administrator', 28),
(4, 'Bob Brown', 'Software Tester', 25),
(5, 'Charlie Davis', 'Product Manager', 40),
(6, 'Diana Adams', 'UI/UX Designer', 32),
(7, 'Evan Wright', 'DevOps Engineer', 29),
(8, 'Fiona Green', 'System Analyst', 37),
(9, 'George Thompson', 'Cloud Architect', 42),
(10, 'Hannah White', 'Data Scientist', 31);
GO

-- Retrieve all employees
SELECT * FROM Employees;
GO

-- Update the age of an employee
UPDATE Employees SET Age = 31 WHERE ID = 1;
GO

-- Delete an employee record
DELETE FROM Employees WHERE ID = 1;
GO
