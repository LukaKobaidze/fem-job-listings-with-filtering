import { useEffect, useState } from 'react';

import FilterPanel from './FilterPanel';
import ListCards from './ListCards';

export const getJobTags = (job) => {
  return [job.role, job.level, ...job.languages, ...job.tools];
};

function FilterableCards({ cards }) {
  const [filter, setFilter] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(cards);

  useEffect(() => {
    if (filter.length > 0) {
      setFilteredJobs(
        cards.filter((card) => {
          const cardTags = getJobTags(card);

          return filter.every((filterOption) => {
            return cardTags.includes(filterOption);
          });
        })
      );
    } else {
      setFilteredJobs(cards);
    }
  }, [filter, cards]);

  function addTagHandler(tag) {
    setFilter((state) => {
      return [...state, tag];
    });
  }

  function removeTagHandler(tag) {
    setFilter((state) => {
      return state.filter((filteringTag) => filteringTag !== tag);
    });
  }

  function resetTagsHandler() {
    setFilter([]);
  }

  return (
    <>
      {filter.length > 0 && (
        <FilterPanel
          filter={filter}
          removeTagHandler={removeTagHandler}
          resetTagsHandler={resetTagsHandler}
        />
      )}
      <ListCards cards={filteredJobs} addTagHandler={addTagHandler} />
    </>
  );
}

export default FilterableCards;
