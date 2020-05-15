import React from 'react';

import Header from './components/Header';

import Home from './views/Home';
import Exercise from './views/Exercise';
  import Exercise_before from './views/Exercise/Exercise_before';
  import Exercise_after from './views/Exercise/Exercise_after';

import Study from './views/Study';
import Motorcycle from './views/Motorcycle';

import Mari from './views/Mari';
  import Ai from './views/Mari/Ai';

import June from './views/June';
  import JF from './views/June/June_friends';

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
          <Route path="/exercise-before" exact component={Exercise_before} />
          <Route path="/exercise-after" exact component={Exercise_after} />

        <Route path="/study" exact component={Study} />
        <Route path="/motorcycle" exact component={Motorcycle} />
        
        <Route path="/mari" exact component={Mari} />
          <Route path="/ai" exact component={Ai} />
      
        <Route path="/june" exact component={June} />
          <Route path="/june-friends" exact component={JF} />

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
