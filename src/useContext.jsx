import React, { createContext, useContext } from 'react';


const FruitContext = createContext();


const BaseComponent = () => {
  const fruitName = 'Apple'; 
  return (
    <FruitContext.Provider value={fruitName}>
      <ChildA />
    </FruitContext.Provider>
  );
};


const ChildA = () => {
  return (
    <div>
      <h2>Child A</h2>
      <ChildB />
    </div>
  );
};


const ChildB = () => {
  const fruitName = useContext(FruitContext);

  return (
    <div>
      <h3>Child B</h3>
      <p>Fruit Name: {fruitName}</p>
    </div>
  );
};


const Component = () => {
  return (
    <div>
      <h1>Base Component</h1>
      <BaseComponent />
    </div>
  );
};

export default Component;
