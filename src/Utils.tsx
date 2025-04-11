import { supabase } from "./supabase";

// Types and Interfaces
type QueryBuilder = ReturnType<typeof buildQuery>;
export type BooleanStateSetter = React.Dispatch<React.SetStateAction<boolean>>;
export type FactsArrayStateSetter = React.Dispatch<
  React.SetStateAction<Fact[]>
>;
export type CategoryNameStateSetter = React.Dispatch<
  React.SetStateAction<CategoryName>
>;

export type CategoryName = (typeof CATEGORY_NAMES)[number];

export type HexColor = `#${string}`;

export type Category = {
  name: CategoryName;
  color: HexColor;
};

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

// Constants
export const STRINGS = {
  appName: "Today I Learned! ",
  btnShareFact: "Share a fact",
  btnCloseForm: "Close",
  btnPostForm: "Post",
  optionAll: "All",
  factPlaceholder: "Share a fact with the world...",
  sourcePlaceholder: "Trustworthy source...",
  categoryEmpty: "Oh darn, looks like there are no facts in this category 😓",
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
  "all",
] as const;

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

// Functions

export function isValidHttpUrl(str: string): boolean {
  let url;

  try {
    url = new URL(str);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

export function createNewFact(
  text: string,
  source: string,
  category: CategoryName
): Fact {
  const newFact: Fact = {
    id: Math.round(Math.random() * 1000000),
    text,
    source,
    category,
    votesInteresting: 0,
    votesMindblowing: 0,
    votesFalse: 0,
    createdIn: new Date().getFullYear(),
  };

  return newFact;
}

export function buildQuery(
  category: CategoryName,
  column: keyof Fact = "votesInteresting",
  limit: number = 1000,
  options: { ascending?: boolean; nullsFirst?: boolean } = { ascending: false }
) {
  let query = supabase.from("facts").select("*");

  if (category !== "all") {
    query = query.eq("category", category);
  }

  return query.order(column, options).limit(limit);
}

export async function fetchFacts(
  query: QueryBuilder
): Promise<{ facts: Fact[] | null; error: any }> {
  const { data: facts, error } = await query;
  return { facts, error };
}

// TEMP DATA
export const initialFacts: Fact[] = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];
