import { FC } from "react";
import { formatDistanceToNow, parseISO } from "date-fns";

import Time from "./styled";
import { TProps } from "./types";

const TimeAgo: FC<TProps> = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return <Time>· {timeAgo}</Time>;
};

export default TimeAgo;
