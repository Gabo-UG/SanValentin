document.getElementById("openButton").addEventListener("click", function() {
    document.getElementById("closedCard").classList.add("hidden");
    document.getElementById("openCard").classList.remove("hidden");
    document.getElementById("openCard").classList.add("visible");
});

document.getElementById("showFlower").addEventListener("click", function() {
    document.getElementById("openCard").classList.add("hidden");
    document.getElementById("flowerContainer").classList.remove("hidden");
    document.getElementById("flowerContainer").classList.add("visible");
});
