import React from "react";
import Card from "./Card";

export const auctionItems = [
  {
    name: "CSC 420 Textbook",
    category: "Educational",
    description:
      "Latest edition of Computer Security & Networking. Useful for CSC majors.",
    startingBid: 3500,
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Scientific Calculator (Casio FX-991ES)",
    category: "Educational",
    description:
      "Durable scientific calculator for engineering & science students.",
    startingBid: 6000,
    image:
      "https://images.unsplash.com/photo-1581091215367-59ab6e515c03?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "64GB Flash Drive",
    category: "Educational",
    description:
      "High-speed USB 3.0 drive for storing lectures, projects, and movies.",
    startingBid: 2000,
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "HP Pavilion Laptop",
    category: "Electronics",
    description:
      "8GB RAM, 512GB SSD, great for programming and online classes.",
    startingBid: 150000,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Power Bank (20,000mAh)",
    category: "Electronics",
    description: "Long-lasting battery backup for phones and gadgets.",
    startingBid: 8000,
    image:
      "https://images.unsplash.com/photo-1606813902803-6f0c0f92f218?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Bluetooth Earbuds",
    category: "Electronics",
    description: "Noise-cancelling, wireless earbuds with long battery life.",
    startingBid: 7500,
    image:
      "https://images.unsplash.com/photo-1580894908361-967195033a3b?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "LASU Hoodie",
    category: "Fashion",
    description: "Stylish branded hoodie with LASU logo.",
    startingBid: 5500,
    image:
      "https://images.unsplash.com/photo-1602810318383-e8deb9a64e9d?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Sneakers (Nike Airforce)",
    category: "Fashion",
    description: "Popular unisex sneakers, size range 38–45.",
    startingBid: 12000,
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7d5e36b1d?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Backpack (Waterproof)",
    category: "Fashion",
    description: "Durable, waterproof bag for carrying books and laptop.",
    startingBid: 4000,
    image:
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Instant Noodles (Carton)",
    category: "Food",
    description: "40 packs of Indomie noodles – student essential.",
    startingBid: 7000,
    image:
      "https://images.unsplash.com/photo-1604909053367-70d4b77d7f29?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Milo (Tin)",
    category: "Food",
    description: "Energy drink powder – good for breakfast.",
    startingBid: 2200,
    image:
      "https://images.unsplash.com/photo-1584270354949-1f73d4bc1b9b?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Mattress (Student Size)",
    category: "Hostel Needs",
    description: "6ft foam mattress for hostel/lodge use.",
    startingBid: 18000,
    image:
      "https://images.unsplash.com/photo-1601979031951-03a3bda45bb1?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Rechargeable Lamp",
    category: "Hostel Needs",
    description:
      "Bright, long-lasting lamp for night reading during power outages.",
    startingBid: 3000,
    image:
      "https://images.unsplash.com/photo-1616627458918-401327582f88?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Extension Socket (6-way)",
    category: "Hostel Needs",
    description: "Multi-socket extension for hostel gadgets.",
    startingBid: 2500,
    image:
      "https://images.unsplash.com/photo-1618316497860-bdbe6a8d89f8?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Football (Adidas Official)",
    category: "Sports",
    description: "Durable leather football for matches & training.",
    startingBid: 5000,
    image:
      "https://images.unsplash.com/photo-1591808511308-5d85be0edb57?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Table Tennis Set",
    category: "Sports",
    description: "2 bats, 3 balls, and net for fun & sports.",
    startingBid: 3500,
    image:
      "https://images.unsplash.com/photo-1584813183490-8b87fdb5aa58?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Photography Session Voucher",
    category: "Services",
    description: "Professional student photographer – 5 edited pictures.",
    startingBid: 5000,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Laundry Service (10 clothes)",
    category: "Services",
    description: "Voucher for washing & ironing 10 clothes.",
    startingBid: 2500,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Graphic Design Service",
    category: "Services",
    description: "Custom flyer or poster design by student freelancer.",
    startingBid: 4000,
    image:
      "https://images.unsplash.com/photo-1504691342899-8d83b34b5d50?auto=format&fit=crop&q=80&w=600",
  },
];



const AllProducts = () => {
  return (
<div className="auction-container">
      <div className="auction-grid">
        {auctionItems.map((item, i) => (
          <div key={i} className="auction-card">
            {/* Image */}
            <img src={item.image} alt={item.name} className="auction-card-image" />

            {/* Content */}
            <div className="auction-card-content">
              <p className="auction-card-name">{item.name}</p>
              <p className="auction-card-description">{item.description}</p>

              <p className="auction-card-price">{item.startingBid}</p>

              <button className="auction-card-button">SET BID</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
