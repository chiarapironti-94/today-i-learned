import './style.css';
import { initialFacts } from './Utils';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { NewFactForm } from './components/NewFactForm';
import { FactList } from './components/FactList';
import { useState } from 'react';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState(initialFacts);

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm && (
        <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
      )}
      <main className="main">
        <CategoryFilter />
        <FactList facts={facts} />
      </main>
    </>
  );
}

export default App;
