import React, { Component } from 'react';
import ProjectCard from './ProjectCard/';

class Ongoing extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Ongoing Projects</h1>
                </div>

                <div className="row">

                    <div style={{margin: '0% 5%' }} name="content" className="col">
                        <div name="Cards" className="row">
                        
                            <div name="slot1" className="col-sm-6">
                                <ProjectCard projectTitle="Plannit" />
                            </div>

                            <div name="slot2" className="col-sm-6">
                                <ProjectCard projectTitle="To Be Named" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ongoing;
