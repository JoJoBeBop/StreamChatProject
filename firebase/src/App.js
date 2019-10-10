import React, {Component} from 'react';
import database from './fire';
import style from "./App.css"
import Chat from "./Components/Chat";
import Streams from "./Components/Streams";
import SignIn from "./Components/SignIn";
import firebase from 'firebase';


class App extends Component {

  state = {
    loading: true,
    authenticated: false,
    user: null };

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }


  render() {

    const { authenticated, loading } = this.state;

    if (loading) {
      return <p>Loading..</p>;
    }
    return (

      <div className="home">
        <Streams/>
        <Chat authenticated={authenticated}/>
        <SignIn/>
      </div>
    )
  }
}

export default App;