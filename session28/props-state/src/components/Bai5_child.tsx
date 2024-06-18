import React from 'react';
import Bai5_parents from './Bai5_parents';

export default function Bai5_child() {
  const productData = {
    id: 1,
    name: 'iphone11',
    price: '1000$',
    quantity: 1,
  };

  return (
    <div>
      <Bai5_parents {...productData} />
    </div>
  );
}
