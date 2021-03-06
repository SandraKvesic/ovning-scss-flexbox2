/* 
fade-on-scroll.js
Author: Sandra Kvesic
Created: October 2018
*/

function setAlpha(alpha) {
    $("nav").css("background-color" , "rgba(0, 0, 0," + alpha + ")");
}

function calcAlpha() {
    //Definiera variabeln för alfa-värdet
    let alpha = 0; 
    
    //Definierar en variabel för hur långt det är till toppen av HTML-dokumentet
    let scroll = $(document).scrollTop();

    //Vid vilken pixel ska toningen starta
    const fadeStart = 100;

    //Vid vilken pixel ska toningen sluta
    const fadeStop = 200;

    //Hur långt det är mellan start och stop
    const fadeLength = fadeStop - fadeStart;

    //Vi har tre cases, mellan 0 och fadeStart, mellan fadeStart och fadeStop, samt från fadeStop till oändligheten (och vidare)
    if (scroll < fadeStart) {
        alpha = 0;
    } else if (scroll < fadeStop) {
        alpha = (scroll - fadeStart) / fadeLength;
    } else {
        alpha = 1;
    }

    //Returnera vad alpha nu har blivit efter vår uträkning
    return alpha;
}

$(document).scroll(function() {
    setAlpha(calcAlpha());
});


