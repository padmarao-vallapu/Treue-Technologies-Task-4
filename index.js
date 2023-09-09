let imgBox = document.getElementById("fullImgBox")
let fullImg = document.getElementById("fullImg")

function openFullimg(pic){
    imgBox.style.display = "flex"
    fullImg.src = pic
}

function closeFullImg(){
    imgBox.style.display = "none"
}