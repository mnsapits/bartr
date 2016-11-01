# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null
avatar          | string    | not null

## products
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
seller_id   | integer   | not null, foreign key (references users), indexed
name        | string    | not null
description | text      | not null
image_url   | string    | not null
price       | float     | not null
location    | string    | not null

## shopping cart
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
item_id     | integer   | not null, foreign key (references products), indexed
