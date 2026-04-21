async function BuscarPaís() {
    var nome = document.getElementById("input-pais").value;
    var div1 = document.querySelector('.resultado-1');
    var div2 = document.querySelector('.resultado-2');
    var div3 = document.querySelector('.resultado-3');
    var divError = document.querySelector('.msg-error');

           
    div1.innerHTML = "Carregando...";
    div2.innerHTML = "Carregando...";

await fetch("https://restcountries.com/v3.1/name/" + nome)
    .then(function(resposta) {
        if (resposta.ok) {
            return resposta.json();
        } else {
            divError.innerHTML = "Erro ao buscar país";
            div1.innerHTML = "";
            div2.innerHTML = "";
        }
    })
    .then(function(dados) {
        var pais = dados[0];

        var conteudo1 = "<strong><p>" + pais.name.common + "</strong></p>";

        conteudo1 += "<p><strong>Capital:</strong> " + pais.capital + "</p>";

        conteudo1 += "<p><strong>Região:</strong> " + pais.region + "</p>";

        conteudo1 += "<p><strong>População:</strong> " + pais.population + "</p>";


        var conteudo2 = "<p><strong>Área:</strong> " + pais.area + "</p>";

        conteudo2 += "<p><strong>Coordenadas:</strong> " + pais.latlng + "</p>";

        conteudo2 += "<p><strong>Sub-região:</strong> " + pais.subregion + "</p>";

        conteudo2 += "<p><strong>Continente:</strong> " + pais.continents + "</p>";


        var bandeira = "<img src='" + pais.flags.png + "' width='150'>";

        div1.innerHTML = conteudo1;
        div2.innerHTML = conteudo2;
        div3.innerHTML = bandeira
    })
    .catch(function(erro) {
        divError.innerHTML = "Erro ao buscar país";
    });
}