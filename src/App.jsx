import { useState } from 'react';

import './App.css';
import CarForm from './components/CarForm';
import CarList from './components/CarList';
import CarSearch from './components/CarSearch';
import CarValue from './components/CarValue';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CarForm />
      <CarList />
      <CarSearch />
      <CarValue />
    </div>
  );
}

export default App;
