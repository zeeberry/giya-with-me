import React from 'react';
import styled from 'styled-components';
import Form from './components/form';

const StyledApp = styled.div`
    color: #ffe8e7;
    background: #E96D65;
    padding: 10px;
    min-height: 100vh;
`;

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <StyledApp>
      <header>
        <img src="" alt="Giya Logo"/>
      </header>
      <Main role="main">
        <Form />
      </Main>
      <footer>
      </footer>
    </StyledApp>
  );
}

export default App;
