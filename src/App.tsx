import './style.css';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { NewFactForm } from './components/NewFactForm';
import { FactList } from './components/FactList';
import { useState } from 'react';

function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm && <NewFactForm />}
      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

export default App;
