const amountElement = document.getElementById('amount');
const currency = document.getElementById('fromCurrency');
const currencyNew = document.getElementById('toCurrency');
const button = document.getElementById('convertBtn');
const finalResult = document.getElementById('result');

const rates = {
  USD: 1,
  EUR: 0.92,
  UAH: 41,
  RUB: 90
}

button.addEventListener('click' , function(){
    const amount = amountElement.value; 
    const startCurrency  = currency.value; 
    const endCurrency = currencyNew.value; 
    let convector = amount/rates[startCurrency]*rates[endCurrency];
    finalResult.textContent = convector;
});
 

