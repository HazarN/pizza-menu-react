const Footer = () => {
  const opensAt = 0;
  const closesAt = 0;

  const currentTime = new Intl.DateTimeFormat('tr-TR', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).format(new Date());
  const currentHour = parseInt(currentTime.split(':')[0]);

  const isOpen = currentHour >= opensAt && currentHour < closesAt;

  return (
    <footer>
      {isOpen ? (
        <div className='order'>
          <p>{currentTime}, We're currently open</p>
          <button className='btn'>Order</button>
        </div>
      ) : (
        <p>{currentTime}, We're currently closed</p>
      )}
    </footer>
  );
};

export default Footer;
