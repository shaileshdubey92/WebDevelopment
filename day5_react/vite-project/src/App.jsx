import React from 'react';
import Person from './Components/Person';
import Counter from './Components/Counter';
import Persondetail from './Components/Persondetail';
// import Adharcard from './Components/Adharcard';
import Product from './Components/Product';

const App = () => {
  const products = [
    {
      Id: 1,
      title: 'Apple iPhone 13 (128GB) - Midnight',
      description:
        '15 cm (6.1-inch) Super Retina XDR display Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',
      price: 79999,
      imgurl:
        'https://m.media-amazon.com/images/I/61VuVU94RnL._SX679_.jpg',
      category: 'mobile',
    },
    {
      Id: 2,
      title: 'Apple iPhone 12 (256GB) - Midnight',
      description:
        '12 cm (6.1-inch) Super Retina XDR display Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',
      price: 89999,
      imgurl:
        'https://m.media-amazon.com/images/I/31gmva12KHL._SY445_SX342_QL70_FMwebp_.jpg',
      category: 'mobile',
    },
    {
      Id: 3,
      title: 'Fire-Boltt Lumos Stainless Steel',
      description:
        '20 cm (6.1-inch) Super Retina XDR disp Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',
      price: 799,
      imgurl:
        'https://m.media-amazon.com/images/I/414qtFAsMDL._SX300_SY300_QL70_FMwebp_.jpg',
      category: 'smartwatch',
    },
    {
      Id: 4,
      title: 'Fire-Boltt Lumos Stainless Steel',
      description:
        '20 cm (6.1-inch) Super Retina XDR disp Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',
      price: 9999,
      imgurl:
        'https://m.media-amazon.com/images/I/414qtFAsMDL._SX300_SY300_QL70_FMwebp_.jpg',
      category: 'smartwatch',
    },
    {
      Id: 5,
      title: 'HP [SmartChoice] 15s, Ryzen 5-5500U, 16GB RAM/512GB SSD 15.6"(39.6 cm)',
      description:
        '20 cm (6.1-inch) Super Retina XDR disp Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',
      price: 59999,
      imgurl:
        'https://m.media-amazon.com/images/I/41xo1nI27xL._SX300_SY300_QL70_FMwebp_.jpg',
      category: 'laptop',
    },

    {
      Id: 6,
      title: 'HP [SmartChoice] 15s, Ryzen 6-5500U, 16GB RAM/512GB SSD 15.6"(39.6 cm)',
      description:
        '20 cm (6.1-inch) Super Retina XDR disp Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',
      price: 89999,
      imgurl:
        'https://m.media-amazon.com/images/I/41QAcck4dfL._SX300_SY300_QL70_FMwebp_.jpg',
      category: 'laptop',
    },
  ];

  return (
    <>
      <div>
       
        <Product product={products}/>
      </div>
    </>
  );
};

export default App;
