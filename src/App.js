import logo from './logo.svg';
import './App.css';
import BusinessList from './BusinessList';
import SearchBar from './SearchBar';

const businesses = [
  {
    imageSrc:
      'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc:
      'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc:
      'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'The Spice House',
    address: '123 Flavor St',
    city: 'Tasteville',
    state: 'CA',
    zipCode: '90210',
    category: 'Indian',
    rating: 4.0,
    reviewCount: 120,
  },
  {
    imageSrc:
      'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'Sushi Central',
    address: '456 Sushi Ave',
    city: 'Sushitown',
    state: 'TX',
    zipCode: '73301',
    category: 'Japanese',
    rating: 4.7,
    reviewCount: 75,
  },
  {
    imageSrc:
      'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  },
];

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='App'>
      {/* <h1>Ravenous</h1> */}
      <SearchBar />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
