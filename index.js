var cloudElement = document.getElementById('cloud-div');

        var animatedElem = cloudElement.animate([
            { transform: 'translate(100%,0)' },
            { transform: 'translate(-100%,0)' }
        ], {
            duration: 3000,
            iterations: Infinity,
            // playbackRate: -4
        })

var planElement = document.getElementById('plane-div');

        var planeAnimation = planElement.animate([
            {transform: 'translate(0,-400px)'},
            {transform: 'translate(600px,-200px)'},
            {transform: 'translate(800px,0px)'},
            {transform: 'translate(1000px,200px)'},
            {transform: 'translate(1200px,300px)'},
            {transform: 'translate(100%,300px)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })

var birdElement = document.getElementById('bird-image');

        var birdAnimation = birdElement.animate([
            {transform: 'translate(1600px,0)'}
        ],{
            duration: 15000,
            iterations: Infinity
        })