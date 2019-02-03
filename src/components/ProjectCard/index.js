import React, { Component } from 'react';
import * as styles from './styles';

class ProjectCard extends Component {
    state = {}

    render() { 
        return (
            <div id="card" style={ styles.card }>
                <div style={ styles.titleBar }>
                    <h2 style={ styles.title }>{this.props.projectTitle}</h2>
                </div>
                <div style={ styles.imageBox }>
                    <img style={ styles.image } src="https://picsum.photos/800" alt="Stock" />
                </div>
                <div style={ styles.descBox }>
                    <p style={ styles.cardDesc }>
                        Description Here
                    </p>
                </div>
            </div>
        );
    }
};

export default ProjectCard;
