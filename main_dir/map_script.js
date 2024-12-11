const stateColors = {
    "AL": "red",
    "AK": "red",
    "AZ": "red",
    "AR": "red",
    "CA": "blue",
    "CO": "blue",
    "CT": "blue",
    "DE": "blue",
    "DC": "blue",
    "FL": "red",
    "GA": "red",
    "HI": "blue",
    "ID": "red",
    "IL": "blue",
    "IN": "red",
    "IA": "red",
    "KS": "red",
    "KY": "red",
    "LA": "red",
    "ME": "blue",
    "MD": "blue",
    "MA": "blue",
    "MI": "red",
    "MN": "blue",
    "MS": "red",
    "MO": "red",
    "MT": "red",
    "NE": "red",
    "NV": "red",
    "NH": "blue",
    "NJ": "blue",
    "NM": "blue",
    "NY": "blue",
    "NC": "red",
    "ND": "red",
    "OH": "red",
    "OK": "red",
    "OR": "blue",
    "PA": "red",
    "RI": "blue",
    "SC": "red",
    "SD": "red",
    "TN": "red",
    "TX": "red",
    "UT": "red",
    "VT": "blue",
    "VA": "blue",
    "WA": "blue",
    "WV": "red",
    "WI": "red",
    "WY": "red"
};
const stateTooltips = {
    "AL": "Donald Trump: 64.6%<br>Kamala Harris: 34.1%<br>Robert F. Kennedy Jr.: 0.5%",
    "AK": "Donald Trump: 54.5%<br>Kamala Harris: 41.4%<br>Robert F. Kennedy Jr.: 1.7%",
    "AZ": "Donald Trump: 52.2%<br>Kamala Harris: 46.7%<br>Jill Stein: 0.5%",
    "AR": "Donald Trump: 64.2%<br>Kamala Harris: 33.6%<br>Robert F. Kennedy Jr.: 1.1%",
    "CA": "Kamala Harris: 58.5%<br>Donald Trump: 38.3%<br>Robert F. Kennedy Jr: 1.2%",
    "CO": "Kamala Harris: 54.2%<br>Donald Trump: 43.2%<br>Robert F. Kennedy Jr.: 1.1%",
    "CT": "Kamala Harris: 56.4%<br>Donald Trump: 41.9%<br>Jill Stein: 0.8%",
    "DE": "Kamala Harris: 56.6%<br>Donald Trump: 41.9%<br>Robert F. Kennedy Jr.: 0.9%",
    "DC": "Kamala Harris: 90.3%<br>Donald Trump: 6.5%<br>Write-ins: 2.4%",
    "FL": "Donald Trump: 56.1%<br>Kamala Harris: 43.0%<br>Jill Stein: 0.4%",
    "GA": "Donald Trump: 50.7%<br>Kamala Harris: 48.5%<br>Chase Oliver: 0.4%",
    "HI": "Kamala Harris: 60.6%<br>Donald Trump: 37.5%<br>Jill Stein: 0.8%",
    "ID": "Donald Trump: 66.9%<br>Kamala Harris: 30.4%<br>Robert F. Kennedy Jr.: 1.4%",
    "IL": "Kamala Harris: 54.6%<br>Donald Trump: 43.8%<br>Robert F. Kennedy Jr.: 1.4%",
    "IN": "Donald Trump: 58.7%<br>Kamala Harris: 39.6%<br>Robert F. Kennedy Jr.: 1.0%",
    "IA": "Donald Trump: 55.7%<br>Kamala Harris: 42.5%<br>Robert F. Kennedy Jr.: 0.8%",
    "KS": "Donald Trump: 57.2%<br>Kamala Harris: 41.0%<br>Robert F. Kennedy Jr.: 1.2%",
    "KY": "Donald Trump: 64.5%<br>Kamala Harris: 33.9%<br>Robert F. Kennedy Jr.: 0.8%",
    "LA": "Donald Trump: 60.2%<br>Kamala Harris: 38.2%<br>Jill Stein: 0.4%",
    "ME": "Kamala Harris: 52.2%<br>Donald Trump: 45.7%<br>Jill Stein: 1.1%",
    "MD": "Kamala Harris: 63.0%<br>Donald Trump: 34.3%<br>Jill Stein: 1.1%",
    "MA": "Kamala Harris: 61.2%<br>Donald Trump: 36.0%<br>Jill Stein: 0.8%",
    "MI": "Donald Trump: 49.7%<br>Kamala Harris: 48.3%<br>Jill Stein: 0.8%",
    "MN": "Kamala Harris: 50.9%<br>Donald Trump: 46.7%<br>Robert F. Kennedy Jr: 0.7%",
    "MS": "Donald Trump: 60.9%<br>Kamala Harris: 38.0%<br>Robert F. Kennedy Jr.: 0.4%",
    "MO": "Donald Trump: 58.4%<br>Kamala Harris: 40.0%<br>Chase Oliver: 0.8%",
    "MT": "Donald Trump: 58.1%<br>Kamala Harris: 38.3%<br>Robert F. Kennedy Jr.: 2.0%",
    "NE": "Donald Trump: 59.6%<br>Kamala Harris: 39.1%<br>Chase Oliver: 0.7%",
    "NV": "Donald Trump: 50.6%<br>Kamala Harris: 47.5%<br>None of these candidates: 1.3%",
    "NH": "Kamala Harris: 50.7%<br>Donald Trump: 47.9%<br>Chase Oliver: 0.5%",
    "NJ": "Kamala Harris: 51.8%<br>Donald Trump: 45.9%<br>Jill Stein: 0.9%",
    "NM": "Kamala Harris: 51.9%<br>Donald Trump: 45.9%<br>Robert F. Kennedy Jr.: 1.0%",
    "NY": "Kamala Harris: 55.6%<br>Donald Trump: 43.9%<br>Write-ins: 0.5%",
    "NC": "Donald Trump: 50.9%<br>Kamala Harris: 47.6%<br>Jill Stein: 0.4%",
    "ND": "Donald Trump: 67.0%<br>Kamala Harris: 30.5%<br>Chase Oliver: 1.7%",
    "OH": "Donald Trump: 55.0%<br>Kamala Harris: 43.9%<br>Chase Oliver: 0.5%",
    "OK": "Donald Trump: 66.2%<br>Kamala Harris: 31.9%<br>Robert F. Kennedy Jr: 1.0%",
    "OR": "Kamala Harris: 55.3%<br>Donald Trump: 41.0%<br>Robert F. Kennedy Jr.: 1.5%",
    "PA": "Donald Trump: 50.4%<br>Kamala Harris: 48.7%<br>Jill Stein: 0.5%",
    "RI": "Kamala Harris: 55.5%<br>Donald Trump: 41.8%<br>Robert F. Kennedy Jr.: 1.0%",
    "SC": "Donald Trump: 58.2%<br>Kamala Harris: 40.4%<br>Chase Oliver: 0.5%",
    "SD": "Donald Trump: 63.4%<br>Kamala Harris: 34.2%<br>Robert F. Kennedy Jr.: 1.7%",
    "TN": "Donald Trump: 64.1%<br>Kamala Harris: 34.4%<br>Robert F. Kennedy Jr.: 0.7%",
    "TX": "Donald Trump: 56.2%<br>Kamala Harris: 42.5%<br>Jill Stein: 0.7%",
    "UT": "Donald Trump: 59.4%<br>Kamala Harris: 37.8%<br>Chase Oliver: 1.1%",
    "VT": "Kamala Harris: 63.8%<br>Donald Trump: 32.3%<br>Robert F. Kennedy Jr.: 1.6%",
    "VA": "Kamala Harris: 51.8%<br>Donald Trump: 46.1%<br>Jill Stein: 0.8%",
    "WA": "Kamala Harris: 57.6%<br>Donald Trump: 39.3%<br>Robert F. Kennedy Jr.: 1.4%",
    "WV": "Donald Trump: 70.0%<br>Kamala Harris: 28.1%<br>Robert F. Kennedy Jr.: 1.2%",
    "WI": "Donald Trump: 49.6%<br>Kamala Harris: 48.8%<br>Robert F. Kennedy Jr.: 0.5%",
    "WY": "Donald Trump: 71.6%<br>Kamala Harris: 25.8%<br>Chase Oliver: 1.6%"
};

    document.querySelectorAll("path[data-id]").forEach((statePath) => {
        const stateId = statePath.getAttribute("data-id");

        if (stateColors[stateId]) {
            statePath.classList.add(`state-${stateColors[stateId]}`);
        }

        statePath.addEventListener("mouseenter", (event) => {
            const tooltip = document.getElementById("tooltip");
            tooltip.innerHTML = stateTooltips[stateId] || "No data available";
            tooltip.style.display = "block";
            tooltip.style.left = event.pageX + 10 + "px";
            tooltip.style.top = event.pageY + 10 + "px";
        });

        statePath.addEventListener("mousemove", (event) => {
            const tooltip = document.getElementById("tooltip");
            tooltip.style.left = event.pageX + 10 + "px";
            tooltip.style.top = event.pageY + 10 + "px";
        });

        statePath.addEventListener("mouseleave", () => {
            const tooltip = document.getElementById("tooltip");
            tooltip.style.display = "none";
        });
    });
