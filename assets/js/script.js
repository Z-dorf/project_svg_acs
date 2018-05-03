//Variables des élèments svg
var backGround = document.getElementsByClassName("background");
var whiteLine = document.getElementsByClassName("Traits");
var test2 = document.getElementById("Textes");
var pinkRect = document.getElementsByClassName("pinkRect");
var lefty = document.getElementsByClassName("lefty");
var righty = document.getElementsByClassName("righty");


//ACCESS//
var A1 = document.getElementsByClassName("A1");
var C2 = document.getElementsByClassName("C2");
var C3 = document.getElementsByClassName("C3");
var E4 = document.getElementsByClassName("E4");
var S5 = document.getElementsByClassName("S5");
var S6 = document.getElementsByClassName("S6");


//CODE//
var C1 = document.getElementsByClassName("C1");
var O2 = document.getElementsByClassName("O2");
var D3 = document.getElementsByClassName("D3");
var E4 = document.getElementsByClassName("E4");

//SCHOOL//
var S1 = document.getElementsByClassName("S1");
var C2 = document.getElementsByClassName("C2");
var H3 = document.getElementsByClassName("H3");
var O4 = document.getElementsByClassName("O4");
var O5 = document.getElementsByClassName("O5");
var L6 = document.getElementsByClassName("L6");



TweenMax.to(A1, 5, {
    opacity: 100
})

TweenMax.to(C2, 5, {
    opacity: 100
})

TweenMax.to(C3, 5, {
    opacity: 100
})

TweenMax.to(E4, 5, {
    opacity: 100
    })

TweenMax.to(S5, 5, {
    opacity: 100
})

TweenMax.to(S6, 5, {
    opacity: 100
    })

TweenMax.to(lefty, 5, {
    y: -1600,
    // rotation: 100,
    // fill: "blue"
 });

 TweenMax.to(righty, 5, {
    y: 1600,
    // rotation: 100,
    // fill: "blue"
 });



TweenMax.to(backGround, 5, {
    // x: -1600,
    // rotation: 100,
    // fill: "blue"
 });

TweenMax.to(pinkRect, 5, {
    // fill: "blue",
    x : 600,
    // rotation: 1500
}) 
/* Remarque,
je peux désormais changer la couleur de mon élèment depuis que j'ai passer mon carré en get element by classname, pas ID,
 et en utilisant "fill" */

TweenMax.to(whiteLine, 5, {
    color: "black",
    backgroundColor: "black",
    fill: "blue",

});

TweenMax.to(test2, 5, {
    // x: -200,
    // rotation: 100,
    fill: "blue"
});


// //tween the element with ID of "myID"
// TweenMax.to(".blacky", 5, {
//     width: 150,
//     height: 150,
//     backgroundColor: "red"
// });

// TweenMax.to(".yellow", 6, {
//     x: 600,
//     backgroundColor: "#1D4A79",
//     rotation: "-1080"
// });

// TweenMax.to(".blue", 6, {
//     x: 600,
//     rotation: 1080,
//     scale: 0.5
// });

TweenMax.to(".rotativeSquare", 4, {
    x: 600,
    y: 250,
    rotation: 3600,
    scale: 2,
    backgroundColor: "blue",
    backgroundColor: "yellow",
    backgroundColor: "purple"
});