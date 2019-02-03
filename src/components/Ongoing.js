import React, { Component } from 'react';
import ProjectCard from './ProjectCard/';

class Ongoing extends Component {
    state = {
        projectCount: 3,
        currentCard: 1,
        title: ['Plannit', 'To Be Named 1', 'To Be Named 2']
    }

    incrementCards = () => {
        this.setState({ currentCard: (this.state.currentCard < this.state.projectCount) ? this.state.currentCard + 1 : 1 });
    }

    decrementCards = () => {
        this.setState({ currentCard: (this.state.currentCard > 1) ? this.state.currentCard - 1 : this.state.projectCount });
    }

    getTitle = (slotNum) => {
        if (this.state.currentCard < this.state.projectCount) {
            if (slotNum === 1) {
                return this.state.title[this.state.currentCard-1];
            }
            else {
                return this.state.title[this.state.currentCard];
            }
        }
        else {
            if (slotNum === 1) {
                return this.state.title[this.state.currentCard-1];
            }
            else {
                return this.state.title[0];
            }
        }
    }

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
                                <ProjectCard projectTitle={this.getTitle(1)} />
                            </div>

                            <div name="slot2" className="col-sm-6">
                                <ProjectCard projectTitle={this.getTitle(2)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={this.decrementCards}>PREV</button>
                    <button onClick={this.incrementCards}>NEXT</button>
                </div>
            </div>
        );
    }
}

export default Ongoing;
