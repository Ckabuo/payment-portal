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
    // Set up event listener to proceed to Paystack on button click
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('#payButton').addEventListener('click', proceedToPaystack);
    });

    // Function to show a specific form
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

    // Function to proceed to Paystack and handle payment process
    function proceedToPaystack() {
        retrieveAllFormData();
        alert('Proceeding to Paystack...');

        const email = document.querySelector('input[name="email"]').value;
        const amount = parseInt(document.querySelector('input[name="amount"]').value) * 100;

        var handler = PaystackPop.setup({
            key: 'your-public-key',
            email: email,
            amount: amount,
            currency: "NGN",
            callback: function(response){
                let message = 'Payment complete! Reference: ' + response.reference;
                alert(message);
                createAndDownloadReceipt(response.reference);
                updateBusaryList(response.reference);
            },
            onClose: function(){
                alert('Window closed.');
            }
        });

        handler.openIframe();
    }

    // Function to update display with form data
    function updateDisplayWithFormData(formData) {
        const displayData = document.querySelector('.display-data.container');
        Object.keys(formData).forEach(key => {
            const targetP = displayData.querySelector(`p[data-id="${key}"]`);
            if (targetP) {
                targetP.textContent = formData[key];
            }
        });
    }

    // Function to retrieve all form data and update display
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
                    updateDisplayWithFormData(formData);
                }
            }
        });
    }

    // Function to create and download a payment receipt
    function createAndDownloadReceipt(reference) {
        const receiptWindow = window.open('', 'Receipt');
        receiptWindow.document.write(`<html><head><title>Receipt</title></head><body><h1>Payment Receipt</h1><p>Reference: ${reference}</p></body></html>`);
        receiptWindow.print();
    }

    // Function to update the busary list with payment reference
    function updateBusaryList(reference) {
        const busaryList = document.querySelector('.busary-list');
        const listItem = document.createElement('li');
        listItem.textContent = `Payment Reference: ${reference}`;
        busaryList.appendChild(listItem);
    }
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