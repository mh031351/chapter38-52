
function colourChange (){
    var para =document.getElementById("para")
    var colourInput = prompt("Enter your paragraph colour")
    para.style.background = colourInput
}


function textColour(){
    var text =document.getElementById("text")
    var textColour = prompt("Enter your text colour")
    text.style.color = textColour
}

function hide(){
        
       var carImg = document.getElementById("carImg");
      carImg.className = "hidden"
                  
     }
    
    
    function imgControl (imgClass){
    
         var carImg = document.getElementById("carImg");    
         carImg.className += " bigImg"
    }
    

    
    function smalControl (imgClass){
    
        var carImg = document.getElementById("carImg");
        carImg.className += " smallImg"
   }

function toggler(i , element){
    
    if(i == 0){
        element.src = "./images/off.gif"
    }else{
         element.src = "./images/on.gif"

    }

}


var paras = document.getElementsByTagName("p")
for(var i = 0 ; i < paras.length ; i++){

    paras[4,9].style.color = "red"
    
}




function addColour(){
    var add =document.getElementById("text")
    var addColour = prompt("Enter your text colour")
    add.style.color = addColour
}