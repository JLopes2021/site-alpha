function abrirMensagens() {
    let email_pessoa = ""
    let senha_pessoa = ""
    
    if (email === email_pessoa ){
        alert("Ok, você está cadastrado(a) no sistema!") 
        var confirmaSenha = prompt("Só preciso confirmar a sua senha. Insira a sua senha.")
        if (confirmaSenha === senha_pessoa){
            document.getElementById('mensagem_escrita').innerHTML = 
            " <h4>Pessoa, essas são as suas mensagens</h4>" + "<p2>Mensagens que mandaram para mim</p2>"
        } else {
           alert("Seu email não consta na base de dados")
           return
        }
    }
