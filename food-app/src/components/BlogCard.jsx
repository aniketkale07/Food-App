import React from 'react';
import '../styles/blogCard.css';
function BlogCard() {

  const blog = [
    {
      id: 1,
      title: "Build Your Perfect Burger – A Guide for Food Lovers",
      date: "2025-02-07",
      category: "Burgers",
      content: `
         Introduction  
        Burgers are more than just fast food—they’re an art! 🍔 Whether you love a classic cheeseburger or a spicy BBQ delight, 
        our food app lets you customize your perfect burger in just a few clicks.  
  
         What Makes a Great Burger?  
        1️⃣ The Patty: Choose between Juicy Beef, Grilled Chicken, or Veggie Delight  
        2️⃣ The Cheese: Cheddar, Swiss, Mozzarella, or Pepper Jack—which one do you love? 🧀  
        3️⃣ The Toppings: Fresh lettuce, tomato, pickles, onions, and jalapeños 🌶  
        4️⃣ The Sauce: Mayo, Ketchup, Mustard, Chipotle, or Special Sauce  
  
        ➡️ Try our "Build Your Own Burger" feature today & create your dream meal!  
  
        📢 What’s your favorite burger combo? Let us know in the comments! 👇  
      `,
      image: "path-to-image/burger-guide.jpg"
    },
    {
      id: 2,
      title: "The Ultimate Guide to Pizza Perfection",
      date: "2025-02-08",
      category: "Pizza",
      content: `
         Introduction  
        Who doesn’t love hot, cheesy, freshly baked pizza? 
        🍕 Whether you’re a Margherita lover or a Meat Feast enthusiast, our app has the perfect pizza for you!  
  
         Top 5 Must-Try Pizzas on Our App  
        🍕 Classic Margherita – Fresh tomato sauce, mozzarella, and basil 🍃  
        🍕 Pepperoni Explosion – Extra cheese, double pepperoni slices 🥩  
        🍕 BBQ Chicken Pizza – Smoky BBQ sauce, grilled chicken, onions 🍗  
        🍕 Veggie Delight – Mushrooms, olives, capsicum, jalapeños 🥒  
        🍕 Cheese Lover's Pizza – A mix of cheddar, mozzarella, parmesan & provolone 🧀  
  
        🔥 Order Now & Enjoy Fresh, Hot Pizza Delivered to Your Doorstep!  
      `,
      image: "path-to-image/pizza-guide.jpg"
    },
    {
      id: 3,
      title: "How Our React.js Food App Makes Ordering Faster & Easier!",
      date: "2025-02-09",
      category: "Technology",
      content: `
         Introduction  
        Gone are the days of long waiting times and complicated ordering systems! Our React.js-powered food app makes ordering fast,
         smooth, and hassle-free.  
  
         Why Our App is the Best for Food Lovers?  
        ✅ Lightning-Fast Performance – Built using React.js for seamless ordering 🚀  
        ✅ Mobile-Friendly UI – Order from any device, anytime 📱  
        ✅ Live Order Tracking – Know exactly when your food will arrive ⏳  
        ✅ Secure Payments – Pay with Credit Card, PayPal, or Cash on Delivery 💳  
  
        🍔 Try our app today & enjoy the best burgers & pizzas hassle-free!  
      `,
      image: "https://img.freepik.com/free-photo/traditional-italian-food-world-tourism-day_23-2149114040.jpg?t=st=1738934974~exp=1738938574~hmac=a875fe8644ca6aef11cd7a182ff51d22e482a26bf3cdf392d22e57dda25fb958&w=826"
    }
  ];
  
 
  
  
  return (
   <>
   <section className='blogcard-section'>
    {
      blog.map((blog, index)=>(
        <div className='blog-title ' >
         
        <h4 key={index}>{blog.title}</h4>
        <h6>{blog.date}</h6>
        <pre>{blog.content}</pre>
        <hr className='blog-hr'/>
        </div>
        
      ))
    }
   
   </section>
   </>
  )
}

export default BlogCard