import React, { Component } from 'react';

class ProjectCard extends Component {
    state = {  }
    render() { 
        return (
            <div styles={{ backgroundColor: "#fff", width: "100%" }}>
                <div>
                    <h2>{this.props.projectTitle}</h2>
                </div>
                <div>
                    <img href="https://picsum.photos/200" style={{ width: "100%" }}/>
                </div>
            </div>
        );
    }
}

export default ProjectCard;