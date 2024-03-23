let select = document.querySelectorAll('.form-control'),
inners = document.getElementById('inners'),
finalValue = document.getElementById('finalValue');


const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then((data) => data.json())
  .then((data) => {
    const entries = Object.entries(data);
    
    for(i =0; i < entries.length; i++){
        select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    }
  });
  function converter() {
    let inn_val = parseFloat(inners.value);
    if (select[0].value != select[1].value) {
        const host = 'api.frankfurter.app';
        fetch(`https://${host}/latest?amount=${inn_val}&from=${select[0].value}&to=${select[1].value}`)
        .then((response) => response.json())
        .then((data) => {
            finalValue.textContent = Object.values(data.rates)[0].toFixed(2);
        })
        .catch((error) => {
            console.error('Error fetching exchange rate:', error);
        });
} else {
    alert("Please select two different currencies");
}
}
document.addEventListener("DOMContentLoaded", function () {
    
    const exchangebutton = document.getElementById("exchangebutton");
    exchangebutton.addEventListener("click", exchangeCurrencies);
});

function exchangeCurrencies() {
    
    const fromCurrencyDropdown = document.getElementById("sel1");
    const toCurrencyDropdown = document.getElementById("sel2");

    
    const fromCurrencyValue = fromCurrencyDropdown.value;
    const toCurrencyValue = toCurrencyDropdown.value;

   
    fromCurrencyDropdown.value = toCurrencyValue;
    toCurrencyDropdown.value = fromCurrencyValue;
}
 