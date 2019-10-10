import React, {Component} from 'react';
import fire from "../fire";

class Test extends Component {
  componentWillMount() {
    /*limitToLast = Max 100 messages*/
    let messagesReference = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesReference.on('child_added', snapshot => {
      let message = {text: snapshot.val(), id: snapshot.key};
      this.setState({messages: [message].concat(this.state.messages)});
    });

    const userRef = fire.database().ref('users').orderByKey().limitToLast(100);

    userRef.on('value', snapshot => {
      const users = [snapshot.val()];
      this.setState({users: users});
    });

    this.checkIfLoggedIn()
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Test;