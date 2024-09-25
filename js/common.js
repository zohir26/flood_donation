//global variable an empty array where i can push my history for loop through
let transactionHistory = [];

// modal
// function openModal () {
//   const modal = document.getElementById("donation-modal");
//   modal.classList.remove ("hidden");
// }

// function closeModal () {
//   const modal = document.getElementById (" donation-modal"); 
//   modal.classList.add("hidden")
// }
// document.getElementById ("close-modal-Btn").addEventListener ('click', closeModal) ;

// common Function
function commonFunction(cardDonationInputId, cardWalletId, accountBalanceId, donationPurpose) {
  const cardDonationInput = document.getElementById(cardDonationInputId).value;

  // Validate donation input
  if (cardDonationInput <= 0) {
    alert('Please enter a valid amount');
    return;
  }
  if (isNaN(cardDonationInput)) {
    alert('Please enter a valid amount');
    return;
  }

  const cardDonationBalance = parseFloat(cardDonationInput);
  const cardWallet = document.getElementById(cardWalletId).innerText;
  const cardWalletBalance = parseFloat(cardWallet);
  const cardNewBalance = cardDonationBalance + cardWalletBalance;

  // Update card wallet balance
  document.getElementById(cardWalletId).innerText = cardNewBalance;

  const accountBalance = document.getElementById(accountBalanceId).innerText;
  const account = parseFloat(accountBalance);
  const newAccountBalance = account - cardDonationBalance;

  // Check if the user has sufficient balance
  if (newAccountBalance < 0) {
    alert('You do not have sufficient balance');
    return;
  }
  else{
    alert(`Thanks for Donating for ${donationPurpose}`);
  }

  // Update account balance
  document.getElementById(accountBalanceId).innerText = newAccountBalance;

// openModal();
  

  // Add donation info to history section
  const currentDate = new Date();
  const date= currentDate.toLocaleDateString();
  const time = currentDate.toLocaleTimeString();
  const transaction = `${cardDonationInput} Tk is donated for ${donationPurpose} on ${date} at ${time}`;
  transactionHistory.push(transaction);

  // const p = document.createElement('p');
  // const currentDate = new Date ();

  // document.getElementById("history-section").appendChild(p);

  return cardNewBalance, newAccountBalance;
}



// Add event listeners to the donate buttons for each card
document.getElementById("card-donate-btn").addEventListener('click', function(event) {
  event.preventDefault();
 commonFunction('card-donation-input', 'card-wallet', 'account-balance', 'Flood at Noakhali, Bangladesh');
});

document.getElementById("card-donate-btn-2").addEventListener('click', function(event) {
  event.preventDefault();
  commonFunction('card-donation-input-2', 'card-wallet-2', 'account-balance', 'Donate for Flood Relief in Feni,Bangladesh');
});

document.getElementById("card-donate-btn-3").addEventListener('click', function(event) {
  event.preventDefault();
  commonFunction ('card-donation-input-3', 'card-wallet-3', 'account-balance', 'Aid for Injured in the Quota Movement');
});



document.getElementById("history-btn").addEventListener('click', function(){
  
  const historySection= document.getElementById("history-section");
  historySection.removeAttribute("hidden")
  historySection.innerHTML = "";
  // historySection.innerHTML = '';
  // run the for of loop
  transactionHistory.forEach(function (transaction) {
    const p = document.createElement('p');
    p.innerText = transaction;
    historySection.appendChild(p);
  });

}
)
