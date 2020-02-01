import React from 'react';

import Header from './components/Header';

import Home from './views/Home';
import Exercise from './views/Exercise';
import Study from './views/Study';
import Motorcycle from './views/Motorcycle';

import Mari from './views/Mari';
  import Ai from './views/Mari/Ai';
  import Kiki from './views/Mari/Kiki';
  import Hana from './views/Mari/Hana';

import June from './views/June';
import Rule from './views/Rule';
import History from './views/History';

import Color from './views/Color';
  import Green from './views/Color/Green';
  import White from './views/Color/White';



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
        <Route path="/exercise" exact component={Exercise} />
        <Route path="/study" exact component={Study} />
        <Route path="/motorcycle" exact component={Motorcycle} />
        
        <Route path="/mari" exact component={Mari} />
          <Route path="/ai" exact component={Ai} />
          <Route path="/kiki" exact component={Kiki} />
          <Route path="/hana" exact component={Hana} />
        <Route path="/june" exact component={June} />
        <Route path="/rule" exact component={Rule} />
        <Route path="/history" exact component={History} />
        <Route path="/color" exact component={Color} />
          <Route path="/green" exact component={Green} />
          <Route path="/white" exact component={White} />
      </BrowserRouter>

    </div>
  );
}

export default App;
