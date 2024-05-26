import React from "react";
import Business from "./Business";
import './BusinessList.css';

const businesses = [{
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
name: 'MarginOtto Pizzeria',
address: '1010 Paddington Way',
city: 'Flavortown',
state: 'NY',
zipCode: '10101',
category: 'Italian',
rating: 4.5,
reviewCount: 90
},
{
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
name: 'MarginOtto Pizzeria',
address: '1010 Paddington Way',
city: 'Flavortown',
state: 'NY',
zipCode: '10101',
category: 'Italian',
rating: 4.5,
reviewCount: 90
},
{
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'The Spice House',
    address: '123 Flavor St',
    city: 'Tasteville',
    state: 'CA',
    zipCode: '90210',
    category: 'Indian',
    rating: 4.0,
    reviewCount: 120
  },
  {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'Sushi Central',
    address: '456 Sushi Ave',
    city: 'Sushitown',
    state: 'TX',
    zipCode: '73301',
    category: 'Japanese',
    rating: 4.7,
    reviewCount: 75
  },{
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
name: 'MarginOtto Pizzeria',
address: '1010 Paddington Way',
city: 'Flavortown',
state: 'NY',
zipCode: '10101',
category: 'Italian',
rating: 4.5,
reviewCount: 90
}];

function BusinessList() {
    return (
      <div className="BusinessList">
        {businesses.map((business, index) => (
          <Business key={index} business={business} />
        ))}
      </div>
    );
  }
  
  export default BusinessList;