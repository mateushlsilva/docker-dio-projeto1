function cadastrar(){

    let saida = document.getElementById('saida')
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    axios.post("http://192.168.0.20:3001/users/cadastrar", 
        {name: nome,
        email: email,
        senha: senha} 
    ).then(res => showResponse(res))

    saida.innerHTML = <p> Usuario cadastrado com sucesso! </p>
}