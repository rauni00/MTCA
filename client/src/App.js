import React from 'react';
import jwt_decode from 'jwt-decode';
import setAuthToken from './component/utils/setAuthToken';
import { setCurrentUser, logoutUser } from './component/actions/authActions';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Footer from './component/layout/Footer';
import Navbar from './component/layout/Navbar';
import Landing from './component/layout/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import Profiles from './component/profiles/Profiles';
import Dashboard from './component/dashboard/Dashboard';
import PrivateRoute from './component/common/PrivateRoute';
import CreateProfile from './component/create-profiles/CreateProfile';
import Profile from './component/profile/Profile';
import EditProfile from './component/edit-profile/EditProfile';
import AddEducation from './component/add-education/AddEducation';
import AddExperience from './component/add-experiences/AddExperience';
import Posts from './component/posts/Posts';
import Post from './component/Post/Post';
// import PostFeed from './component/posts/PostFeed';

// import Profile from './component/profile/Profile';

//check for the  token
if (localStorage.jwtToken) {
	// Set auth token header auth
	setAuthToken(localStorage.jwtToken);
	// decode token and  get user info and exp
	const decode = jwt_decode(localStorage.jwtToken);
	//set user and  isAuthenticate
	store.dispatch(setCurrentUser(decode));
	//check for the expire token
	const currentTime = Date.now() / 1000;
	if (decode.exp < currentTime) {
		//logout user
		store.dispatch(logoutUser());
		// TODO Clear current Profile
		//Redirect to login
		window.location.href = '/login';
	}
}
class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
						<Navbar />
						<Route exact path="/" component={Landing}></Route>
						<div className="container">
							<Route exact path="/Register" component={Register}></Route>
							<Route exact path="/Login" component={Login}></Route>
						</div>
						<Route exact path="/Profiles" component={Profiles}></Route>
						<Route exact path="/post/:id" component={Post}></Route>
						<Route exact path="/feed" component={Posts}></Route>
						<Route exact path="/Profile/:handle" component={Profile}></Route>
						<Route exact path="/create-profile" component={CreateProfile}></Route>
						<Route exact path="/edit-profile" component={EditProfile}></Route>
						<Route exact path="/add-education" component={AddEducation}></Route>
						<Route exact path="/add-experience" component={AddExperience}></Route>
						<Switch>
							<PrivateRoute exact path="/dashboard" component={Dashboard} />
						</Switch>
						<Footer />
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
