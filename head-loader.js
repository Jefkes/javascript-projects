document.addEventListener("DOMContentLoaded", function() {
    // Fetch and insert the navigation bar
    fetch("head.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("head-placeholder").innerHTML = html;
        });
});