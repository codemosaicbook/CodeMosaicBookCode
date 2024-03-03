-- HandsOn 5: Relationships and Schema Design

-- Note: This hands-on involves conceptual tasks like designing schemas and creating relationships which might not directly translate to simple SQL commands. Below are examples of creating tables with relationships.

USE TechFusionDB;
GO

-- Create a Products table
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName NVARCHAR(100),
    Price DECIMAL(10, 2)
);
GO

-- Create an Orders table with a foreign key to Products
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    ProductID INT,
    Quantity INT,
    CONSTRAINT FK_Orders_Products FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);
GO

-- Implement CHECK constraint for data integrity
ALTER TABLE Employees ADD CONSTRAINT CHK_Age CHECK (Age >= 18);
GO
