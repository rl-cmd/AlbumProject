import './App.css';
import React from 'react'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import Routers from './Components/Global/Routers'
function App(props) {
  // const { history } = props
  // useEffect(() => {
  //   history.push("/HomePage")
  // }, [])
  return (
    <div className="App All">
      <Router>
        <Redirect to="/" />
        <Routers />
      </Router>
    </div>

  );
}

export default App;
