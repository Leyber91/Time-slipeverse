//LOCAL STORAGE FOR THE GAME
//In order to develop the local storage we have to get the state, let's start with a test.
//import {state} from './basicTestStory'
// this will be added later localStorage.clear()
let saveTimeline = () => {
    const TimelineRebootTimes = {reboots: restartTimelineCount};
    //I add the timeline after we save it
    Object.assign(state , TimelineRebootTimes)
        console.log(state)
    const currentState = JSON.stringify(state);
        console.log(currentState)
        console.log(localStorage.length)
    //console.log(state)
    // Time line name
    const timeLineName = 'Timeline ' + localStorage.length
        console.log (timeLineName)
    // Time line 1
    localStorage.setItem(timeLineName, currentState)
        console.log(localStorage)
    //I define which Time Line I will select
    let getTimeline = localStorage.getItem('Timeline 0')
    //returns the stored time
    let convertTime = JSON.parse(getTimeline)
    ///Returns time line on the console
        console.log(convertTime)
        console.log(localStorage.length)
}

//OBJECT WITH TIMELINE TYPES

const timelineType = {
    I : '{"reboots":0,"timeForwardMachine":true,"satan":true}',
    II : '{"timeStretches":true,"hatch":true,"lake":false}',
    III : '{"timeStretches":true,"hatch":false,"lake":true}',
    IV : '{"timeStretches":true,"hatch":false,"lake":true}',
    V : '{"timeStretches":true,"hatch":false,"lake":true}',
    VI : '{"timeStretches":true,"hatch":false,"lake":true}',
    VII : '{"timeStretches":true,"hatch":false,"lake":true}',
    VIII : '{"timeStretches":true,"hatch":false,"lake":true}',
    IX : '{"timeStretches":true,"hatch":false,"lake":true}',
    X : '{"timeStretches":true,"hatch":false,"lake":true}'
}


// This following function is created to classify the different timelines
let timelineClassifier = (object) => {
    switch(object) {
        case timelineType.I:
            console.log('Type I timeline')
            return 'Type I timeline'

        case timelineType.II:
            console.log('Type II timeline')
            return 'Type II timeline'

        case timelineType.III:
            console.log('Type III timeline')
            return 'Type III timeline'

        case timelineType.IV:
            console.log('Type IV timeline')
            return 'Type IV timeline'

        case timelineType.V:
            console.log('Type V timeline')
            return 'Type V timeline'

        case timelineType.VI:
            console.log('Type VI timeline')
            return 'Type VI timeline'

        case timelineType.VII:
            console.log('Type VII timeline')
            return 'Type VII timeline'

        case timelineType.VIII:
            console.log('Type VIII timeline')
            return 'Type VIII timeline'

        case timelineType.IX:
            console.log('Type IX timeline')
            return 'Type IX timeline'

        case timelineType.X:
            console.log('Type X timeline')
            return 'Type X timeline'

        default:
            console.log('Type Incomplete')
            return 'Type Incomplete'
}}

//TIMELINE TYPE NAME
const timelineName = {
    I : 'Type I timeline',
    II : 'Type II timeline',
    III : 'Type III timeline',
    IV : 'Type IV timeline',
    V : 'Type V timeline',
    VI : 'Type VI timeline',
    VII : 'Type VII timeline',
    VIII : 'Type VIII timeline',
    IX : 'Type IX timeline',
    X : 'Type X timeline'
}


let timelineDisplayer = (timeline) => {
    //let visualizer = document.getElementById('visualizer')
    let background = document.getElementById('storyPage')
    switch(timeline) {
        case timelineName.I:
            console.log('Type I background')
            background.style.backgroundImage = "url('/ImagesVideos/satan.jpg')"
            break

        case timelineName.II:
            console.log('Type II background')
            background.style.backgroundImage = "url('/ImagesVideos/typeII.jpg')"
            break

        case timelineName.III:
            console.log('Type III background')
            background.style.backgroundImage = "url('/ImagesVideos/typeIII.jpg')"
            break

        case timelineName.IV:
            console.log('Type IV background')
            background.style.backgroundImage = "url('/ImagesVideos/typeIV.jpg')"
            break

        case timelineName.V:
            console.log('Type V background')
            background.style.backgroundImage = "url('/ImagesVideos/typeV.jpg')"
            break

        case timelineName.VI:
            console.log('Type VI background')
            background.style.backgroundImage = "url('/ImagesVideos/typeVI.jpg')"
            break

        case timelineName.VII:
            console.log('Type VII background')
            background.style.backgroundImage = "url('/ImagesVideos/typeVII.jpg')"
            break

        case timelineName.VIII:
            console.log('Type VIII background')
            background.style.backgroundImage = "url('/ImagesVideos/typeVIII.jpg')"
            break

        case timelineName.IX:
            console.log('Type IX background')
            background.style.backgroundImage = "url('/ImagesVideos/typeIX.jpg')"
            break

        case timelineName.X:
            console.log('Type X background')
            background.style.backgroundImage = "url('/ImagesVideos/typeX.jpg')"
            break

        default:
            console.log('Type Incomplete background')
            background.style.backgroundImage = "url('/ImagesVideos/typeUnfinished.jpg')"
}};

//function to fill out the score panel
const timeLinesHistory = () => {
    const historyBox = document.getElementById('optionPath')
    for (let i = 0; i < localStorage.length ; i++){
        let timelineName = localStorage.key(i)
        let timeline = localStorage.getItem(timelineName)
        //HERE WE DISSECT THE TIME LINE
        let dissectedTimeline = JSON.parse(timeline)
        //First we copy the values for TimeMachine and Reboot
        let timeMachineUse = dissectedTimeline.timeForwardMachine //Time machine use
        let timeReboots = dissectedTimeline.reboots //Times rebooted, to be used
            console.log(timeReboots)
        // Using Object Destructuring and Property Shorthand;
        const timelineObjectType = (({ reboots, timeForwardMachine, satan }) => ({ reboots, timeForwardMachine, satan}))(dissectedTimeline)
            console.log(timelineObjectType)
        let dissectedTimelineS = JSON.stringify(timelineObjectType)
            console.log(dissectedTimelineS)
        //Now deleted we can proceed with the timeline path analysis through the generated switch function
            timeline = timelineClassifier(dissectedTimelineS) //assign the value obtained
                console.log(timeline)
        // let's make a function that creates a container bellow and shows and image depending on the timeline
        let timelineType = timeline
        const entry = document.createElement('button')
        entry.className = 'button'
        //timeline is now timelineType and it is taken out
        entry.innerHTML = timelineName + ': ' + timelineType
        // Here I add the event listener when hovering
        entry.addEventListener('mouseover', () => timelineDisplayer(timelineType) )
        //entry.addEventListener('mouseout', () => timelineNonDisplayer(timelineType) )
        // FUNCTION TO USE ON FACT OF CHECKOUT
        historyBox.appendChild(entry)
    }
}







