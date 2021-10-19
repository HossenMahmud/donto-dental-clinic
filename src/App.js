
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AuthProvider from "./Context/AuthProvider";
import Blogs from './pages/Blogs/Blogs';
import Doctors from "./pages/Doctors/Doctors";
import Home from './pages/Home/Home/Home';
import Login from "./pages/Login/Login";
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Register from "./pages/Register/Register";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/service/:id'>
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <PrivateRoute path='/doctors'>
            <Doctors></Doctors>
          </PrivateRoute>
          <Route path='/blog'>
            <Blogs></Blogs>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
