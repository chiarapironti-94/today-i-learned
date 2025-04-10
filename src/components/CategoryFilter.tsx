import { Category, CATEGORIES, STRINGS } from '../Utils';

export function CategoryFilter() {
  return (
    <aside>
      <ul className="category-list">
        <li>
          <button className="btn btn-all-categories">{STRINGS.optionAll}</button>
        </li>
        {CATEGORIES.map((category: Category) => (
          <li key={category.name}>
            <button
              className="btn btn-category"
              style={{ backgroundColor: category.color }}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
