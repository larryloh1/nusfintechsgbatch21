-- Active: 1684893148216@@137.132.92.144@12865@market

-- Practical Examples (1)
-- Tasks:
-- 1. Show all tables in the market database
show tables;

-- 2. Show a list of columns in the customers table
describe customer;

-- 3. Show all records in the customers table
select * from customer;

-- 4. Show product id and product name for all records in the products table
select * from product;

-- 5. Show the transaction date, customer id, product id and amount for all records in the transaction table
select transaction_datetime, customer_id, product_id, transaction_amount
    from transaction;

------------------------------------------------------

-- Example of a Nested Query
select * from customer
    where customer_id in
    (select customer_id from transaction
        where transaction_amount > 200);

-- Practical Examples (2)
-- Tasks:
-- 1. View all customers who have a wallet balance of more than 5000 and a tolerance of more than 0.7
select * from customer
    where customer_wallet > 5000 and customer_tolerance > 0.7;

-- 2. Extending Task 1, view all the customers in decreasing order of their wallet balance.
select * from customer
    where customer_wallet > 5000 and customer_tolerance > 0.7
    order by customer_wallet desc;

-- 3. View all the transactions made by customers with customer_id in list (1, 3, 5, 7, 9).
select * from transaction
    where customer_id in (1, 3, 5, 7, 9);

-- 4. View the top 5 customers according to their wallet balance.
select * from customer
    order by customer_wallet desc
    limit 5;

-- 5. View the customer with 5th highest wallet balance only.
select * from customer
    order by customer_wallet desc
    limit 1 offset 4;

---------------------------------------------------------

-- More examples worked through in class

-- List all customers in descending order of wallet balance
select customer_id, customer_name, customer_wallet
    from customer
    order by customer_wallet desc;

-- Find out which customer has the highest balance
select customer_id, customer_name, MAX(customer_wallet) from customer;

-- Calculate the total amount sold by each seller
select seller_id, sum(transaction_amount)
    from transaction
    group by seller_id;

-- =====================================================
-- Practical Exercise 3
-- Tasks:
-- 1. View the highest balance for each tolerance level.
select customer_tolerance, max(customer_wallet),
    customer_id, customer_name
    from customer
    group by customer_tolerance;

-- 2. View the average balance of customers for each customer type.
select customer_type, avg(customer_wallet)
    from customer
    group by customer_type;

-- 3. View the number of items sold for each product.
select product_id, sum(transaction_quantity)
    from transaction
    group by product_id;

--------------------------------------------------

-- =========================================================
-- Practical Exercise 4
-- Tasks:
-- 1. View all the transactions along with the product name.
select t.transaction_datetime, p.product_name,
    t.transaction_quantity, t.transaction_amount
    from transaction as t
    inner join product as p
    where t.product_id = p.product_id;

-- 2. For each customer, view when was their last transaction made.
select c.customer_id, customer_name, max(t.transaction_datetime)
    from customer as c
    left join transaction as t
    on c.customer_id = t.customer_id
    group by c.customer_id;

-- 3. View all the information about sellers with their average earnings
--    calculated from the transaction table.
select s.*, avg(t.transaction_amount) as average
    from seller as s
    left join transaction as t
    on s.seller_id = t.seller_id
    group by s.seller_id;

--------------------------------------------------

/* Other examples worked through in class */

-- List all transactions along with the name of the seller
select t.transaction_datetime, s.seller_id, s.seller_name,
    t.transaction_quantity, t.transaction_amount
    from transaction as t
    right join seller as s
    on t.seller_id = s.seller_id;

-- List all product sales for iPhones (devices only)
select p.*, t.transaction_datetime, t.transaction_quantity
    from product as p
    left join transaction as t
    on p.product_id = t.product_id
    where product_name like 'iPhone___';

-- List all transactions along with the name of the customer and product
select t.transaction_datetime, c.customer_name, p.product_name
    from transaction as t
    left join customer as c
    on t.customer_id = c.customer_id
    left join product as p
    on t.product_id = p.product_id; 
