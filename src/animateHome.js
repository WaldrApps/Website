import $ from 'jquery';

export function animateHome() {
    var duration = 0.5,
        // hairMid = $('#hairMid'),
        pupilLeft = $('#pupilLeft'),
        pupilRight = $('#pupilRight'),
        eyes = $('#eyes'),
        beak = $('#beak'),
        neck = $('#neck');
    //Follow the mouse every time it moves
    $(document).mousemove(function(e) {
        var viewPortW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var viewPortH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        //Animate hair
        // var c2xHairMid = convertToRange(0, viewPortW, 500, 512, e.clientX),
        //     x2HairMid = convertToRange(0, viewPortW, 500, 524, e.clientX),
        //     c2yHairMid = convertToRange(0, viewPortH, 200, 250, e.clientY),
        //     y2HairMid = convertToRange(0, viewPortH, 200, 220, e.clientY);
        //Animate handles as debug
        // TweenMax.to(
        //     hairMid,
        //     duration,
        //     {
        //         attr:{d:"M512,300C512,300," + c2xHairMid + "," + c2yHairMid + "," + x2HairMid + "," + y2HairMid}
        //     }
        // );
        //Animate pupils
        var cxPupilLeft = convertToRange(0, viewPortW, 460, 480, e.clientX),
            cyPupilLeft = convertToRange(0, viewPortH, 410, 420, e.clientY),
            cxPupilRight = convertToRange(0, viewPortW, 544, 564, e.clientX),
            cyPupilRight = convertToRange(0, viewPortH, 410, 420, e.clientY);
        window.TweenMax.to(
            pupilLeft,
            duration, {
                attr: {
                    cx: cxPupilLeft,
                    cy: cyPupilLeft
                }
            }
        );
        window.TweenMax.to(
            pupilRight,
            duration, {
                attr: {
                    cx: cxPupilRight,
                    cy: cyPupilRight
                }
            }
        );
        //Animate eyes
        var eyesX, eyesY, eyesDistanceX = 10,
            eyesDistanceY = 5;
        eyesX = convertToRange(0, viewPortW / 2, 0, eyesDistanceX, e.clientX);
        eyesY = convertToRange(0, viewPortH / 2, 0, eyesDistanceY, e.clientY);
        if (e.clientX < viewPortW / 2) {
            eyesX = reverseNumber(eyesX, 0, eyesDistanceX);
            eyesX = eyesX * -1;
        } else {
            eyesX = eyesX - eyesDistanceX;
        }

        if (e.clientY < viewPortH / 2) {
            eyesY = reverseNumber(eyesY, 0, eyesDistanceY);
            eyesY = eyesY * -1;
        } else {
            eyesY = eyesY - eyesDistanceY;
        }
        window.TweenMax.to(
            eyes,
            duration, {
                x: eyesX,
                y: eyesY
            }
        );

        // var x1 = convertToRange(0, viewPortW, 312, 712, e.clientX),
        //     c1x = convertToRange(0, viewPortW, 420, 604, e.clientX),
        //     c2x = convertToRange(0, viewPortW, 480, 544, e.clientX),
        //     x2 = convertToRange(0, viewPortW, 482, 542, e.clientX),
        //     y1 = convertToRange(0, viewPortH, 184, 495, e.clientY),
        //     c1y = convertToRange(0, viewPortH, 250, 400, e.clientY),
        //     c2y = convertToRange(0, viewPortH, 300, 350, e.clientY),
        //     y2 = convertToRange(0, viewPortH, 350, 385, e.clientY);

        //Animate beak
        var xM1 = convertToRange(0, viewPortW, 484, 540, e.clientX),
            yM1 = convertToRange(0, viewPortH, 400, 440, e.clientY),

            // cxQ1 = convertToRange(0, viewPortW, 454, 570, e.clientX),
            // cyQ1 = convertToRange(0, viewPortH, 250, 400, e.clientY),
            // xQ1 = convertToRange(0, viewPortW, 424, 600, e.clientX),
            // yQ1 = convertToRange(0, viewPortH, 350, 385, e.clientY),

            cxQ1 = convertToRange(0, viewPortW, 374, 650, e.clientX), //374 650
            cyQ1 = convertToRange(0, viewPortH, 280, 420, e.clientY),
            xQ1 = convertToRange(0, viewPortW, 284, 740, e.clientX), //228 width //284,740
            yQ1 = convertToRange(0, viewPortH, 330, 550, e.clientY),

            // cx1C1 = convertToRange(0, viewPortW, 374, 650, e.clientX),
            // cy1C1 = convertToRange(0, viewPortH, 220, 440, e.clientY),
            // cx2C1 = convertToRange(0, viewPortW, 304, 720, e.clientX),
            // cy2C1 = convertToRange(0, viewPortH, 280, 500, e.clientY),
            // xC1 = convertToRange(0, viewPortW, 284, 740, e.clientX),
            // yC1 = convertToRange(0, viewPortH, 330, 550, e.clientY),

            cxQ2 = convertToRange(0, viewPortW, 364, 660, e.clientX), //364 660
            cyQ2 = convertToRange(0, viewPortH, 290, 430, e.clientY), //190 430
            xQ2 = convertToRange(0, viewPortW, 494, 530, e.clientX), //494 530
            yQ2 = convertToRange(0, viewPortH, 420, 460, e.clientY);//,

            // cx1C2 = convertToRange(0, viewPortW, 544, 480, e.clientX),
            // cy1C2 = convertToRange(0, viewPortH, 300, 350, e.clientY),
            // cx2C2 = convertToRange(0, viewPortW, 524, 500, e.clientX),
            // cy2C2 = convertToRange(0, viewPortH, 300, 350, e.clientY),
            // xC2 = convertToRange(0, viewPortW, 512, 512, e.clientX),
            // yC2 = convertToRange(0, viewPortH, 350, 385, e.clientY);
            //M 550,440 C 650,440 720,500 740,550 Q 660,430 530,460
        // window.TweenMax.set('#handleRed1', {attr:{"cx": cxQ1, "cy": cyQ1}});
        // window.TweenMax.set('#handleGreen2', {attr:{"cx": cxQ2, "cy": cyQ2}});
        window.TweenMax.to(
            beak,
            duration, {
                attr: {
                    d:
                        "M" + xM1 + "," + yM1 +
                        "Q" + cxQ1 + "," + cyQ1 + " " + xQ1 + "," + yQ1 +
                        //"C" + cx1C1 + "," + cy1C1 + " " + cx2C1 + "," + cy2C1 + " " + xC1 + "," + yC1 +
                        "Q" + cxQ2 + "," + cyQ2 + " " + xQ2 + "," + yQ2 +
                        "Z"
                }
            }
        );

        //Animate neck
        var xM1Neck = convertToRange(0, viewPortW, 512, 512, e.clientX),
            yM1Neck = convertToRange(0, viewPortH, 184, 495, e.clientY),

            cxQ1Neck = convertToRange(0, viewPortW, 584, 440, e.clientX),
            cyQ1Neck = convertToRange(0, viewPortH, 250, 400, e.clientY),
            xQ1Neck = convertToRange(0, viewPortW, 512, 512, e.clientX),
            yQ1Neck = convertToRange(0, viewPortH, 350, 385, e.clientY),

            cxQ2Neck = convertToRange(0, viewPortW, 640, 640, e.clientX),
            cyQ2Neck = convertToRange(0, viewPortH, 250, 400, e.clientY),
            xQ2Neck = convertToRange(0, viewPortW, 450, 450, e.clientX),
            yQ2Neck = convertToRange(0, viewPortH, 350, 385, e.clientY);

        window.TweenMax.to(
            neck,
            duration, {
                attr: {
                    d:
                        "M" + xM1Neck + "," + "430" +
                        "Q" + cxQ1Neck + "," + "440" + " " + xQ1Neck + "," + "520" +
                        "Q" + cxQ2Neck + "," + "620" + " " + xQ2Neck + "," + "650"
                }
            }
        );
    });

    //Animate clouds
    new window.TimelineMax().to($('#cloudOne'), 20, {x:1400, repeat:-1, ease:"Linear.easeNone"}, "clouds")
    .to($('#cloudTwo'), 20, {x:1400, repeat:-1, ease:"Linear.easeNone"}, "clouds+=7")
    .to($('#cloudThree'), 20, {x:1400, repeat:-1, ease:"Linear.easeNone"}, "clouds+=14");

    function convertToRange(originalMin, originalMax, newMin, newMax, originalValue) {
        return (((originalValue - originalMin) * (newMax - newMin)) / (originalMax - originalMin)) + newMin;
    }

    function reverseNumber(val, min, max) {
        return (max + min) - val;
    }
}
