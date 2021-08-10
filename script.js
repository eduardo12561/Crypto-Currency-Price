let baseUrl = "https://api.coinranking.com/v2/coins"
let proxyUrl = "https://cors-anywhere.herokuapp.com/"
let apiKey = "coinranking6755b983571fe1c00b45d885445fd1d4b97dd8ad7a4511df"



fetch(`${proxyUrl}${baseUrl}`, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'x-acess-token': `${apiKey}`,
        'Access-Control-Allow-Origin': '*'
    }
}).then((response) => {
    if(response.ok) {
        response.json().then((json) => {
         
            let coinsData = json.data.coins

            if(coinsData.length > 0) {
                var cryptoCoins = ""
            }

            // For Loop Starts
            coinsData.forEach((coin) => {
                cryptoCoins += "<tr>"
                cryptoCoins += `<td> ${coin.uuid} </td>`;
                cryptoCoins += `<td> ${coin.btcPrice} </td>`;
                cryptoCoins += `<td> ${coin.rank} </td>`;
                cryptoCoins += `<td> ${coin.tier} </td>`;
                cryptoCoins += `<td> ${coin.name} </td>`;
                cryptoCoins += `<td> $${Math.round(coin.price)}</td>`;
                cryptoCoins += `<td> ${coin.symbol} </td>`;"</tr>";
            })
            document.getElementById("data").innerHTML = cryptoCoins
        })
    }
}).catch((error) => {
    console.log(error)
})


document.getElementById("refresh").addEventListener('click', function ()     {
    window.location.reload(1);
});


