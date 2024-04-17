import React, { useContext } from 'react';
import { TimerContext } from '../store/TimerContext';

export default function ProgressBar() {
    const { progressWidth } = useContext(TimerContext);
    const containerRef = React.useRef(null);

    return (
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 overflow-hidden" ref={containerRef}>
        <div className="bg-amber-500 text-xs font-medium text-white text-center p-3 leading-none rounded-full transition-width duration-1000" style={{ width: progressWidth }}></div>
      </div>
    );
}
