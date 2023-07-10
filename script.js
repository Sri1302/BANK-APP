class Bank{
  constructor(balance){
    this.balance = balance 
  }
  deposit (amount) {
    this.balance += amount
    console.log(this.balance)
  }
  withdraw(amount){
    if(amount  <= this.balance){
    this.balance -=amount
    console.log(this.balance)
    }else{
      console.log('you exceeded your range','your balance is:', this.balance)
    }
  }
}
  
 
const venkat = new Bank(100)
console.log(venkat.balance)
venkat.deposit(100)
venkat.withdraw (250)

const input = document.getElementById('input')
const balance = document.getElementById('balance')

const deposit = document.getElementById('deposit')
deposit.onclick = () =>{
  venkat.deposit(Number(input.value))
  balance.innerText = `${venkat.balance}`
}


const withdraw = document.getElementById('withdraw')
withdraw.onclick = () =>{
  venkat.withdraw(Number(input.value))
  balance.innerText = `${venkat.balance}`
}
  


