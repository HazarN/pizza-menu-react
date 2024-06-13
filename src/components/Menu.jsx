import Item from './Item';

import data from '../pizzaMenu.json';

const Menu = () => {
  const pizzas = data.pizzaMenu;

  return (
    <section className='menu'>
      <h2>Our menu</h2>
      <ul className='pizzas'>
        {pizzas.map((pizza, i) => {
          return (
            <Item
              key={i}
              pizza={{
                name: pizza.name,
                ingredients: pizza.ingredients,
                price: pizza.price,
                imageUrl: pizza.photoName,
              }}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Menu;
