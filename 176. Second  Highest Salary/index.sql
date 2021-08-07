SELECT
CASE
    WHEN COUNT(MAX_SALARY) > 0 THEN MAX_SALARY
    ELSE NULL
END AS SecondHighestSalary
FROM (
    SELECT MAX(Salary) AS MAX_SALARY
    FROM Employee
    WHERE Salary != (SELECT MAX(Salary) FROM Employee)
) AS EMPLOYEE_TABLE_1;
