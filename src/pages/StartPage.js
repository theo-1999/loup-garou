import React from 'react';
import { Link } from 'react-router-dom';
import { useSession } from '../services/User';
import { createGame } from '../services/MasterGame';
import styled from 'styled-components'

const Start = () => {
  const { user } = useSession();
  return (
    <div>
    <Button href="/create" onClick={() => createGame(user)}> Nouvelle partie
      
     </Button>
      <br />
      <Button href="/join">
        Rejoindre une partie
      </Button>
    </div>
  );
}

export default Start;
export const Button = styled.button `
  
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid $red;
  border-radius: 0.6em;
  color: $red;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 10px;
  padding: 1em 2em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  
  
  border-color:  #3498db;
  color: #fff;
  box-shadow: 0 0 40px 40px  #3498db inset, 0 0 0 0  #3498db;
  transition: all 150ms ease-in-out;
  
  &:hover {
    box-shadow: 0 0 10px 0  #3498db inset, 0 0 10px 4px  #3498db;
    color : black;
  }
}


`