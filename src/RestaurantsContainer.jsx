import React from 'react';

import { useSelector } from 'react-redux';

export default function RestaurantsContainer() {
  const { restaurants } = useSelector((state) => state);

  return (
    <ul>
      {restaurants.map(({ id, value }) => (
        <li key={id}>
          {value}
        </li>
      ))}
    </ul>
  );
}
