import fs from 'node:fs'
import formatarGasto from './formatarGasto.js'
import calcularTotal from './calcularTotal.js'

export default function salvarRelatorio(gastos) {
    let relatorio = 'Relatório de Gastos\n'
    let total = calcularTotal(gastos)
    for (let i = 0; i < gastos.length; i++) {
        relatorio += formatarGasto(gastos[i], i + 1) + '\n'
    }
    relatorio += `Total: R$ ${total.toFixed(2)}\n\n`
    fs.appendFileSync('relatorio.txt', relatorio, 'utf8')
}