let macaco = ['Orangotango', 'Chimpanzé', 'Gorila', 'Babuíno', 'Macaco-aranha', 'Macaco-prego']
console.log(macaco)
function gerar(){
    let aleatorio = macaco[Math.floor(Math.random() *macaco.length)];
    res.innerHTML = `${aleatorio}`
    res.style.textAlign = 'center'
    var img = document.createElement('img')
    foto.innerHTML= ''
    img.setAttribute('width', '100%')
    if (aleatorio == ['Orangotango']) {
        img.setAttribute('src', 'foto-orangotango.jpeg')
    } else if (aleatorio == ['Chimpanzé']) {
        img.setAttribute('src', 'foto-chimpanze.jpg')
    } else if (aleatorio == ['Gorila']) {
        img.setAttribute('src', 'foto-gorila.jpg')
    } else if (aleatorio == ['Babuíno']) {
        img.setAttribute('src', 'foto-babuino.jpg')
    } else if (aleatorio == ['Macaco-aranha']) {
        img.setAttribute('src', 'foto-macacoaranha.png')
    } else {
        img.setAttribute('src', 'foto-macacoprego.jpg')
    }
        foto.appendChild(img)
}