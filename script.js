let container=document.querySelector(".container")
let hostingCard=document.getElementById("hostingCard")
let planName=document.getElementById("planName")
let planDetail=document.getElementById("planDetail")
const radioBtns = document.querySelectorAll('input[type="radio"]');
let buyBtn=document.getElementById("buyBtn")
let messageBox=document.querySelector(".message")

function HostingPlan(price,storage,bandwidth,domain){
this.price=price;
this.storage=storage;
this.bandwidth=bandwidth;
this.domain=domain

}

let BasicHosting=new HostingPlan(5,10,100,1)
let ProHosting=new HostingPlan(15,50,500,5)
let BusinessHosting=new HostingPlan(25,"unlimited","unlimited","unlimited")

// console.log({BasicHosting},{ProHosting},{BusinessHosting});


function SelectHandle(e){
    radioBtns.forEach((btn)=>{
let btns=btn.parentElement.parentElement
btns.classList.remove("selectedPlan")
// console.log(btn,btns);

    })
    let selectedPlan;
    if (e.target.value === "basic") {
      selectedPlan = BasicHosting;
      activePlan = "Basic Plan";
    } else if (e.target.value === "pro") {
      selectedPlan = ProHosting;
      activePlan = "Pro Plan";
    } else if (e.target.value === "business") {
      selectedPlan = BusinessHosting;
      activePlan = "Business Plan";
    }
  

    priceDiv.innerHTML = `
      <p>Price: $${selectedPlan.price}/month</p>
      <p>Storage: ${selectedPlan.storage}</p>
      <p>Bandwidth: ${selectedPlan.bandwidth}</p>
      <p>Domain: ${selectedPlan.domain}</p>
    `;

    buyBtn.innerHTML=`Buy ${activePlan}`

    let selectLabel=e.target.parentElement.parentElement
    selectLabel.classList.add("selectedPlan")

   
}

let activePlan = "Basic Plan";

radioBtns.forEach((radioBtn)=>{
radioBtn.addEventListener("change",SelectHandle)


})

window.addEventListener("load", function() {
    // Set the Basic plan as the default selection
    let priceDiv = document.getElementById("priceDiv");
    priceDiv.innerHTML = `
      <p>Price: $${BasicHosting.price}/month</p>
      <p>Storage: ${BasicHosting.storage}</p>
      <p>Bandwidth: ${BasicHosting.bandwidth}</p>
      <p>Domain: ${BasicHosting.domain}</p>
    `;
    buyBtn.innerHTML=`Buy ${activePlan}`
  
    // Add 'selectedPlan' class to the Basic plan by default
    let basicLabel = document.querySelector('input[value="basic"]').parentElement.parentElement;
    basicLabel.classList.add("selectedPlan");
  });



  buyBtn.addEventListener("click", function () {
    // Show the message box with a fade-in effect
    messageBox.style.display = "block";
    setTimeout(() => {
      messageBox.style.opacity = "1";
    }, 0); // Small delay to allow transition
  
    // Add the message content
    messageBox.innerHTML = `
      <p>You have selected the <span style=color:red;> ${activePlan} </span>. Thank you for your purchase!</p>
    `;
    // Clear any existing timers to prevent conflicts
    clearTimeout(messageBox.timer);
  
    // Hide the message box with a fade-out effect after 1 second
    messageBox.timer = setTimeout(() => {
      messageBox.style.opacity = "0"; // Fade-out
      setTimeout(() => {
        messageBox.style.display = "none"; // Hide after transition ends
      },1500); // Match the transition duration
  },2000);
  });













