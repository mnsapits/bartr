# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

product1 = Product.create({seller_id: 1, name: 'Kombucha Kit', details: "Tasty kombucha", image_url: 'http://res.cloudinary.com/dmdj7eggw/image/upload/v1478398346/products/51Twrh-2zRL.jpg', price: 3, location: 'San Francisco'})

product2 = Product.create({seller_id: 1, name: 'Beer Kit', details: "Tasty beer", image_url: 'http://cdn.blessthisstuff.com/imagens/stuff/brooklyn-brew-beer-making-kit.jpg', price: 5, location: 'San Francisco'})

product3 = Product.create({seller_id: 1, name: 'Cheese Kit', details: "Tasty cheese", image_url: 'https://cdn.prezzybox.com/Images/12018.jpg', price: 6, location: 'San Francisco'})

product4 = Product.create({seller_id: 1, name: 'Water Kefir Kit', details: "Tasty Kefir", image_url: 'http://cdn.culturesforhealth.com/media/catalog/product/cache/1/thumbnail/960x/17f82f742ffe127f42dca9de82fb58b1/c/f/cfh_waterkefirgrains_starterculture_highres_front.jpg', price: 7, location: 'San Francisco'})

guest = User.create({username: "guest", password: 123456, avatar: "http://res.cloudinary.com/dmdj7eggw/image/upload/v1478488901/app/default_avatar_400x400.png"})
