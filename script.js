const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-seclect")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")// valor em real
    const currencyValueConverted = document.querySelector(".currency-value")// outras moedas

    console.log(currencySelect.value)

    const dolarToday = 5.2
    const euroToday = 6.2
    const ieneToday = 0.038
    const BolivianoToday = 0.8

    if (currencySelect.value == "Dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)


    }

    if (currencySelect.value == "Iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-ja", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / ieneToday)


    }

    if (currencySelect.value == "Boliviano") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-bo", {
            style: "currency",
            currency: "BOB"
        }).format(inputCurrencyValue / BolivianoToday)


    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (currencySelect.value == "Dolar") {
        currencyName.innerHTML = "Dolar americano"
        currencyImg.src = "./assents/usA.png"
    }

    if (currencySelect.value == "Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assents/Euro.png"

    }

    if (currencySelect.value == "Iene") {
        currencyName.innerHTML = "Iene"
        currencyImg.src = "./assents/Iene.png"

    }

    if (currencySelect.value == "Boliviano") {
        currencyName.innerHTML = "Boliviano"
        currencyImg.src = "./assents/BS.png"

    }
    convertValues()

}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

