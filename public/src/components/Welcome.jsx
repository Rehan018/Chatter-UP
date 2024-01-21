import React, { useState, useEffect } from "react";
import styled from "styled-components";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555; /* Slightly darker gray text */
  flex-direction: column;
  padding: 2rem;
  background-color: #f8f8f8; /* Light gray background */

  h1 {
    font-size: 1.8rem; /* Increased font size for the heading */
    margin-bottom: 0.5rem;
    span {
      color: #4e0eff;
    }
  }

  h3 {
    font-size: 1rem;
    text-align: center;
    margin: 0; /* Simplified margin setting */
  }
`;
