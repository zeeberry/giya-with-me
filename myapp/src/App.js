import React from 'react';
import styled from 'styled-components';
import Form from './components/form';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">Giya</header>
      <Main role="main">
        <Form />
      </Main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
