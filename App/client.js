getList = function(){
    console.log("Get list")
    fetch('http://localhost:3000/cities')
    .then(response => response.json())
    .then(
        data => {
            var panel = document.createElement("div");
            data.list.forEach(element => {
                var card = document.createElement("h1");
                card.innerText = element.namess;
                panel.appendChild(card)
            });
            var body = document.getElementById("main");
            body.appendChild(panel);
        }
    );
}

$(document).ready(function() {
    $( "#buttonJquery" ).click(function() {
        $.ajax({
            url: "http://127.0.0.1:3000/cities",
            success: function( result ) {
                JSON.parse(result).list.forEach(element => {
                    $("body").append('<h1>' + element.namess + '</h1>');
                });
            }
        });
    });
});

registerData2 = function(){
    const formulario = document.forms['Formulario']
    fetch('http://localhost:3000/registerCity', {
            method: 'POST',
            headers:{
                "code" : document.getElementById('code').value,
                "namecity" : document.getElementById('name').value,
                "namecountry" : document.getElementById('nameCountry').value,
                "namecontinent" : document.getElementById('nameContinent').value,
            }
        })
        .then(response => response.json())
       .then(
            data => {
                var panel = document.createElement("div");
                data.list.forEach(element => {
                    var card = document.createElement("h1");
                    card.innerText = element.code;
                    panel.appendChild(card)
                });
                var body = document.getElementById("main");
                body.appendChild(panel);
            }
        );
    formulario.reset()
    formulario.elements[0].focus()
}