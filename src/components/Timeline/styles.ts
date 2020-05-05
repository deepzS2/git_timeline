import styled from "styled-components";

export const Container = styled.div``;

export const TimelineList = styled.ul`
  padding: 50px;
`;

export const TimelineItem = styled.li`
  list-style-type: none;
  position: relative;
  width: 6px;
  margin: 0 auto;
  padding-top: 50px;
  background: ${({ theme }) => theme.colors.secondary};

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: inherit;

    transition: background 0.5s ease-in-out;
  }

  &:nth-child(even) div {
    left: -439px;
  }

  &:nth-child(even) div {
    transform: translate3d(-200px, 0, 0);
  }

  &:nth-child(even) div::before {
    right: -15px;
    border-width: 8px 0 8px 16px;
    border-color: transparent transparent transparent
      ${({ theme }) => theme.colors.secondary};
  }

  &:nth-child(odd) div {
    left: 45px;
    transform: translate3d(200px, 0, 0);
  }

  &:nth-child(odd) div::before {
    left: -15px;
    border-width: 8px 16px 8px 0;
    border-color: transparent ${({ theme }) => theme.colors.secondary}
      transparent transparent;
  }

  &.in-view::after {
    background: ${({ theme }) => theme.colors.secondary};
  }

  &.in-view div {
    transform: none;
    visibility: visible;
    opacity: 1;
  }
`;

export const Text = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  bottom: 0;
  width: 400px;
  padding: 15px;
  background: ${({ theme }) => theme.colors.secondary};

  visibility: hidden;
  opacity: 0;
  font-size: 1.1rem;
  transition: all 0.5s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    bottom: 7px;
    width: 0;
    height: 0;
    border-style: solid;
  }
`;

export const Time = styled.time`
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Link = styled.a`
  text-decoration-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};
`;
