var keyhero = {};

keyhero.board = [];
keyhero.notePos = [-2.85, -1.4, 0, 1.4, 2.85];
keyhero.keyPressed = [0, 0, 0, 0, 0]; // f g h j k
keyhero.sounds = ['sound1','sound2','sound3','sound4', 'sound5', 'slide'];
keyhero.colors = ['#00e500', '#ff0000', '#ffff00', '#0000ff', '#ffa500'];
keyhero.lives = 5;
keyhero.life = [];

keyhero.gameover = false;
var score = document.getElementById("points");
var points = 0;
//keyhero.runtime = Clock.getElapsedTime();

//Controller
document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 70) {        /*f*/
	   keyhero.keyPressed[0] = 1;
        setTimeout(function() { keyhero.keyPressed[0] = 0;
		}, 200);
    } else if (keyCode == 71) { /*g*/
         keyhero.keyPressed[1] = 1;
        setTimeout(function() { keyhero.keyPressed[1] = 0;
		}, 200);
    } else if (keyCode == 72) { /*h*/
          keyhero.keyPressed[2] = 1;
        setTimeout(function() { keyhero.keyPressed[2] = 0;
		}, 200);
    } else if (keyCode == 74) { /*j*/
          keyhero.keyPressed[3] = 1;
        setTimeout(function() { keyhero.keyPressed[3] = 0;
		}, 200);
    } else if (keyCode == 75) { /*k*/
         keyhero.keyPressed[4] = 1;
        setTimeout(function() { keyhero.keyPressed[4] = 0;
		}, 200);
    }
}

//not currently used
keyhero.boardInit = function() {
    for(let x = 0; x < 10; x++){
        keyhero.board[x] = [];
        for(let y = 0; y < 10; y++){
            keyhero.board[x][y] = 0;
        }
    }
};

keyhero.addScore = function(pts){
    points += pts;
    keyhero.updateScore();
};

keyhero.updateScore = function(){
    score.innerHTML = "Score: " + points;
};


keyhero.init = function() {
    $("#play").hide();
	 $("#text").hide();
	 $("#score").show();

    //Scene
    keyhero.scene = new THREE.Scene();

    //Camera
    keyhero.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    keyhero.camera.position.x = 0;
    keyhero.camera.position.y = 7;
    keyhero.camera.position.z = 7;
    keyhero.camera.rotation.x = -89;
    keyhero.scene.add(keyhero.camera);

	var bar1 = new THREE.Mesh(new THREE.BoxGeometry(1.3,0.5,.6), new THREE.MeshBasicMaterial({color: keyhero.colors[0], transparent:true, opacity:0.5}));
	bar1.position.x = -3;
    bar1.position.y = 0;
    bar1.position.z = 7.2;
	var bar2 = new THREE.Mesh(new THREE.BoxGeometry(1.3,1.2,.5), new THREE.MeshBasicMaterial({color: keyhero.colors[1], transparent:true, opacity:0.5}));
	bar2.position.x = -1.4;
    bar2.position.y = 0;
    bar2.position.z = 7.2;
	var bar3 = new THREE.Mesh(new THREE.BoxGeometry(1.3,1.4,.5), new THREE.MeshBasicMaterial({color: keyhero.colors[2], transparent:true, opacity:0.5}));
	bar3.position.x = 0;
    bar3.position.y = 0;
    bar3.position.z = 7.2;
	var bar4 = new THREE.Mesh(new THREE.BoxGeometry(1.3,1.2,.5), new THREE.MeshBasicMaterial({color: keyhero.colors[3], transparent:true, opacity:0.5}));
	bar4.position.x = 1.4;
    bar4.position.y = 0;
    bar4.position.z = 7.2;
	var bar5 = new THREE.Mesh(new THREE.BoxGeometry(1.3,0.5,.6), new THREE.MeshBasicMaterial({color: keyhero.colors[4], transparent:true, opacity:0.5}));
	bar5.position.x = 3;
    bar5.position.y = 0;
    bar5.position.z = 7.2;

	var life = new THREE.Mesh(new THREE.BoxGeometry(1.3,0.5,.6), new THREE.MeshBasicMaterial({color: "#551A8B",}));
	life.position.x = -6;
    life.position.y = 0;
    life.position.z = 4.2;
	var life2 = new THREE.Mesh(new THREE.BoxGeometry(1.3,0.5,.6), new THREE.MeshBasicMaterial({color: "#551A8B",}));
	life2.position.x = -6;
    life2.position.y = 0;
    life2.position.z = 3.2;
	var life3= new THREE.Mesh(new THREE.BoxGeometry(1.3,0.5,.6), new THREE.MeshBasicMaterial({color: "#551A8B",}));
	life3.position.x = -6;
    life3.position.y = 0;
    life3.position.z = 2.2;
	var life4 = new THREE.Mesh(new THREE.BoxGeometry(1.3,0.5,.6), new THREE.MeshBasicMaterial({color: "#551A8B",}));
	life4.position.x = -6;
    life4.position.y = 0;
    life4.position.z = 1.2;
	var life5 = new THREE.Mesh(new THREE.BoxGeometry(1.3,0.5,.6), new THREE.MeshBasicMaterial({color: "#551A8B",}));
	life5.position.x = -6;
    life5.position.y = 0;
    life5.position.z = 0;

	keyhero.life.push(life);
	keyhero.life.push(life2);
	keyhero.life.push(life3);
	keyhero.life.push(life4);
	keyhero.life.push(life5);


	keyhero.scene.add(bar1);
	keyhero.scene.add(bar2);
	keyhero.scene.add(bar3);
	keyhero.scene.add(bar4);
	keyhero.scene.add(bar5);
	keyhero.scene.add(life);
	keyhero.scene.add(life2);
	keyhero.scene.add(life3);
	keyhero.scene.add(life4);
	keyhero.scene.add(life5);

    //renderer
    keyhero.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    keyhero.renderer.setClearColor(0xdee0e5, 1);
    keyhero.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(keyhero.renderer.domElement);

    //Grid
    var grid = new THREE.GridHelper( 15, 5, 0x3f3f3f, 0x3f3f3f);
    grid.position.x = 0;
    grid.position.y = 0;
    grid.position.z = 0;
    grid.scale.set(.5, 1, 1);

    keyhero.scene.add(grid);
    keyhero.renderer.render(keyhero.scene, keyhero.camera);

    keyhero.boardInit();

    keyhero.game();
};

keyhero.interval = 2500;

keyhero.game = function() {

    if(!keyhero.gameover){

        setTimeout(function () {

            //speed up interval
            if(keyhero.interval > 700){
               keyhero.interval -= 100;
            }

            //position random cube
            posX = Math.floor(Math.random() * (5));
            //alert("loc:"+keyhero.notePos[posX] + " num:" + posX);   /*WORKS*/

            //spawn note
            var note = new THREE.Mesh(new THREE.BoxGeometry(1,.5,.5), new THREE.MeshBasicMaterial({color: keyhero.colors[posX]}));
            note.position.x = keyhero.notePos[posX];
            note.position.y = .5;
            note.position.z = -6;
			note.x = posX;
            keyhero.scene.add(note);

            var move = function(){
                requestAnimationFrame(move);

                if(note.position.z <= 7.4) {
                    //move note
                    note.position.z += .1;

                    //check note hit
                    if(keyhero.keyPressed[note.x] == 1 && note.position.z >= 7.1){

                        keyhero.addScore(20);

                        //play animation/effect/sound
                        var soundID = keyhero.sounds[note.x];
                        document.getElementById(soundID).play();

                        keyhero.scene.remove(note);
                        cancelAnimationFrame( move );
                        //nullify function and note freeing memory and ending function, needed
                        note = undefined;
                        move = undefined;
                    }
                    keyhero.renderer.render(keyhero.scene, keyhero.camera);
                }
                //note scrolls past
                else{
                    var slideId = keyhero.sounds[5];
                    document.getElementById(slideId).play();
		                keyhero.lives -=1;
                    keyhero.scene.remove(keyhero.life[keyhero.lives]);

                    keyhero.scene.remove(note);
                    keyhero.renderer.render(keyhero.scene, keyhero.camera);
                    cancelAnimationFrame( move );
                    //nullify function and note freeing memory and ending function
                    note = undefined;
                    move = undefined;

          					if(keyhero.lives ==0)
          					{
          						window.location.replace("gameOver.html");
          					}
              }
        };

            move();

            //recursive call
            keyhero.game();

        }, keyhero.interval);

    }
    else{Through
        return;
    }

};
