import React     from 'react';
import Nav       from './Nav/Nav';
import Home      from './Home/Home';
import Ahri      from './Ahri/Ahri';
import Akali     from './Akali/Akali';
import Evelynn   from './Evelynn/Evelynn';
import Kaisa     from './Kaisa/Kaisa';
import Seraphine from './Seraphine/Seraphine';
import                './App.css';
// import Fetch from './components';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
    <Router>
    <div> 
      <Nav />
      
      <Switch>
        <Route path="/"          exact component={Home}     />
        <Route path="/ahri"            component={Ahri}     />
        <Route path="/akali"           component={Akali}    />
        <Route path="/evelynn"         component={Evelynn}  />
        <Route path="/kaisa"           component={Kaisa}    />
        <Route path="/seraphine"       component={Seraphine}/>
        <Route path="*"                component={Error}    />
      </Switch>
    </div>
    </Router>
  );
}

const Error = () => {
  return (
    <div>
      <div className='title'>
        Error
      </div>
    </div>
  );
};

export default App;
