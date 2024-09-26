import React from 'react';
import Animals from './Animals';
import { AnimalsProvider } from './AnimalsContext';

const AnimalsContainer = () => {
  return (
    <div>
      <AnimalsProvider>
      <Animals />
      </AnimalsProvider>
    </div>
  );
};

export default AnimalsContainer;