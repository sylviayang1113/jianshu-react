import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowerRouter, Route} from 'react-router-dom';
import Header from "./common/header";
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store/index'

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
            <BrowerRouter>
              <div>
                <Header/>
                <Route path='/' exact component={Home}>home</Route>
                <Route path='/detail/:id' exact component={Detail}>detail</Route>
              </div>
            </BrowerRouter>
        </Provider>
      </div>
    )
  }
}

export default App;
