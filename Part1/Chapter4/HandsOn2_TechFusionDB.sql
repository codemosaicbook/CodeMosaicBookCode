-- HandsOn2: Create TechFusionDB and Employees Table

-- Create TechFusionDB Database
CREATE DATABASE TechFusionDB;
GO

USE TechFusionDB;
GO

-- Create Employees Table
CREATE TABLE Employees (
    ID INT PRIMARY KEY,
    Name NVARCHAR(50),
    Position NVARCHAR(50),
    Age INT
);
GO

-- View the structure of Employees Table
-- Note: This action is typically performed through the SSMS UI by navigating to the created table under TechFusionDB -> Tables.
