import Order from './Order';

const Footer = () => {
  const opensAt = 8;
  const closesAt = 20;

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
        <Order currentTime={currentTime} closesAt={closesAt} />
      ) : (
        <p>
          {currentTime}, We're currently closed. Our work hours is between{' '}
          {opensAt}.00-{closesAt}.00.
        </p>
      )}
    </footer>
  );
};

export default Footer;
