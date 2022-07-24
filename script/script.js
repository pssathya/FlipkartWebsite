window.onload = defaultPageLoadAction();

function defaultPageLoadAction() {
    bindSearchButtonClickEvent();
    showCoupon();
    bindCouponCloseButtonClickEvent();
}

function bindSearchButtonClickEvent() {
    document.getElementById("searchButton").onclick = function () {
        location.href = "html/listing.html";
    };
}

function showCoupon() {
    document.querySelector('#popup').style.display = 'flex';
}

function bindCouponCloseButtonClickEvent() {
    let popupCloseButton = document.querySelector('#popupClose')
    popupCloseButton.addEventListener('click', () => {
        document.querySelector('#popup').style.display = 'none';
    });
}