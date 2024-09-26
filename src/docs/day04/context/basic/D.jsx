import React from 'react';
import CharContext from './CharContext';

const D = () => {
  return (
    <div>

      <CharContext.Consumer>
        {
          (context) => {
            console.log(context);
            return <p style={context}>최하위 컴포넌트😭</p>
          }
        }
        </CharContext.Consumer>
    </div>
  );
};

export default D;