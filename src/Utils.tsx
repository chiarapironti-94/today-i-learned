export type BooleanStateSetter = React.Dispatch<React.SetStateAction<boolean>>;

export const STRINGS = {
  appName: "Today I Learned! ",
  btnShareFact: "Share a fact",
  btnCloseForm: "Close",
  btnPostForm: "Post",
  optionAll: "All",
  factPlaceholder: "Share a fact with the world...",
  sourcePlaceholder: "Trustworthy source..."
};

export const CATEGORY_NAMES = [
  "technology",
  "science",
  "finance",
  "society",
  "entertainment",
  "health",
  "history",
  "news",
] as const;

export type CategoryName = typeof CATEGORY_NAMES[number];

export type HexColor = `#${string}`;

export type Category = {
  name: CategoryName;
  color: HexColor;
};

export const CATEGORIES: Category[] = CATEGORY_NAMES.map((name, i) => ({
  name,
  color: [
    "#3b82f6",
    "#16a34a",
    "#ef4444",
    "#eab308",
    "#db2777",
    "#14b8a6",
    "#f97316",
    "#8b5cf6",
  ][i] as HexColor,
}));

export interface Fact {
  id: number;
  text: string;
  source: string;
  category: CategoryName;
  votesInteresting: number;
  votesMindblowing: number;
  votesFalse: number;
  createdIn: number;
}

// TEMP DATA
export const initialFacts: Fact[] = [
  {
    id: 1,
    text: 'React is being developed by Meta (formerly facebook)',
    source: 'https://opensource.fb.com/',
    category: 'technology',
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: 'Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%',
    source:
      'https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids',
    category: 'society',
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: 'Lisbon is the capital of Portugal',
    source: 'https://en.wikipedia.org/wiki/Lisbon',
    category: 'society',
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];
