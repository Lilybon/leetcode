# Write your MySQL query statement below
SELECT users.name               AS name,
       Sum(transactions.amount) AS balance
FROM   transactions
       LEFT JOIN users
              ON transactions.account = users.account
GROUP  BY users.account
HAVING balance > 10000