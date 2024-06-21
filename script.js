const macacos = {};

async function fetchSpecies() {
    const response = await fetch('https://api.gbif.org/v1/species/search?rank=SPECIES&highertaxon_key=798&limit=1000');
    if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
    }
    return await response.json();
}

async function fetchImage(speciesKey) {
    const response = await fetch(`https://api.gbif.org/v1/occurrence/search?mediaType=StillImage&speciesKey=${speciesKey}&limit=1`);
    if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
    }
    const data = await response.json();
    if (data.results && data.results[0] && data.results[0].media && data.results[0].media[0]) {
        return data.results[0].media[0].identifier;
    }
    return null;
}

async function fetchVernacularNames(speciesKey) {
    const response = await fetch(`https://api.gbif.org/v1/species/${speciesKey}/vernacularNames`);
    if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
    }
    return await response.json();
}

async function translateText(text, targetLang) {
    const baseUrl = 'https://api-free.deepl.com/';
    const url = `${baseUrl}?auth_key=${deepLApiKey}&text=${encodeURIComponent(text)}&target_lang=${targetLang}`;

    try {
        const response = await fetch(url, { method: 'POST' });
        if (!response.ok) {
            throw new Error(`Erro na tradução: ${response.statusText}`);
        }
        const data = await response.json();
        return data.translations[0].text;
    } catch (error) {
        console.error('Erro ao traduzir texto:', error);
        throw error;
    }
}

async function fetchMacacos() {
    try {
        const speciesData = await fetchSpecies();
        const promises = speciesData.results.map(async species => {
            try {
                const vernacularData = await fetchVernacularNames(species.key);
                let vernacularName = null;

                // Procurar por um nome vernacular em português
                const portugueseVernacular = vernacularData.results.find(vernacular => vernacular.language === 'por');
                if (portugueseVernacular) {
                    vernacularName = portugueseVernacular.vernacularName;
                    console.log(`Nome vernacular em português encontrado para a espécie com chave ${species.key}: ${vernacularName}`);
                } else {
                    // Se não houver nome em português, usar o nome em inglês
                    const englishVernacular = vernacularData.results.find(vernacular => vernacular.language === 'eng');
                    if (englishVernacular) {
                        vernacularName = englishVernacular.vernacularName;
                        console.log(`Nome vernacular em inglês utilizado para a espécie com chave ${species.key}: ${vernacularName}`);
                    }
                }

                // Se encontramos um nome vernacular, adicionamos ao objeto macacos
                if (vernacularName) {
                    const imageUrl = await fetchImage(species.key);
                    if (imageUrl) {
                        macacos[vernacularName] = imageUrl;
                    }
                }
            } catch (error) {
                console.error(`Erro ao obter nomes vernaculares para a espécie com chave ${species.key}:`, error);
            }
        });
        await Promise.all(promises);
    } catch (error) {
        console.error("Erro ao buscar espécies de macacos:", error);
    }
}

async function gerar() {
    const res = document.getElementById('res');
    res.innerHTML = 'Obtendo macacos...';

    try {
        if (Object.keys(macacos).length === 0) {
            await fetchMacacos();
        }
        const nomesMacacos = Object.keys(macacos);
        const aleatorio = nomesMacacos[Math.floor(Math.random() * nomesMacacos.length)];
        console.log(aleatorio);

        res.innerHTML = aleatorio;

        const foto = document.getElementById('foto');
        const img = document.createElement('img');
        img.setAttribute('src', macacos[aleatorio]);
        img.setAttribute('width', '100%');

        foto.innerHTML = '';
        foto.appendChild(img);
    } catch (error) {
        console.error("Erro ao gerar macaco:", error);
        res.innerHTML = 'Erro ao obter macacos';
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await fetchMacacos();
});
