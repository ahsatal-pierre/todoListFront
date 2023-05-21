import React from 'react';
import { useLocation } from 'react-router-dom';

const TodoDetail = () => {
  const location = useLocation();
  const { title, description } = location.state;

  return (
    <div>
      <h1>{title} Detail</h1>
      <p>{description}</p>
    </div>
  );
};

export default TodoDetail;