import React from "react";
import PropTypes from "prop-types";
import VisibilitySensor from "react-visibility-sensor";

import {
  Container,
  TimelineList,
  TimelineItem,
  Text,
  Time,
  Link,
} from "./styles";

type Repos = {
  name: string;
  html_url: string;
  created_at: string;
};

interface Props {
  repos: Array<Repos>;
}

const Timeline: React.FC<Props> = ({ repos }) => {
  const formatDate = (date: string): string => {
    const formatted = new Date(date).toLocaleString("en-US");
    return formatted;
  };

  return (
    <Container>
      <TimelineList>
        {repos.map((value) => (
          <VisibilitySensor key={value.created_at}>
            {({ isVisible }) => (
              <TimelineItem className={isVisible ? "in-view" : ""}>
                <Text>
                  <Time>{formatDate(value.created_at)}</Time>
                  <br />
                  <Link href={value.html_url}>{value.name}</Link>
                </Text>
              </TimelineItem>
            )}
          </VisibilitySensor>
        ))}
      </TimelineList>
    </Container>
  );
};

Timeline.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Timeline;
