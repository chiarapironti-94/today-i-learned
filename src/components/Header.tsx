import { BooleanStateSetter, STRINGS } from "../Utils";

interface HeaderProps {
  showForm: boolean,
  setShowForm: BooleanStateSetter;
}

export function Header({ showForm, setShowForm }: HeaderProps) {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Today I Learned Logo" />
        <h1>{STRINGS.appName}</h1>
      </div>
      <button
        type="button"
        className="btn btn-large js-open-form"
        onClick={() => {
          setShowForm((showForm) => !showForm);
        }}
      >
        {showForm ? STRINGS.btnCloseForm : STRINGS.btnShareFact}
      </button>
    </header>
  );
}
