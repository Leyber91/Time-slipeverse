//Defining the different story lines, later on it will be objects
const storyLines = [
    {
        id: 1,
        // In the middle of the 23rd century, humanity has reached until the outter most region of the Solary System,
        text: 'In Plutos\'s moon, Charonte, you proceed to go through a mission to a place no one expected, before starting to journey, you have to pick a ship, it will determine what you can do',
        options: [
            {
                text: 'Pick a good heat and radiation shielded ship',
                setState: { heatShield: true, epsteinDrive: false, tankFull: true, timeDilation: 2},
                nextPath: 2
            },
            {
                text: 'Pick a long range with medium shield',
                setState: { heatShield: false, epsteinDrive: true, tankFull: true, timeDilation: 2},
                nextPath: 2
            },
            {
                text: 'Long range and heat resistant',
                requiredState: () => {
                    if (restartTimelineCount > 0){
                        return true
                    } else {
                        return false
                    }
            },
                setState: { heatShield: true, epsteinDrive: true, tankFull: true, timeDilation: 2},
                nextPath: 2
            },
            {
                text: 'Antimatter engine Spaceship',
                requiredState: () => {
                    if (restartTimelineCount > 1){
                        return true
                    } else {
                        return false
                    }
            },
                setState: { heatShield: true, epsteinDrive: true, antimatter: true, timeDilation: 2},
                nextPath: 2
            }
        ]
    },
    {
        id: 2,
        text: 'A bast system unravels before your eyes, a binary blackHole-star system with 8 planets, defying all laws of physics. There three main parts, the inner planets, the ones in the middle and the outer system, and due to your ship choice, the following planets are within reach:',
        options: [
            {
                text: 'Hell Eternum',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.heatShield && currentState.tankFull && !currentState.antimatter,
                //Here we set the three types of time dilation
                setState: { timeDilation: 10 , hellEternum : true},
                nextPath: 3
            },
            {
                text: 'Wave World',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.heatShield && (currentState.tankFull || currentState.antimatter),
                //Here we set the three types of time dilation
                setState: { timeDilation: 8, waveWorld : true},
                nextPath: 17
            },
            {
                text: 'Mountain World', //think to change it
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.heatShield && (currentState.tankFull || currentState.antimatter),
                //Here we set the three types of time dilation
                setState: { timeDilation: 7, mountainWorld : true},
                nextPath: 36
            },
            {
                text: 'Gate moon',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.heatShield || currentState.epsteinDrive || currentState.tankFull || currentState.antimatter,
                //Here we set the three types of time dilation
                setState: { timeDilation: 4, gateMoon : true},
                nextPath: 200
            },
            {
                text: 'Binary worlds',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.epsteinDrive && (currentState.tankFull || currentState.antimatter),
                //Here we set the three types of time dilation
                setState: { timeDilation: 3, binaryWorlds : true},
                nextPath: 200
            },
            {
                text: 'Ring World',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.epsteinDrive && (currentState.tankFull || currentState.antimatter),
                //Here we set the three types of time dilation
                setState: { timeDilation: 1, ringWorld : true},
                nextPath: 200
            },
            {
                text: 'Ultima mundi',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) =>currentState.epsteinDrive && (currentState.tankFull || currentState.antimatter),
                //Here we set the three types of time dilation
                setState: { timeDilation: 0.5, ultimaMundi : true},
                nextPath: 200
            }
        ]
    },
// HELL WORLD STORY LINE
    {
        id: 3,
        text: 'You travel to the closest planet of the system to the Black Hole and its star, thanks to the heat shield you picked, you are able to travel in here, temperatures are hellish, but time distortion is even worse, spending one second here is 1hour of earthtTime',
        options: [
            {
                text: 'Descend to the Hellscape',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.hellEternum,
                //Here we set the three types of time dilation
                setState: { planetDescend : true, tankFull: false},
                nextPath: 4
            },
            {
                text: 'Return to the point of origin',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.heatShield,
                //Here we set the three types of time dilation
                setState: { planetDescend : false, tankFull: false},
                nextPath: 2
            }
        ]
    },
    // DESCEND THE CURSED PLANED
    {
        id: 4,
        text: 'You descended to the law-physics defying world, your ships detects an area of the planet where temperature let\'s you to be outside the ship with a spaceSuit, once you get out, you see a path that leads up to a portal, what do you bring with you?',
        options: [
            {
                text: 'My grand-dad silver medal',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.planetDescend,
                //Here we set the three types of time dilation
                setState: { metal: false, silver:true },
                nextPath: 5
            },
            {
                text: 'My mum\'s service medals',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.planetDescend,
                //Here we set the three types of time dilation
                setState: { metal: true, silver:false},
                nextPath: 5
            }
        ]
    },
    //PORTAL WHERE ALL THE CIRCLES ARE
    {
        id: 5,
        text: 'You arrive to the portal, once you cross it, you are transported to an empty space and suddenly an orb-type shapeless entity appears in front of you, somehow you can understand it, it makes you know that exists an artifact in the very center of the world that has the ability to bring new advance and prosperity to your world, nonetheless many challenges have to be surpassed',
        options: [
            //HELL VESTIBULE OPTION
            {
                text: 'Lasciate ogne speranza, voi ch\'intrate',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.metal  && !currentState.artifact || currentState.silver  && !currentState.artifact,
                //Here we set the three types of time dilation
                setState: { hellVestibule:true},
                nextPath: 6
            },
            //LIMBO OPTION
            {
                text: 'The guiltless damned',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.silver  && !currentState.artifact || currentState.hellVestibule && !currentState.artifact,
                //Here we set the three types of time dilation
                setState: { limbo: true , hellVestibule:true},
                nextPath: 7
            },
            //LUST OPTION
            {
                text: 'A part where no thing gleams',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.limbo && !currentState.artifact,
                //Here we set the three types of time dilation
                setState: { lust: true},
                nextPath: 8
            },
            //GLUTTONY OPTION
            {
                text: 'A great storm of putrefaction.',
                // After the fisst option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.limbo && currentState.lust && !currentState.artifact,
                //Here we set the three types of time dilation
                setState: { gluttony: true},
                nextPath: 9
            },
            //GREED OPTION
            {
                text: 'House of Plutus',
                // After the fisst option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.limbo && currentState.lust && currentState.gluttony && !currentState.artifact,
                //Here we set the three types of time dilation
                setState: { greed: true},
                nextPath: 10
            },
            //ANGER OPTION
            {
                text: 'A black sulkiness which can find no joy in God or man or the universe',
                // After the fisst option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.limbo && currentState.lust && currentState.gluttony && currentState.greed && !currentState.artifact,
                //Here we set the three types of time dilation
                setState: { anger: true},
                nextPath: 11
            },
            //HERESY OPTION
            {
                text: 'The soul dies with the body',
                // After the fisst option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.limbo && currentState.lust && currentState.gluttony && currentState.greed && currentState.anger && !currentState.artifact,
                //Here we set the three types of time dilation
                setState: { heresy: true},
                nextPath: 12
            },
            //VIOLENCE OPTION
            {
                text: 'Against Neighbors, Against Self and Against God, Art and Nature',
                // After the fisst option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.limbo && currentState.lust && currentState.gluttony && currentState.greed && currentState.anger && currentState.heresy && !currentState.artifact,
                //Here we set the three types of time dilation
                setState: { violence: true},
                nextPath: 13
            },
            //FRAUD OPTION
            {
                text: 'City in corruption',
                // After the fisst option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.limbo && currentState.lust && currentState.gluttony && currentState.greed && currentState.anger && currentState.heresy && currentState.violence && !currentState.artifact,
                //Here we set the three types of time dilation
                setState: { fraud: true},
                nextPath: 14
            },
            //TREACHERY OPTION
            {
                text: 'Traitors, Betrayers and Oathbreakers',
                // After the fisst option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.limbo && currentState.lust && currentState.gluttony && currentState.greed && currentState.anger && currentState.heresy && currentState.violence && currentState.fraud && !currentState.artifact,
                //Here we set the three types of time dilation
                setState: { treachery: true},
                nextPath: 15
            },
            //CENTER OF HELL OPTION
            {
                text: 'One red, one pale and one black',
                // After the fisst option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.limbo && currentState.lust && currentState.gluttony && currentState.greed && currentState.anger && currentState.heresy && currentState.violence && currentState.fraud && currentState.treachery && !currentState.artifact,
                //Here we set the three types of time dilation
                setState: { centerOfHell: true},
                nextPath: 16
            },
            //RETURN TO THE SHIP
            {
                text: 'Go back to the ship',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.artifact,
                //Here we set the three types of time dilation
                nextPath: 3
            },
        ]
    },
    //NOW THE PATHS FOR THE CIRCLES OF HELL
    //HELL VESTIBULE
    {
        id: 6,
        text: 'Lasciate ogne speranza, voi ch\'intrate \n  "Abandon all hope, ye who enter here" ',
        options: [
            {
                text: 'You took no side, nor you could advance',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                //Here we set the three types of time dilation
                requiredState: (currentState) => !currentState.test && !currentState.suicidal && !currentState.damned,
                setState: { hellVestibule:false},
                nextPath: 5
            },
            {
                text: 'Take the Archeron River.',
                // After the fisst option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                //Here we set the three types of time dilation
                setState: { limbo: true},
                nextPath: 7
            }
        ]
    },
    
    //LIMBO
    {
        id: 7,
        text: 'They could not, that is, choose Christ; \n they could, and did, choose human virtue, \n and for that they have their reward.',
        options: [
            {
                text: 'Share your thoughts with philosophers and go back',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.hellVestibule || currentState.limbo,
                //Here we set the three types of time dilation
                setState: { limbo:false},
                nextPath: 6
            },
            {
                text: 'Ignore the great thinkers, proceed your quest',
                // After the fisst option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.hellVestibule || currentState.limbo ,
                //Here we set the three types of time dilation
                setState: { limbo: true},
                nextPath: 8
            },
            {
                text: 'Advance and go Back to where the portal is',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.hellVestibule && !currentState.test && !currentState.damned,
                //Here we set the three types of time dilation
                setState: { limbo:true},
                nextPath: 5
            },
        ]
    },

    //LUST
    {
        id: 8,
        text: 'Love, which in gentlest hearts will soonest bloom \n, seized my lover with passion for that sweet body \n from which I was torn unshriven to my doom. \n Love, which permits no loved one not to love, \n took me so strongly with delight in him, \n that we are one in Hell, as we were above. \n Love led us to one death. In the depths of Hell \n Caïna waits for him who took our lives.',
        options: [
            {
                text: 'Have fun with the "carnal Malefactors"',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.limbo,
                setState: { lust:false},
                nextPath: 7
            },
            {
                text: 'Pass through the ruined slope',
                // After the fisst option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.limbo,
                setState: { lust: true},
                nextPath: 9
            },
            {
                text: 'Pass the ruined slope and go back to the portal',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.limbo && !currentState.test && !currentState.damned,
                setState: { lust:true},
                nextPath: 5
            },
        ]
    },

    //GLUTTONY
    {
        id: 9,
        text: 'Cerberus, the monstrous three-headed beast of Hell, ravenously guards the gluttons lying in the freezing mire, mauling and flaying them with his claws as they howl like dogs.',
        options: [
            {
                text: 'Grovel in the mud',
                // This choice sends you back
                requiredState: (currentState) => currentState.lust,
                setState: { gluttony:false},
                nextPath: 8
            },
            {
                text: 'Fill its three mouths with mud',
                // This choice moves you forward
                requiredState: (currentState) => currentState.lust,
                setState: { gluttony: true},
                nextPath: 10
            },
            {
                text: 'Beat the monster go back to the portal',
                // This choice saves your progress and let you go back to the portal room
                requiredState: (currentState) => currentState.lust && !currentState.test && !currentState.damned,
                setState: { gluttony:true},
                nextPath: 5
            },
        ]
    },

    //GREED
    {
        id: 10,
        text: 'Here, too, I saw a nation of lost souls, \n far more than were above: they strained their chests \n against enormous weights, and with mad howls \n rolled them at one another. Then in haste \n they rolled them back, one party shouting out: \n"Why do you hoard?" and the other: "Why do you waste?',
        options: [
            {
                text: 'Join a clan, hoard and squander',
                // This choice sends you back
                requiredState: (currentState) => currentState.gluttony,
                setState: { greed: false},
                nextPath: 9
            },
            {
                text: 'Ignore both groups',
                // This choice moves you forward
                requiredState: (currentState) => currentState.gluttony,
                setState: { greed: true},
                nextPath: 11
            },
            {
                text: 'Go passed the clans and back to the portal',
                // This choice saves your progress and let you go back to the portal room
                requiredState: (currentState) => currentState.gluttony && !currentState.test && !currentState.damned,
                setState: { greed: true},
                nextPath: 5
            },
        ]
    },

    //ANGER
    {
        id: 11,
        text: 'That which had its tender and romantic beginnings in the dalliance of indulged passion',
        options: [
            {
                text: 'Join the wrathful souls',
                // This choice sends you back
                requiredState: (currentState) => currentState.greed,
                setState: { anger: false},
                nextPath: 10
            },
            {
                text: 'Face your sins',
                // This choice moves you forward
                requiredState: (currentState) => currentState.greed,
                setState: { anger: true},
                nextPath: 12
            },
            {
                text: 'Take a pause after facing yourself',
                // This choice saves your progress and let you go back to the portal room
                requiredState: (currentState) => currentState.greed && !currentState.test && !currentState.damned,
                setState: { anger: true},
                nextPath: 5
            },
        ]
    },

    //HERESY
    {
        id: 12,
        text: 'When "the portal of the future has been shut". it will no longer be possible for them to know anything',
        options: [
            {
                text: 'Shut future\'s door',
                // This choice sends you back
                requiredState: (currentState) => currentState.anger,
                setState: { heresy: false},
                nextPath: 11
            },
            {
                text: 'Avoid blasphemy',
                // This choice moves you forward
                requiredState: (currentState) => currentState.anger,
                setState: { heresy: true},
                nextPath: 13
            },
            {
                text: 'Back to the portal room',
                // This choice saves your progress and let you go back to the portal room
                requiredState: (currentState) => currentState.anger && !currentState.test && !currentState.damned,
                setState: { heresy: true},
                nextPath: 5
            },
        ]
    },

    //VIOLENCE
    {
        id: 13,
        text: '"Along the brink of the vermilion boiling, \n Wherein the boiled were uttering loud laments. \n People I saw within up to the eyebrows ',
        options: [
            {
                text: 'Party hard in Sodoma',
                // This choice sends you back
                requiredState: (currentState) => currentState.heresy,
                setState: { violence: false},
                nextPath: 12
            },
            {
                text: 'Progress across the burning plain',
                // This choice moves you forward
                requiredState: (currentState) => currentState.heresy,
                setState: { violence: true},
                nextPath: 14
            },
            {
                text: 'Go clean yourself from the blood',
                // This choice saves your progress and let you go back to the portal room
                requiredState: (currentState) => currentState.heresy && !currentState.test && !currentState.suicidal && !currentState.damned,
                setState: { violence: true},
                nextPath: 5
            },
        ]
    },

    //FRAUD
    {
        id: 14,
        text: 'The image of the City in corruption: the progressive disintegration of every social relationship, personal and public. Sexuality, ecclesiastical and civil office, language, ownership, counsel, authority, psychic influence, and material interdependence – all the media of the community\'s interchange are perverted and falsified',
        options: [
            {
                text: 'Make yourself the major of the city',
                // This choice sends you back
                requiredState: (currentState) => currentState.violence,
                setState: { fraud: false},
                nextPath: 13
            },
            {
                text: 'Approach the Central Well',
                // This choice moves you forward
                requiredState: (currentState) => currentState.violence,
                setState: { fraud: true},
                nextPath: 15
            },
            {
                text: 'Watch your agonizing mum',
                // This choice moves you forward
                requiredState: (currentState) => currentState.violence && currentState.metal && !currentState.test && !currentState.suicidal && !currentState.damned,
                setState: { fraud: true},
                nextPath: 15
            },
            {
                text: 'Disconnect from SinCity at the portal\s room',
                // This choice saves your progress and let you go back to the portal room
                requiredState: (currentState) => currentState.violence && !currentState.test && !currentState.suicidal && !currentState.damned,
                setState: { fraud: true},
                nextPath: 5
            },
        ]
    },

    //TREACHERY
    {
        id: 15,
        text: 'The treacheries of these souls were denials of love and of all human warmth. Only the remorseless dead center of the ice will serve to express their natures. As they denied love, so are they furthest removed from the light and warmth of the Sun. As they denied all human ties, so are they bound only by the unyielding ice',
        options: [
            {
                text: 'Take the Judas Kiss',
                // This choice sends you back
                requiredState: (currentState) => currentState.fraud,
                setState: { treachery: false},
                nextPath: 14
            },
            {
                text: 'Go the the center of Hell',
                // This choice moves you forward
                requiredState: (currentState) => currentState.fraud,
                setState: { treachery: true},
                nextPath: 16
            },
            {
                text: 'Rest yourself before visiting the big boss',
                // This choice saves your progress and let you go back to the portal room
                requiredState: (currentState) => currentState.fraud && !currentState.test && !currentState.suicidal && !currentState.damned,
                setState: { treachery: true},
                nextPath: 5
            },
        ]
    },

    //CENTER OF HELL
    {
        id: 16,
        text: '... he had three faces: one in front bloodred; \n and then another two that, just above \n the midpoint of each shoulder, joined the first; \n and at the crown, all three were reattached; \n the right looked somewhat yellow, somewhat white; \n the left in its appearance was like those \n who come from where the Nile, descending, flows',
        options: [
            {
                text: 'Wake upt the beast',
                // This choice sends you back
                requiredState: (currentState) => currentState.treachery,
                setState: { artifact: false},
                nextPath: 15
            },
            {
                text: 'Clamber down the beast\'s ragged fur and escape through the genitalia',
                // This choice moves you forward
                requiredState: (currentState) => currentState.treachery && !currentState.test && !currentState.damned,
                setState: { artifact: false},
                nextPath: 5
            },
            {
                text: 'Take the artifact',
                // This choice saves your progress and let you go back to the portal room
                requiredState: (currentState) => currentState.treachery && !currentState.test && !currentState.damned,
                setState: { artifact: true},
                nextPath: 5
            },
            {
                text: 'Leave the sphere',
                // This choice saves your progress and let you go back to the portal room
                requiredState: (currentState) => currentState.treachery && !currentState.test && currentState.surrenderWithSphere,
                setState: { damned: false, suicidal: false},
                nextPath: 5
            },
            {
                text: 'Kiss Satan\'s feet',
                // This choice saves your progress and let you go back to the portal room
                requiredState: (currentState) => currentState.treachery && currentState.test && !currentState.damned,
                setState: { satan: true},
                nextPath: 33 //TRANSITION
            },
        ]
    },
//WAVE WORLD STORY LINE
{
    id: 17,
    text: 'You venture yourself into a planet where temperature allows water to stay liquid, nonetheless there seem to be strange moving formations all over the planet',
    options: [
        {
            text: 'Descend to the water world',
            requiredState: (currentState) => currentState.waveWorld,
            setState: { planetDescend : true, tankFull: false},
            nextPath: 18
        },
        {
            text: 'Go back to the Moon gate',
            requiredState: (currentState) => currentState.waveWorld,
            setState: { planetDescend : false, tankFull: false},
            nextPath: 2
        }
    ]
},

{
    id: 18,
    text: 'Once on the surface, your ship keep the descend but sees no land, your ship detects a place where water level is low enough to land, nonetheless you see what it looks like a mountain to got. \n What you do?',
    options: [
        {
            text: 'Dock on low water',
            requiredState: (currentState) => currentState.planetDescend,
            setState: { lowWater : true, mountain: false},
            nextPath: 19
        },
        {
            text: 'Go to the \'mountain\' you saw',
            requiredState: (currentState) => currentState.planetDescend,
            setState: { lowWater : false, mountain: true},
            nextPath: 29
        }
    ]
},

//WATER PATH
{
    id: 19,
    text: 'You are docked in wet land and decide to take a walk, you feel almost double your normal weight. Venturing your eyes you can spot what look like debris over 1km away, on the opposite way of the \' mountain you saw\'',
    options: [
        {
            text: 'Stay close to the ship',
            requiredState: (currentState) => currentState.lowWater,
            setState: { stayClose : true, goToDebris: false},
            nextPath: 20
        },
        {
            text: 'Go to inspect the debris',
            requiredState: (currentState) => currentState.lowWater,
            setState: { stayClose : false, goToDebris: true},
            nextPath: 21
        }
    ]
},
    //STAY CLOSE TO THE SHIP
    {
        id: 20,
        text: 'You wander close to the ship and you start to feel tired, on the horizon, you see that the \'mountains\' are kind of moving, then a shiver goes through your spine as you realize those are actual waves',
        options: [
            {
                text: 'Go to the ship and fly away',
                requiredState: (currentState) => currentState.stayClose,
                setState: { stayClose : true, goToDebris: false},
                nextPath: 34
            },
            
        ]
    },


    //STAY AWAY PATH
    {
        id: 21,
        text: 'It takes forever to arrive where the debris are, you see what it looks like an empty abandoned alien ship, you realize a strange low sound comes from inside the hull. \n What do you do next?',
        options: [
            {
                text: 'Search inside the ship',
                requiredState: (currentState) => currentState.goToDebris,
                setState: { insideHull : true, outsideHull: false},
                nextPath: 22
            },
            {
                text: 'Search outside',
                requiredState: (currentState) => currentState.goToDebris,
                setState: { insideHull : false, outsideHull: true},
                nextPath: 28
            },
            
        ]
    },
    // INSIDE THE HULL
        {
            id: 22,
            text: 'You find what it looks like a vent and go inside the organic Space-ship structure, you follow the soft sound and go straight to it, you arrive to an almost trashed compartment and find two noisy spheres, one red and one blue. \n Which one you pick?',
            options: [
                {
                    text: 'Blue glowing Sphere',
                    requiredState: (currentState) => currentState.insideHull,
                    setState: { blueSphere : true, redSphere: false},
                    nextPath: 23
                },
                {
                    text: 'Red Sphere',
                    requiredState: (currentState) => currentState.insideHull,
                    setState: { blueSphere : true, redSphere: false},
                    nextPath: 23
                },
                
            ]
        },
        // ONCE OUTSIDE THE HULL
        {
            id: 23,
            text: 'It seems like you got an alien artifact after all, you go outside the hull and... \n wait.... \n the \'mountains\ are actually titanic waves, you run fast enough you will get to the ship before the wave hits you. \n What are you going to do? ',
            options: [
                {
                    text: 'Use the red sphere',
                    requiredState: (currentState) => currentState.redSphere,
                    setState: { useBlueSphere : false, useRedSphere : true, runForYourLife : false, timeLeft:false},
                    nextPath: 24
                },
                {
                    text: 'Use the blue sphere',
                    requiredState: (currentState) => currentState.blueSphere,
                    setState: { useBlueSphere : true, useRedSphere : false, runForYourLife : false, timeLeft:false},
                    nextPath: 24
                },
                {
                    text: 'Run for your life',
                    requiredState: (currentState) => currentState.redSphere,
                    setState: { useBlueSphere : false, useRedSphere : false, runForYourLife : true},
                    nextPath: 34 //run option
                },
                {
                    text: 'I no longer want to live, I will wait until it hits me',
                    requiredState: (currentState) => currentState.blueSphere,
                    setState: { useBlueSphere : true, useRedSphere : false, runForYourLife : false, surrenderWithSphere: true},
                    nextPath: 35 ///MAKE ONE INTERMEDIATE SCREEN BEFORE
                },

            ]
        },
            // SPHERE USE 
            {
                id: 24,
                text: 'Even though you don´t know what to to with the sphere in your hands, you spend time trying to figure out how the hell activate it, it looks like you are going to give up... \n What do you do?',
                options: [
                    {
                        text: 'You throw it away',
                        requiredState: (currentState) => currentState.useBlueSphere,
                        setState: { communicate : false, throw: true},
                        nextPath: 25
                    },
                    {
                        text: 'You try to communicate to it',
                        requiredState: (currentState) => currentState.useBlueSphere,
                        setState: { communicate : true, throw: false},
                        nextPath: 26
                    },
                    {
                        text: 'You keep trying',
                        requiredState: (currentState) => currentState.redSphere,
                        setState: { useBlueSphere : false, useRedSphere : true, runForYourLife : false},
                        nextPath: 26
                    },

                    {
                        text: 'You smash it to the hull',
                        requiredState: (currentState) => currentState.redSphere,
                        setState: { useBlueSphere : false, useRedSphere : false, smash: true},
                        nextPath: 27
                    },
                ]
            },
                // THROW IT. BLUE SPHERE
                {
                    id: 25,
                    text: 'You throw the sphere and you get very upset because you don\'t know if you have time left before the huge wave hits \n What is your final decision?',
                    options: [
                        {
                            text: 'Give up and wait until the wave hits me',
                            requiredState: (currentState) => currentState.throw,
                            setState: { youGiveUp : true},
                            nextPath: 35
                        },
                        {
                            text: 'Try to make a run for it',
                            requiredState: (currentState) => currentState.throw,
                            setState: {runForYourLife : true},
                            nextPath: 34 //run option
                        },
                    ]
                },
                // TRY TO COMMUNICATE. BLUE SPHERE & RED SPHERE
                {
                    id: 26,
                    text: 'You keep one chance in your mind that it might work, but it doesn´t seem like your futile efforts pay off...but...something starts to feel strange, you black out and appear in an empty blue ish room, an orb type of being appears in front of you, evaluating you... it seems you can understand it, it gives you options based on your past choices \n You can only pick one',
                    options: [
                        {
                            text: 'Choose to die peacefully',
                            requiredState: (currentState) => currentState.communicate,
                            setState: {surrenderWithSphere: true},
                            nextPath: 35
                        },
                        {
                            text: 'Take a test',
                            requiredState: (currentState) => currentState.communicate && !currentState.hellEternum,
                            setState: {test : true},
                            nextPath: 6
                        },
                        {
                            text: 'Go back in time before you decided to wonder around the debris',
                            requiredState: (currentState) => currentState.useRedSphere,
                            setState: { communicate : false, throw: false, insideHull : false, outsideHull: false, goToDebris: false},
                            nextPath: 19
                        },
                    ]
                },


                //YOU SMASHED IT 
                {
                    id: 27,
                    text: 'You smash the sphere against the ship\'s hull and you get so angry, you make a run for your life to get to the ship \n Do you pick up the sphere?',
                    options: [
                        {
                            text: 'I take it',
                            requiredState: (currentState) => currentState.smash,
                            setState: {runForYourLife : true, pickUpSphere:true, heavy:true},
                            nextPath: 34 //run option
                        },
                        {
                            text: 'Fuck this shit',
                            requiredState: (currentState) => currentState.smash,
                            setState: {runForYourLife : true, pickUpSphere:false, heavy:false},
                            nextPath: 34 //run option
                        },
                    ]
                },
    // OUTSIDEHULL DECISION
    {
        id: 28,
        text: 'From the outside, the ship has an stranger organic-like form, unconceivable by today\'s standards. While looking over the ship, something unexpected chages in the horizon, \n the mountains are actually waves!!! And they are getting closer   \n What do you do next?',
        options: [
            {
                text: 'Run for your life',
                requiredState: (currentState) => currentState.outsideHull,
                setState: { runForYourLife : true},
                nextPath: 34
            },
            
        ]
    },


                //WAVE WORLD TEST PASSED SCENARIO
                {
                    id: 33,
                    text: 'Despite your deceptive reckless past choices, you made it through the nine circles and showed me long missed kindness, and for that I will give you the choice to go back with the experiences from the past, please, be wiser and braver this time',
                    options: [
                        {
                            text: 'Go back in time before you decided to wonder around the debris',
                            requiredState: (currentState) => currentState.satan,
                            setState: { communicate : false, throw: false, insideHull : false, outsideHull: false, goToDebris: false},
                            nextPath: 19
                        },
                    ]
                },

                //RUN FOR YOUR LIFE
                {
                    id: 34,
                    text: 'Despite your previous choices, you made it to the ship and immediately take of, the only thing is that due to the time used our options are limited',
                    options: [
                        {
                            text: 'Go back to space',
                            requiredState: (currentState) => currentState.stayClose,
                            setState: { visitedWaveWorld : true},
                            nextPath: 2
                        },
                        {
                            text: 'Evade the mega wave, I will see to it',
                            requiredState: (currentState) => currentState.stayClose || currentState.outsideHull || currentState.insideHull,
                            setState: { visitedWaveWorld : true, evasion: true},
                            nextPath: 29
                        },
                        {
                            text: 'Do some planetary surfing with the ship',
                            requiredState: (currentState) => currentState.stayClose || currentState.outsideHull || currentState.insideHull || currentState.smash || currentState.throw,
                            setState: { visitedWaveWorld : true, surfing: true},
                            nextPath: 29
                        },
                    ]
                },

                //EVADE THE MEGAWAVE
                {
                    id: 29,
                    text: 'As your ship gets covered by the shadow of the colosal mountain-wave approaching, you quickly enter your ship to brace for the hard maneuver, how will you pilot your spacecraft?',
                    options: [
                        {
                            text: 'I will let the ship handle itself, set autopilot and straight to space',
                            requiredState: (currentState) => currentState.stayClose || currentState.outsideHull || currentState.mountain,
                            setState: { autopilot : true, manual : false},
                            nextPath: 2
                        },
                        {
                            text: 'No time to let the computer work, I wil handle it myself.',
                            requiredState: (currentState) => currentState.stayClose || currentState.outsideHull || currentState.insideHull || currentState.smash || currentState.throw,
                            setState: { autopilot : false, manual : true},
                            nextPath: 30
                        },
                    ]
                },
                // DO PLANETARY SURFING
                {
                    id: 30,
                    text: 'Now comes the moment of the maneuver, which difficulty type technique will you choose?',
                    options: [
                        {
                            text: 'Easy maneuvers and out of here',
                            requiredState: (currentState) => currentState.manual && currentState.evasion,
                            setState: { easyMode: true, mediumMode : false , hardMode : false},
                            nextPath: 2
                        },
                        {
                            text: 'Medium complication, I will go through it with little attention',
                            requiredState: (currentState) => currentState.manual && currentState.surfing,
                            setState: { easyMode: false, mediumMode : true , hardMode : false},
                            nextPath: 2
                        },
                        {
                            text: 'Challenge mode on, let\'s have some fun',
                            requiredState: (currentState) => currentState.manual && currentState.surfing,
                            setState: { easyMode: false, mediumMode : false , hardMode : true},
                            nextPath: 31
                        },
                    ]
                },
                // CHALLENGE IS ON
                {
                    id: 31,
                    text: 'This is way harder than I expected it, hull integrity is being compromised and the engines are full of water',
                    options: [
                        {
                            text: 'I found a way through it, igniting engines',
                            requiredState: (currentState) => currentState.hardMode && !currentState.throw && !currentState.smash,
                            setState: { skilledPilot : true},
                            nextPath: 2
                        },
                        {
                            text: 'This will damage the ship but at least I will survive',
                            requiredState: (currentState) => currentState.hardMode && currentState.throw && !currentState.heavy,
                            setState: { recklessPilot : true},
                            nextPath: 2
                        },
                        {
                            text: 'It\'s too risky, but I got no choice, what is that? ...?',
                            requiredState: (currentState) => currentState.hardMode && (currentState.smash || currentState.heavy),
                            setState: { kamikazePilot : true},
                            nextPath: 32
                        },
                    ]
                },
                {
                    id: 32,
                    text: 'You blacked out... you start to discover that...',
                    options: [
                        {
                            text: 'You made it through the wave, ship is able to fly... and you are capable to get out',
                            requiredState: (currentState) => currentState.kamikazePilot,
                            setState: { miraclePilot : true},
                            nextPath: 2
                        },
                        {
                            text: 'You wake uo, you analyze the situation, there is no chance you survive, best thing is to take a pill and go to hell',
                            requiredState: (currentState) => currentState.kamikazePilot && currentState.heavy,
                            setState: { suicidal : true},
                            nextPath: 13
                        },
                        {
                            text: 'You ony wake up to discover you are going to get drawn by water and there is nothing to do about it...',
                            requiredState: (currentState) => currentState.hardMode && !currentState.heavy,
                            setState: { damned : true},
                            nextPath: 7
                        }
                    ]
                },
                //WAVE WORLD DEATH
                {
                    id: 35,
                    text: 'Here the repellent harpies make their nests,\n Who drove the Trojans from the Strophades \n With dire announcements of the coming woe. \n They have broad wings, a human neck and face, \n Clawed feet and swollen, feathered bellies; they caw \nTheir lamentations in the eerie trees.',
                    options: [
                        {
                            text: 'Choose human virtue',
                            requiredState: (currentState) => currentState.communicate,
                            setState: { damned : true },
                            nextPath: 10
                        },
                        {
                            text: 'Start the endless fight',
                            requiredState: (currentState) => currentState.communicate,
                            setState: {suicidal : true},
                            nextPath: 13,
                        },
                    ]
                },


//MOUNTAIN WORLD
        {
            id: 36,
            text: 'Still affected by the black whole, the mountain world is a strange mix of mountains both in land and at the sky as clouds, there seem to be two places of interest for the aircraft to land, ',
            options: [
                {
                    text: 'Choose human virtue',
                    requiredState: (currentState) => currentState.communicate,
                    setState: { damned : true },
                    nextPath: 10
                    },
                    {
                    text: 'Start the endless fight',
                    requiredState: (currentState) => currentState.communicate,
                    setState: {suicidal : true},
                    nextPath: 13,
                },
            ]
        },





        {
        id: 200,
        text: 'Neither of the path had a happy ending, now you are lost in time but with a chance to return, take the futurama loop over',
        options: [
            {
                text: 'Big Freeze first and then the Big bang',
                // I put -1 so we identify id bigger than 0, your are send back to starting screen
                setState: { timeForwardMachine: true},
                nextPath: -1
            }
        ]
        },

]




//We put it at hte bottom to load once everything is loaded


