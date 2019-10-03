import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/profile/Profile';

class App extends React.Component {
  render() {
    const hobbies = ["Knitting", "Gaming", "Bird Watching"];

    const profile = {
        name: "hello123456",
        age: "61",
        img: "http://placeimg.com/640/480/any",
        hobbies: hobbies
    };

    return (
      <div className="App App-header">
          <Profile profileInfo={profile} />
      </div>
    );
  }
}

export default App;
