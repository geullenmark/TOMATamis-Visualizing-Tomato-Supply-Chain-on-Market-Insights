let products = [
    // You can add more product data as needed
];

document.addEventListener("DOMContentLoaded", function () {
    // Function to update the product
    function updateProduct(index) {
        // Here you can implement the logic for updating the product
        console.log("Update product at index:", index);
    }

    // Function to delete the product
    function deleteProduct(index) {
        // Here you can implement the logic for deleting the product
        console.log("Delete product at index:", index);
    }

    // Populate the table with products
    function populateTable() {
        let tbody = document.querySelector("tbody");

        products.forEach(function (product, index) {
            let row = tbody.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);

            cell1.innerHTML = product.name;
            cell2.innerHTML = product.description;
            cell3.innerHTML = product.price;

            // Create update and delete buttons
            let updateButton = document.createElement("button");
            updateButton.textContent = "Update";
            updateButton.className = "btn btn-success";
            updateButton.addEventListener("click", function () {
                updateProduct(index);
            });

            let deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "btn btn-danger";
            deleteButton.addEventListener("click", function () {
                deleteProduct(index);
            });

            cell4.appendChild(updateButton);
            cell4.appendChild(deleteButton);
        });
    }

    // Call the populateTable function to display products
    populateTable();
});
