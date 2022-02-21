import React from 'react';

const ExampleComponent = () => {
  
  function sayHello(name) {
    alert(`hello, ${name}`);
  }
  
  return (
    <button onClick={() => sayHello('James')}>Greet</button>
  );
}

export default ExampleComponent;