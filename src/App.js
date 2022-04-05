import "./App.css";

import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PlayMovie from "./Components/PlayMovie";
import Home from "./Components/Home";
import Search from "./Components/Search";
import Signup from "./Components/Signup";
import SignIn from "./Components/Signin";
import Admin from "./Components/Admin";
import Actionmovies from "./Components/Admin/AdminActionmovies";
import AdminComedyMovies from "./Components/Admin/AdminComedy";
import AdminThrillerMOvies from "./Components/Admin/AdminThrillerMOvies";
import AdminRomanticMovies from "./Components/Admin/AdminRomanticMovies";
import AdminAddMovie from "./Components/Admin/AdminAddMovie";
import AdminEditMovie from "./Components/Admin/AdminEditMovie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminBanners from "./Components/Admin/AdminBanners";

function App() {
	return (
		<Router>
			<Header />
			<ToastContainer />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/movie/:id" component={PlayMovie} />
				<Route exact path="/movies/search/:id" component={Search} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/signin" component={SignIn} />
				<Route exact path="/admin/movies" component={Admin} />
				<Route
					exact
					path="/admin/movies/action"
					component={Actionmovies}
				/>
				<Route
					exact
					path="/admin/movies/comedy"
					component={AdminComedyMovies}
				/>
				<Route
					exact
					path="/admin/movies/thriller"
					component={AdminThrillerMOvies}
				/>
				<Route
					exact
					path="/admin/movies/romantic"
					component={AdminRomanticMovies}
				/>
				<Route
					exact
					path="/admin/movie/create"
					component={AdminAddMovie}
				/>
				<Route
					exact
					path="/admin/movie/edit/:id"
					component={AdminEditMovie}
				/>
				<Route
					exact
					path="/admin/movie/banners"
					component={AdminBanners}
				/>
			</Switch>
		</Router>
	);
}

export default App;
