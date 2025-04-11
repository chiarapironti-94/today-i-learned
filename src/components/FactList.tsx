import { FactsArrayProps } from '../Utils';
import { FactCard } from './FactCard';

export function FactList({ facts }: FactsArrayProps) {
  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <FactCard key={fact.id} fact={fact}></FactCard>
        ))}
      </ul>
    </section>
  );
}
