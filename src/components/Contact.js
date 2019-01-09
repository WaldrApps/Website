import React, { Component } from "react";

class Contact extends Component {
    componentDidMount() {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = "https://platform.linkedin.com/badges/js/profile.js";

        document.head.appendChild(script);
    }
    render() {
        return (
            <div>
                <h1>Contact Us!</h1>
                    <h2>WIP</h2>

                <div>
                    <h3>WaldrApps</h3>
                        <a href="https://github.com/WaldrApps">Github</a>
                </div>
                <div>
                    <h3>Andrew Borgan</h3>
                </div>
                <div>
                    <h3>Bradley Leonard</h3>
                    <a href="https://github.com/Lunarelements">Github</a>
                    <div className="linkedin">
                        <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
                        <div className="LI-profile-badge" data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="bradley-leonard-222751129">
                            <a className="LI-simple-link" href='https://ca.linkedin.com/in/bradley-leonard-222751129?trk=profile-badge'>Bradley Leonard</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Christopher Jamieson</h3>
                </div>
                <div>
                    <h3>Kyle Conrad</h3>
                </div>
            </div>
        );
    }
}

export default Contact;
