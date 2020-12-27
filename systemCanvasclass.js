class planet {
    constructor(id, text, options, timeDilation, game) {
        this.id = id;
        this.text = text;
        this.options = options;
        this.timeDilation = timeDilation;
        this.game = game;
    }





}



var speedController = 60;
var sizeXYHW = 10;
var sizeXYWW = 10;
var sizeXYMW = 10;
var sizeXYMWM = 10;
var sizeXYBW = 10;
var sizeXYRW = 10;
var sizeXYOW = 10;


//this funciton will serve us to initiate the program
let initialize = () => {
window.requestAnimationFrame(createSystem);
}

let createSystem = () =>{
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d');
    ctx.strokeStyle = "transparent";
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;


    ///Operation to apply when drawing new shapes.
    ctx.globalCompositeOperation = 'destination-over'
    ctx.save();
    ctx.translate(300,250);

    //Earth Center
    let time = new Date();
    //void ctx.rotate(angle);
    // where to put it on the screen
    ctx.translate(200,180) 
    ctx.rotate(((2 * Math.PI) / speedController) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*1000)) * time.getMilliseconds());

    //BIG CENTER CLACK WHOLE

    // Create a radial gradient
    // The inner circle is at x=110, y=90, with radius=30
    // The outer circle is at x=100, y=100, with radius=70
    var gradientBH = ctx.createRadialGradient(40,40,16, 40,40,20);

    //COLOR DESIGN FOR BLACK HOLE
    gradientBH.addColorStop(0, 'black');
    gradientBH.addColorStop(.57, 'transparent');
    gradientBH.addColorStop(.59, 'black');
    gradientBH.addColorStop(.61, 'black');
    gradientBH.addColorStop(.63, 'black');
    gradientBH.addColorStop(.65, 'transparent');
    gradientBH.addColorStop(.67, 'black');
    gradientBH.addColorStop(.69, 'transparent');
    gradientBH.addColorStop(.71, 'orange');
    gradientBH.addColorStop(.73, 'black');
    gradientBH.addColorStop(.75, 'transparent');
    gradientBH.addColorStop(.77, 'black');
    gradientBH.addColorStop(.79, 'transparent');
    gradientBH.addColorStop(.81, 'orange');
    gradientBH.addColorStop(.83, 'black');
    gradientBH.addColorStop(.85, 'transparent');
    gradientBH.addColorStop(.91, 'orange');
    gradientBH.addColorStop(.93, 'black');
    gradientBH.addColorStop(.95, 'orange');
    gradientBH.addColorStop(.97, 'black');
    gradientBH.addColorStop(.99, 'red');

// COLOR DESIGN STAR
    var gradientStar = ctx.createRadialGradient(-40,-40,5, -40,-40,30);

    //COLOR DESIGN FOR BLACK STAR
    gradientStar.addColorStop(0, 'darkOrange');
    gradientStar.addColorStop(.87, 'red');
    gradientStar.addColorStop(.88, 'darkRed');
    gradientStar.addColorStop(.93, 'orange');
    gradientStar.addColorStop(.94, 'red');

// COLOR DESIGN HELL WORLD
    var gradientHW = ctx.createRadialGradient(0,0,4, 0,0,6);

    //COLOR DESIGN FOR BLACK STAR
    gradientHW.addColorStop(0, 'darkRed');
    gradientHW.addColorStop(.30, 'black');
    gradientHW.addColorStop(.88, 'red');
    gradientHW.addColorStop(.93, 'Brown');
    gradientHW.addColorStop(.94, 'red');
    gradientHW.addColorStop(1, 'rgba(255, 0, 0, 0.25)');

// COLOR DESIGN WAVEWORLD
    var gradientWW = ctx.createRadialGradient(0,0,5, 0,0, 11.8);

    //COLOR DESIGN FOR WAVEWORLD
    gradientWW.addColorStop(0, 'white');
    gradientWW.addColorStop(.10, 'lightBlue');
    gradientWW.addColorStop(.50, 'darkBlue');
    gradientWW.addColorStop(.90, 'grey');
    gradientWW.addColorStop(.92, 'blue');
    gradientWW.addColorStop(.94, 'lightBlue');
    gradientWW.addColorStop(.96, 'darkBlue');
    gradientWW.addColorStop(.98, 'White');
    gradientWW.addColorStop(1, 'rgba(255, 0, 0, 0.25)');
    

    // COLOR DESIGN MOUNTAINWORLD
    var gradientMW = ctx.createRadialGradient(0,0,2, 0,0, 10);

    // COLOR DESIGN FOR MOUNTAIN WORLDS
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
    gradientMW.addColorStop(1, 'rgba(255, 0, 0, 0.25)');

    // COLOR DESIGN MIDDLE WORLD
    var gradientMDW = ctx.createRadialGradient(0,0,2, 0,0,10);

    // COLOR DESIGN FOR MIDDLE WORLD
    gradientMDW.addColorStop(0, 'lightBlue');
    gradientMDW.addColorStop(.30, 'brown');
    gradientMDW.addColorStop(.90, 'grey');
    gradientMDW.addColorStop(.92, 'green');
    gradientMDW.addColorStop(.94, 'lightBlue');
    gradientMDW.addColorStop(.96, 'darkBlue');
    gradientMDW.addColorStop(.98, 'White');
    gradientMDW.addColorStop(1, 'rgba(255, 0, 0, 0.25)');

    // COLOR DESIGN MIDDLE WORLD MOON
    var gradientMWM = ctx.createRadialGradient(0,0,2, 0,0,10);

    // COLOR DESIGN FOR MIDDLE WORLD
    gradientMWM.addColorStop(0, 'lightBlue');
    gradientMWM.addColorStop(.30, 'brown');
    gradientMWM.addColorStop(.90, 'grey');
    gradientMWM.addColorStop(.92, 'green');
    gradientMWM.addColorStop(.94, 'lightBlue');
    gradientMWM.addColorStop(.96, 'darkBlue');
    gradientMWM.addColorStop(.98, 'White');
    gradientMWM.addColorStop(1, 'rgba(255, 0, 0, 0.25)');

    // BINARY WORLDS
    var gradientBWB = ctx.createRadialGradient(15,15,1, 15,15,14);
    var gradientBWV = ctx.createRadialGradient(-20,-20,1, -20,-20,16);

    // COLOR DESIGN FOR BINARY WORLD BLUE
    gradientBWB.addColorStop(0, 'lightBlue');
    gradientBWB.addColorStop(.87, 'turquoise');
    gradientBWB.addColorStop(.88, 'blue');
    gradientBWB.addColorStop(.93, 'darkBlue');
    gradientBWB.addColorStop(.98, 'grey');
    gradientBWB.addColorStop(1, 'rgba(255, 0, 0, 0.25)');

    // COLOR DESIGN FOR BINARY WORLD VIOLET
    gradientBWV.addColorStop(0, 'lightBlue');
    gradientBWV.addColorStop(.87, 'purple');
    gradientBWV.addColorStop(.88, 'blue');
    gradientBWV.addColorStop(.93, 'pink');
    gradientBWV.addColorStop(.98, 'darkBlue');
    gradientBWV.addColorStop(.1, 'rgba(255, 0, 0, 0.25)');

    // COLOR DESIGN RINGWORLD
    var gradientRW = ctx.createRadialGradient(0,0,2, 0,0,19.5);

    // COLOR DESIGN FOR MIDDLE WORLD
    gradientRW.addColorStop(0, 'lightYellow');
    gradientRW.addColorStop(.40, 'darkOrange');
    gradientRW.addColorStop(.78, 'brown');
    gradientRW.addColorStop(.95, 'orange');
    gradientRW.addColorStop(1, 'rgba(255, 0, 0, 0.25)');

        // COLOR DESIGN RINGWORLD MOON
        var gradientRWM = ctx.createRadialGradient(0,0,1, 0,0,5);

        // COLOR DESIGN FOR RING WORLD
        gradientRWM.addColorStop(0, 'grey');
        gradientRWM.addColorStop(.40, 'darkGrey');
        gradientRWM.addColorStop(.78, 'white');
        gradientRWM.addColorStop(.95, 'black');
        gradientRWM.addColorStop(1, 'rgba(255, 0, 0, 0.25)');





// COLOR DESIGN FOR MIDDLE WORLD

// BINARY SYSTEM CREATION

    // Set the fill style and draw a rectangle
    ctx.fillStyle = gradientBH;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(40, 40, 20, 20, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated


    //CREATE THE SUN
    ctx.fillStyle = gradientStar;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(-40, -40, 30, 30, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated
    ctx.save();

    //HELL ETERNUM PLANET
    // it has to modify 0.6 or 600 //
    ctx.rotate(((2 * Math.PI) / (speedController*0.05)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*50)) * time.getMilliseconds());
    ctx.translate(100,0) //WE DRAW TO THE CLOSER ORBIT POSSIBLE. HELL WORLD
    ctx.fillStyle = gradientHW;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(0, 0, sizeXYHW*0.6, sizeXYHW*0.6, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated
    ctx.restore();

    //WAVE WORLD
    ctx.rotate(((2 * Math.PI) / (speedController*0.1)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*100)) * time.getMilliseconds());
    //void ctx.translate(x, y);
    //ctx.translate(0,0);
    //void ctx.fillRect(x, y, width, height);
    ctx.translate(140,0) //WE DRAW TO THE CLOSER ORBIT POSSIBLE. HELL WORLD

    ctx.fillStyle = gradientWW;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(0, 0, sizeXYWW*1.2,  sizeXYWW*1.2, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated
    ctx.restore();

    
    ctx.save();
    ctx.translate(300,250);
    ctx.translate(200,180) 
    ctx.save()


    //MOUNTAIN WORLD
    ctx.rotate(((2 * Math.PI) / (speedController*0.15)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*150)) * time.getMilliseconds());
    //void ctx.translate(x, y);
    //ctx.translate(0,0);
    //void ctx.fillRect(x, y, width, height);
    ctx.translate(175,0) //WE DRAW TO THE CLOSER ORBIT POSSIBLE. HELL WORLD

    ctx.fillStyle = gradientMW;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(0, 0, sizeXYMW, sizeXYMW, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated
    ctx.restore();


    //MIDDLE WORLD
    ctx.rotate(((2 * Math.PI) / (speedController*0.2)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*200)) * time.getMilliseconds());
    //void ctx.translate(x, y);
    //ctx.translate(0,0);
    //void ctx.fillRect(x, y, width, height);
    ctx.translate(240,0) //WE DRAW TO THE CLOSER ORBIT POSSIBLE. HELL WORLD

    ctx.fillStyle = gradientMDW;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(0, 0, sizeXYMWM*0.8, sizeXYMWM*0.8, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated

    ctx.save();
        //MIDDLE WORLD MOON
        ctx.rotate(((2 * Math.PI) / (speedController*0.2)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*200)) * time.getMilliseconds());
        //void ctx.translate(x, y);
        //ctx.translate(0,0);
        //void ctx.fillRect(x, y, width, height);
        ctx.translate(20,0) //WE DRAW TO THE CLOSER ORBIT POSSIBLE. HELL WORLD

        ctx.fillStyle = gradientMWM;
        ctx.beginPath(); //start the path
        //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
        ctx.ellipse(0, 0, sizeXYMWM*0.4, sizeXYMWM*0.4, Math.PI / 4, 0, 2 * Math.PI)
        ctx.stroke(); //end the path
        ctx.fill(); //fill up whatever was generated


    ctx.restore()
    ctx.restore()
    ctx.save();
    ctx.translate(300,250);
    ctx.translate(200,180) 
    ctx.save()



    //BINARY WORLDS
    ctx.rotate(((2 * Math.PI) / (speedController*0.25)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*250)) * time.getMilliseconds());
    //void ctx.translate(x, y);
    //ctx.translate(0,0);
    //void ctx.fillRect(x, y, width, height);
    ctx.translate(300,0) //WE DRAW TO THE CLOSER ORBIT POSSIBLE. HELL WORLD
    ctx.rotate(((2 * Math.PI) / (speedController*0.1)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*100)) * time.getMilliseconds());
    //PURPLE GAS GIANT
    ctx.fillStyle = gradientBWB;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(15, 15, sizeXYBW*1.4, sizeXYBW*1.4, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated

    //BLUE GAS GIANT
    ctx.fillStyle = gradientBWV;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(-20, -20, sizeXYBW*1.6, sizeXYBW*1.6, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated

    ctx.restore()


    //RING WORLD
    ctx.rotate(((2 * Math.PI) / (speedController*0.3)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*300)) * time.getMilliseconds());
    //void ctx.translate(x, y);

    //void ctx.fillRect(x, y, width, height);
    ctx.translate(360,0) //WE DRAW TO THE CLOSER ORBIT POSSIBLE. HELL WORLD

    // RING
    ctx.lineWidth = 0.000001;
    ctx.fillStyle = 'rgba(255,160,12,0.5)';
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);

    ctx.ellipse(0, 0, 40, 6, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill();
    //BLUE GAS GIANT
    ctx.fillStyle = gradientRW;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(0, 0,20, 20, Math.PI / 4, 0, 2 * Math.PI)

    ctx.stroke(); //end the path
    ctx.fill();

     //fill up whatever was generated
    ctx.save();

        //RINGWORLD MOON
        ctx.rotate(((2 * Math.PI) / (speedController*0.2)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*200)) * time.getMilliseconds());
        //void ctx.translate(x, y);
        //ctx.translate(0,0);
        //void ctx.fillRect(x, y, width, height);
        ctx.translate(30,0) //WE DRAW TO THE CLOSER ORBIT POSSIBLE. HELL WORLD

        ctx.fillStyle = gradientRWM;
        ctx.beginPath(); //start the path
        //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
        ctx.ellipse(0, 0, sizeXYRW*0.5, sizeXYRW*0.5, Math.PI / 4, 0, 2 * Math.PI)
        ctx.stroke(); //end the path
        ctx.fill(); //fill up whatever was generated
        ctx.restore();
        ctx.restore();

        ctx.save();
        ctx.translate(300,250);
        ctx.translate(200,180);
        ctx.save()


        
    //OUTER WORLD
    ctx.rotate(((2 * Math.PI) / (speedController*0.4)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*400)) * time.getMilliseconds());
    //void ctx.translate(x, y);
    //ctx.translate(0,0);
    //void ctx.fillRect(x, y, width, height);
    ctx.translate(380,0) //WE DRAW TO THE CLOSER ORBIT POSSIBLE. HELL WORLD

    ctx.fillStyle = gradientRWM;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(0, 0, sizeXYOW*0.8, sizeXYOW*0.8, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated

    

    

//void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    //ctx.drawImage(sun, 200, 200, 300, 300);

    window.requestAnimationFrame(createSystem);

}

initialize();