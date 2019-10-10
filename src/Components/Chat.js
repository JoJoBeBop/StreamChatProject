import React, {Component} from 'react';
import fire from '../fire';
import * as firebase from 'firebase'
import {database} from 'firebase';
import "./Chat.scss"

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            loggedIn: false,
            user: "",
            username: '',
            users: []
        };
    }

    componentDidMount() {
        const username = localStorage.getItem('chat_username');
        this.setState({username: username ? username : 'Unknown'})
        const messagesRef = database().ref('messages').orderByKey().limitToLast(100);

        /*Creating messages*/
        messagesRef.on('value', snapshot => {
            let messagesObj = snapshot.val();
            let messages = [];

            if (messagesObj !== null) {
                Object.keys(messagesObj).forEach(key => messages.push(messagesObj[key]));
                console.log(messagesObj);
                messages = messages.map((message) => {
                    return {text: message.text, user: message.user, id: message.key}
                })
                this.setState({messages: messages})
                this.scroll()
            }


            /*Creating users*/
            const userRef = database().ref('users').orderByKey().limitToLast(100);

            userRef.on('value', snapshot => {
                const users = [snapshot.val()];
                console.log(users);
                this.setState({users: users});
            });

            this.checkIfLoggedIn()
        });
        console.log(this.state)
        if (this.state.message !== undefined) {

            console.log("moi")
        }
    }

    /*Adding message to database*/
    addMessage(event) {
        event.preventDefault();

        let Filter = require('bad-words'),
            filter = new Filter();

        let filteredText = filter.clean(this.inputEl.value)
        database().ref('messages').push({text: filteredText, user: this.state.username});
        this.inputEl.value = '';
        setTimeout(() => {
            this.scroll()
        }, 500)
    }

    checkIfLoggedIn() {
        /*onAuthStateChanged check is user is logged in*/
        firebase.auth().onAuthStateChanged(user => {
            console.log(user)
            if (user) {
                this.setState({loggedIn: true, user: user, username: user.displayName})
            }
        })
    }

    onNameChange(event) {
        console.log("name Change", this.state.user);
        this.setState({username: this.state.user.displayName});
        event.preventDefault();
        fire.database.ref('users').push({username: this.state.username});
    }

    scroll() {
        if (this.state.messages.length === 0) {
            setTimeout(() => {
                this.scroll()
            }, 500)
        } else {
            console.log(this.state)
            const moi = this.refs[`li${this.state.messages.length - 1}`];
            moi.scrollIntoView()
        }
    }

    render() {
        /*Logging in with Google account*/
        const signInWithGoogle = () => {
            const googleProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth()
            /*setPersistence = refreshing won't log out user*/
                .setPersistence(firebase.auth.Auth.Persistence.SESSION)
                .then(() => {
                    firebase.auth()
                        .signInWithPopup(googleProvider)
                        .then(result => {
                            console.log(result)
                        }).catch(error => alert(error))
                })
        };

        const ChatInput = () => {
            /*Renders if user is logged in*/
            if (this.state.loggedIn !== false) {
                return (
                    <form className={"input"} onSubmit={this.addMessage.bind(this)}>
                        <input type="text" ref={element =>
                            this.inputEl = element} placeholder="Chat..."/>
                    </form>
                )
            }

            /*Renders if user is not logged in*/
            return (
                <div>
                    <form className={"input"} onSubmit={this.onNameChange.bind(this)}
                          onClick={() => signInWithGoogle()}>
                        <input type="text" placeholder="Chat..."/>
                    </form>
                </div>
            )

        };

        /*Chat content*/
        return (
            <React.Fragment>
                <div className="chat-wrapper">
                    <ul className="chat">
                        {this.state.messages.map((message, index) => {
                                return (
                                    <li key={message.text} className="message" ref={`li${index}`}>
                                        <strong key={message.text}>{message.user}:</strong>
                                        {message.text}
                                    </li>
                                )
                            }
                        )}

                    </ul>
                </div>
                <ChatInput/>

            </React.Fragment>
        );
    }
}

export default Chat;