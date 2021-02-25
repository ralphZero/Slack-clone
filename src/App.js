import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Room from './components/Room/Room';
import ThemeContextProvider from './context/ThemeContext';
import ModalContextProvider from './context/ModalContext';
import AddChannelModal from './components/Modals/AddChannelModal/AddChannelModal';

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ModalContextProvider>
          <AddChannelModal />
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/room' component={Room} />
            </Switch>
          </BrowserRouter>
        </ModalContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
