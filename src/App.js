import React, {Component} from 'react';
import Password from './Passwrod.js';
import Options from './Options.js';
import getNewPassword from './PasswordFunctions.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const passwordLength = '15';
    const containedWord = ''

    const password = getNewPassword(containedWord, passwordLength);
    this.state = {
      passwordLength,
      containedWord,
      password
    };

    this.onOptionsUpdate = this
      .onOptionsUpdate
      .bind(this);
  }

  onOptionsUpdate(passwordLength, containedWord) {

    this.setState({
      passwordLength,
      containedWord
    }, () => {
      this.updatePassword();
    });
  }

  updatePassword() {
    const password = getNewPassword(this.state.containedWord, this.state.passwordLength);
    this.setState({password});
  }

  render() {
    return (
      <div className="App">

        <header>
          <h1>Password Generator</h1>
          <h3>Fast way to get a random password</h3>
        </header>

        <div className="password-container">
          <Password password={this.state.password}/>
        </div>

        <div className="options-container">
          <Options
            onOptionsUpdate={this.onOptionsUpdate}
            passwordLength={this.state.passwordLength}
            thcontainedWord={this.state.containedWord}/>
        </div>
      </div>
    );
  }
}

export default App;
