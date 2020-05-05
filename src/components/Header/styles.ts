import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  width: 100vw;
  height: 10vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 5vw;
  color: ${({ theme }) => theme.colors.text};
`;

export const Search = styled.input`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  width: 25%;
  height: 25%;
  font-size: 1.1em;
`;

export const Theme = styled.button`
  background: none;
  color: ${({ theme }) => theme.colors.text};
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;
