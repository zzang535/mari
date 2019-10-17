import React from 'react';

import Header from './components/Header';

import Home from './views/Home';

import Mari from './views/Mari';
  import Ai from './views/Mari/Ai';
  import Kiki from './views/Mari/Kiki';
  import Hana from './views/Mari/Hana';

import June from './views/June';
import Rule from './views/Rule';
import History from './views/History';
import Item from './views/Item';


import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <div className="Header">
          <Header />
      </div>

      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/mari" exact component={Mari} />
          <Route path="/ai" exact component={Ai} />
          <Route path="/kiki" exact component={Kiki} />
          <Route path="/hana" exact component={Hana} />
        <Route path="/june" exact component={June} />
        <Route path="/rule" exact component={Rule} />
        <Route path="/history" exact component={History} />
        <Route path="/item" exact component={Item} />
      </BrowserRouter>

    </div>
  );
}

export default App;
