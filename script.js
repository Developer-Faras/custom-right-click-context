const contextMenu = document.querySelector('.content'),
    dropdwonContent = document.querySelector('.dropdwon-content');


document.addEventListener("contextmenu", (e)=>{
    e.preventDefault();

    contextMenu.style.visibility = "visible";
    contextMenu.style.display = "block";

    let x = e.offsetX,
        y = e.offsetY,
        winHeight = window.innerHeight,
        winWidth = window.innerWidth,
        cmWidth = contextMenu.offsetWidth,
        cmHeight = contextMenu.offsetHeight;

    if(x > (winWidth - cmWidth - dropdwonContent.offsetWidth)){
        dropdwonContent.style.left = "-210px";
        dropdwonContent.style.right = "";
    }else{
        dropdwonContent.style.left = "";
        dropdwonContent.style.right = "-210px";
    }


    contextMenu.style.top = `${y}px`;
    contextMenu.style.left = `${x}px`;
});


document.addEventListener("click", ()=>{
    contextMenu.style.visibility = "hidden";
    contextMenu.style.display = "none";
})