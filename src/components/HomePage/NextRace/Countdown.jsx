import { useState, useEffect, useRef, Fragment } from 'react';

const Countdown = ({ time }) => {
  const [timeLeft, setTimeLeft] = useState(null);
  const count = useRef(null);

  //invokes handleTime after render
  useEffect(() => {
    handleTime();
  }, [time]);

  //runs countdown every second
  useEffect(() => {
    count.current = window.setInterval(() => {
      setTimeLeft((time) => time - 1);
    }, 1000);
    return clear;
  }, [timeLeft]);

  //if timeLeft gets to zero clears setInterval
  useEffect(() => {
    if (timeLeft < 0) {
      clear();
      setTimeLeft(0);
    }
  }, [timeLeft]);

  //clear func for interval
  const clear = () => window.clearInterval(count.current);

  //constants for time units
  const second = 1;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const daysLeft = Math.floor(timeLeft / day);
  const hoursLeft = Math.floor((timeLeft % day) / hour);
  const minutesLeft = Math.floor((timeLeft % hour) / minute);
  const secondsLeft = Math.floor((timeLeft % minute) / second);

  //gets time left to target
  const handleTime = () => {
    const targetDateObj = new Date(time);
    const currentDate = Date.now();
    const targetDate = targetDateObj.getTime();
    const timeBetween = targetDate - currentDate; //returns time between in miliseconds;
    setTimeLeft(timeBetween / 1000);
  };

  return (
    <div className='flex flex-row justify-center gap-x-4 text-bg-800 dark:text-bg-50'>
      {timeLeft > 0 ? (
        <Fragment>
          <div className='flex flex-col w-12'>
            <p className='font-poppins text-4xl w-full text-center'>
              {daysLeft < 10 ? `0${daysLeft}` : daysLeft}
            </p>
            <p className='font-openSans text-center text-xs'>Days</p>
          </div>
          <div className='flex flex-col w-12'>
            <p className='font-poppins text-4xl w-full text-center'>
              {hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft}
            </p>
            <p className='font-openSans text-center text-xs'>Hours</p>
          </div>
          <div className='flex flex-col w-12'>
            <p className='font-poppins text-4xl w-full text-center'>
              {minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft}
            </p>
            <p className='font-openSans text-center text-xs'>Mins</p>
          </div>
          <div className='flex flex-col w-12'>
            <p className='font-poppins text-4xl w-full text-center'>
              {secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}
            </p>
            <p className='font-openSans text-center text-xs'>Secs</p>
          </div>
        </Fragment>
      ) : (
        <p>Countdown ended...</p>
      )}
    </div>
  );
};
export default Countdown;
