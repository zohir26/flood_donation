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