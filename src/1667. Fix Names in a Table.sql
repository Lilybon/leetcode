# Write your MySQL query statement below
SELECT user_id,
       Concat(Upper(Substr(name, 1, 1)), Lower(Substr(name, 2))) AS name
FROM   users
ORDER  BY user_id ASC