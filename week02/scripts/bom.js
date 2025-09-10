const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const errorMessage = document.querySelector('#error-message');

button.addEventListener('click', function () {
    // Code to execute when the button is clicked
    if (input.value.trim() !== '') {

        // Hide error message if it was showing
        errorMessage.style.display = 'none';

        // New elements for each chapter added
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');


        li.textContent = input.value;
        deleteButton.textContent = '❌';

        // Event listener to delete button created
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });


        li.append(deleteButton);
        list.append(li);
        input.value = '';
        input.focus();
    }
    else {
        // When input is empty
        //alert('Please enter a valid book and chapter');
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Please enter a valid book and chapter';
        input.focus();
    }
});


