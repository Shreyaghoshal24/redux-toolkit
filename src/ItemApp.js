// src/ItemApp.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './itemSlice';

function ItemApp() {
  const [item, setItem] = useState('');
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const handleAddItem = () => {
    dispatch(addItem(item));
    setItem('');
  };

  return (
    <div className='container'>
      <h1>Redux Toolkit POC</h1>
      <div className='input-container'>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemApp;
