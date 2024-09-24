document.getElementById("card-donate-btn-2").addEventListener('click',function(event){
    event.preventDefault();
  
  
    const cardDonationInput = document.getElementById("card-donation-input-2").value;
  
    if(cardDonationInput < 0){
          alert ('Please enter a valid amount')
          return;
    }
    if(isNaN(cardDonationInput)){
      alert ('Please enter a valid amount')
      return;
  }
    const cardDonationBalance = parseFloat(cardDonationInput); 
    const cardWallet = document.getElementById("card-wallet-2").innerText;
    const cardWalletBalance = parseFloat(cardWallet);
    const cardNewBalance= (cardDonationBalance + cardWalletBalance);
   
    const cardBalance= document.getElementById("card-wallet-2").innerText = cardNewBalance; 
    const accountBalance = document.getElementById("account-balance").innerText;
    const account = parseFloat(accountBalance);
  
  
  
    const newAccountBalance= (account - cardDonationBalance);
  
    if(newAccountBalance < 0){
      alert( 'You do not have sufficient balance');
     return;
    }
    else{
      alert ( ' Thanks For Donating For Flood')
    } 
  
    const accountFinal= document.getElementById("account-balance").innerText = newAccountBalance;
  
   
    
    return  cardBalance,  accountFinal;
  
  })