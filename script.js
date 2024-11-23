let usersData = [];
function signup() {
    var name = document.getElementById('signup-name').value;
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;

    if (!name || !email || !password) {
        swal("All fields are required!");
        return;
    }
    var userRecord = {
        name: name,
        email: email,
        password: password
    };
    usersData.push(userRecord);
    swal("Signup successful!", "", "success");
    document.getElementById('signup-form').reset();
    showLogin();
    console.log(usersData);
    
}

function login() {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
    console.log(usersData);
    if (!email || !password) {
        swal("Both fields are required!");
        return;
    }
    var user = usersData.find(user => user.email === email && user.password === password);
    
    if (user) {
        swal("Login successful! ", `Welcome ${user.name}!`, "success");
    } else {
        swal("Sorry!", "Invalid email or password", "error");
    }
}
function showSignup() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}
function showLogin() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}