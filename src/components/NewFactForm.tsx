import { useState } from 'react';
import { CATEGORY_NAMES, STRINGS } from '../Utils';

export function NewFactForm() {
  const [text, setText] = useState('');
  const [source, setSource] = useState('');
  const [category, setCategory] = useState('');

  // variable derived from state
  const charactersLeft = 200 - text.length;

  const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };
    
  return (
    <form className="fact-form" onSubmit={handleSubmitForm}>
      <input
        className="fact-input"
        type="text"
        placeholder={STRINGS.factPlaceholder}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <span>{charactersLeft}</span>
      <input
        type="text"
        placeholder={STRINGS.sourcePlaceholder}
        value={source}
        onChange={(event) => setSource(event.target.value)}
      />
      <select
        value={category}
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
