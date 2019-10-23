// This file is to show how a library package may provide JavaScript interop features
// wrapped in a .NET API

window.outsideClickHandler = {
    addEvent: function (elementId) {
        document.addEventListener("click", (evt) => {
            const flyoutElement = document.getElementById(elementId);
            let targetElement = evt.target; // clicked element

            do {
                if (targetElement === flyoutElement) {
                    // This is a click inside. Do nothing, just return.
                  
                    return;
                }
                // Go up the DOM
                targetElement = targetElement.parentNode;
            } while (targetElement);

            // This is a click outside.
           
        });
    }
};