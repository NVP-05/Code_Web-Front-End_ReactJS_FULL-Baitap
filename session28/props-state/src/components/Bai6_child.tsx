import React from 'react';
import { users } from './Bai6_parents';

export default function Bai6_child() {
  console.log(users);

  return (
    <div>
      {users.map(item => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <p>Name: {item.name}</p>
          <p>Address: {item.address}</p>
          <p>Email: {item.email}</p>
        </div>
      ))}
    </div>
  );
}