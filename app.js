document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search");

    searchButton.addEventListener("click", function () {
        fetch("superheroes.php")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not successful");
                }
                return response.text();
            })
            .then(data => {
                alert(data);
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Unable to retrieve superhero information.");
            });
    });
});
