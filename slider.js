function moveSlider(direction){
    let sliderItems=sliderList.querySelectorAll(".item");
    let thumbnailItems=document.querySelectorAll(".thumbnail .item");
    if(direction === "next"){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        sliderItems.classList.add("next")
    }
    else{
        sliderList.prepend(sliderItems[sliderItems.length -1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length -1])
        sliderItems.classList.add("prev")
    }
}