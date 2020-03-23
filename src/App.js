import React from 'react';

const api = {
  key: process.env.REACT_APP_API_KEY,
  base: 'api.openweathermap.org/data/2.5/'
};

function App() {
  return <div className="app"></div>;
}

console.log(api.key);

export default App;
