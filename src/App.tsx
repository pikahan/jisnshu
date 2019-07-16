import React from 'react';
import Header from './common/header'
import GlobalStyle from './style'

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Header/>
    </div>
  );
}

export default App;
