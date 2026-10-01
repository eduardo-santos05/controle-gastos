import PromptSync from "prompt-sync"
const prompt = PromptSync()

import criarGasto from "./criarGasto.js"

function exibirMenu() {
    console.log("\n=== Controle de Gastos ===")
    console.log("1. Registrar gasto")
    console.log("2. Listar gastos")
    console.log("3. Ver total gasto")
    console.log("4. Salvar relatório")
    console.log("0. Sair")
}

let gastos = []

let opcao
do {
    exibirMenu()
    opcao = prompt("Escolha uma opção: ")
    switch (opcao) {
        case "1":
            let descricao = prompt("Digite a descrição do gasto: ")
            let valor = Number(prompt("Digite o valor do gasto (R$): "))
            criarGasto(descricao, valor)
            gastos.push(criarGasto(descricao, valor))
            console.log("Gasto registrado!")
            break
        case "0":
            console.log("Encerrando o controle de gastos. Até a próxima!")
            break
        default:
            console.log("Opção inválida.")
            break
    }
} while (opcao !== "0")