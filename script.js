const hamburgerContainerTag=document.querySelector(".hamburgerContainer")
const overLayMenuTag=document.querySelector(".overLayMenu");
const liTags=document.getElementsByTagName("li")

const hamburgerLine1=document.querySelector(".line1")
const hamburgerLine2=document.querySelector(".line2")
const hamburgerLine3=document.querySelector(".line3")

hamburgerContainerTag.addEventListener("click", ()=>{
    if(hamburgerContainerTag.classList.contains("isClicked")){
        hamburgerLine2.classList.remove("hideLine2");
        hamburgerLine1.classList.remove("rotateLine1");
        hamburgerLine3.classList.remove("rotateLine3");
        hamburgerContainerTag.classList.remove("isClicked");
        overLayMenuTag.classList.remove("showOverLayMenu")
        for( let i=0; i<liTags.length; i++){
            liTags[i].classList.remove("moveLiTagUp")
        }

    }
    else{
        overLayMenuTag.classList.add("showOverLayMenu");
        hamburgerLine2.classList.add("hideLine2");
        hamburgerLine1.classList.add("rotateLine1");
        hamburgerLine3.classList.add("rotateLine3");
        hamburgerContainerTag.classList.add("isClicked");
        for( let i=0; i<liTags.length; i++){
            liTags[i].classList.add("moveLiTagUp")
        }

    }
   


})

