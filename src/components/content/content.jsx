import React from 'react';

const Content = ({ children }) => {
  return (
    <main className='main'>
      <div className="container">
        {children}
      </div>
    </main>
  );
};

export default Content;