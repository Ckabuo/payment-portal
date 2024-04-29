/* function showForm(formId) {
    // Hide all forms
    $('.form-container').hide();
    // Show the specified form
    $('#' + formId).show();
}

function proceedToPaystack() {
    // Here you would typically collect the form data and proceed to the Paystack payment gateway
    // For demonstration purposes, we'll just alert the user
    alert('Proceeding to Paystack...');
}*/

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
function generateReviewFields() {
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
}

// Placeholder function for proceeding to Paystack
function proceedToPaystack() {
    // Here you would typically collect the form data and proceed to the Paystack payment gateway
    // For demonstration purposes, we'll just alert the user
    alert('Proceeding to Paystack...');
}

// Initialize the first form to be shown
$(document).ready(function() {
    showForm('personalDataForm');
});

