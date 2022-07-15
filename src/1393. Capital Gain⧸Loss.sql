# Write your MySQL query statement below
SELECT stock_name,
       Sum(IF(operation = 'Sell', price, -price)) AS capital_gain_loss
FROM   stocks
GROUP  BY stock_name