<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/SignUp.css">
    <title>Sign Up</title>
</head>
<body>
    <div class="krejt">
    <div class="container">
        <h1>Sign Up</h1>
        <form action="home.php">
            <div class="form-field">
                <label for="email"></label>
                <input type="email" id="email" placeholder="Email" autocomplete="on" required>
            </div>
            <div class="form-field">
                <label for="password"></label>
                <input type="password" id="password" placeholder="Password" required>
            </div>
            <div class="form-field">
                <label for="confirmPassword"></label>
                <input type="password" id="confirmPassword" placeholder="Confirm Password"  required>
                <span id="passwordError" class="error"></span>
            </div>
            <div class="form-field">
                <label for="username"></label>
                <input type="text" id="username" placeholder="Username" autocomplete="on" required>
                <span id="usernameError" class="error"></span>
            </div>
            <label for="gender">Gender:</label>
            <div class="radio-group">
                <input type="radio" id="female" name="gender">
                <label for="female">Female</label>
               
                <input type="radio" id="male" name="gender">
                <label for="male">Male</label>
               
                <input type="radio" id="custom" name="gender">
                <label for="custom">Custom</label>
               </div>
            <div class="ditlindja"> 
                <label for="birthday">Birthday:</label>
                <div class="form-item">
                    <label for="birthday_month"></label>
                    <input type="number" id="birthday_month" name="birthday_month" min="1" max="12" placeholder="Month" required>
                    <label for="birthday_day"></label>
                    <input type="number" id="birthday_day" name="birthday_day" min="1" max="31" placeholder="Day" required>
                    <label for="birthday_year"></label>
                    <input type="number" id="birthday_year" name="birthday_year" placeholder="Year" min="1950" max="2024"  required>
                    <span id="birthdayError" class="error"></span>
                </div>
                <div class="butoni">
                    <input type="submit" value="Sign Up" id="submit" onclick="validateForm()">
                </div>
            </div>
        </form>
    </div>
</div>
<script>
    function checkYear(year) {
        if (year < 1950) {
            throw new Error('Year must be 1950 or later');
        } else {
            return `The year ${year} is valid.`;
        }
    }

    function validateForm() {
        try {
            let inputUsername = document.getElementById('username').value;
            if (inputUsername.length <= 5) {
                throw new Error('Username must be longer than 5 characters.');
            } else {
                console.log(`The username "${inputUsername}" is valid.`);
            }
            let password = document.getElementById('password').value;
            let confirmPassword = document.getElementById('confirmPassword').value;
            if (password !== confirmPassword) {
                throw new Error('Passwords do not match.');
            } else {
                console.log('Passwords match.');
            }
            let inputYear = document.getElementById('birthday_year').value;
            let result = checkYear(inputYear);
            console.log(result);
        } catch (error) {
            console.error('Error:', error.message);
            switch(error.message) {
                case 'Username must be longer than 5 characters.':
                    document.getElementById('usernameError').innerHTML = error.message;
                    document.getElementById('passwordError').innerHTML = '';
                    document.getElementById('birthdayError').innerHTML = '';
                    break;
                case 'Passwords do not match.':
                    document.getElementById('passwordError').innerHTML = error.message;
                    document.getElementById('usernameError').innerHTML = '';
                    document.getElementById('birthdayError').innerHTML = '';
                    break;
                case 'Year must be 1950 or later':
                    document.getElementById('birthdayError').innerHTML = error.message;
                    document.getElementById('usernameError').innerHTML = '';
                    document.getElementById('passwordError').innerHTML = '';
                    break;
                default:
                    break;
            }
        }
    }
</script>
</body>
</html>
