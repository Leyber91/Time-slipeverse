var speedController = 60;
var xySize = 50;
let time = new Date(); //SetTime
//this funciton will serve us to initiate the program
let initializeShadowPosition = () => {

let canvasShadow = document.getElementById('canvasShadow')
let ctx = canvasShadow.getContext('2d');
ctx.canvasShadow.width = window.innerWidth;
ctx.canvasShadow.height = window.innerHeight;

ctx.globalCompositeOperation = 'destination-over'

ctx.save();

ctx.translate(550,430) //the origin point
}

// HELL WORLD SHADOW FUNCTION
let createShadowHW = () =>{
    initializeShadowPosition
    // COLOR DESIGN HELL WORLD
    var gradientHW = ctx.createRadialGradient(0,0,4, 0,0,6);
    //COLOR DESIGN FOR BLACK STARS
    gradientHW.addColorStop(.94, 'red');
    //OBJECT CREATION
    let time = new Date();
    ctx.rotate(((2 * Math.PI) / (speedController*0.05)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*50)) * time.getMilliseconds());
    ctx.translate(100,0) //
    ctx.fillStyle = gradientHW;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(0, 0, 60, 6, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated
    ctx.restore();
    }

// WAVE WORLD SHADOW FUNCTION
let createShadowWW = () =>{
    initializeShadowPosition()
    // COLOR DESIGN HELL WORLD
    var gradientWW = ctx.createRadialGradient(0,0,xySize*0.5, 0,0, xySize*1.18);
    gradientWW.addColorStop(0, 'white');
    gradientWW.addColorStop(.10, 'lightBlue');
    gradientWW.addColorStop(.50, 'darkBlue');
    gradientWW.addColorStop(.90, 'grey');
    gradientWW.addColorStop(.92, 'blue');
    gradientWW.addColorStop(.94, 'lightBlue');
    gradientWW.addColorStop(.96, 'darkBlue');
    gradientWW.addColorStop(.98, 'White');
    gradientWW.addColorStop(1, 'black');
    //OBJECT CREATION
    ctx.rotate(((2 * Math.PI) / (speedController*0.05)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*50)) * time.getMilliseconds());
    ctx.translate(140,0) //WE DRAW TO THE CLOSER ORBIT POSSIBLE. HELL WORLD
    ctx.fillStyle = gradientHW;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(0, 0, xySize*0.6, xySize*0.6, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated
    ctx.restore();
    }

// MOUNTAIN WORLD SHADOW FUNCTION
let createShadowMW = () =>{
    initializeShadowPosition()
    // COLOR DESIGN HELL WORLD
    // COLOR DESIGN MOUNTAINWORLD
    var gradientMW = ctx.createRadialGradient(0,0,xySize, 0,0,xySize);
    gradientMW.addColorStop(0, 'lightBlue');
    gradientMW.addColorStop(.30, 'brown');
    gradientMW.addColorStop(.40, 'darkGreen');
    gradientMW.addColorStop(.50, 'green');
    gradientMW.addColorStop(.60, 'lightGreen');
    gradientMW.addColorStop(.80, 'brown');
    gradientMW.addColorStop(.90, 'darkGreen');
    gradientMW.addColorStop(.92, 'green');
    gradientMW.addColorStop(.94, 'lightBlue');
    gradientMW.addColorStop(.96, 'darkBlue');
    gradientMW.addColorStop(.98, 'White');
    gradientMW.addColorStop(1, 'black');
    //OBJECT CREATION
    ctx.rotate(((2 * Math.PI) / (speedController*0.15)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*150)) * time.getMilliseconds());
    ctx.translate(175,0)
    ctx.fillStyle = gradientMW;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(0, 0, 10, 10, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated
    ctx.restore();
    }

// MOUNTAIN WORLD SHADOW FUNCTION
let createShadowMDW = () =>{
    initializeShadowPosition()
    // COLOR DESIGN MIDDLE WORLD
    var gradientMDW = ctx.createRadialGradient(0,0,xySize*0.2, 0,0,xySize);
    // COLOR DESIGN FOR MIDDLE WORLD
    gradientMDW.addColorStop(0, 'lightBlue');
    gradientMDW.addColorStop(.30, 'brown');
    gradientMDW.addColorStop(.90, 'grey');
    gradientMDW.addColorStop(.92, 'green');
    gradientMDW.addColorStop(.94, 'lightBlue');
    gradientMDW.addColorStop(.96, 'darkBlue');
    gradientMDW.addColorStop(.98, 'White');
    gradientMDW.addColorStop(1, 'black');
        // COLOR DESIGN MIDDLE WORLD MOON
        var gradientMWM = ctx.createRadialGradient(0,0,xySize*0.2, 0,0,xySize);
        gradientMWM.addColorStop(0, 'lightBlue');
        gradientMWM.addColorStop(.30, 'brown');
        gradientMWM.addColorStop(.90, 'grey');
        gradientMWM.addColorStop(.92, 'green');
        gradientMWM.addColorStop(.94, 'lightBlue');
        gradientMWM.addColorStop(.96, 'darkBlue');
        gradientMWM.addColorStop(.98, 'White');
        gradientMWM.addColorStop(1, 'black');

    //OBJECTS CREATION
    ctx.rotate(((2 * Math.PI) / (speedController*0.2)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*200)) * time.getMilliseconds());
    ctx.translate(240,0) //WE DRAW TO THE CLOSER ORBIT POSSIBLE. HELL WORLD
    ctx.fillStyle = gradientMDW;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(0, 0, 8, 8, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated
    ctx.save();
        //MIDDLE WORLD MOON
        ctx.rotate(((2 * Math.PI) / (speedController*0.2)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*200)) * time.getMilliseconds());
        ctx.translate(20,0) //WE DRAW TO THE CLOSER ORBIT POSSIBLE. HELL WORLD
        ctx.fillStyle = gradientMWM;
        ctx.beginPath(); //start the path
        ctx.ellipse(0, 0, 4, 4, Math.PI / 4, 0, 2 * Math.PI)
        ctx.stroke(); //end the path
        ctx.fill(); //fill up whatever was generated
        ctx.restore()
    ctx.restore()
    }

// BINARY WORLDS SHADOW FUNCTION
let createShadowBW = () =>{
    initializeShadowPosition()
// BINARY WORLDS
    var gradientBWB = ctx.createRadialGradient(15,15,xySize*0.1, 15,15,xySize*1.4);
    var gradientBWV = ctx.createRadialGradient(-20,-20,xySize*0.1, -20,-20,xySize*1.6);
    // COLOR DESIGN FOR BINARY WORLD BLUE
    gradientBWB.addColorStop(0, 'lightBlue');
    gradientBWB.addColorStop(.87, 'turquoise');
    gradientBWB.addColorStop(.88, 'blue');
    gradientBWB.addColorStop(.93, 'darkBlue');
    gradientBWB.addColorStop(.98, 'grey');
    gradientBWB.addColorStop(1, 'white');
    // COLOR DESIGN FOR BINARY WORLD VIOLET
    gradientBWV.addColorStop(0, 'lightBlue');
    gradientBWV.addColorStop(.87, 'purple');
    gradientBWV.addColorStop(.88, 'blue');
    gradientBWV.addColorStop(.93, 'pink');
    gradientBWV.addColorStop(.98, 'darkBlue');

    //BINARY WORLDS OBJECTS CREATION
    ctx.rotate(((2 * Math.PI) / (speedController*0.25)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*250)) * time.getMilliseconds());
    ctx.translate(300,0)
    ctx.rotate(((2 * Math.PI) / (speedController*0.1)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*100)) * time.getMilliseconds());
    //PURPLE GAS GIANT
    ctx.fillStyle = gradientBWB;
    ctx.beginPath(); //start the path
    ctx.ellipse(15, 15, 14, 14, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated
    //BLUE GAS GIANT
    ctx.fillStyle = gradientBWV;
    ctx.beginPath(); //start the path
    ctx.ellipse(-20, -20, 16, 16, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated
    ctx.restore()
    }


// RINGWORLD SHADOW
let createShadowRW = () =>{
    initializeShadowPosition()
    // COLOR DESIGN RINGWORLD MOON
        var gradientRWM = ctx.createRadialGradient(0,0,xySize*0.1, 0,0,xySize*0.5);
        // COLOR DESIGN FOR RING WORLD
        gradientRWM.addColorStop(0, 'grey');
        gradientRWM.addColorStop(.40, 'darkGrey');
        gradientRWM.addColorStop(.78, 'white');
        gradientRWM.addColorStop(.95, 'black');
        gradientRWM.addColorStop(1, 'white');
    //OBJECT LOCATION
    ctx.rotate(((2 * Math.PI) / (speedController*0.3)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*300)) * time.getMilliseconds());
    ctx.translate(360,0)
    ctx.save();
        //RINGWORLD MOON
        ctx.rotate(((2 * Math.PI) / (speedController*0.2)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*200)) * time.getMilliseconds());
        ctx.translate(30,0) //WE DRAW TO THE CLOSER ORBIT POSSIBLE. HELL WORLD
        ctx.fillStyle = gradientRWM;
        ctx.beginPath(); //start the path
        //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
        ctx.ellipse(0, 0, 5, 5, Math.PI / 4, 0, 2 * Math.PI)
        ctx.stroke(); //end the path
        ctx.fill(); //fill up whatever was generated
        ctx.restore();
    ctx.restore();
    }

// OUTER WORLD SHADOW
let createShadowOW = () =>{
    initializeShadowPosition()
    //OUTER WORLD
    ctx.rotate(((2 * Math.PI) / (speedController*0.4)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*400)) * time.getMilliseconds());
    ctx.translate(380,0) //WE DRAW TO THE CLOSER ORBIT POSSIBLE. HELL WORLD
    ctx.fillStyle = gradientRWM;
    ctx.beginPath(); //start the path

    ctx.ellipse(0, 0, 8, 8, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated
    }

let start = () => {
window.requestAnimationFrame(createShadowHW)
window.requestAnimationFrame(createShadowWW)
window.requestAnimationFrame(createShadowMW)
window.requestAnimationFrame(createShadowMDW)
window.requestAnimationFrame(createShadowBW)
window.requestAnimationFrame(createShadowRW)
window.requestAnimationFrame(createShadowOW)
}

start();