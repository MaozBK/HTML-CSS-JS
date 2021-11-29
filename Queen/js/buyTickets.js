//index page 
document.getElementById("orderTickets").addEventListener("change", calcSum)
document.getElementById("enterLotteryBtn").addEventListener("click", enterLottery)
document.getElementById("order-tickets-btn").addEventListener("click", orderTickets)
const TICKET_PRICE = 73;

//onload is a listener, which is also equal to window.addEventListener(type:'load')
window.onload = () => {
    document.getElementById("ticket-price").innerHTML = TICKET_PRICE.toString() + '$';
}

class Order {
    totalPrice;
    numOfTickets;
    currency;
    constructor(numOfTickets) {
        this.numOfTickets = numOfTickets
        this.totalPrice = numOfTickets * TICKET_PRICE;
        this.currency = '$'
    }
}


function calcSum() {
    let num = parseInt(document.getElementById("orderTickets").value)
    document.getElementById("orderSum").innerHTML = num * TICKET_PRICE + '$'
}

function orderTickets() { // Entering function to order tickets
    let num = parseInt(document.getElementById("orderTickets").value)   //parse int making sure number is Integer and no floating point 
    let order = new Order(num)
    let text = "You have successfully ordered " + num + " tickets for " + order.totalPrice + order.currency
    document.getElementById("orderSummary").innerHTML = text;

}
//Lottery function of winning tickets to the show, 
function enterLottery() {
    let rand = Math.random()  //using Random Math function 
    let lotteryResultElement = document.getElementById("lottery-result")
    if(rand <= 0.1) {    //Low percentage of winning
        lotteryResultElement.innerHTML = "Congratulations, you won!!"
    } else {
        lotteryResultElement.innerHTML = "Sorry, you lost. Better luck next time."
    }
    document.getElementById("enterLotteryBtn").disabled = true
}


