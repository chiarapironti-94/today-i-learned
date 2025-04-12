import { STRINGS, Fact, FactsArrayStateSetter } from '../Utils';
import { FactCard } from './FactCard';

type FactListProps = {
  facts: Fact[];
  className?: string;
  setFacts: FactsArrayStateSetter;
};

export function FactList({ facts, className = '', setFacts }: FactListProps) {
  let render = <p className="message fade-in">{STRINGS.categoryEmpty}</p>;

  if (facts.length > 0) {
    render = (
      <section className={className}>
        <ul className="facts-list">
          {facts.map((fact) => (
            <FactCard key={fact.id} fact={fact} setFacts={setFacts} />
          ))}
        </ul>
      </section>
    );
  }
  return render;
}
