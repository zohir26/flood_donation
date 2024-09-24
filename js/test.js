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
  
//   // Donation event listener
//   document.getElementById("card-donate-btn").addEventListener('click', function(event) {
//     event.preventDefault();
  
//     const cardDonationInput = document.getElementById("card-donation-input").value;
  
//     // Validate donation input
//     if (cardDonationInput <= 0) {
//       alert('Please enter a valid amount');
//       return;
//     }
//     if (isNaN(cardDonationInput)) {
//       alert('Please enter a valid amount');
//       return;
//     }
  
//     const cardDonationBalance = parseFloat(cardDonationInput);
//     const cardWallet = document.getElementById("card-wallet").innerText;
//     const cardWalletBalance = parseFloat(cardWallet);
//     const cardNewBalance = cardDonationBalance + cardWalletBalance;
  
//     // Update card wallet balance
//     document.getElementById("card-wallet").innerText = cardNewBalance;
  
//     const accountBalance = document.getElementById("account-balance").innerText;
//     const account = parseFloat(accountBalance);
//     const newAccountBalance = account - cardDonationBalance;
  
//     // Check if the user has sufficient balance
//     if (newAccountBalance < 0) {
//       alert('You do not have sufficient balance');
//       return;
//     } 
  
//     // Update account balance
//     document.getElementById("account-balance").innerText = newAccountBalance;
  
//     // Show success message via modal
//     openModal();
  
//     // Add donation info to history section
//     const p = document.createElement('p');
//     p.innerText = `${cardDonationInput} Tk is donated for Flood at Noakhali, Bangladesh`;
//     document.getElementById("history-section").appendChild(p);
  
//     return;
//   });
  