import React from 'react';
import CatList from './components/CatList';
import AddCat from './components/AddCat';

function App() {
  return (
      <div className="App">
        <AddCat />
        <CatList />
    </div>
  );
}

export default App;