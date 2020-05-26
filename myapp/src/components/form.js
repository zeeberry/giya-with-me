import React from 'react';
import { useState } from "react";
import styled from "styled-components";

function Form() {
  const [intent, setIntent] = useState('1');
  const [hood, setHood] = useState('1');

  const handleChange = (event) => {
    setIntent(event.target.value);
  }

  return (
    <form>
      Where should we go for
      <select value={intent} onChange={handleChange}>
        <option value="1" selected>a bite</option>
        <option value="2">a drink</option>
        <option value="3">dessert or ice cream</option>
        <option value="4">a walk</option>
      </select>
      <br />in 
      <select value={hood}>
        <option value="1" selected>Williamsburg</option>
      </select>
    </form>
  );
}

export default Form;
