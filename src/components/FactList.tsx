import { Fact, initialFacts } from '../Utils';
import { FactCard } from './FactCard';

export function FactList() {
  const facts: Fact[] = initialFacts;

  return (
    <section>
      <ul className="facts-list">
        {facts.map(fact => <FactCard key={fact.id} fact={fact}></FactCard>)}
      </ul>
    </section>
  );
}
