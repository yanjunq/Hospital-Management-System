import React from 'react';
import { useNavigate } from 'react-router-dom';

const withNavigate = (Component) => {
  return () => {
    const navigate = useNavigate();
    return <Component navigate={navigate} />;
  };
};

export default withNavigate;