import React, { Component } from 'react';
import * as styles from './styles';

class ProjectCard extends Component {
    state = {}

    render() {
        return (
            <div id="card" style={ styles.card }>
                <div style={ styles.titleBar }>
                    <h2 style={ styles.title }>{this.props.info.title}</h2>
                </div>
                <div style={ styles.imageBox }>
                    <img style={ styles.image } src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" alt="Android Logo" />
                </div>
                <div style={ styles.descBox }>
                    <p style={ styles.cardDesc }>
                        {this.props.info.description}
                    </p>
                </div>
            </div>
        );
    }
};

export default ProjectCard;
