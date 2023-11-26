let macaco = ['Orangotango', 'Chimpanzé', 'Gorila', 'Babuíno', 'Macaco-aranha', 'Macaco-prego', 'Macaco-narigudo', 'Macaco-negro', 'Mico-leão-dourado', 'Macaco-da-noite', 'Bugio', 'Mandril', 'Macaco-preto-de-nariz-arrebitado', 'Gibão', 'Macaco-japonês', 'Langur-de-ouro', 'Sagui'];

function gerar() {
    let aleatorio = macaco[Math.floor(Math.random() * macaco.length)];
    console.log(aleatorio);
    res.innerHTML = `${aleatorio}`;
    res.style.textAlign = 'center';
    var img = document.createElement('img');
    foto.innerHTML= '';
    img.setAttribute('width', '100%');

    if (aleatorio == ['Orangotango']) {
        img.setAttribute('src', 'foto-orangotango.jpeg');
    } else if (aleatorio == ['Chimpanzé']) {
        img.setAttribute('src', 'foto-chimpanze.jpg');
    } else if (aleatorio == ['Gorila']) {
        img.setAttribute('src', 'foto-gorila.jpg');
    } else if (aleatorio == ['Babuíno']) {
        img.setAttribute('src', 'foto-babuino.jpg');
    } else if (aleatorio == ['Macaco-aranha']) {
        img.setAttribute('src', 'foto-macacoaranha.png');
    } else if (aleatorio == ['Macaco-prego']) {
        img.setAttribute('src', 'foto-macacoprego.jpg');
    } else if (aleatorio == ['Macaco-narigudo']) {
        img.setAttribute('src', 'foto-macaconarigudo.jpeg');
    } else if (aleatorio == ['Macaco-negro']) {
        img.setAttribute('src', 'foto-macaconegro.jpg');
    } else if (aleatorio == ['Mico-leão-dourado']) {
        img.setAttribute('src', 'foto-micoleaodourado.jpg');
    } else if (aleatorio == ['Macaco-da-noite']) {
        img.setAttribute('src', 'foto-macacodanoite.jpg');
    } else if (aleatorio == ['Bugio']) {
        img.setAttribute('src', 'foto-bugio.jpg');
    } else if (aleatorio == ['Mandril']) {
        img.setAttribute('src', 'foto-mandril.jpg');
    } else if (aleatorio == ['Macaco-preto-de-nariz-arrebitado']) {
        img.setAttribute('src', 'foto-macacopretodenarizarrebitado.jpg');
    } else if (aleatorio == ['Gibão']) {
        img.setAttribute('src', 'foto-gibao.jpg');
    } else if (aleatorio == ['Macaco-japonês']) {
        img.setAttribute('src', 'foto-macacojapones.jpg');
    } else if (aleatorio == 'Langur-de-ouro') {
        img.setAttribute('src', 'foto-langurdeouro.jpg');
    } else if (aleatorio == ['Sagui']) {
        img.setAttribute('src', 'foto-sagui.jpg');
    }

    foto.appendChild(img);
}