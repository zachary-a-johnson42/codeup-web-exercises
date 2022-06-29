'use strict';



$('h1').click(function (){
    $('h1').css('background', 'lightblue')
})

$('p').dblclick(function (){
    $('p').css('font-size', '18px')
})

$('li').hover(() => { $('li').css('color', 'red')}, ()=>{ $('li').css('color', 'black')})
