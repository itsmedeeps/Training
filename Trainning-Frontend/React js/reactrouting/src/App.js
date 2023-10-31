import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Link, Route } from 'react-router-dom';
import VenueList from './components/VenueList';
import Teamlist from './components/Teamlist';
import TeamDetails from './components/TeamDetails';
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            <h1>Welcome deeps</h1>
            <h2>Welcome to react</h2>
            Edit <code>src/App.js</code> and save
      </header>
      <Link to="/VenueList">List of Venues </Link><br/>
      <Link to="/Teamlist">List of Teams </Link><br/>
      <Link to="/TeamDetails">List of Team details </Link> <br/>
    </div>
     <Routes>
        <Route exact path="/Venuelist" element={<VenueList/>}></Route>
        <Route exact path="/Teamlist" element={<Teamlist/>}></Route>
        <Route exact path="/TeamDetails" element={<TeamDetails/>}></Route>
     </Routes>
     </Router>
  );
}
export default App;