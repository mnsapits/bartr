# Bartr
[Bartr live](www.bartrmarket.com)

Bartr is a full-stack web application that takes inspiration from the E-commerce site Etsy. Bartr's frontend uses React.js with a Redux architectural framework, a PostgreSQL database, and a Ruby on Rails backend.

## Features & Implementation

### Single-Page App

All of Bartr's content is delivered on one static page. Each React component has a container (or a parent with a container), which delivers the appropriate state information to the component so that it renders. The Store part of Redux structure holds the current state divided into `cart`, `currentStore`, `currentProduct`, `errors`, `products`, `searchResults`, and `session`.

### Session

Bartr has a full authentication system that keeps sensitive information, such as user's password, protected. The User model validates the password length before encrypting the password with BCrypt and storing the result in the database. Each user is also initialized with a session token. This session token is rest when the user logs in or logs out, and the session cookie is updated to reflect the session token of the current user. The rest of the application can access the current user via the current_user helper method.

```Ruby
class User < ActiveRecord::Base
  def password= password
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def self.find_by_credentials username, password
    user = User.find_by(username: username)
    return nil unless user
    user.password_is?(password) ? user : nil
  end

  def password_is? password
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end
```
On the frontend, the user can register or login via a Session Modal for a professional look.

[modal]: docs/wireframes/sign-in.png
![alt_text][modal]


### Products and Search
Products are stored in one table in the database that keeps track of
`seller_id`, `name`, `details`, `image_url`, `price`, and `location`. The All Products link renders tiles for each product and a link to their detail page on click. The product detail page has all the information on the product and contains a button to add the product to the cart. Alternatively a user can interact with the search bar to query the database for items with names that contain the query string.

#### All Products

[all_products]: docs/wireframes/all-products.png "All Products"
![alt_text][all_products]

#### Product detail

[product_detail]: docs/wireframes/product-detail.png "Product Detail"
![alt_text][product_detail]

#### Search

[search]: docs/wireframes/product-search.png "Search"
![alt_text][search]

### Cart
In the backend, the "cart" is just a join table of cart_items that join a buyer, `buyer_id`, with a product, `product-id`. Within your cart you can see details about the products as well as a button to remove the product from the cart.

[cart]: docs/wireframes/cart.png "Cart"
![alt_text][cart]
