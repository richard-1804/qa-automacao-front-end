async function BuscarPaís() {
    const nome = document.getElementById("input-pais").value;
    const div1 = document.querySelector('.resultado-1');
    const div2 = document.querySelector('.resultado-2');
    const div3 = document.querySelector('.resultado-3');
    const divError = document.querySelector('.msg-error');
    const botao = document.querySelector('.btn-geog');

    // Limpa estados anteriores
    divError.innerHTML = "";
    div1.innerHTML = "Carregando...";
    div2.innerHTML = "Carregando...";
    div3.innerHTML = "";

    
    botao.disabled = true;

    try {
        const resposta = await fetch(`https://restcountries.com/v3.1/name/${nome}`);

        if (!resposta.ok) {
            throw new Error("País não encontrado");
        }

        const dados = await resposta.json();

        // Segurança extra
        if (!dados || dados.length === 0) {
            throw new Error("Sem dados");
        }

        const pais = dados[0];

        // Monta conteúdo
        div1.innerHTML = `
            <p><strong>${pais.name.common}</strong></p>
            <p><strong>Capital:</strong> ${pais.capital?.[0] || 'N/A'}</p>
            <p><strong>Região:</strong> ${pais.region}</p>
            <p><strong>População:</strong> ${pais.population}</p>
        `;

        div2.innerHTML = `
            <p><strong>Área:</strong> ${pais.area}</p>
            <p><strong>Coordenadas:</strong> ${pais.latlng}</p>
            <p><strong>Sub-região:</strong> ${pais.subregion}</p>
            <p><strong>Continente:</strong> ${pais.continents}</p>
        `;

        div3.innerHTML = `
            <img src="${pais.flags.png}" width="150">
        `;

    } catch (erro) {
        divError.innerHTML = "Erro ao buscar país";

        div1.innerHTML = "";
        div2.innerHTML = "";
        div3.innerHTML = "";
    } finally {
        // Sempre reativa o botão
        botao.disabled = false;
    }
}
