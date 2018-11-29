import React, { Component } from "react";
import { animateBird } from '../animateBird.js';

class Home extends Component {
    componentDidMount() {
        animateBird();
    }

    render() {
        return (
            <div className="svgContainer">
                <svg id="waldrapp" xmlns="http://www.w3.org/2000/svg" width="100%" height="480" viewBox="0 0 1024 768">
                    <g id="hair">
                      {/*<!-- <path id="hairMid" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="10" d="M512,300C512,300,512,200,512,200"/> -->
                      <!-- <circle id="handleRed1" cx="512" cy="300" r="5" fill="#f00" /> -->
                      <!-- <circle id="handleGreen2" cx="512" cy="200" r="5" fill="#0f0" /> -->*/}
                    </g>
                    <circle id="head" cx="512" cy="384" r="120" fill="#000000" />
                    <g id="eyes">
                        <circle id="outerEyeLeft" cx="450" cy="340" r="21" fill="#ffffff"/>
                        <circle id="innerEyeLeft" cx="450" cy="340" r="16" fill="#000000" />
                        <circle id="pupilLeft" cx="450" cy="340" r="7" fill="#ffffff" />

                        <circle id="outerEyeRight" cx="574" cy="340" r="21" fill="#ffffff"/>
                        <circle id="innerEyeRight" cx="574" cy="340" r="16" fill="#000000" />
                        <circle id="pupilRight" cx="574" cy="340" r="7" fill="#ffffff" />
                    </g>
                    <path id="beak" fill="none" stroke="#fff000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4" d="M710,440C600,375,540,340,540,380"/>
                </svg>
            </div>
        );
    }
}

export default Home;
