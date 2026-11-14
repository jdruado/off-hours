const TO_ADDRESS = "hello@examplewebsite142.com";
const form = document.querySelector("#contact-form");

function buildMailto() {
    const name = document.querySelector("#full-name").value;
    const email = document.querySelector("#email").value;
    const topic = document.querySelector("#topic").value;
    const text = document.querySelector("#message").value;

    const subject = "Website message: " + topic;
    const body =
        "Name: " + name + "\r\n" +
        "Email: " + email + "\r\n\r\n" +
        text;

    return (
        "mailto:" + TO_ADDRESS +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body)
    );
}

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        window.location.href = buildMailto();
    });
}

function updateQty(change) {
    const input = document.getElementById("product-quantity");
    let current = parseInt(input.value) || 1;
    let updated = current + change;
    
    if (updated >= 1) {
        input.value = updated;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const ORDER_EMAIL = "orders@examplewebsite142.com";
    const orderBtn = document.querySelector("#order-btn");

    console.log("Order button element:", orderBtn);

    function buildOrderMailto() {
        const title = document.querySelector("#product-title").textContent.trim();
        const price = document.querySelector("#product-price").textContent.trim();
        
        const sizeSelect = document.querySelector("#product-size");
        const size = sizeSelect ? sizeSelect.value : "Standard";
        
        const quantityInput = document.querySelector("#product-quantity");
        const quantity = quantityInput ? quantityInput.value : "1";

        const subject = "Order: " + title;
        const body = 
            "• Product: " + title + "\r\n" +
            "• Price: " + price + "\r\n" +
            "• Size: " + size + "\r\n" +
            "• Quantity: " + quantity;

        return (
            "mailto:" + ORDER_EMAIL +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body)
        );
    }

    if (orderBtn) {
        orderBtn.addEventListener("click", function (event) {
            event.preventDefault();
            console.log("Order button clicked! Attempting to open mail client...");
            window.location.href = buildOrderMailto();
        });
    } else {
        console.error("CRITICAL: #order-btn was not found in the DOM!");
    }
});