import { CATEGORIES, CategoryName, HexColor, Fact } from './data.js';
import { SUPABASE_ENDPOINT, SUPABASE_KEY } from './config.js';

const getTagColor = (categoryName: CategoryName): HexColor => {
  const category = CATEGORIES.find(
    (category) => category.name === categoryName
  );
  return category?.color || '#292524';
};

export const drawFacts = function (facts: Fact[]): string[] {
  return facts.map(
    (fact) => `<li class="fact">
                    <p>
                      ${fact.text}
                      <a
                        class="source"
                        href="${fact.source}"
                        target="_blank"
                        >(Source)</a
                      >
                    </p>
                    <span class="tag" style="background-color: ${getTagColor(
                      fact.category
                    )}">${fact.category}</span>
                    <div class="vote-buttons">
                      <button>👍 ${fact.votesInteresting}</button>
                      <button>🤯 ${fact.votesMindblowing}</button>
                      <button>⛔ ${fact.votesFalse}</button>
                    </div>
                  </li>`
  );
};

export async function loadFacts(): Promise<Fact[]> {
  const res = await fetch(SUPABASE_ENDPOINT, {
    headers: {
      apikey: SUPABASE_KEY,
      authorization: `Bearer ${SUPABASE_KEY}`,
    },
  });
  const data: Fact[] = await res.json();

  return data;
}
