startMusic();
// $('svg').addClass('animate');

// $('svg.animate path').each(function(){
// 	var comprimento = $(this).get(0).getTotalLength();
// 	var comprimentoArredondado = Math.round(comprimento);
// 	$(this).attr('stroke-dasharray', comprimentoArredondado);
// 	$(this).attr('stroke-dashoffset', comprimentoArredondado);
// });


/* 
Remarque,
je peux désormais interagir correctement avec mes élèments depuis que j'ai passer le tout en class pas en ID,
*/
// {css:{className:"finish"}, repeat:10, delay:0.5, repeatDelay:0.7, yoyo:true});



TweenMax.to("background", 1, {
	fill : "blue"
})



// TweenMax.to(".rotativeSquare", 4, {
//     x: 600,
//     y: 250,
//     rotation: 3600,
//     scale: 2,
//     backgroundColor: "blue",
//     backgroundColor: "yellow",
//     backgroundColor: "purple"
// });


requestAnimationFrame(TweenMax);
requestAnimationFrame(tl);
requestAnimationFrame(tl2);
requestAnimationFrame(tl3);



//sound//

var myMusic;
var x = document.getElementById("myGameMusic"); //Looping music
function enableLoop() { 
    x.loop = true;
    x.load();
} 

function startMusic() {
    console.log (startMusic);
    myMusic = new sound("assets/media/mp3/grelot.mp3");
    myMusic.play();
}



function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
} 
var easter_egg = new Konami(function() { alert('Konami Code!')});