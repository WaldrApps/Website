import React, { Component } from 'react';
import ProjectCard from './ProjectCard/';
import { projects } from "../data";

class Ongoing extends Component {
    state = {
        projectCount: 0,
        currentCard: 0,
        info: {},
    }

    /* incrementCards = () => {
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
    } */

    getProject() {
        this.setState({info: projects[this.state.currentCard]});
    }

    componentWillMount() {
        this.getProject();
    }

    render() {

        return (
            <div>
                <div>
                    <h1>Ongoing Projects</h1>
                </div>
                <div style={{ alignContent: "center" }} className="row">

                    <div style={{ margin: '0% 2%', alignItems: "center" }} name="content" className="col">
                        <div name="Cards" className="row">
                            <div className="col-sm-3" />
                            <div name="slot1" className="col-sm-6">
                                <ProjectCard info={this.state.info} />
                            </div>
                            <div className="col-sm-3" />
                            {/* <div name="slot2" className="col-sm-6">
                                <ProjectCard projectTitle={this.getTitle(2)} />
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <div>
                    <button onClick={this.decrementCards}>PREV</button>
                    <button onClick={this.incrementCards}>NEXT</button>
                </div> */}
            </div>
        );
    }
}

export default Ongoing;
