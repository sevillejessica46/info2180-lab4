document.addEventListener("DOMContentLoaded", function () {

    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("query");
    const resultDiv = document.getElementById("result");

    searchForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const query = encodeURIComponent(searchInput.value.trim());

        fetch("superheroes.php?query=" + query)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not successful");
                }

                return response.text();
            })
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.error("Error:", error);
                resultDiv.textContent = "Unable to retrieve superhero information.";
            });

    });

});
