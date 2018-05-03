TweenMax.to(backGround, 5, {
    // x: -1600,
    // rotation: 100,
    // fill: "blue"
});

TweenMax.to(pinkRect, 5, {
    // fill: "blue",
    x: 600,
    // rotation: 1500
})


// TweenMax.to(whiteLine, 5, {
//     color: "black",
//     backgroundColor: "black",
//     fill: "blue",

// });


TweenMax.to(whiteLine, 5, {
    css: {
        className: "wl_finish"
    },
    repeat: 10,
    delay: 0.5,
    repeatDelay: 0.7,
    yoyo: true
})

// TweenMax.to(whiteLine, 5, {
//     rotation: 1500,
//     yoyo: true,
//     repeat: 10
// })
