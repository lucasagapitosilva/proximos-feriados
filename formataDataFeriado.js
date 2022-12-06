const formataDiaSemana = (dataFeriado) => {

    let diaDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']

    return diaDaSemana[dataFeriado.getDay()]

}

const formataDataFeriado = (dataFeriado) => {

    const diaFeriado = dataFeriado.getDate()
    const mesFeriado = dataFeriado.getMonth() +1
    const anoFeriado = dataFeriado.getFullYear()

    const dataExibicao = diaFeriado + '/' + mesFeriado + '/' + anoFeriado

    return dataExibicao

}

export {formataDiaSemana, formataDataFeriado}