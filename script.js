const plan = document.querySelector(".plan-change");
const planCost = document.querySelector(".plan-cost")
const planType = document.querySelector(".plan-type")

plan.addEventListener('click', ()=>{
    if(planCost.textContent != '$12.99/month'){
        planCost.textContent = '$12.99/month';
        planType.textContent = 'Monthly Plan';
    }else if(planCost.textContent === '$12.99/month'){
        planCost.textContent = '$59.99/year';
        planType.textContent = 'Annual Plan';
    }


})