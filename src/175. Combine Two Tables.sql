/* Write your T-SQL query statement below */
SELECT
    a.FirstName, a.LastName, b.City, b.State
FROM
    Person AS a
LEFT OUTER JOIN Address AS b
    ON a.PersonId = b.PersonId
