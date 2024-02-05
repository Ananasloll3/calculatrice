const line11 = document.querySelector(".line1-1")
const line12 = document.querySelector(".line1-2")
const line13 = document.querySelector(".line1-3")
const line14 = document.querySelector(".line1-4")
const line21 = document.querySelector(".line2-1")
const line22 = document.querySelector(".line2-2")
const line23 = document.querySelector(".line2-3")
const line24 = document.querySelector(".line2-4")
const line31 = document.querySelector(".line3-1")
const line32 = document.querySelector(".line3-2")
const line33 = document.querySelector(".line3-3")
const line34 = document.querySelector(".line3-4")
const line41 = document.querySelector(".line4-1")
const line42 = document.querySelector(".line4-2")
const line43 = document.querySelector(".line4-3")
const line44 = document.querySelector(".line4-4")
const line51 = document.querySelector(".line5-1")
const line52 = document.querySelector(".line5-2")
const line53 = document.querySelector(".line5-3")
const spanNumero = document.querySelector(".resultat")
const spanAncien = document.querySelector(".ancien")


var listeButton = {line11, line12, line13, line14, line21, line22, line23, line24, line31, line32, line33,line34, line41, line42, line43, line44, line51, line52, line53}
var getNum = "";
var nombre1 = ""
var nombre2 = "";
var signe = ""


//------------------------------------------------------------------------------------
//Function

function printNumeros(number){
    spanNumero.innerHTML = number;
}

function plus(){
    if (nombre1.length > 0 && getNum === "+")
    {
        getNum = ""
        return 0
    }
    nombre1 = getNum;
    getNum = "";
    signe = "+";
    spanNumero.innerHTML = getNum;
    spanAncien.innerHTML = nombre1
};

function moin(){
    if (nombre1.length > 0 && getNum === "-")
    {
        getNum = ""
        return 0
    }
    nombre1 = getNum;
    getNum = "";
    signe = "-";
    spanNumero.innerHTML = getNum;
    spanAncien.innerHTML = nombre1
};

function divise(){
    if (nombre1.length > 0 && getNum === "/")
    {
        getNum = ""
        return 0
    }
    nombre1 = getNum;
    getNum = "";
    signe = "/";
    spanNumero.innerHTML = getNum;
    spanAncien.innerHTML = nombre1
};

function fois(){
    if (nombre1.length > 0 && getNum === "*")
    {
        getNum = ""
        return 0
    }
    nombre1 = getNum;
    getNum = "";
    signe = "*";
    spanNumero.innerHTML = getNum;
    spanAncien.innerHTML = nombre1
};

function egale(){
    nombre2 = getNum
    spanAncien.innerHTML = ""
    if (nombre2 === "")
    {
        getNum = "0";
        spanNumero.innerHTML = getNum;
        return 1;
    }
    let resultat = 0

    if (signe === "+")
    {
        resultat = parseFloat(nombre1) + parseFloat(nombre2);
    }
    else if (signe === "-")
    {
        resultat = parseFloat(nombre1) - parseFloat(nombre2);
    }
    else if (signe === "/")
    {
        resultat = parseFloat(nombre1) / parseFloat(nombre2);
    }
    else if (signe === "*")
    {
        resultat =  parseFloat(nombre1) * parseFloat(nombre2);
    }

    getNum = "";
    nombre1 = "";
    nombre2 = "";
    spanNumero.innerHTML = resultat;
}


//------------------------------------------------------------------------------------
//Boutton Haut

listeButton.line11.addEventListener("click", clickAdd => {
    getNum = "";
    printNumeros(getNum);
});

listeButton.line12.addEventListener("click", clickAdd => {
    getNum = (getNum - getNum) - getNum;
    printNumeros(getNum)
});

listeButton.line13.addEventListener("click", clickAdd => {
    var temp = parseFloat(getNum)
    temp = temp / 100;
    getNum = temp
    printNumeros(getNum)
});


//------------------------------------------------------------------------------------
//Autre

listeButton.line52.addEventListener("click", clickAdd => {
    getNum += "."
    printNumeros(getNum);
});


//------------------------------------------------------------------------------------
//Boutton Numeros

listeButton.line21.addEventListener("click", clickAdd => {
    getNum += "7";
    printNumeros(getNum);
});

listeButton.line22.addEventListener("click", clickAdd => {
    getNum += "8";
    printNumeros(getNum);
});

listeButton.line23.addEventListener("click", clickAdd => {
    getNum += "9";
    printNumeros(getNum);
});

listeButton.line31.addEventListener("click", clickAdd => {
    getNum += "4";
    printNumeros(getNum);
});

listeButton.line32.addEventListener("click", clickAdd => {
    getNum += "5";
    printNumeros(getNum);
});

listeButton.line33.addEventListener("click", clickAdd => {
    getNum += "6";
    printNumeros(getNum);
});

listeButton.line41.addEventListener("click", clickAdd => {
    getNum += "1";
    printNumeros(getNum);
});

listeButton.line42.addEventListener("click", clickAdd => {
    getNum += "2";
    printNumeros(getNum);
});

listeButton.line43.addEventListener("click", clickAdd => {
    getNum += "3";
    printNumeros(getNum);
});

listeButton.line51.addEventListener("click", clickAdd => {
    getNum += "0";
    printNumeros(getNum);
});


//---------------------------------------------------------------------------------------
//Plus, Moin, Multiplication, Addision

listeButton.line14.addEventListener("click", clickAdd => { // /
    divise();
});


listeButton.line24.addEventListener("click", clickAdd => { // *
    fois();
});


listeButton.line34.addEventListener("click", clickAdd => { // -
    moin();
});


listeButton.line44.addEventListener("click", clickAdd => { // +
    plus();
});

listeButton.line53.addEventListener("click", clickAdd => { // =
    egale();
});




