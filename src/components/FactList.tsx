import { STRINGS, Fact } from "../Utils";
import { FactCard } from "./FactCard";

type FactListProps = {
  facts: Fact[];
  className?: string;
};

export function FactList({ facts, className = "" }: FactListProps) {
  let render = <p className="message fade-in">{STRINGS.categoryEmpty}</p>;

  if (facts.length > 0) {
    render = (
      <section className={className}>
        <ul className="facts-list">
          {facts.map((fact) => (
            <FactCard key={fact.id} fact={fact} />
          ))}
        </ul>
      </section>
    );
  }
  return render;
}
