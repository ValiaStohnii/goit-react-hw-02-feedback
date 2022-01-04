import React from 'react';

const Statistics = ({ good, neutral, bad, total }) => (
  <ul>
    <li>
      <p>
        Good:<span>{good}</span>
      </p>
    </li>
    <li>
      <p>
        Neutral:<span>{neutral}</span>
      </p>
    </li>
    <li>
      <p>
        Bad:<span>{bad}</span>
      </p>
    </li>
    <li>
      <p>
        Total:<span>{total}</span>
      </p>
    </li>
    <li>
      <p>Positive feedback:</p>
    </li>
  </ul>
);
export default Statistics;
