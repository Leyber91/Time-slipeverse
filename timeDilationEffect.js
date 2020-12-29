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
    let optionDisplayer = document.getElementById('timelineList')
    switch(true) {
        case !!state.hellEternum:
            console.log('You are in Hell Eternum')
            sizeXYHW = 30;
            //Background modulator
            //This one changes the screens background
            background.style.backgroundColor = 'rgba(91, 11, 11)'
            background.alpha(50)
            //This one changes the option displayer
            optionDisplayer.style.backgroundColor = 'rgb(213, 26, 26)'
            optionDisplayer.alpha(60)

            console.log(sizeXYHW)
            break
        case !!state.waveWorld:
            console.log('You are in Wave World')
            sizeXYWW = 30
            //Background modulator
            //This one changes the screens background
            background.style.backgroundColor = 'rgb(20, 115, 159)'
            background.alpha(50)
            //This one changes the option displayer
            optionDisplayer.style.backgroundColor = 'rgb(15, 85, 118)'
            optionDisplayer.alpha(60)

            initialize();
            break
        case !!state.mountainWorld:
            console.log('You are in Mountain World')
            sizeXYMW = 30
            //Background modulator
            //This one changes the screens background
            background.style.backgroundColor = 'rgb(39, 118, 15)'
            background.alpha(50)
            //This one changes the option displayer
            optionDisplayer.style.backgroundColor = 'rgb(24, 73, 9)'
            optionDisplayer.alpha(60)
            initialize();
            break
        case !!state.gateMoon:
            console.log('You are in Moon Gate')
            sizeXYMWM = 30
            //Background modulator
            //This one changes the screens background
            background.style.backgroundColor = 'rgb(107, 107, 107)'
            background.alpha(50)
            //This one changes the option displayer
            optionDisplayer.style.backgroundColor = 'rgb(74, 74, 74,)'
            optionDisplayer.alpha(60)
            initialize();
            break
        case !!state.binaryWorlds:
            console.log('You are in the binary Worlds')
            sizeXYBW = 30
            //Background modulator
            //This one changes the screens background
            background.style.backgroundColor = 'rgb(117, 86, 230)'
            background.alpha(50)
            //This one changes the option displayer
            optionDisplayer.style.backgroundColor = 'rgb(53, 24, 160)'
            optionDisplayer.alpha(60)
            initialize();
            break
        case !!state.ringWorld:
            console.log('You are in Rin World')
            sizeXYRW = 30
            //Background modulator
            //This one changes the screens background
            background.style.backgroundColor = 'rgb(238, 79, 195,)'
            background.alpha(50)
            //This one changes the option displayer
            optionDisplayer.style.backgroundColor = 'rgb(223, 22, 169)'
            optionDisplayer.alpha(60)
            initialize();
            break
        case !!state.ultimaMundi:
            console.log('You are in Ultima Mundi')
            //Background modulator
            //Background modulator
            //This one changes the screens background
            background.style.backgroundColor = 'rgb(18, 18, 181)'
            background.alpha(50)
            //This one changes the option displayer
            optionDisplayer.style.backgroundColor = 'rgb(8, 8, 79)'
            optionDisplayer.alpha(60)
            initialize();
            sizeXYOW = 30
            //setInterval(augmenter(sizeXYOW), 1000)
            break
        default:
            console.log('Global view')
            //Background modulator
            background.style.backgroundColor = 'rgb(113, 151, 140)'
            background.alpha(20)
            optionDisplayer.style.backgroundColor = 'rgb(113, 151, 140)'
            optionDisplayer.alpha(25)
            initialize();
            sizeXYOW = 30

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