const div1 = document.querySelector('.resultado-1');
const div2 = document.querySelector('.resultado-2');
const div3 = document.querySelector('.resultado-3');
const divError = document.querySelector('.msg-error');
const botao = document.querySelector('.btn-geog');

async function BuscarPaís() {
    
    const nome = document.getElementById("input-pais").value;

    // Validação simples: evita buscar se o input estiver vazio
    if (!nome) {
        divError.innerHTML = "Por favor, digite o nome de um país.";
        return;
    }

    // Limpa estados anteriores e prepara a UI
    divError.innerHTML = "";
    div1.innerHTML = "Carregando...";
    div2.innerHTML = "Carregando...";
    div3.innerHTML = "";
    botao.disabled = true;

    try {
        // CORREÇÃO: Aspas e protocolo completo na URL
        const resposta = await fetch(`https://restcountries.com/v3.1/name/${nome}`);

        if (!resposta.ok) {
            throw new Error("País não encontrado");
        }

        const dados = await resposta.json();

        if (!dados || dados.length === 0) {
            throw new Error("Sem dados");
        }

        const pais = dados[0];

        // Monta conteúdo da primeira coluna
        div1.innerHTML = `
            <p><strong>${pais.name.common}</strong></p>
            <p><strong>Capital:</strong> ${pais.capital ? pais.capital[0] : 'N/A'}</p>
            <p><strong>Região:</strong> ${pais.region}</p>
            <p><strong>População:</strong> ${pais.population.toLocaleString('pt-BR')}</p>
        `;

        // Monta conteúdo da segunda coluna
        div2.innerHTML = `
            <p><strong>Área:</strong> ${pais.area.toLocaleString('pt-BR')} km²</p>
            <p><strong>Coordenadas:</strong> ${pais.latlng.join(', ')}</p>
            <p><strong>Sub-região:</strong> ${pais.subregion || 'N/A'}</p>
            <p><strong>Continente:</strong> ${pais.continents.join(', ')}</p>
        `;

        // Exibe a bandeira
        div3.innerHTML = `<img src="${pais.flags.png}" alt="Bandeira de ${pais.name.common}" width="150">`;

    } catch (erro) {
        divError.innerHTML = "Erro: " + erro.message;
        div1.innerHTML = "";
        div2.innerHTML = "";
        div3.innerHTML = "";
    } finally {
        // Sempre reativa o botão, independente de sucesso ou erro
        botao.disabled = false;
    }
}