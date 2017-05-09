# KeyboardHero
A rhythm-based game created in JavaScript using the Three.js library and HTML5's WebGL.

To play the game:  
-Open index.html and press the play button to begin    
-Press the F,G,H,J,K keys to the corresponsing column from left to right as the notes pass the colored boxes  
-The Objective is to earn as many points as you can before you miss 5 notes  

The game's UI is created using Three.js's GridHelper mesh to represent the lanes, and several of Three.js's BoxGeometry meshes to represent the notes, strikezone, and remaining lives.
Three.js's canvas and renderer are used to dispaly and update elements on the canvas for the player to see. 
The canvas is update using WebGL's requestAnimationFrame function, creating smooth animation. 

The game operates by randomly generating notes in one of t he 5 lanes at an increasing interval. All of this is in a recursive method that modifies the interval between each note generation

JavaScript's EventListener is used to read playaer input, and determining game conditions.
JavaScript's play method was also used to play sound elements when notes are hit or missed.

