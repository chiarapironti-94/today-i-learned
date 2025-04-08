import { Fact } from "./data";

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
                    <span class="tag technology">${fact.category}</span>
                    <div class="vote-buttons">
                      <button>👍 ${fact.votesInteresting}</button>
                      <button>🤯 ${fact.votesMindblowing}</button>
                      <button>⛔ ${fact.votesFalse}</button>
                    </div>
                  </li>`
  );
};
