CREATE DATABASE IF NOT EXISTS sams_db;
USE sams_db;

-- Employees Table
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    role VARCHAR(100) NOT NULL,
    status VARCHAR(50) NOT NULL
);

INSERT INTO employees(name,email,role,status) VALUES
('John Doe','john@example.com','Software Engineer','Active'),
('Jane Smith','jane@example.com','Project Manager','Pending'),
('Robert Brown','robert@example.com','DevOps Engineer','Active');

-- Projects Table
CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_name VARCHAR(100) NOT NULL,
    status VARCHAR(50) NOT NULL
);

INSERT INTO projects(project_name,status) VALUES
('HR Portal','Active'),
('ERP Migration','Delayed'),
('Employee Dashboard','Active');

-- Hierarchy Table
CREATE TABLE hierarchy (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_name VARCHAR(100),
    manager_id INT
);

INSERT INTO hierarchy(employee_name,manager_id) VALUES
('John Doe',1),
('Jane Smith',1),
('Robert Brown',2);