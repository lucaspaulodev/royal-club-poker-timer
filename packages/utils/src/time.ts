export const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

interface Time {
  minutes: number;
  seconds: number;
}

export const formatTimer = (time: Time) =>
  `${formatTime(time.minutes)}:${formatTime(time.seconds)}`;
