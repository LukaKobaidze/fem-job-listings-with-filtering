import Filter from './Filter';

const FilterPanel = ({ filter, removeTagHandler, resetTagsHandler }) => {
  return (
    <div className="container filter__panel">
      <div className="filter">
        <div className="card__tags">
          {filter.length > 0 &&
            filter.map((tag) => (
              <Filter
                key={tag}
                name={tag}
                removeTagHandler={() => removeTagHandler(tag)}
              />
            ))}
        </div>
        <button className="btn__reset" onClick={resetTagsHandler}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
