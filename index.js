const btnEnviar = document.getElementById('btn-enviar')
const labelNome = document.getElementById('label-nome').innerHTML
const labelSobrenome = document.getElementById('label-sobrenome').innerHTML
const labelEmail = document.getElementById('label-email').innerHTML

function imprimirValores() {
    const nome = document.getElementById('nome').value
    const sobrenome = document.getElementById('sobrenome').value
    const email = document.getElementById('email').value

    const resposta = document.getElementById('resposta')

    const cabecalho = document.createElement('div')
    const res = document.createElement('div')
    const h3 = document.createElement('h3')
    const n1 = document.createElement('p')
    const n2 = document.createElement('p')
    const n3 = document.createElement('p')



    cabecalho.setAttribute('class', 'cabecalho')
    res.setAttribute('class', 'res')
    h3.innerHTML = 'Resultado:'
    n1.innerHTML = `${labelNome} = ${nome}`
    n2.innerHTML = `${labelSobrenome} = ${sobrenome}`
    n3.innerHTML = `${labelEmail} = ${email}`

    resposta.appendChild(cabecalho)
    resposta.appendChild(res)
    cabecalho.appendChild(h3)
    res.appendChild(n1)
    res.appendChild(n2)
    res.appendChild(n3)
}

btnEnviar.addEventListener('click', imprimirValores)