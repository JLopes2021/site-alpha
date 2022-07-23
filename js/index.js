function abrirMensagens() {
    let email_jefferson = "jeffinho.je8@gmail.com"
    let senha_jefferson = "12345"

    let email_larissa = "lariap.contato@gmail.com"
    let senha_larissa = "Eclo_44,1.10-15"

    let email_renan = "bernardino140501@gmail.com"
    let senha_renan = "2Cor_4,7-15"

    let email_pedro = "pedroreis571@gmail.com"
    let senha_pedro = "Os_8,4-7.11-13"

    let email_padre = "silvanospalves@gmail.com"
    let senha_padre = "1Rs_19,16b.19-21"

    let email_vinicius = "vczanotti@gmail.com"
    let senha_vinicius = "Jr_18,1-6"

    let email_julia = "juliacostabrasil@gmail.com"
    let senha_julia = "Ecl_1,2;2,21-23"

    let email_paulo = "paulomatos640@gmail.com"
    let senha_paulo = "At_11,19-26"

    let email_anaP = "anapaula.marinhos@hotmail.com"
    let senha_anaP = "Jr_15,10.16-21"

    let email_maria = "maafeehbsa@gmail.com"
    let senha_maria = "At_5,17-26"

    var nome = prompt ("Coloque o seu nome")
    var email = prompt("Coloque o seu email")

  

    
    var confirmacao = prompt(" Seu nome é " + nome + " e seu email é " + email + " ?" + " Digite 1 para SIM ou DIGITE 2 para NÃO")
    if (confirmacao === 1){
        
    }
    
    if (email === email_jefferson || email === email_larissa || email === email_renan || email === email_pedro || 
        email === email_padre || email === email_vinicius || email === email_julia || email === email_paulo || 
        email === email_anaP || email === email_maria){
        alert("Ok, você está cadastrado(a) no sistema!") 
        var confirmaSenha = prompt("Só preciso confirmar a sua senha. Insira a sua senha.")
        if (confirmaSenha === senha_jefferson){
            document.getElementById('mensagem_escrita').innerHTML = 
            " <h4>Jefferson, essas são as suas mensagens</h4>" + "<p2>Mensagens que mandaram para mim</p2>"
        }if (confirmaSenha === senha_larissa){
            document.getElementById('mensagem_escrita').innerHTML = 
            " <h4>Larissa, essas são as suas mensagens</h4>"+ "<br>" + "<h3>Jefferson</h3>" + "<p2>Olá, você é uma enviada de Deus em minha vida mais que especial. Não vou falar aqui sobre namoro quero falar da Larissa, minha liderada. Como todos, a Larissa possui alguns medos, porém, esses medos muitas vezes são bem menores do que você consegue enxergar.\r\nSeu potencial de liderança e pregação são enorme, porém, tome certos cuidados consigo mesma,\r\nnós sabemos que sua sensibilidade é muito aflorada e você capta no ar muitas coisas sem que ninguém fale nada. Você é uma filha muito amada de Nossa Senhora e mora dentro do coração de Jesus Cristo.\r\nAssuma ainda hoje o seu papel de protagonismo no Reino. PS: Essa célula é uma preparação para nossa casa cheia no futuro</p2>" +"<br><br>" +"<h3>Padre Silvano</h3>" +"<p2>Como é bom conhecermos pessoas especiais como você que nos leva para Deus. Que nos dá a oportunidade de fortalecermos nosso propósito na evangelização, de lutar pelas almas, de direcionar quem tem dúvidas na sua vocação, vibrar com as vitórias desejadas por Deus. Pessoas como você é um presente de Deus. Espero ter a oportunidade com os demais irmãos vivermos como irmãos sempre nesta comunhão, vida fraterna e comunitária. Rezo muito por ti. Faço votos que você realize todos os seus sonhos, que são sonhos de Deus, já que é filha predileta de Deus, filha de Maria Imaculada.Deus abençoe sempre, Atenciosamente, Pe. Silvano Alves de Maria </p2>" 
           +"<br><br>" + "<h3>Vinicius</h3>"+ "<p2> Não tenha medo das coisas de Deus deixa ele te usar na caminhada </p2>" + "<br><br>" + "<h3>Maria Fernanda</h3>" +  "<p2> Oi madrinhaaaaa! Ai já queria começar te agradecendo pelo tanto que você pra mim, desde dezembro de 2020, pq me aguentar não é fácil, tenho total ciência disso... Obrigada por cuidar e sempre estar aqui. Pode ter certeza que você foi uma das melhores escolhas que eu tive para madrinha, juro, eu tenho certeza que disso eu não vou me arrepender nunca! Eu amo você demais e agradeço a Deus por poder partilhar a minha vida com você!!</p2>" +
           "<h3>Ana Paula</h3>"+ "<p2>Rezo e peço sempre a Deus pra te cuidar, assim como todas as vezes cuidou de mim fisicamente e espiritualmente, tem coisas que só Deus pode nos explicar, acho que a nossa amizade é uma delas, se eu for contar a tonelada de processos e tudo que já vivemos daria um grande textão kkkk, mas sinceramente, de todas as pessoas que eu imaginei que poderiam ficar na minha vida ou 'ir embora', você era uma das  pessoas que me passou pela mente que não permaneceria, e é engraçado que todo mundo de certa forma foi.. e você ficou, obrigada por nunca ter desistido de mim, eu amo você um montão</p2>" + "<br><br>" 
        } if (confirmaSenha === senha_renan){
            document.getElementById('mensagem_escrita').innerHTML = 
            " <h4>Renan, essas são as suas mensagens</h1>"+ "<br>" + "<h3>Jefferson</h3>" + "<p2> Vamos lá garotão! O primeiro de tudo: Que Deus volte a ser tudo na sua vida! Quero ver novamente aquele cara que ardia pelo EVANGELHO! Aquele mano que quando INTERCEDE o inferno TREME! Defeitos todos nós temos, só não podemos deixar com que eles nos influenciem em decisões que não são bem pensadas. O mover espiritual que eu tenho para você é que: VOLTE, AINDA HOJE! JESUS TEM PRESSA! E seja mais firme nas suas decisões, que seu sim seja SIM e que seu não seja NÃO </p2>" +"<br><br>" +
            "<h3>Maria Fernanda</h3>" + "<p2> Oi vida, queria estar ai mas saiba que de coração estou! Eu queria dizer que estou orgulhosa da pessoa que está se tornando e, mesmo que você já saiba, estou aqui pra te apoiar, ou pra te dar uns socos, em tudo! Que você continue sendo cada vez mais esse grande homem de Deus! Que seu maior exemplo seja São José, tanto na vida como na paternidade e seu lugar na nossa família! Sou grata demais por ter você! Você é o melhor presente que Deus me deu, muito mais do que um dia eu já pedi a ele!Que juntos possamos viver a santidade, levar nossa família ao céu e que o nosso matrimônio seja testemunho vivo para todos ao nosso redor, principalmente aos que estão mais próximos de nós! Eu te amo muito muito mesmo! Não vejo a hora de ser uma só carne com você!            </p2>" +"<br><br>" +
            "<h3>Pedro</h3>" + "<p2> Mateus 5:37 (se vira fi, pega a bíblia KKKKKKK [Jefferson falando aqui])</p2>" +"<br><br>"
        } if (confirmaSenha === senha_pedro){
            document.getElementById('mensagem_escrita').innerHTML = 
            "<h4> Pedro, essas são as suas mensagens</h4>"+ "<br>" + "<h3>Jefferson</h3>" + "<p2> Fiz questão de deixar a sua mensagem por ultimo para eu me concentrar mais, então lá vai: Pedro, quem é o Pedro Henrique? Um garoto acelerado? avoado? Quer as coisas para ontem? Inocente em muitas coisas? Nada disso ou qualquer outra definição humana. o PEDRO é aquilo que Deus pensa dele. E cara, Ele pensa muito grande e sonha muito alto com você. Já parou para perceber que você é um dos caras mais tentados na célula? É claro, você é o PROFETA com as suas palavras e o EVANGELISTA com a sua vida! Deixa que quando você trouxer as ovelhas eu me viro para cuidar e ensinar, mas já fica sabendo que se elas fugirem do redil, você vai comigo ir atrás da ovelha! Deus tem coisas grandes na sua vida e isso não é nenhuma novidade, mas ele tem um algo mais hoje, um filho amado que por tempos não se sente em casa....que não se sente capaz...que as vezes quer mandar o rolê na vida velha! Cê ta sabendo que se eu te ver por aí fazendo merda eu vou atrás de você né? Tu pode ta fazendo o que for, eu vou atrás e te faço voltar para casa. Mas, tiveram uns tempos aí para trás que você precisou sair né? Notou que eu não fui atrás né? A ovelha nunca esquece o cheiro da sua casa, né COLO DE DEUS? Tudo que você precisar viver, viva nesse carisma maravilhoso que é o nosso! <br> Agora, os puxões de orelha: Mano, se liga fi, a vida não é so compor as musiquinha e enfiar a cara no violão não, tem um mundo em sua volta que necessita da sua atenção. Deixa que as músicas vão voltar a vir por consequência, se esforce um pouco mais do seu corpo humano, se dê mais de você mesmo. Um Colo de Deus é colo para Deus também....mas nesse caso, é a gente que deita no colo d'Ele! Volte a deitar no colo d'Ele também. É isso man, precisando é só chamar </p2>" +"<br><br>" +
            "<h3>Maria Fernanda</h3>" + "<p2>Oii amigo, já te falei o quanto você é insuportável né? Mas também já te falei o quanto você é importante pra mim! Bom, hoje estou aqui só para te agradecer por tudo e por todos os momentos de alegria e os de tristeza que você também esteve ao meu lado, 3 horas da manhã ainda kkkk. Tenho orgulho em dizer que sou sua amiga, juro. Você é uma das pessoas mais especiais que eu já conheci, e como eu já disse milhares de vezes, um dos melhores presentes que Deus me deu! Que você continue sempre assim amigo, levando muitas almas pra Jesus! Pode contar sempre comigo, você sabe disso! To aqui para absolutamente TUDO! Sempre que precisar você vai ter sua irmã mais velha ahahahahha Só pra não perder o costume... VOCÊ É INSUPORTÁVEL! Amo você!            </p2>" +"<br><br>" +
            "<h3>Renan</h3>" + "<p2>PH: TE AMO MEU IRMÃO ❤️🔥</p2>" +"<br><br>" +
            "<h3>Paulo</h3>" + "<p2>Cara, só tenho a agradecer por ter te conhecido, tudo que estou vivendo e conhecendo é graças a você por ter sido tão incrível comigo. Lembre-se não é necessário você provar nada para ninguém e sim para Deus.✨ Conte comigo sompre❤️            </p2>" +"<br><br>" +
            "<h3>Vinícius</h3>" + "<p2> Deus está fazendo grandes coisas e precisa do seu sim para completar a obra </p2>" +"<br><br>" +
            "<h3>Julia</h3>" + "<p2>é muito bom ver seu coração tão cheio da presença de Deus… não que eu fale isso para ser um peso pra você, porque sei que os dias são difíceis e não é fácil! Mas, por mais que sua intenção não é mostrar para ninguém, sua perseverança deixa nítido oque você quer alcançá-lo alcançando mais coração para Deus ❤️ Coragem! Sua missão é muito importante ❤️ </p2>" +"<br><br>" 
        } if (confirmaSenha === senha_padre){
            document.getElementById('mensagem_escrita').innerHTML = 
            "<h4> Silvano, essas são as suas mensagens</h4>"+
            " <h4>Jefferson</h1>" + "<br>" +"<p2>Padre, não tenho muita coisa para te falar não, porém, quero que você saiba e que tenha isso bem claro: Quando vocÊ vive a sua vocação plenamente, nos inspira a viver a nossa também! Não aceite menos do que o que DEUS TEM PARA A SUA VIDA. Continue sempre sendo essa pessoa para cima e alegre e que tem o brilho no olhar pela sua vocação. Em pouco tempo, conseguiu cativar um lugar dentro do meu coração, onde eu confio e protejo. <br> PS: A comunidade de vida vai sair! Um dia, mas vai!</p2>" +"<br><br>"
        }if (confirmaSenha === senha_vinicius){
            document.getElementById('mensagem_escrita').innerHTML = 
            " <h1>Vinicius, essas são as suas mensagens</h1>"+ 
            " <h1>Jefferson</h1>" + "<br>" +"<p2>Vamo lá meu mano! Você precisa voltar cara, para a sua vocação original que está aí dentro de você em algum lugar, e você sabe bem qual é. Pare de ficar procurando em coisas ou pessoas, procure diante do Santissímo. (aliás, é a primeira coisa que você deve fazer ao voltar para São Paulo e ter uma folga, só saia da frente dele com a sua resposta). Já é, era isso mesmo.</p2>" +"<br><br>" + 
            " <h1>Larissa</h1>" + "<br>" +"<p2>Deus quer cuidar de você, mas toda vez que a benção está prestes a vir, você tira ela das mãos de Deus... Isso é triste, você precisa se abandonar na misericórdia de Deus!            </p2>" +"<br><br>"
        }if (confirmaSenha === senha_julia){
            document.getElementById('mensagem_escrita').innerHTML = 
            " <h4>Julia, essas são as suas mensagens</h4>"+ 
            " <h1>Jefferson</h1>" + "<br>" +"<p2>Como você sabe, nosso convívio ainda é muito pouco, mas saiba que já tive que te proteger muito viu? Coisas de líder, acontece, você tem uma potência espiritual enorme. Porém, você precisa organizar algumas coisas aí dentro né? Tome muito cuidado com aquelas conversas tortas que chegam até você, hoje em dia você tem um coração puro e que satanás através de outras pessoas tenta colocar contenda! Não caia nisso! Sempre que você precisar, venha até mim conversar, o mundo pode estar caindo, mas por vocÊs liderados eu paro tudo para ajudar. DICA: Dica nada, é Deus te mandando eu falar isso, 'sempre que você ouvir a história de alguém e eu colocar um ''?''  no seu coração, preciso que você ore e vá em direção as pessoas envolvidas para que voce saiba de fato as verdades. Eu estarei sempre contigo.'            </p2>" +"<br><br>" +
            " <h1>Vinicius</h1>" + "<br>" +"<p2>Nova fase de muitas mudanças que trarão pessoa íntimas para perto</p2>" +"<br><br>"
        }
        if (confirmaSenha === senha_paulo){
            document.getElementById('mensagem_escrita').innerHTML = 
            " <h4>Paulo, essas são as suas mensagens</h4>"+ 
            " <h1>Jefferson</h1>" + "<br>" +"<p2> Paulo, simples do jeito que eu gosto, a primeira vez na minha casa já meteu um chinelo no pé e veio, é desse jeito! Um dos poucos que entenderam o que é célula, observador como sempre sabe bem com quem pode falar as coisas e o que falar com as pessoas, se abra mais conosco sempre que for necessário. Abre a boca, que a gente ta sempre aqui, ou melhor, eu to sempre por aqui!</p2>" +"<br><br>" +
            " <h1>Larissa</h1>" + "<br>" +"<p2>Mesmo que a cruz esteja pesada, não desista! Jesus quer que você compartilhe o peso com ele</p2>" +"<br><br>" +
            " <h1>Ana Paula</h1>" + "<br>" +"<p2>Eu te admiro pra Caracass, desde o primeiro dia, de tudo que passou e passa pra estar aqui (Aqui literalmente) é sobre abrir mão de muita coisa, você nos ensina muito amigo, é aquela frase clichê e famosa 'te conheço a pouco tempo mas te considero pacas' kkkk eu sempre tenho a impressão que já te conheço a décadas, seja santo amigo, você ainda salvará muitas almas nesse mundão 🙏🏻❤️            </p2>" +"<br><br>" +
            " <h1>Vinicius</h1>" + "<br>" +"<p2>É preciso conhecer mais fundo para ter a certeza necessária</p2>" +"<br><br>" 
        }if (confirmaSenha === senha_anaP){
            document.getElementById('mensagem_escrita').innerHTML = 
            " <h4>Ana Paula ,essas são as suas mensagens</h4>"+ 
            " <h1>Jefferson</h1>" + "<br>" +"<p2>O mundo dá muitas e muitas voltas, uma da maior delas foi por a gente frente a frente para resolver um B.O. que eu nem sabia que eu tinha, mas amém! Deus me trouxe aqui para te direcionar em uma parada: Se você não fica de pé espiritualmente, satanás é quem fica! Agarra nesse terço aí e vai para cima, aquele dia na sua casa você presenciou uma manifestação espiritual na sua mãe. Imagina só o quanto mais Deus quer fazer através de vocÊ. Seja mais filha na sua casa, deixe seus pais serem apenas os pais.</p2>" +"<br><br>" +
            " <h1>Paulo</h1>" + "<br>" +"<p2>Não sei como explicar, mas parece que te conheço a muito tempo, a ligação foi muito boa. Quero te dizer, que independente do que esteja acontecendo Deus tem um propósito para você e sua família. Haverá muito cura e grandes milagres na sua família.✨            </p2>" +"<br><br>" 
        } if (confirmaSenha === senha_maria){
            document.getElementById('mensagem_escrita').innerHTML = 
            " <h4>Mafê ,essas são as suas mensagens</h1>"+ 
            " <h1>Jefferson</h1>" + "<br>" +"<p2>Acho que da célula toda, eu sou a pessoa que mais sabe e entende tudo que vocÊ passou de provas tão cedo na vida, pois bem, entendo tudo isso. Mas, é chegada a hora de você botar um remédio nessas feridas que ainda estão abertas e jorrando sangue por todo lugar onde você passa! Não, eu não vim aqui mandar mensagem de líderança e motivação, eu vim aqui te exortar mesmo! Você precisa entender que seu lugar é aos pés de Cristo, e de ninguém mais! Ele te confiou o Miguel, para ser sua santificação e santificação de quem cruzar com ele. Nunca, jamais, enquanto ele precisar deixe ele na mão de outros, sua salvação vai vim pelo Miguel, não é por outro filho! Não entende o motivo dele se confessar tanto? Pois é, seu filho já desde cedo tem algumas visões de ascese espiritual, mas nem adianta perguntar nada para ele agora, Deus só vai dexiar ele falar quando você tiver pronta. Você vai ser uma das primeiras pessoas a saber de tudo que ele vê e enxerga. <br> PS: PARA DE FICAR OUVINDO OS FUNK QUE NÃO TE LEVAM A NADA!</p2>" +"<br><br>" +
            " <h1>Renan</h1>" + "<br>" +"<p2>Mas falando sobre isso Não sei se ainda dá tempo Maria Fernanda: Te amo muito ❤️</p2>" +"<br><br>" 
        } } else {
           alert("Seu email não consta na base de dados")
           return
        }
    }
    


/*

*/
