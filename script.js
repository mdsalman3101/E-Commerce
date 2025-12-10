

// SEARCH BUTTON FUNCTION
document.getElementById("searchBtn").addEventListener("click", function () {
    let searchValue = document.getElementById("searchInput").value;

    if (searchValue.trim() === "") {
        alert("Please enter something to search!");
    } else {
        alert("You searched for: " + searchValue);
    }
});

// CART BUTTON FUNCTION
document.getElementById("cartBtn").addEventListener("click", function () {
    alert("Cart opened!");
});

// MENU BUTTON (if you have)
document.getElementById("menuBtn").addEventListener("click", function () {
    alert("Menu clicked!");
});


