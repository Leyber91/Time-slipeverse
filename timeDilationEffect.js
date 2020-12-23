// function to make it slower or faster

let timeDilationChecker = () => {
    console.log(state)
    if (Object.keys(state).length){
        let currentTimeDilation = state.timeDilation
        speedController = 60 / currentTimeDilation
        initialize();
    } else {
        return 'No Time line tracking yet'
    }
}

let counter = 0;

let augmenter = (planetSize) => {
    if (planetSize < 40){
    planetSize++ 
    }
    else {
    planetSize = 10;
    }
}

//Identifies in which planet we, for boleans is essential the !! and to forche the evaluation
let planetIdentifier = () => {
    // we select what to change
    let background = document.getElementById('storyPage')
    switch(true) {
        case !!state.hellEternum:
            console.log('You are in Hell Eternum')
            sizeXYHW = 30;
            background.style.opacity = 0.4;
            background.style.backgroundColor = 'red'
            // HERE WE CHANGE THE SYTLE DEPENDING ON THE PLANET
            console.log(sizeXYHW)
            break
        case !!state.waveWorld:
            console.log('You are in Wave World')
            sizeXYWW = 10*3
            initialize();
            break
        case !!state.mountainWorld:
            console.log('You are in Mountain World')
            sizeXYMW = 10*3
            initialize();
            break
        case !!state.gateMoon:
            console.log('You are in Moon Gate')
            sizeXYMWM = 10*3
            initialize();
            break
        case !!state.binaryWorlds:
            console.log('You are in the binary Worlds')
            sizeXYBW = 10*3
            initialize();
            break
        case !!state.ringWorld:
            console.log('You are in Rin World')
            sizeXYRW = 10*3
            initialize();
            break
        case !!state.ultimaMundi:
            console.log('You are in Ultima Mundi')
            initialize();
            sizeXYOW = 10*3
            //setInterval(augmenter(sizeXYOW), 1000)
            break
        default:
            console.log('Global view')
            initialize();
            sizeXYOW = 10
            return 'Type Incomplete'
        }}


let planetLocationIndicator = () => {
    console.log(state)
    if (Object.keys(state).length){
        planetIdentifier()
        initialize();
    } else {
        return 'No planet found'
    }
}










//FUNCTION EXAMPLE
//var intervalID = window.setInterval(myCallback, 500, timecontroller);