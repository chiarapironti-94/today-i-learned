import {
  Category,
  CategoryNameStateSetter,
  CATEGORIES,
  STRINGS,
} from "../Utils";

interface CategoryFilterProps {
  setCategoryClicked: CategoryNameStateSetter;
}

export function CategoryFilter({ setCategoryClicked }: CategoryFilterProps) {
  return (
    <aside>
      <ul className="category-list">
        <li>
          <button
            className="btn btn-all-categories"
            onClick={() => setCategoryClicked("all")}
          >
            {STRINGS.optionAll}
          </button>
        </li>
        {CATEGORIES.map((category: Category) => (
          <li key={category.name}>
            <button
              className="btn btn-category"
              style={{ backgroundColor: category.color }}
              onClick={() => setCategoryClicked(category.name)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
