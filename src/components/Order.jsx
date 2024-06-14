const Order = props => {
  const { currentTime, closesAt } = props;

  return (
    <div className='order'>
      <p>
        {currentTime}, We're open until {closesAt}.00, Come visit us or order
        online!
      </p>
      <button className='btn'>Order</button>
    </div>
  );
};

export default Order;
