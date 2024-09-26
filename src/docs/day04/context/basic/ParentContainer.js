import React from 'react';
import ChildContainer from './ChildContainer';
import { FontSizeProvider } from './FontContext';

const ParentContainer = () => {
  return (
    <div>
      <FontSizeProvider>
      <ChildContainer />
      </FontSizeProvider>
    </div>
  );
};

export default ParentContainer;