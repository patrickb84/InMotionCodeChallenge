import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';

import './styles/style.scss';
import MovieDetail from './Views/MovieDetail';
import MovieEdit from './Views/MovieEdit';
import MovieIndex from './Views/MovieIndex';

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className='row d-flex'>
        <div className='col-md-2'>
          <section className='sidebar'></section>
        </div>
        <div className='col'>
          <section>
            <Switch>
              <Route exact path='/'>
                <MovieIndex />
              </Route>
              <Route path='/moviedetail'>
                <MovieDetail />
              </Route>
              <Route path='/movieedit'>
                <MovieEdit />
              </Route>
            </Switch>
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;
