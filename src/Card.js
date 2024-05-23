import Tag from './Tag';

function Card({
  id,
  company,
  logo,
  labelNew,
  labelFeatured,
  position,
  postedAt,
  contract,
  location,
  tags,
  addTagHandler,
}) {
  return (
    <div key={id} className='card' data-featured={labelFeatured}>
      <div className='card__logo'>
        <img src={logo} alt={company} />
      </div>
      <div className='card__data'>
        <div className='card__heading'>
          <div className='card__name'>{company}</div>
          <div className='card__labels'>
            {labelNew && (
              <span className='card__label' data-label='new'>
                NEW!
              </span>
            )}
            {labelFeatured && (
              <span className='card__label' data-label='featured'>
                FEATURED
              </span>
            )}
          </div>
        </div>
        <div className='card__title'>
          <a href='/'>{position}</a>
        </div>
        <div className='card__meta'>
          <span>{postedAt}</span>
          <span>{contract}</span>
          <span>{location}</span>
        </div>
      </div>
      <div className='card__tags'>

        {tags.map((tag) => (
          <Tag
            key={tag}
            name={tag}
            addTagHandler={() => addTagHandler(tag)}
          />
        ))}
      </div>
    </div>
  );
}

export default Card;
