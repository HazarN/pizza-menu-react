import Item from './Item';

import data from '../pizzaMenu.json';

const Menu = () => {
  const pizzas = data.pizzaMenu;

  return (
    <section className='menu'>
      <h2>Our menu</h2>

      {pizzas.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. {pizzas.length} creative dishes to choose
            from. All from our stone oven, all organic, all delicious.
          </p>

          <ul className='pizzas'>
            {pizzas.map((pizza, i) => {
              return (
                <Item
                  key={i}
                  pizza={{
                    name: pizza.name,
                    ingredients: pizza.ingredients,
                    price: !pizza.soldOut ? pizza.price : 'SOLD OUT',
                    imageUrl: pizza.photoName,
                    soldOut: pizza.soldOut,
                  }}
                />
              );
            })}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu, please come back later. </p>
      )}
    </section>
  );
};

export default Menu;
