import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header> </header>
      <main>
        <Switch>
          <Route exact path='/' render={() => <div> </div>}/>
          <Route path='/about' render={() => <div> </div>}/>
          <Route path='/shop' render={() => <div> </div>}/>
          <Route path='/blog' render={() => <div> </div>}/>
          <Route path='/cart' render={() => <div> </div>}/>
          <Route path='/checkout' render={() => <div> </div>}/>
          <Route path='/confirmation' render={() => <div> </div>}/>
          <Route path='/contacts' render={() => <div> </div>}/>
          <Route path='/login' render={() => <div> </div>}/>
          <Route path='/detailproduct' render={() => <div> </div>}/>
          <Route path='*' render={() => <div> 404 not found </div>}/>
        </Switch>
      </main>
      <footer> </footer>
    </div>
  );
}

export default App;
