export default function calcularTotal(gastos) {
    let total = 0
    for (let i = 0; i < gastos.length; i++) {
        total += gastos[i].valor
    }
    return total
}