var xhr = new XMLHttpRequest;
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {

        var images = JSON.parse(xhr.responseText);
        console.log(images[12].name);
        var list = "";
        for (let i = 0; i < images.length; i += 4) {
            list += `<img src="${images[i].images.thumbnail}">`;
            console.log(i);

        }

        var list2 = "";
        for (let i = 1; i < images.length; i += 4) {
            list2 += `<img src="${images[i].images.thumbnail}">`;
            console.log(i);
        }

        var list3 = "";
        for (let i = 2; i < images.length; i += 4) {
            list3 += `<img src="${images[i].images.thumbnail}">`;

        }

        var list4 = "";
        for (let i = 3; i < images.length; i += 4) {
            list4 += `<img src="${images[i].images.thumbnail}">`;

        }

        document.querySelector(".col1").innerHTML = list;
        document.querySelector(".col2").innerHTML = list2;
        document.querySelector(".col3").innerHTML = list3;
        document.querySelector(".col4").innerHTML = list4;

    }




};

xhr.open('GET', 'data/data.json');
xhr.send();