import React from 'react';
import PropTypes from 'prop-types';
import './Options.css';

class Options extends React.Component {
  static propTypes = {
    passwordLength: PropTypes.string.isRequired,
    containedWord: PropTypes.string,
    onOptionsUpdate: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    const length = this.props.passwordLength;

    this.state = {
      length,
      containedWord: ''
    };
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this
      .props
      .onOptionsUpdate(this.state.length, this.state.containedWord);
  }

  handleOnChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={(e) => {
        this.handleOnSubmit(e)
      }}>
        <section>
          <label>Password length:</label>
          <input
            name="length"
            type="number"
            value={this.state.length}
            onChange={(e) => {
            this.handleOnChange(e);
          }}/>
        </section>

        <section>
          <label>Contains word:</label>
          <input
            name="containedWord"
            type="text"
            placeholder="tumtumtum"
            value={this.state.containedWord}
            onChange={(e) => {
            this.handleOnChange(e);
          }}/>
        </section>

        <section>
          <button type="submit" id="password-button">Get Password</button>
        </section>
      </form>
    );
  }
}

export default Options;