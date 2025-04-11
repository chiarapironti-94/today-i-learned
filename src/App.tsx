import './style.css';
import { useState, useEffect } from 'react';
import { Fact, fetchFacts } from './Utils';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { NewFactForm } from './components/NewFactForm';
import { FactList } from './components/FactList';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState<Fact[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadFacts() {
      setIsLoading(true);
      const { facts, error } = await fetchFacts();
      if (!error && facts) {
        setFacts(facts);
      } else {
        console.error('Error fetching data:', error);
      }
      setIsLoading(false);
    }

    loadFacts();
  }, []);

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm && (
        <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
      )}
      <main className="main">
        <CategoryFilter />
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <FactList facts={facts} className="fade-in" />
        )}
      </main>
    </>
  );
}

export default App;
