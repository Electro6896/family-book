var images = ["download.jpg","download (1).jpg","download (2).jpg","images.jpg"];
var names = ["Soni Singh ","Alia Singh","Rohan Singh","Diljeet Singh"];
var i=0;
function update() {
    i++;

    var family_in_array = 3;
    if(i>family_in_array) 
    {
        i=0
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("img_array").src = updatedImage;
    document.getElementById("text_array").innerHTML = updatedName;
    
}