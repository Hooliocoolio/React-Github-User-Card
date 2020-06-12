import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import UserCard from "./components/UserCard";
import Followers from './components/Followers';
import axios from "axios";
import Following from './components/Following';
import Header from './components/Header';
import './App.css';
// import UserCard from './coms/UserCard';
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <Router>
      <div className="container">
      <Header />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/myprofile">My Profile</Link>
          </li>
          <li>
            <Link to="/followers">Followers</Link>
          </li>
          <li>
            <Link to="/following">Following</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
       
            <Home />
          </Route>
          <Route path="/MyProfile">
            <MyProfile />
          </Route>
          <Route path="/followers">
          <Followers />
          </Route>
          <Route path="/following">
          <Following />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    // set the initial state to empty
    this.state = {
      login: [
        {
          id: "",
          user: "",
          img: "",
          name: "",
          location: "",
          blog: "",
          followers: "",
          following: ""
        }
      ]
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/hooliocoolio")
      .then(res => {
        console.log(res.data);
        this.setState({
          name: res.data.name,
          img: res.data.avatar_url,
          location: res.data.location,
          blog: res.data.blog,
          following: res.data.following,
          followers: res.data.followers 
        });
      })
      .catch(error => console.log(error));
  
    }
  render() {
    return (
      <div>
     
        <UserCard
          img={this.state.img}
          name={this.state.name}
          location={this.state.location}
          blog={this.state.blog}
          following={this.state.following}
          followers={this.state.followers}
        />
        {/* <Followers props={this.state.user} />  */}
      </div>
    );
  }
}