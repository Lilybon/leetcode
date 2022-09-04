# Write your MySQL query statement below
SELECT sell_date,
       Count(DISTINCT( product ))                                        AS
       num_sold,
       Group_concat(DISTINCT product ORDER BY product ASC SEPARATOR ',') AS
       products
FROM   activities
GROUP  BY sell_date
ORDER  BY sell_date ASC