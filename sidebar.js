document.addEventListener("DOMContentLoaded", function() {
    fetch("sidebar.html")  // Fetch the sidebar HTML file
        .then(response => response.text())  // Get the HTML text content
        .then(data => {
            document.getElementById("sidebar-container").innerHTML = data;  // Inject into the container
        });

    // Function for opening/closing the sidebar
    window.toggleMenu = function() {
        var sidebar = document.getElementById("sidebar");
        if (sidebar.style.left === "0px") {
            sidebar.style.left = "-250px";  // Close sidebar
        } else {
            sidebar.style.left = "0px";  // Open sidebar
        }
    }
});