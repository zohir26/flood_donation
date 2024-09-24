// // Function to open the modal
// function openModal() {
//     document.getElementById("donationModal").style.display = "flex";
//   }
  
//   // Function to close the modal
//   function closeModal() {
//     document.getElementById("donationModal").style.display = "none";
//   }
  
//   // Add event listener to the close button
//   document.getElementById("closeModalBtn").addEventListener("click", closeModal);



//   document.getElementById("card-donate-btn").addEventListener('click',function(event){
//     event.preventDefault();
  
  
//     const cardDonationInput = document.getElementById("card-donation-input").value;
  
//     if(cardDonationInput < 0){
//           alert ('Please enter a valid amount')
//           return;
//     }
//     if(isNaN(cardDonationInput)){
//       alert ('Please enter a valid amount')
//       return;
//   }
//     const cardDonationBalance = parseFloat(cardDonationInput); 
//     const cardWallet = document.getElementById("card-wallet").innerText;
//     const cardWalletBalance = parseFloat(cardWallet);
//     const cardNewBalance= (cardDonationBalance + cardWalletBalance);
   
//     const cardBalance= document.getElementById("card-wallet").innerText = cardNewBalance; 
//     const accountBalance = document.getElementById("account-balance").innerText;
//     const account = parseFloat(accountBalance);
  
  
  
//     const newAccountBalance= (account - cardDonationBalance);
  
//     if(newAccountBalance < 0){
//       alert( 'You do not have sufficient balance');
//      return;
//     }
//     else{
//       alert ( ' Thanks For Donating For Flood')
//     } 
  
//     const accountFinal= document.getElementById("account-balance").innerText = newAccountBalance;
  
//     // history section
//   //  const historyBtn = document.getElementById("history-btn") 
//   //  const p = document.createElement ('p');
//   //  p.innerText = `${cardDonationInput} Tk is donated for Flood at Noakhali, Bangladesh` ;
//   //  const xyz= document.getElementById("history-section").appendChild(p);
 
//     return  cardBalance,  accountFinal;
  
//   })