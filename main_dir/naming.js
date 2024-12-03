document.addEventListener("DOMContentLoaded", function () {
    const map = document.getElementById("us-map");
    const tooltip = document.getElementById("tooltip");

    map.addEventListener("mouseover", function (e) {
        const state = e.target.closest("a");
        if (state) {
            const stateInfo = state.getAttribute("data-info");
            tooltip.style.display = "block";
            tooltip.innerHTML = `
                <strong>${state.querySelector("title").textContent}</strong><br>
                ${stateInfo}
            `;
        }
    });

    map.addEventListener("mousemove", function (e) {
        tooltip.style.left = e.pageX + 15 + "px";
        tooltip.style.top = e.pageY + 15 + "px";
    });

    map.addEventListener("mouseout", function () {
        tooltip.style.display = "none";
    });
});
