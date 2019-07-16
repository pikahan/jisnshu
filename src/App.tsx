import React from 'react';
import Header from './components/header'
import { Provider } from 'react-redux'
import store from './store'
import GlobalStyle from './style'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header/>
    </Provider>
  );
}

export default App;
