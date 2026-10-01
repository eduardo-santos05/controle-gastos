export default function formatarGasto(gasto, numero) {
    return `${numero}. ${gasto.descricao} - R$ ${gasto.valor.toFixed(2)}`
}