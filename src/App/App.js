import React, { Component } from 'react';
import UsernameForm from '../components/UsernameForm';
import ChatScreen from '../components/ChatScreen';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUsername: '',
      // currentScreen: 'usernameScreen',
      currentScreen: 'ChatScreen'
    }
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
  }
  
  onUsernameSubmitted(username) {
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, body: JSON.stringify({ username })
    })
      .then(response => {
        this.setState({
          currentUsername: username,
          currentScreen: 'ChatScreen'
        })
      })
      .catch(error => console.error('error', error))
  }
  
  
  render(){
    if (this.state.currentScreen === 'usernameScreen') {
      return <UsernameForm onSubmit={username => alert(username)} />
    }
    if (this.state.currentScreen === 'ChatScreen') {
      return <ChatScreen currentUsername={this.state.currentUsername} />
    }
  }
}

export default App;
