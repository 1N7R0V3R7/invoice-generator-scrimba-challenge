let services = [];
const serviceExpense = document.getElementById("service-invoice");
const totalAmount = document.getElementById("total-amount");
const wcBtn = document.getElementById("pullWeeds-btn");
const pwBtn = document.getElementById("washCar-btn");
const mlBtn = document.getElementById("mowLawn-btn");

document.getElementById("theme-toggle-btn").addEventListener("click", () => {
    document.getElementById("body").classList.toggle("dark");
});
document.getElementById("reset-btn").addEventListener("click", () => {
    services = [];
    renderServices();
    totalAmount.innerText = 0;
    wcBtn.disabled = false;
    mlBtn.disabled = false;
    pwBtn.disabled = false;
});


const addService = (event) => {
    services.push({
        service: event.target.getAttribute("data-service"),
        amount: event.target.getAttribute("data-amount"),
    });
    event.target.disabled = true;
    renderServices();
    totalAmount.innerText =
        parseInt(totalAmount.innerText) +
        parseInt(event.target.getAttribute("data-amount"));
};

const removeService = event => {
    const amount = event.target.getAttribute('data-amount');
    services = services.filter(element => {
        return element.amount !== amount ;
    });
    renderServices();
    totalAmount.innerText = parseInt(totalAmount.innerText) - parseInt(event.target.getAttribute("data-amount"));
    switch (parseInt(amount)) {
        case 10:
            wcBtn.disabled = false;
            break;
        case 20:
            mlBtn.disabled = false;
            break;
        case 30:
            pwBtn.disabled = false;
        default:
            break;
    }
}

function renderServices() {
    serviceExpense.innerHTML = "";
    services.forEach((element) => {
        serviceExpense.innerHTML += `<li
                                        class="text-xl text=[#2b283a] dark:text-white flex justify-between items-center my-5"
                                    >
                                        <p class="font-semibold">
                                            ${element.service}
                                            <button class="ml-2 text-[0.6rem] text-[#91839b]" data-amount=${element.amount} onclick="removeService(event)">
                                                Remove
                                            </button>
                                        </p>
                                        <p class="text-[#91839b]">
                                            $<span class="text-[#2b283a] dark:text-white">
                                                ${element.amount}
                                            </span>
                                        </p>
                                    </li>`;
    });
}
