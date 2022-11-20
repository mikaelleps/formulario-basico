
    const Enviar = document.getElementById('enviar')
    const Nome = document.getElementById('nome').innerHTML
    const Sobrenome = document.getElementById('sobrenome').innerHTML
    const Email = document.getElementById('email').innerHTML

function dadosCadastrados() {
    const nome = document.getElementById('nome').value
    const sobrenome = document.getElementById('sobrenome').value
    const email = document.getElementById('email').value

    const resultado = document.getElementById('resultado')

    const header = document.createElement('div')
    const res = document.createElement('div')
    const h3 = document.createElement('h3')
    const n1 = document.createElement('p')
    const n2 = document.createElement('p')
    const n3 = document.createElement('p')

    header.setAttribute('class', 'header')
    res.setAttribute('class', 'res')
    h3.innerHTML = 'Resultado:'
    n1.innerHTML = `${Nome}Nome: ${nome}`
    n2.innerHTML = `${Sobrenome}Sobrenome: ${sobrenome}`
    n3.innerHTML = `${Email}Email: ${email}`

    resultado.appendChild(header)
    resultado.appendChild(res)
    header.appendChild(h3)
    res.appendChild(n1)
    res.appendChild(n2)
    res.appendChild(n3)
}

Enviar.addEventListener('click', dadosCadastrados)
