const CountdownItem = ({ content, timeLeft }) => {
  return (
    <div className='flex flex-col w-12'>
      <p className='w-full text-4xl text-center font-poppins'>
        {timeLeft < 10 ? `0${timeLeft}` : timeLeft}
      </p>
      <p className='text-xs text-center font-openSans'>{content}</p>
    </div>
  );
};
export default CountdownItem;
