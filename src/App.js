import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import './index.css';
import profile from './assets/profile.png';

class App extends Component {
    state = { displayBio: false };

    toggleBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (
            <div>
                <img src={profile} alt='profile' id='profile' />
                <h1>Hello!</h1>
                <p>My Name is Tyler and I am a developer learning React in less than a week</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in San Francisco, and I code every day</p>
                            <p>Besides coding, I also love music</p>
                            <button onClick = {this.toggleBio}>Read less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick = {this.toggleBio}>Read more</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        );
    }
}

export default App;