function verificaCPFsInvalidos(cpf){
    const cpfsInvalidos = [
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
        "00000000000"
    ]
    return cpfsInvalidos.indexOf(cpf) === -1
}

function somaNumerosCPF(cpf, totalDeDigitos, peso){
    let soma = 0;
    for(let i = 1; i<= totalDeDigitos; i++){
        soma += parseInt(cpf.substring(i - 1, i)) * (peso - i);
    }
    return soma;
}

function verificaDigito(cpf, totalDeDigitos, peso, digitoVerificacao){
    const soma = somaNumerosCPF(cpf, totalDeDigitos, peso);
    const resto = (soma *10) % 11;
    return resto === digitoVerificacao;
}

function verificaPrimeiroDigito(cpf){
    const peso = 11;
    const totalDeDigitosPrimeiraParte = 9;
    const digitoVerificacao = parseInt(cpf.substring(9, 10))

    return verificaDigito(cpf, totalDeDigitosPrimeiraParte, peso, digitoVerificacao);
}

function verificaSegundoDigito(cpf){
    const peso = 12;
    const totalDeDigitosSegundaParte = 10;
    const digitoVerificacao = parseInt(cpf.substring(10, 11))
    
    return verificaDigito(cpf, totalDeDigitosSegundaParte, peso, digitoVerificacao);

}

function validaCPF(cpf){
    return(
        verificaPrimeiroDigito(cpf)&&
        verificaSegundoDigito(cpf)&&
        verificaCPFsInvalidos(cpf)
    )
}