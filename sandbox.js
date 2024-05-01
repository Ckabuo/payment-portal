function showForm(formId) {
    // Hide all forms
    document.querySelectorAll('.form-container').forEach(function(formContainer) {
        formContainer.style.display = 'none';
    });

    // Show the specified form
    let formElement = document.getElementById(formId);
    if (formElement) {
        formElement.style.display = 'block';
    }
}

// Function to dynamically generate review fields based on the data entered
/*function generateReviewFields() {
    // Clear existing review fields
    $(`#reviewData`).empty();

    // Dynamically generate review fields for each form
    const formsData = {
        personalData: {
            // name: $('#name').val(),
            name: $(`#firstName`).val() + ` ` + $(`#lastName`).val(),
            email: $(`#email`).val(),
            phone: $(`#phone`).val()
        },
        educationData: {
            school: $(`#schoolName`).val(),
            college: $(`#college`).val(),
            department: $(`#department`),
            matNumber: $(`#matNumber`),
            year: $(`#studyYear`).val()
        },
        accommodationData: {
            address: $('#address').val(),
            city: $('#city').val(),
            state: $('#state').val()
        }
    };

    // Function to create a review field
    function createReviewField(label, value) {
        $('#reviewData').append(`
            <div class="form-group">
                <label>${label}</label>
                <input type="text" class="form-control" value="${value}" readonly>
            </div>
        `);
    }

    // Generate review fields for each form
    for (const [formKey, formData] of Object.entries(formsData)) {
        for (const [fieldKey, fieldValue] of Object.entries(formData)) {
            // Convert camelCase to human-readable format for labels
            const label = fieldKey.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); });
            createReviewField(label, fieldValue);
        }
    }

    // Show the review data form
    $('#reviewData').show();
}*/

// Placeholder function for proceeding to Paystack
function proceedToPaystack() {

    alert('Proceeding to Paystack...');
}

// Code block to collect all form data
function retrieveAllFormData() {
    // Array of form IDs within the carousel
    const formIds = [`personalDataForm`, `educationDataForm`, `accommodationDataForm`];

    // Iterate over each form ID
    formIds.forEach(function(formId) {
        // Get the form container by its ID
        let formContainer = document.getElementById(formId);
        if (formContainer) {
            // Find the form within the container
            let form = formContainer.querySelector('form');
            if (form) {
                // Create an object to store the form data
                let formData = {};

                // Select all input and select elements within the form
                let inputs = form.querySelectorAll('input, select');

                // Iterate over each input and select element
                inputs.forEach(function(input) {
                    // Store the input's value in the formData object using the input's name as the key
                    // If the input does not have a name, use its ID as the key
                    let key = input.name || input.id;
                    formData[key] = input.value;
                });

                // Log the formData object to the console
                console.log(formData);
            }
        }
    });
}

   

// Initialize the first form to be shown
// $(document).ready(function() {
//     showForm('personalDataForm');
// });

