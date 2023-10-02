document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('survey-form');
    const tableBody = document.querySelector('#dataTable tbody');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const pincode = document.getElementById('pincode').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const foodCheckboxes = document.querySelectorAll('input[name="food"]:checked');
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;

        if(foodCheckboxes.length < 2){
            alert("Please pick atleast 2 food options");
            return;
        }
        // Creating a new table row and add data to it
        const newRow = tableBody.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);
        const cell7 = newRow.insertCell(6);
        const cell8 = newRow.insertCell(7);
        const cell9 = newRow.insertCell(8);

        cell1.textContent = firstName;
        cell2.textContent = lastName;
        cell3.textContent = email;
        cell4.textContent = address;
        cell5.textContent = pincode;
        cell6.textContent = gender;
        cell7.textContent = Array.from(foodCheckboxes).map(checkbox => checkbox.value).join(',');
        cell8.textContent = state;
        cell9.textContent = country;

        // Clear form fields
        form.reset();
    });
});
