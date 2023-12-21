import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Developer'
      },
      show: false,
      intervalId: null,
      mountedTime: 0
    };
  }

  componentDidMount() {
    const intervalId = setInterval(this.updateTime, 1000);
    this.setState({ intervalId, mountedTime: Date.now() });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateTime = () => {
    this.setState({ mountedTime: Date.now() });
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <img src={imgSrc} alt="Person" />
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time since mount: {Math.floor((Date.now() - mountedTime) / 1000)} seconds</p>
      </div>
    );
  }
}

export default App;

