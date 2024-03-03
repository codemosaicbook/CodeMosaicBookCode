USE TechFusionDB;
GO

-- Assuming the Employees table has been populated with data.

-- Fetch specific columns
SELECT Name, Position FROM Employees;
GO

-- Filter and sort data
SELECT * FROM Employees WHERE Age > 25 ORDER BY Age ASC;
GO

-- Use functions like MIN, MAX, and DISTINCT
SELECT MIN(Age) AS MinAge, MAX(Age) AS MaxAge FROM Employees;
SELECT DISTINCT Position FROM Employees;
GO

-- Group data using GROUP BY and HAVING clauses
SELECT Position, AVG(Age) AS AvgAge FROM Employees GROUP BY Position HAVING AVG(Age) > 27;
GO
