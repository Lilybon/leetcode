/* Write your T-SQL query statement below */
SELECT
    (
      SELECT DISTINCT
        Salary
      FROM
        Employee
      ORDER BY Salary DESC
      OFFSET 1 ROWS
      FETCH NEXT 1 ROWS ONLY
    )
AS SecondHighestSalary
