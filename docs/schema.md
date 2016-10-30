# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null

## products
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
seller_id   | integer   | not null, foreign key (references users), indexed
description | text      | not null
hobby_tag   | text      | not null
image_url   | string    | not null
price       | float     | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
commenter_id| integer   | not null, foreign key (references users), indexed
seller_id   | text      | not null
item_id     | integer   | not null
rating      | integer   | not null
body        | text      | not null
date        | date      | not null

## carts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key, indexed

## carts_listings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key
cart_id     | integer   | not null, foreign key, indexed
price       | integer   | not null
image_url   | string    | not null
