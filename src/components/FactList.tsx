import { Fact } from '../Utils';
import { FactCard } from './FactCard';

type FactListProps = {
  facts: Fact[];
  className?: string;
};

export function FactList({ facts, className = '' }: FactListProps) {
  return (
    <section className={className}>
      <ul className="facts-list">
        {facts.map((fact) => (
          <FactCard key={fact.id} fact={fact} />
        ))}
      </ul>
    </section>
  );
}
