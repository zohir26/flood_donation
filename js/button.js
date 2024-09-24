document.getElementById("history-btn").addEventListener('click', function(){
    const donationBtn = document.getElementById("donation-btn");
    donationBtn.classList.remove("bg-green-300");
    const historyBtn = document.getElementById("history-btn");
    historyBtn.classList.add("bg-green-300");
})

document.getElementById("donation-btn").addEventListener('click', function(){
    const donationBtn = document.getElementById("donation-btn");
    donationBtn.classList.add("bg-green-300");
    const historyBtn = document.getElementById("history-btn");
    historyBtn.classList.remove("bg-green-300");
})

const donationBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");
const donation = document.getElementById ( "donation");
const historySection = document.getElementById ( "history-section"); 

function showDonationSection () {
    donation.style.display = "block";
    historySection.style.display = "none";
    donation.classList.add = "active";
    historySection.classList.remove("active") ;
    

}

function showHistorySection () {
    donation.style.display = "none";
    historySection.style.display = "block";
    donation.classList.remove = "active";
    historySection.classList.add("active") ;
}

document.getElementById("donation-btn").addEventListener('click', showDonationSection);

document.getElementById ("history-btn") . addEventListener( 'click' , showHistorySection);