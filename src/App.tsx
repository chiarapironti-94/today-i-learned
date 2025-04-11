import "./style.css";
import { useState, useEffect } from "react";
import { CategoryName, Fact, fetchFacts } from "./Utils";
import { Header } from "./components/Header";
import { CategoryFilter } from "./components/CategoryFilter";
import { NewFactForm } from "./components/NewFactForm";
import { FactList } from "./components/FactList";
import { LoadingScreen } from "./components/LoadingScreen";
import { buildQuery } from "./Utils";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState<Fact[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryClicked, setCategoryClicked] = useState("all" as CategoryName);

  useEffect(() => {
    async function loadFacts() {
      setIsLoading(true);

      const query = buildQuery(categoryClicked);
      const { facts, error } = await fetchFacts(query);
      if (!error && facts) {
        setFacts(facts);
      } else {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    }

    loadFacts();
  }, [categoryClicked]);

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm && (
        <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
      )}
      <main className="main">
        <CategoryFilter setCategoryClicked={setCategoryClicked} />
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
