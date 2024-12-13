
/*Função pra inserir os dados no cartão*/
function atualizar_cartao() {

    /*Pegando os dados dos inputs*/


    /*Frente do cartão*/
    /*Nome*/
    const nome = document.getElementById("nome_titular").value;

    /*Número do cartão*/
    const numero_cartao = document.getElementById("numero_cartao").value;

    /*Mês*/
    const mes = document.getElementById("mes").value;

    /*Ano*/
    const ano = document.getElementById("ano").value;


    /*Verso do cartão*/
    /*CVC*/
    const cvc = document.getElementById("cvc").value;





    /*Atualizando os dados do cartão*/


    document.getElementById("id-nome_cartao").innerHTML = nome || "Nome Titular";

    document.getElementById("id-numero_cartao").innerHTML = numero_cartao || "XXXX XXXX XXXX XXXX";

    document.getElementById("id-expira_cartao").innerHTML = mes && ano ? `${mes}/${ano}` : "MM/YY";

    document.getElementById("id-cvc_cartao").innerHTML = cvc || "CVC";






    








}

