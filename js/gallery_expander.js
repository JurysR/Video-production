function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    var imgTitle = document.getElementById("imgtitle");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    imgTitle.innerHTML = imgs.title;
    expandImg.parentElement.style.display = "block";
};