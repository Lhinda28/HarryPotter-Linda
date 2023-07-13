const xhr = new XMLHttpRequest();

xhr.open("GET", "https://hp-api.onrender.com/api/characters/house/hufflepuff");
xhr.send();

xhr.responseType="json";
xhr.onload=()=> {
    console.log(xhr);
    if (xhr.readyState == 4 && xhr.status==200){
        const data =xhr.response;
        console.log(data);
        var studentList = data.map(x => x.name);
        console.log(studentList);
        var content = document.getElementById('HufflepuffDiv');
        // Crea el elemento <ul> (lista desordenada)
        var ul = document.createElement("ul");

        // Recorre el array y crea un <li> (elemento de lista) por cada elemento
        for (var i = 0; i < studentList.length; i++) {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(studentList[i]));
            ul.appendChild(li);
        }

        // Agrega la lista <ul> al elemento <div>
        content.appendChild(ul);

    }else{
        console.log(`Error: ${xrh.status}`)
    }
}