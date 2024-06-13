const macacos = {
    'Orangotango': 'foto-orangotango.jpg',
    'Chimpanzé': 'foto-chimpanze.jpg',
    'Gorila': 'foto-gorila.jpg',
    'Babuíno': 'foto-babuino.jpg',
    'Macaco-aranha': 'foto-macacoaranha.png',
    'Macaco-prego': 'foto-macacoprego.jpg',
    'Macaco-narigudo': 'foto-macaconarigudo.jpeg',
    'Macaco-negro': 'foto-macaconegro.jpg',
    'Mico-leão-dourado': 'foto-micoleaodourado.jpg',
    'Macaco-da-noite': 'foto-macacodanoite.jpg',
    'Bugio': 'foto-bugio.jpg',
    'Mandril': 'foto-mandril.jpg',
    'Macaco-preto-de-nariz-arrebitado': 'foto-macacopretodenarizarrebitado.jpg',
    'Gibão': 'foto-gibao.jpg',
    'Macaco-japonês': 'foto-macacojapones.jpg',
    'Langur-de-ouro': 'foto-langurdeouro.jpg',
    'Sagui': 'foto-sagui.jpg',
    'Bonobo': 'foto-bonobo.jpg',
    'Cairara-de-fronte-branca': 'foto-cairaradefrontebranca.jpeg',
    'Macaco-lesula': 'foto-macacolesula.jpg',
    'Gibão-cristado-de-Hainan': 'https://upload.wikimedia.org/wikipedia/commons/2/26/Nomascus_nasutus_hainanus.jpg',
    'Macaco-prego-dourado': 'https://upload.wikimedia.org/wikipedia/commons/6/6d/S._flavius_SP_Zoo_3.jpg',
    'Simpona': 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Silky_Sifaka_Pink_Face_Closeup.JPG',
    'Macaco-birmanês-de-nariz-empinado': 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Drawing_of_Rhinopithecus_strykeri.jpg',
    'Mico-leão-de-cara-preta': 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Leontopithecus_caissara.jpg',
    'Gorila-do-oriente': 'https://upload.wikimedia.org/wikipedia/commons/0/02/I%27m_sooooo_tired.jpg',
    'Muriqui-do-norte': 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Northern_Muriqui_9.jpg',
    'Mico-leão-preto': 'https://upload.wikimedia.org/wikipedia/commons/b/be/Mico_leao_preto_SP_Zoo.jpg',
    'Kipunji': 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Kipunji_walking_h.jpg',
    'Muriqui-do-sul': 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Brachyteles_arachnoides.jpg',
    'Gibão-de-topete': 'https://upload.wikimedia.org/wikipedia/commons/1/13/White_Cheeked_Gibbon_Male.jpg',
    'Lóris-delgado-vermelho': 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Loris_tardigradus_tardigradus_002.jpg',
    'Colobo-vermelho-de-zanzibar': 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Red_Colobus_7.jpg',
    'Lêmure-do-alaotra': 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Hapalemur_alaotrensis_JJLM.JPG',
    'Gibão-prateado': 'https://upload.wikimedia.org/wikipedia/commons/6/60/Silbergibbon_mit_Nachwuchs.jpg',
    'Langur-de-ouro': 'https://upload.wikimedia.org/wikipedia/commons/2/22/Golden_Langur.jpg',
    'Lêmure-delicado-dourado': 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Hapalemur_aureus_001.jpg',
    'Sagui-de-cabeça-branca': 'https://upload.wikimedia.org/wikipedia/commons/8/89/Saguinus_oedipus_%28Linnaeus%2C_1758%29.jpg',
    'Mico-leão-de-cara-dourada': 'https://upload.wikimedia.org/wikipedia/commons/4/44/Goldkopfloewenaeffchen1.jpg',
    'Orangotango-de-sumatra': 'https://upload.wikimedia.org/wikipedia/commons/0/08/Who_you_lookin%27_at%3F.jpg',
    'Macaco-de-gibraltar': 'https://upload.wikimedia.org/wikipedia/commons/4/40/Portrait_of_a_father.jpg',
    'Langur-de-nilgiri': 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Nilgiri_Langur.JPG',
    'Orangotango-de-bornéu': 'https://upload.wikimedia.org/wikipedia/commons/d/d3/OrangutanP1.jpg',
    'Gorila-do-ocidente': 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Western_Lowland_Gorilla_at_Bronx_Zoo_2_cropped.jpg',
    'Chimpanzé-comum': 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Gombe_Stream_NP_Jungtier_fressend.jpg',
    'Gelada': 'https://upload.wikimedia.org/wikipedia/commons/1/13/Gelada-Pavian.jpg',
    'Gibão-de-müller-de-bornéu': 'https://upload.wikimedia.org/wikipedia/commons/a/a0/MuellersGibbon.jpg',
    'Mico-ladrão-safado': 'foto-micoladraosafado.jpg'
};

function gerar() {
    const nomesMacacos = Object.keys(macacos);
    const aleatorio = nomesMacacos[Math.floor(Math.random() * nomesMacacos.length)];
    console.log(aleatorio);

    const res = document.getElementById('res');
    const foto = document.getElementById('foto');

    res.innerHTML = aleatorio;

    const img = document.createElement('img');
    img.setAttribute('src', macacos[aleatorio]);
    img.setAttribute('width', '100%');

    foto.innerHTML= '';
    foto.appendChild(img);
}