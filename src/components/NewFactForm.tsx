import { useState } from 'react';
import {
  CATEGORY_NAMES,
  CategoryName,
  STRINGS,
  isValidHttpUrl,
  insertNewFact,
  FactsArrayStateSetter,
  BooleanStateSetter,
} from '../Utils';

export type NewFactFormProps = {
  setFacts: FactsArrayStateSetter;
  setShowForm: BooleanStateSetter;
};

export function NewFactForm({ setFacts, setShowForm }: NewFactFormProps) {
  const [text, setText] = useState('');
  const [source, setSource] = useState('');
  const [category, setCategory] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  // variable derived from state
  const charactersLeft = 200 - text.length;

  const isDataValid = (): boolean => {
    return (
      !!text && isValidHttpUrl(source) && !!category && charactersLeft >= 0
    );
  };

  const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    if (!isDataValid()) return;

    setIsUploading(true);
    const { newFact, error } = await insertNewFact(
      text,
      source,
      category as CategoryName
    );
    if (!error && newFact) {
      setFacts((prev) => [newFact, ...prev]);

      setText('');
      setSource('');
      setCategory('');

      setShowForm((prev) => !prev);

      setIsUploading(false);
    }
  };

  return (
    <form
      className={`fact-form ${isUploading ? 'is-uploading' : ''}`}
      onSubmit={handleSubmitForm}
    >
      <input
        className="fact-input"
        type="text"
        placeholder={STRINGS.factPlaceholder}
        value={text}
        disabled={isUploading}
        onChange={(event) => setText(event.target.value)}
      />
      <span>{charactersLeft}</span>
      <input
        type="text"
        placeholder={STRINGS.sourcePlaceholder}
        value={source}
        disabled={isUploading}
        onChange={(event) => setSource(event.target.value)}
      />
      <select
        value={category}
        disabled={isUploading}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="">Choose category:</option>
        {CATEGORY_NAMES.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>
      <button className="btn btn-large">{STRINGS.btnPostForm}</button>
    </form>
  );
}
