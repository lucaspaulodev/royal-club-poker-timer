import { Time } from "./atoms";

export const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

export const formatTimer = (time: Time) =>
  `${formatTime(time.minutes)}:${formatTime(time.seconds)}`;
