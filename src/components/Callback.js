import React, { Component } from "react";

class Callback extends Component {
    componentDidMount = () => {
        // Handle authentication if expected values are in the URL.
        if (/access_token|id_token|error/.test(this.props.location.hash)) {
            this.props.auth.handleAuthentication();
        } else {
            throw new Error("Invalid callback URL.");
        }
    };
    render() {
        return (
            <div style={{ margin: 'auto', width: '18em' }}>
                <div class="spinner-grow text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-secondary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-success" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-danger" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-warning" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-info" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-light" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-dark" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}

export default Callback;
