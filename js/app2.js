let imageNumber = localStorage.getItem("imageid");


var xhr2 = new XMLHttpRequest;
xhr2.onreadystatechange = function() {
    if (xhr2.readyState === 4) {

        var images2 = JSON.parse(xhr2.responseText);

        console.log(images2[imageNumber].name);
        document.getElementById("nameimage").innerHTML = images2[imageNumber].name;
        document.getElementById("year").innerHTML = images2[imageNumber].year;
        document.querySelector(".text").innerHTML = images2[imageNumber].description;
        document.getElementById("nameauthor").innerHTML = images2[imageNumber].artist.name;
        document.getElementById("authorphoto").innerHTML = `<img src="${images2[imageNumber].artist.image}">`;
        document.querySelector(".largeimage").style.backgroundImage = `url("${images2[imageNumber].images.hero.small}")`;
    }



};

xhr2.open('GET', 'data/data.json');
xhr2.send();