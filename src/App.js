import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent/>
      
      <div className='container'>
        <Switch>
          <Route exact path= "/" component = {ListEmployeeComponents}/> 
          <Route path="/employees" component = {ListEmployeeComponents}/> 
          <Route path="/add-employee" component={AddEmployeeComponent} />
          <Route path= "/edit-employee/:id" component={AddEmployeeComponent}/>
        </Switch>
      </div>
      <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
