function showForm(formId) {
    // Hide all forms by setting their display to 'none'
    document.querySelectorAll('.form-container').forEach(function(formContainer) {
        formContainer.style.display = 'none';
    });

    /* Show the specified form by setting its display to 'block'
    If the element with specified ID exists*/
    let formElement = document.getElementById(formId);
    if (formElement) {
        formElement.style.display = 'block';
    }
}

// Placeholder function for proceeding to Paystack
function proceedToPaystack() {

    alert('Proceeding to Paystack...');
}

function updateDisplayWithFormData(formData) {
    const displayData = document.querySelector('.display-data.container');
    Object.keys(formData).forEach(key => {
        // Use the key to find the corresponding <p> tag by its data-id attribute
        const targetP = displayData.querySelector(`p[data-id="${key}"]`);
        if (targetP) {
            targetP.textContent = formData[key];
        }
    });
}

function retrieveAllFormData() {
    const formIds = ['personalDataForm', 'educationDataForm', 'accommodationDataForm'];
    formIds.forEach(function(formId) {
        let formContainer = document.getElementById(formId);
        if (formContainer) {
            let form = formContainer.querySelector('form');
            if (form) {
                let formData = {};
                let inputs = form.querySelectorAll('input, select');
                inputs.forEach(function(input) {
                    let key = input.name || input.id;
                    formData[key] = input.value;
                });
                updateDisplayWithFormData(formData); // Update the display with the collected form data
            }
        }
    });
}

