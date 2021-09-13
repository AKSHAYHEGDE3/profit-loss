const initialPrice = document.getElementById('ip')
const quantity = document.getElementById('qty')
const currentPrice = document.getElementById('cp')
const btn = document.getElementById('btn')
const msg = document.getElementById('msg')



btn.addEventListener('click',()=>{
    if(initialPrice.value && quantity.value && currentPrice.value){
        const totalInitialPrice=initialPrice.value*quantity.value
        const totalCurrentPrice=currentPrice.value*quantity.value
        if(totalInitialPrice < totalCurrentPrice){
            console.log('profit')
            const profit=totalCurrentPrice - totalInitialPrice
            const profitPercentage=(profit/totalInitialPrice)*100
            console.log(profit)
            console.log(profitPercentage.toFixed(2))
            msg.innerText=`Congrats, you are in profit of $${profit} and the percent is ${profitPercentage.toFixed(2)}%🥳`
            msg.style.color='green'
            msg.style.backgroundColor='white'
            msg.style.fontSize='1.5rem'
        } else if(totalInitialPrice > totalCurrentPrice ){
            console.log('loss')
            const loss=totalInitialPrice - totalCurrentPrice
            const lossPercentage=(loss/totalInitialPrice)*100
            console.log(loss)
            console.log(lossPercentage.toFixed(2))
            msg.innerText=`You are in loss of $${loss} and the percent is ${lossPercentage.toFixed(2)}%😭`
            msg.style.color='red'
            msg.style.backgroundColor='white'
            msg.style.fontSize='1.5rem'
        } else {
            msg.innerText=`The price is stable`
            msg.style.color='#f0ad4e'
            msg.style.backgroundColor='white'
            msg.style.fontSize='1.5rem'
        }
  } else {
      console.log('invalid')
  }
})