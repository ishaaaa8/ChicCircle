import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Home from './Home';
import OfferTime from './OfferTime';
import Products from './Products';
import img1 from '../assets/1.1.jpg';
import img2 from '../assets/1.2.png';
import img3 from '../assets/3.1.png';
import img4 from '../assets/3.2.jpg';
import img5 from '../assets/2.1.png';
import img6 from '../assets/2.2.jpg';
import img7 from '../assets/2.3.png';
import img8 from '../assets/4.1.png';
import img9 from '../assets/4.2.jpg';
import img10 from '../assets/5.1.jpg';
import img11 from '../assets/5.2.png';
import img12 from '../assets/6.1.png';
import img13 from '../assets/6.2.jpg';
import img14 from '../assets/10.1.png';
import img15 from '../assets/10.2.jpg';
import img16 from '../assets/7.1.png';
import img17 from '../assets/7.2.jpg';


interface Product {
  title: string;
  price: number;
  category: { name: string };
  images: string[];
}

const productData: Product[] = [
  {
    title: "Yellow-Jumpsuit",
    price: 500,
    category: { name: "Clothing" },
    images: [
      img1,
      img2,
      img1
    ]
  }, 
  {
    title: "Blue-Top",
    price: 1500,
    category: { name: "Clothing" },
    images: [
      img3,
      img4
    ]
  },
  {
    title: "Jump-Suit",
    price: 1500,
    category: { name: "Clothing" },
    images: [
      img5,
      img6,
      img7
    ]
  },
  {
    title: "White-Pants",
    price: 1500,
    category: { name: "Clothing" },
    images: [
      img8,
      img9
    ]
  },
  {
    title: "Skirt",
    price: 1500,
    category: { name: "Clothing" },
    images: [
      img10,
      img11
    ]
  },
  {
    title: "White Floral Dress",
    price: 1500,
    category: { name: "Clothing" },
    images: [
      img12,
      img13
    ]
  },
  {
    title: "Tank-Top",
    price: 1500,
    category: { name: "Clothing" },
    images: [
      img14,
      img15
    ]
  },
  {
    title: "Blue-Jeans",
    price: 1500,
    category: { name: "Clothing" },
    images: [
      img16,
      img17
    ]
  }
  // Add more product objects as needed
];

const Main: React.FC = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState("");

  useEffect(() => {
    // Set product data directly
    setProduct(productData);
  }, []);

  return (
    <div>
      <Navbar setSearch={setSearch} setMenu={setMenu} />
      <OfferTime />
      <Banner />
      <Home product={product} />
      <Products product={product} search={search} menu={menu} />
    </div>
  );
};

export default Main;
