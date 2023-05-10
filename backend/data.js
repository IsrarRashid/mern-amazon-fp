import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "israr",
      email: "israrrashid3@gmail.com",
      password: bcrypt.hashSync("123"),
      isAdmin: "true",
    },
    {
      name: "john",
      email: "john@gmail.com",
      password: bcrypt.hashSync("123"),
      isAdmin: "false",
    },
  ],
  products: [
    {
      // _id: "1",
      name: "Nike Slime shirt",
      slug: "mike-slim-shirt",
      category: "Shirts",
      image: "/images/p1.webp",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      // _id: "2",
      name: "Adidas fit shirt",
      slug: "adidas-fit-shirt",
      category: "shirts",
      image: "/images/p2.webp",
      price: 250,
      countInStock: 0,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      // _id: "3",
      name: "Nike Slim Pant",
      slug: "nike-slim-pant",
      category: "Pants",
      image: "/images/p3.webp",
      price: 25,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      // _id: "4",
      name: "Adidas Slim Pant",
      slug: "adidas-slim-pant",
      category: "Pants",
      image: "/images/p4.webp",
      price: 65,
      countInStock: 5,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
  ],
};

export default data;
