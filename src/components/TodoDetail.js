import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../index.css';

const TodoDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { title, description } = location.state;

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className='detailBox'>
      <h1>{title} Detail</h1>
      <p>{description}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default TodoDetail;
