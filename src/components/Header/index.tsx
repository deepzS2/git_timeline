import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// API
import api from "../../services/api";

// Styles
import { Container, Theme, Search } from "./styles";

interface Props {
  toggleTheme(): void;
  setRepos: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        html_url: string;
        created_at: string;
      }[]
    >
  >;
}

interface IGitResponse {
  name: string;
  html_url: string;
  created_at: string;
  [key: string]: any;
}

const Header: React.FC<Props> = ({ toggleTheme, setRepos }) => {
  const [user, setUser] = useState("deepzS2");
  const [input, setInput] = useState("Username here");

  const searchUser = async (e: React.KeyboardEvent) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setUser(input);

      setInput("");

      return false;
    }
  };

  const onChange = (value: string) => {
    setInput(value);
  };

  const getData = async (gitUser: string): Promise<Array<IGitResponse>> => {
    const response = await api.get(`/users/${gitUser}/repos`);

    return response.data;
  };

  useEffect(() => {
    getData(user)
      .then((data) => {
        const repositories = data.map((value) => {
          const { name, html_url, created_at } = value;
          return { name, html_url, created_at };
        });

        const sortedRepos = repositories.sort((a, b) => {
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        });

        setRepos(sortedRepos);
      })
      .catch((err: Error) => {
        if (err.message === "Request failed with status code 404") {
          return alert("User doesn't exist");
        } else {
          alert("Something went wrong: " + err.message);
        }
      });
  }, [setRepos, user]);

  return (
    <Container>
      <h1>Github Timeline</h1>
      <Search
        onKeyUp={searchUser}
        value={input}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
      <Theme onClick={toggleTheme}>Change theme</Theme>
    </Container>
  );
};

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  setRepos: PropTypes.any.isRequired,
};

export default Header;
