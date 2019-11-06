import React, { Component } from 'react'

export default class Profile extends Component {
    state = {
        profile: null,
        error: '',
    };

    componentDidMount() {
        this.loadUserProfie();
    }

    loadUserProfie() {
        this.props.auth.getProfile((profile, error) => {
            this.setState({ profile, error })
        })
    }

    render() {
        const { profile } = this.state;
        if (!profile) return null;
        return (
            <>
                <h3 style={{ textAlign: 'center' }}>{profile.nickname}</h3>
                <img style={{ maxWidth: 450, maxHeight: 450, display: 'block', margin: 'auto', borderRadius: '2em' }} src={profile.picture} alt="profile pic" />
                <h3 style={{ textAlign: 'center' }}>{profile.name}</h3>
                <h3 style={{ textAlign: 'center' }}>Email: {profile.email}</h3>
                {/* <pre>{JSON.stringify(profile, null, 2)}</pre> */}
            </>
        )
    }
}
