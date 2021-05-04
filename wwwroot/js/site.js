// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var createCheckoutSession = function (priceId) {
    return fetch("/create-checkout-session", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            priceId: priceId
        })
    }).then(function (result) {
        return result.json();
    });
};

document
    .getElementById("checkout")
    .addEventListener("click", function (evt) {
        createCheckoutSession(price_1IklQNARGSkQyrKhLBzMrxqF).then(function (data) {
            stripe
                .redirectToCheckout({
                    sessionId: data.sessionId
                })
                .then(handleResult);
        });
    });