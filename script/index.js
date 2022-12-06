function calculateScrollIndicatorPosition(){
    const scrollItems = document.getElementsByClassName("scroll-item");
        for(let i = 0; i < scrollItems.length; i++){
            if(window.scrollY + (window.innerHeight * 0.5) >= scrollItems[i].offsetTop && window.scrollY+ (window.innerHeight * 0.5) <= scrollItems[i].offsetTop + (scrollItems[i].offsetHeight)){
               const scrollPositions =  document.getElementsByClassName("scroll-position");
               for(let j = 0; j < scrollPositions.length; j++){
                    if(scrollPositions[j].attributes["for"].value === "#" + scrollItems[i].id){
                        console.log(scrollPositions[j].attributes["for"].value);
                        const scrollIndicator = document.getElementById("scroll-indicator");
                        scrollIndicator.style.top = (scrollPositions[j].offsetTop - 20) + "px";
                        console.log({element: scrollItems[i], offsetTop: scrollItems[i].offsetTop, offsetBottom: scrollItems[i].offsetTop + scrollItems[i].offsetHeight});
                    }
               }
            }
        }
}

window.onload = function(){
   
    window.addEventListener("scroll", function(event){
        calculateScrollIndicatorPosition();
    });

    calculateScrollIndicatorPosition();
};