import { useState } from 'react';
import {
  CategoryName,
  VoteColumn,
  HexColor,
  Fact,
  CATEGORIES,
  FactsArrayStateSetter,
  updateFactVote,
} from '../Utils';

type FactCardProps = {
  fact: Fact;
  setFacts: FactsArrayStateSetter;
};

export function FactCard({ fact, setFacts }: FactCardProps) {
  const [isUploading, setIsUploading] = useState(false);

  async function handleVote(column: VoteColumn) {
    setIsUploading(true);
    const { updatedFact, error } = await updateFactVote(
      column,
      fact[column] + 1,
      fact.id
    );

    if (!error && updatedFact) {
      setFacts((prevFacts) =>
        prevFacts.map((fact) =>
          fact.id === updatedFact.id ? updatedFact : fact
        )
      );
    }

    setIsUploading(false);
  }

  const getTagColor = (categoryName: CategoryName): HexColor => {
    const category = CATEGORIES.find(
      (category) => category.name === categoryName
    );
    return category?.color || '#292524';
  };

  return (
    <li className="fact">
      <p>
        {fact.text}
        <a
          className="source"
          href={fact.source}
          target="_blank"
          rel="noreferrer"
        >
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{ backgroundColor: getTagColor(fact.category) }}
      >
        {fact.category}
      </span>
      <div className="vote-buttons">
        <button
          disabled={isUploading}
          onClick={() => handleVote('votesInteresting')}
        >
          👍 {fact.votesInteresting}
        </button>
        <button
          disabled={isUploading}
          onClick={() => handleVote('votesMindblowing')}
        >
          🤯 {fact.votesMindblowing}
        </button>
        <button disabled={isUploading} onClick={() => handleVote('votesFalse')}>
          ⛔ {fact.votesFalse}
        </button>
      </div>
    </li>
  );
}
