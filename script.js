"use strict"

//1 uzduotis
document.getElementById("patvirtinimas").addEventListener("click", function() {
    let valandos = 0, minutes = 0, sekundes = 0;
    sekundes = parseFloat(document.getElementById("sekundes").value);
    console.log("sekundes" + sekundes);
    while(sekundes >= 3600) {
        valandos++
        sekundes = sekundes - 3600;
        if(valandos >= 24) {
            valandos = valandos % 24;
        }
        

    }
    while(sekundes >= 60) {
        minutes++;
        sekundes = sekundes - 60;
        if(minutes >= 60) {
            minutes = minutes % 60;
        }
    }
    console.log("valandos " + valandos);
    console.log("minutes " + minutes);
    console.log("sekundes " + sekundes);

    var laikas=document.getElementById("laikas");
    laikas.innerHTML = valandos + ":" + minutes + ":" + sekundes;
});


//2 uzduotis
document.getElementById("ivesti").addEventListener("click", function() {
    let skaicius = 0, pirmasZenklas = 0, antrasZenklas = 0, treciasZenklas = 0; 
    skaicius = document.getElementById("skaicius").value;
    let suma = 0, vidurkis = 0, sandauga = 0;
    if (999 > skaicius && skaicius > 100 ) {
        pirmasZenklas = skaicius % 10;
        skaicius = parseInt(skaicius / 10); 
        antrasZenklas = skaicius % 10;
        treciasZenklas = parseInt(skaicius / 10);
        console.log("pirmas " + pirmasZenklas + ", antras "+ antrasZenklas + ", trecias " + treciasZenklas);
        
        suma = pirmasZenklas + antrasZenklas + treciasZenklas;
        sandauga = pirmasZenklas * antrasZenklas * treciasZenklas;
        vidurkis = suma / 3;

    }
       var rezultatas = document.getElementById("rezultatas");
       rezultatas.innerHTML = `Skaitmenų suma=${suma}, sandauga=${sandauga}, vidurkis=${vidurkis}`;

})

// 3 uzduotis
document.getElementById("ivedimas").addEventListener("click", function(){
    let a = 0, b = 0, c = 0, x1 =0, x2 = 0, d = 0;
    a = document.getElementById("1sk").value;
    b = document.getElementById("2sk").value;
    c = document.getElementById("3sk").value;
    let sprendimas = document.getElementById("sprendimas");
    d = (b * b) - (4 * a * c);
    if (d < 0) {
        sprendimas.innerHTML = `Sprendimo nera`;
        console.log(d);
    }

    if (d == 0) {
        x1 = -1 * (b / (2 * a));
        console.log(d);
        sprendimas.innerHTML = `Atsakymas: ${x1}`;
    }
    
    if (d > 0) {
        x1 = -b + Math.sqrt((b * b) - (4 * a * c));
        x2 = -b + Math.sqrt((b * b) + (4 * a * c));
        console.log(d, x1, x2)
        sprendimas.innerHTML = `Atsakymai: x1=${x1} ir x2=${x2}`
    }
    
})


