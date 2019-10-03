import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class Profile extends Component {
    render() {
        const { url, icon } = this.props.profile

        return (
            <span style={{ margin: 10 }}>
                <a href={url}><img src={icon} alt='profile icon' style={{ width: 50 }}/></a>
            </span>
        );
    }
}

class SocialProfiles extends Component {
    render() {
        return (
            <div>
                <h2>Connect With Me</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(PROFILE => {
                            return <Profile key={PROFILE.id} profile={PROFILE} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;