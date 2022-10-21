import React from 'react'
import dress1 from './images/dress1.jpg';

import dress2 from './images/dress2.jpg'
import Badgley from "./images/Badgley.jpg";

import Mori from './images/Mori.jpg'
import sottero from './images/sottero.jpg'
import Madison from './images/Madison.jpg'
import stiletto  from './images/stiletto Heel.jpg';
import Sparkle from './images/Sparkle.jpg'
import aqsa from './images/aqsa.jpg'

import simple from './images/simple Silver.jpg';
import gold from './images/Gold suit.jpg';
import slim from './images/slimFi.jpg'
import Gray from './images/Gray.jpg'


import belt from './images/belt.jpg'
import Brown from './images/Brown Suit.jpg';
import Kan from './images/Kan green.jpg';


// import inspiron from './images/inspiron1.jpg'

import image1 from './images/watch3.jpeg'
import image2 from './images/watch2.jpeg'

import image5 from './images/shoe3.jpeg'



// import hoodie from './images/hoodie1.jpeg'

const data = [
    {
        id: 1,
        image: dress1,
        title: 'white Dress node',
        price: 200,
        quantity: 5,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '25%',
        brand: 'Dress',
        prevPrice: 250,
        likes: 150,
        keyword: 'female'
    },
    {
        id: 2,
        image: dress2,
        title: 'Classical dress',
        price: 70,
        quantity: 6,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '20%',
        brand: 'Hugo Boss',
        prevPrice: 95,
        likes: 200,
        keyword: 'female'
    },
    {
        id: 3,
        image: Badgley,
        title: 'Badgley Dress',
        price: 870,
        quantity: 12,
        likes: 350,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '30%',
      
        prevPrice: 980,
    
        keyword: 'female'
    },
    {
        id: 4,
        image: Mori,
        title: 'Mori dress',
        price: 52,
        quantity: 10,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '15%',
        brand: 'Dress',
        prevPrice: 60,
        likes: 55,
        prevPrice: 980,
    
        keyword: 'female'
    },
    {
        id: 5,
        image: sottero,
        title: 'Sottero Dress',
        price: 85,
        quantity: 4,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '35%',
        brand: 'Dress',
        prevPrice: 290,
        keyword: 'female'
    },
    {
        id: 6,
        image: Sparkle,
        title: 'Sparkle Heel',
        price: 173,
        quantity: 7,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '20%',

        prevPrice: 195,
        keyword: 'female'
    },
    {
        id: 7,
        image: Madison,
        title: 'Madison Dress',
        price: 115,
        quantity: 15,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '20%',
        brand: 'Apple',
        prevPrice: 135,
        keyword: 'female'

    },
    {
        id: 8,
        image: stiletto  ,
        title: 'stiletto Heel',
        price: 53,
        quantity: 18,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '25%',
        keyword: 'female'
    },

   
    {
        id: 11,
        image: aqsa,
        title: 'aqsa heel',
        price: 30,
        quantity: 6,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '28%',
        brand: 'Versace',
        prevPrice: 45,
        discountPercent: '25%',
        keyword: 'female'
    },
    {
        id: 12,
        image:simple,
        title: 'simpe Silver',
        price: 624,
        quantity: 6,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
       
        discountPercent: '25%',
        keyword: 'female'
    },
    {
        id: 13,
        image: gold,
        title: 'Gold Suit',
        price: 900,
        quantity: 3,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '10%',
        brand: 'Benteley',
        prevPrice: 988,
        discountPercent: '10%',
        keyword: 'male'

    },
   
    {
        id: 15,
        image: slim,
        title: 'SlimFit',
        price: 1000,
        quantity: 8,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
      
        prevPrice: 488,
        discountPercent: '5%',
        keyword: 'male'
    },
    {
        id: 16,
        image: Gray,
        title: 'Gray suit',
        price: 800,
        quantity: 10,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '30%',
        brand: 'Nike',
        prevPrice: 88,
        keyword: 'male'
    },
    {
        id: 17,
        image: Kan,
        title: 'Kan Green suit',
        price: 1200,
        quantity: 12,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '10%',
        brand: 'Gucci',
        prevPrice: 55,
        keyword: 'male'
    },
    {
        id: 18,
        image: Brown,
        title: 'Brown Suit',
        price: 2210,
        quantity: 7,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '20%',
        brand: 'Tesla',
        prevPrice: 235,
        keyword: 'male'
    },
  
    {
        id: 20,
        image: belt,
        title: 'Belt',
        price: 15,
        quantity: 10,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '50%',
        brand: 'Adidas',
        prevPrice: 30,
        keyword: 'male'
    },
  
    

  
  
    {
        id: 26,
        image: image1,
        title: 'Watch',
        price: 150,
        quantity: 3,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '25%',
        brand: 'Rolex',
        prevPrice: 180,
        keyword: 'male'
    },
    {
        id: 27,
        image: image2,
        title: 'Silver Watch',
        price: 130,
        quantity: 5,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '40%',
        brand: 'G-Shock',
        prevPrice: 175,
        keyword: 'male'
    },
   
  
    {
        id: 30,
        image: image5,
        title: 'Leather Shoe',
        price: 325,
        quantity: 2,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '10%',
        brand: 'Prada',
        prevPrice: 357,
        keyword: 'male'
    },
  

  
  
  
 
    
]

export default data