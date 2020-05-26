import React from 'react';
import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  font-size: calc(16px + 3vmax);
	line-height: 1.5;
`;

const StyledButton = styled.button`
    border: none;
    line-height: 3;
    text-transform: uppercase;
    cursor: pointer;
    background: #76C3BD;
    color: #fff;
    padding: 0 1em;
    margin-top: 2em;
    font-size: 40%;
    font-weight: bold;
    letter-spacing: 3px;
    :hover {
        background: #69B1A9;
    }
`;

const StyledSelect = styled.select`
  border: none;
	background: transparent;
	font-family: inherit;
	font-size: inherit;
	font-weight: inherit;
	line-height: inherit;
	display: inline-block;
  padding: 0 0.125em;
  margin: 0 0.125em;
	color: #b14943;
	cursor: pointer;
	border-bottom: 1px dashed #b14943;
  -webkit-appearance: none;
  :focus {
    outline: none;
  }
`;

function Form() {
  const [intent, setIntent] = useState('1');
  const [hood, setHood] = useState('1');

  const handleChange = (event) => {
    setIntent(event.target.value);
  }

  return (
    <StyledForm>
      <div>
        Where should we go 
      </div>
      <div>
        for
        <StyledSelect value={intent} onChange={handleChange}>
          <option value="1">any activity</option>
          <option value="2">a bite</option>
          <option value="3">a drink</option>
          <option value="4">dessert</option>
          <option value="5">ice cream</option>
          <option value="6">a walk</option>
        </StyledSelect>
      </div>
      <div>
        in 
        <StyledSelect value={hood}>
          <option value="1">Williamsburg</option>
        </StyledSelect> ?
      </div>
      <StyledButton>Find</StyledButton>
    </StyledForm>
  );
}

export default Form;
