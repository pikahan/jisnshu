import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './common/Header'
import { Provider } from 'react-redux'
import store from './store'
import GlobalStyle from './style'
import {Route} from "react-router";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const App: React.FC = () => {
  return (
    <Provider store={store}>
        <GlobalStyle />
        <BrowserRouter>
            <>
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/detail" exact component={Detail} />
            </>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
