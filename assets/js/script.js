$('svg').addClass('animate');

$('svg.animate path').each(function(){
	var comprimento = $(this).get(0).getTotalLength();
	var comprimentoArredondado = Math.round(comprimento);
	$(this).attr('stroke-dasharray', comprimentoArredondado);
	$(this).attr('stroke-dashoffset', comprimentoArredondado);
});



/* 
Remarque,
je peux désormais interagir correctement avec mes élèments depuis que j'ai passer le tout en class pas en ID,
*/
// {css:{className:"finish"}, repeat:10, delay:0.5, repeatDelay:0.7, yoyo:true});







// TweenMax.to(".rotativeSquare", 4, {
//     x: 600,
//     y: 250,
//     rotation: 3600,
//     scale: 2,
//     backgroundColor: "blue",
//     backgroundColor: "yellow",
//     backgroundColor: "purple"
// });