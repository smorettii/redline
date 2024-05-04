setInterval(() => {
    const kms = document.querySelector("#cobrarkm").querySelector("input").value

    if (Number(kms) && Number(kms) >= 3) {
        document.querySelector("#cobrarkm").querySelector("h1").textContent = `Para ${kms} Km's você deverá cobrar o adicional de: R$ ${(kms - 3) * 500}`
    } else {
        document.querySelector("#cobrarkm").querySelector("h1").textContent = `R$ 00,00`
    }
})
let valores = 0
let last = null
setInterval(() => {
    const kits = document.querySelector("#cobrarkits").querySelector("input").value;

    if (last == null || kits !== last) {
        const valorTotal = kits * 5000;
        last = kits
        const impostoTotal = 60000;
        const impostoPorKit = impostoTotal / 30;
        const impostoPorKitFormatado = impostoPorKit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        const imposto = kits * impostoPorKit;
        const impostoFormatado = imposto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        document.querySelector("#cobrarkits").querySelector("h1").innerHTML = `${kits} Kits, Valor: R$ ${valorTotal.toLocaleString('pt-br', { style: "currency", currency: "BRL" })}<br>Imposto por kit: ${impostoPorKitFormatado}<br>Imposto total: ${impostoFormatado}<br>Seu lucro: ${(valorTotal - imposto).toLocaleString('pt-br', { style: "currency", currency: "BRL" })}\n<br><button id="somar">Somar</button>`;
    
        document.querySelector("#cobrarkits").querySelector("button").addEventListener("click", () => {
            valores = valores + valorTotal
        })
    }
}, 1);



let last2 = null
setInterval(() => {
    if (last2 == null || valores !== last2) {
        last2 = valores
        document.querySelector("#carros").querySelector("h1").innerHTML = `${valores.toLocaleString('pt-bt', {style:'currency',currency:'BRL'})}<br><button onclick="copiar(cobrar ${valores})">Copiar comando [cobrar]</button>`
    }
    
}, 10)

function copiar(texto) {
    navigator.clipboard.writeText(texto)
}

document.querySelector("#limpar").addEventListener("click", () => {
    valores = 0
})
document.querySelectorAll("#aumentar").forEach(button => {
    const alt = Number(button.getAttribute('alt'))

    button.addEventListener("click", () => {
        valores = valores + alt
    })
})