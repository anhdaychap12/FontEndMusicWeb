import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/Home/Index";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DetailMusic from './Components/DetailMusic/DetailMusic';

const App = () => {
  return (
    <>
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact>
              <Home/>
          </Route>
          <Route path='/login'>
              <Login/>
          </Route>
          <Route path='/register'>
              <Register/>
          </Route>
          <Route path='/music/:id'>
              <DetailMusic />
          </Route>
          <Route path='*'>
              <div>Page 404 not found!</div>
          </Route>
        </Switch>
      </div>
    </Router>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"/>
    </>
  );
}

export default App;
