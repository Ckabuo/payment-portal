    <div class="container">
        <h1 class="my-4">School Fees Payment</h1>
        <div id="personalDataForm">
            <h2>Personal Data</h2>
            <form>
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" class="form-control" id="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" class="form-control" id="email" required>
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" class="form-control" id="phone" required>
                </div>
                <button type="button" class="btn btn-primary" onclick="showForm('educationDataForm')">Next</button>
            </form>
        </div>

        <div id="educationDataForm" style="display: none;">
            <h2>Education Data</h2>
            <form>
                <div class="form-group">
                    <label for="schoolName">School Name</label>
                    <input type="text" class="form-control" id="schoolName" required>
                </div>
                <div class="form-group">
                    <label for="course">Course</label>
                    <input type="text" class="form-control" id="course" required>
                </div>
                <div class="form-group">
                    <label for="year">Year of Study</label>
                    <input type="number" class="form-control" id="year" required>
                </div>
                <button type="button" class="btn btn-primary" onclick="showForm('accommodationDataForm')">Next</button>
            </form>
        </div>

        <div id="accommodationDataForm" style="display: none;">
            <h2>Accommodation Data</h2>
            <form>
                <div class="form-group">
                    <label for="address">Accommodation Address</label>
                    <input type="text" class="form-control" id="address" required>
                </div>
                <div class="form-group">
                    <label for="city">City</label>
                    <input type="text" class="form-control" id="city" required>
                </div>
                <div class="form-group">
                    <label for="state">State</label>
                    <input type="text" class="form-control" id="state" required>
                </div>
                <button type="button" class="btn btn-primary" onclick="showForm('reviewData')">Proceed</button>
            </form>
        </div>

        <div id="reviewData" style="display: none;">
            <h2>Review Your Data</h2>
            <form>
                !-- Review fields would be dynamically generated here --
                <button type="button" class="btn btn-primary" onclick="proceedToPaystack()">Proceed to Paystack</button>
            </form>
        </div>
    </div>
