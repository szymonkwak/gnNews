import { useEffect, useState } from 'react';
import { useSelector } from '../../../hooks';
import { Languages } from '../../../store/general/generalTypes';

const Timer = () => {
  const lng = useSelector((state) => state.general.language);

  const [time, setTime] = useState<string>();

  useEffect(() => {
    setTime(new Date().toLocaleTimeString(lng));
    const timeInterval = setInterval(() => setTime(new Date().toLocaleTimeString(lng)), 1000);
    return () => clearInterval(timeInterval);
  }, [lng]);

  return <div className={lng === Languages.PL ? 'w-[70px]': 'w-[95px]'}>{time}</div>;
};

export default Timer;
