import { CategoryName, HexColor, Fact, CATEGORIES } from '../Utils';

type FactCardProps = {
  fact: Fact;
};

export function FactCard({ fact }: FactCardProps) {
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
        <button>👍 {fact.votesInteresting}</button>
        <button>🤯 {fact.votesMindblowing}</button>
        <button>⛔ {fact.votesFalse}</button>
      </div>
    </li>
  );
}
