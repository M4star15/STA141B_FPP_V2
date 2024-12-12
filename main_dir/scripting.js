
    // Function to dynamically add EVs to the center of each state
    function addEVsToMap(stateResults) {
        const svgContainer = document.querySelector("svg");

        Object.entries(stateResults).forEach(([state, candidates]) => {
            const stateElement = document.querySelector(`[data-id="${state}"]`);
            if (!stateElement) return;

            // Calculate bounding box to position the EV text
            const bbox = stateElement.getBBox();
            const centerX = bbox.x + bbox.width / 2;
            const centerY = bbox.y + bbox.height / 2;

            // Find the leading candidate's EVs (assuming sorted by percentage)
            const EVs = candidates.length > 0 ? candidates[0].EVS : "N/A";

            // Create and style the text element for EVs
            const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
            textElement.setAttribute("x", centerX);
            textElement.setAttribute("y", centerY);
            textElement.setAttribute("class", "ev-label");
            textElement.setAttribute("text-anchor", "middle");
            textElement.setAttribute("dy", "0.3em"); // Adjust for vertical alignment
            textElement.textContent = EVs;

            svgContainer.appendChild(textElement);
        });
    }

    // Function to create tooltips for each state
    function addStateTooltips(stateResults, stateTooltips) {
        const svgContainer = document.querySelector("svg");

        Object.entries(stateResults).forEach(([state]) => {
            const stateElement = document.querySelector(`[data-id="${state}"]`);
            if (!stateElement) return;

            const tooltipContent = stateTooltips[state];

            // Add event listeners for tooltips
            stateElement.addEventListener("mouseenter", () => {
                const tooltip = document.getElementById("tooltip");
                tooltip.innerHTML = tooltipContent;
                tooltip.style.display = "block";
            });

            stateElement.addEventListener("mousemove", (event) => {
                const tooltip = document.getElementById("tooltip");
                tooltip.style.left = `${event.pageX + 10}px`;
                tooltip.style.top = `${event.pageY + 10}px`;
            });

            stateElement.addEventListener("mouseleave", () => {
                const tooltip = document.getElementById("tooltip");
                tooltip.style.display = "none";
            });
        });
    }

    // Example of stateResults and stateTooltips populated from your Python logic
    const stateResults = {
        "CA": [{ Candidate: "Candidate A", EVS: 55, Percentage: 60.5 }],
        "TX": [{ Candidate: "Candidate B", EVS: 38, Percentage: 50.1 }]
        // Add other states dynamically here
    };

    const stateTooltips = {
        "CA": "Candidate A 60.5%",
        "TX": "Candidate B 50.1%"
        // Add other states dynamically here
    };

    // Call the functions on page load
    window.onload = function () {
        addEVsToMap(stateResults);
        addStateTooltips(stateResults, stateTooltips);
    };
