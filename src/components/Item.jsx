const Item = props => {
  const { pizza } = props;
  const { name, ingredients, price, imageUrl } = pizza;

  const imgAlt = imageUrl.split('/')[1].split('.')[0];

  return (
    <li className='pizza'>
      <img src={imageUrl} alt={imgAlt} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
};

export default Item;
