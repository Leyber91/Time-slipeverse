const vid = document.getElementById('myVideo');
const vidHidden = document.getElementById('myVideoHidden');
// Creation of the home page buttons and the story buttons
// Go Home page buttons
let homePageButtons = () =>{
    let scenario = document.querySelector('#scenario');
    let optionPath = document.querySelector('#optionPath');
    let container = document.querySelector('.container')
    let scoreContainer = document.querySelector('.timelines')
    let terminalScreen = document.getElementById('storyPage')
    let stateValues = Object.values(state)
    let visualizer = document.getElementById('visualizer')
   
    terminalScreen.style.backgroundImage = "";

// RESTART VALUES
    sizeXYHW = 10;
    sizeXYWW = 10;
    sizeXYMW = 10;
    sizeXYMWM = 10;
    sizeXYBW = 10;
    sizeXYRW = 10;
    sizeXYOW = 10;
    


    //let nonValidTimelines = 
    //LOCAL STORAGE ACTION
    //WILL ONLY EXECUTE ONCE YOU ARE ON THE GAME SCREEN
    if (scoreContainer){
        console.log('Welcome to the different timelines')
        // A timeline is only saved if it started on the first place, analyzing the length of the object
        if (visualizer){
            terminalScreen.removeChild(visualizer)
        }
    } else if (stateValues.length > 0){

        saveTimeline()

        // we save the tat into local storage

    }
    //Eliminate the addes visualizer
    console.log(restartTimelineCount)


    //time loop count
    restartTimelineCount = 0;
    // SAVES CURRENT TIMELINE
  
    while(scenario.firstChild){
        scenario.removeChild(scenario.firstChild)
    }
    while(optionPath.firstChild){
        optionPath.removeChild(optionPath.firstChild)
    }
    let footer = document.querySelector('#controler')
    while(footer.firstChild){
        footer.removeChild(footer.firstChild)
    }
    container.className = 'elementHidden'

//    let terminal1 = document.getElementById('storyPage')
//    terminal1.id = "storyPage rickAndMorty"
    const button = document.createElement('button')
    const scores = document.createElement('button')
    button.innerText = 'START'
    button.className = 'button controllerButton'
    scores.innerText = 'TIMELINES'
    scores.className = 'button controllerButton'
    button.addEventListener('click', () => storyPageButton())
    scores.addEventListener('click', () => scorePagebutton())
    footer.appendChild(button);
    footer.appendChild(scores);
    //vid.id = 'myVideo'

}


//Story page button
let storyPageButton = () =>{
    
    let footer = document.querySelector('#controler')
    let container = document.querySelector('.elementHidden')
    container.className = 'container'

    while(footer.firstChild){
        footer.removeChild(footer.firstChild)
    }
    //vid.id = 'myVideoHidden'

/*
// Generate the content of the story page
// Generate the div nodes
const container = document.createElement('div')
const scenario = document.createElement('div')
const optionPath = document.createElement('div')

// Generate the div nodes
container.className = 'container'
scenario.id = 'scenario'
optionPath.id = 'optionPath'
optionPath.className = 'button-flex-box'

// Append the content to the section
terminal.appendChild(container)
let parent__container = document.querySelector('.container')
parent__container.appendChild(scenario)
parent__container.appendChild(optionPath)



// END GENERATING CONTENT
*/
    startJourney()
    const button = document.createElement('button')
    button.innerText = 'FINISH TIMELINE'
    button.className = 'button controllerButton'
    button.addEventListener('click', () => homePageButtons())


    footer.appendChild(button);
}

//Story page button. TO BE CONTINUED
let scorePagebutton = () =>{
    //vid.id = 'myVideoHidden'
    let footer = document.querySelector('#controler')
    let terminalScreen = document.querySelector('.terminalScreen')
    const button = document.createElement('button')
    // define de visualizer on result
    //const visualizer = document.createElement('div')
    //visualizer.className = 'container'
    //visualizer.id = 'visualizer'
    let container = document.querySelector('.elementHidden')
    /// We add class timelines to make have an identifier for the container
    container.className = 'container timelines'
    container.id = 'timelineList'
    scenarioToPresent.innerHTML = "TIMELINES CREATED"
    timelinesContainer = document.getElementById('optionPath')
    
    
    while(footer.firstChild){
        footer.removeChild(footer.firstChild)
    }
 
    button.innerText = 'GO HOME'
    button.className = 'button controllerButton'
    button.addEventListener('click', () => homePageButtons())
    footer.appendChild(button)
    //terminalScreen.appendChild(visualizer)
    // addd absolute botttom.

    timeLinesHistory()
}

homePageButtons()

//LOCAL STORAGE RESET
let resetLocalStorage = () =>{
    let localStorageButton = document.getElementById('localStorageReset')
    let clearStorage = () => {
        localStorage.clear()
        location.reload()
    }
    
    localStorageButton.addEventListener('click', () => clearStorage())
    
}

resetLocalStorage()