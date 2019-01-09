import React, { Component } from "react";
import { animateHome } from '../animateHome.js';

class Home extends Component {
    componentDidMount() {
        animateHome();
    }

    render() {
        return (
            <div className="svgContainer">
                <svg id="waldrapp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 768">
                    <defs>
                        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#1976d2" stopOpacity="1" />
                            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                        </linearGradient>
                        <linearGradient id="headGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ff9999" stopOpacity="1" />
                            <stop offset="100%" stopColor="#ff1a1a" stopOpacity="1" />
                        </linearGradient>
                    </defs>
                    <rect x="0" y="0" width="100%" height="35%" fill="url(#skyGradient)"/>
                    <rect x="0" y="35%" width="100%" height="100%" fill="#c2683e"/>
                    <path id="cloudOne" fill="#ffffff" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="30" d="M -200,150 A 1,1 0,0,1 -145,150 M -135,150 A 1,1 0,0,1 -95,150 M -75,150 H -225"/>
                    <path id="cloudThree" fill="#ffffff" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="30" d="M -200,75 A 1,1 0,0,1 -145,75 M -135,75 A 1,1 0,0,1 -95,75 M -75,75 H -225"/>
                    <path id="mountainMedium" fill="#8a4b29" stroke="#8a4b29" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4" d="M 200,268.8 C 200,268.8 750,50 1024,268.8 z"/>
                    <path id="mountainTall" fill="#99512a" stroke="#99512a" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4" d="M 250,268.8 C 250,268.8 375,0 500,268.8 z"/>
                    <path id="mountainShort" fill="#a8592e" stroke="#a8592e" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4" d="M 350,268.8 C 350,268.8 375,150 900,268.8 z"/>
                    <path id="cloudTwo" fill="#ffffff" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="30" d="M -200,225 A 1,1 0,0,1 -145,225 M -135,225 A 1,1 0,0,1 -95,225 M -75,225 H -225"/>
                    <g id="hair">
                      {/*<!-- <path id="hairMid" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="10" d="M512,300C512,300,512,200,512,200"/> -->*/}
                    </g>
                    <g id="bird">
                        <circle id="head" cx="512" cy="440" r="80" fill="#000000" />
                        <path id="neck" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="62" d="M 512,430 Q 440,440 512,520 Q 640,620 450,650"/>
                        <g id="eyes">
                            <circle id="outerEyeLeft" cx="470" cy="415" r="15" fill="#ffffff"/>
                            <circle id="innerEyeLeft" cx="470" cy="415" r="11" fill="#000000" />
                            <circle id="pupilLeft" cx="470" cy="415" r="4" fill="#ffffff" />

                            <circle id="outerEyeRight" cx="554" cy="415" r="15" fill="#ffffff"/>
                            <circle id="innerEyeRight" cx="554" cy="415" r="11" fill="#000000" />
                            <circle id="pupilRight" cx="554" cy="415" r="4" fill="#ffffff" />
                        </g>
                        {/*<circle id="cheeks" cx="512" cy="450" r="40" fill="url(#headGradient)" />*/}
                        <path id="beak" fill="url(#headGradient)" stroke="url(#headGradient)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="5" d="M 540,440 Q 650,420 740,550 Q 660,430 530,460 Z"/>
                        {/*<path id="head" fill="url(#headGradient)" stroke="url(#headGradient)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="10" d="M 512,400 Q 570,400 600,440 C 650,440 720,500 740,550 Q 660,430 512,490 C 480,490 500,400 512,400"/>*/}
                        <path id="body" fill="#000000" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0" d="M 500,580 C 300,600 300,600 100,700 L 110,710 L 20,730 H 70 C 300,750 300,780 490,720 C 540,700 580,640 553,580"/>
                        {/*<path id="beak" fill="none" stroke="#fff000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4" d="M 710,440 C 600,375 540,340 540,380"/>*/}
                        {/*<circle id="handleGreen2" cx="650" cy="420" r="5" fill="#0f0" />
                        <circle id="handleRed1" cx="512" cy="300" r="5" fill="#f00" />*/}
                    </g>
                </svg>
            </div>
        );
    }
}

export default Home;
