import Card from './Card';
import { getJobTags } from './FilterableCards';

function ListCards({ cards, addTagHandler }) {
  return (
    <div className="container">
      <div className="cards-list">
        {cards.map((card) => (
          <Card
            key={card.id}
            company={card.company}
            logo={card.logo}
            labelNew={card.new}
            labelFeatured={card.featured}
            position={card.position}
            postedAt={card.postedAt}
            contract={card.contract}
            location={card.location}
            tags={getJobTags(card)}
            addTagHandler={addTagHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default ListCards;
