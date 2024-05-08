import { useContext } from 'react';
import { TimerContext } from '../contexts/TimerContext';

const ProgressBar = () => {
  const { progressWidth } = useContext(TimerContext);

  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 overflow-hidden">
      <div className="progress-bar bg-amber-500 text-xs font-medium text-white text-center p-3 leading-none rounded-full transition-width duration-1000" style={{ width: progressWidth }}></div>
    </div>
  );
}

export default ProgressBar;
