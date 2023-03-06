const coupon = document.querySelector(".coupon");
const btn = document.querySelector(".btn");

btn.addEventListener("click", copyText);

function copyText(e){
    e.preventDefault();

    navigator.clipboard.writeText(coupon.value)
    .then(() => {
        btn.textContent = "Copied!";
        setTimeout(()=>{
            btn.textContent = "Copy"
        },5000);
    });

}