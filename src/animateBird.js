import $ from 'jquery';

export function animateBird() {
    var duration = 0.5,
        // hairMid = $('#hairMid'),
        pupilLeft = $('#pupilLeft'),
        pupilRight = $('#pupilRight'),
        eyes = $('#eyes'),
        beak = $('#beak');
    var viewPortW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var viewPortH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    //Follow the mouse every time it moves
    $(document).mousemove(function(e) {
        //Animate hair
        // var c2xHairMid = convertToRange(0, viewPortW, 500, 512, e.clientX),
        //     x2HairMid = convertToRange(0, viewPortW, 500, 524, e.clientX),
        //     c2yHairMid = convertToRange(0, viewPortH, 200, 250, e.clientY),
        //     y2HairMid = convertToRange(0, viewPortH, 200, 220, e.clientY);
        //Animate handles as debug
        // TweenMax.set('#handleRed1', {attr:{"cx": c1x, "cy": c1y}});
        // TweenMax.set('#handleGreen2', {attr:{"cx": c2xHairMid, "cy": c2yHairMid}});
        // TweenMax.to(
        //     hairMid,
        //     duration,
        //     {
        //         attr:{d:"M512,300C512,300," + c2xHairMid + "," + c2yHairMid + "," + x2HairMid + "," + y2HairMid}
        //     }
        // );
        //Animate pupils
        var cxPupilLeft = convertToRange(0, viewPortW, 440, 460, e.clientX),
            cyPupilLeft = convertToRange(0, viewPortH, 330, 350, e.clientY),
            cxPupilRight = convertToRange(0, viewPortW, 564, 584, e.clientX),
            cyPupilRight = convertToRange(0, viewPortH, 330, 350, e.clientY);
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
        var eyesX, eyesY, eyesDistanceX = 20,
            eyesDistanceY = 10;
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

        var x1 = convertToRange(0, viewPortW, 312, 712, e.clientX),
            c1x = convertToRange(0, viewPortW, 420, 604, e.clientX),
            c2x = convertToRange(0, viewPortW, 480, 544, e.clientX),
            x2 = convertToRange(0, viewPortW, 482, 542, e.clientX),
            y1 = convertToRange(0, viewPortH, 184, 495, e.clientY),
            c1y = convertToRange(0, viewPortH, 250, 400, e.clientY),
            c2y = convertToRange(0, viewPortH, 300, 350, e.clientY),
            y2 = convertToRange(0, viewPortH, 350, 385, e.clientY);

        //Animate beak
        window.TweenMax.to(
            beak,
            duration, {
                attr: {
                    d: "M" + x1 + "," + y1 + "C" + c1x + "," + c1y + "," + c2x + "," + c2y + "," + x2 + "," + y2
                }
            }
        );
    });

    function convertToRange(originalMin, originalMax, newMin, newMax, originalValue) {
        return (((originalValue - originalMin) * (newMax - newMin)) / (originalMax - originalMin)) + newMin;
    }

    function reverseNumber(val, min, max) {
        return (max + min) - val;
    }
}
