import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

class Ongoing extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Ongoing Projects</h1>
                </div>
                <div name="Cards" class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-10 col-md-5">
                        <ProjectCard projectTitle="Plannit" />
                    </div>
                    <div class="col-sm-1"></div>
                </div>
            </div>
        );
    }
}

export default Ongoing;
