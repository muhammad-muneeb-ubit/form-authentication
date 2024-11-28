function getUsersData() {
    var usersData = JSON.parse(localStorage.getItem("usersData")) || [];
    return usersData;
}
function saveUsersData(usersData) {
    localStorage.setItem("usersData", JSON.stringify(usersData));
}
function signup() {
    var name = document.getElementById('signup-name').value.trim();
    var email = document.getElementById('signup-email').value.trim();
    var password = document.getElementById('signup-password').value;
    if (!name || !email || !password) {
        swal("All fields are required!");
        return;
    }
    if (!email.match(/^\S+@\S+\.\S+$/)) {
        swal("Invalid email format!");
        return;
    }
    if (password.length < 8) {
        swal("Password must be at least 8 characters long!");
        return;
    }
    var usersData = getUsersData();
    var existingUser = usersData.find(function (user) {
        return user.email === email;
    });
    if (existingUser) {
        swal("Email already registered!", "Please use a different email or login.", "error");
        return;
    }
    var userId = usersData.length ? usersData[usersData.length - 1].id + 1 : 1;
    var userRecord = {
        id: userId,
        name: name,
        email: email,
        password: password,
    };
    usersData.push(userRecord);
    saveUsersData(usersData);
    swal("Signup successful!", "", "success");
    document.getElementById('signup-name').value = '';
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-password').value = '';
    showLogin();
    console.log("Users Data:", usersData);
}
function login() {
    var email = document.getElementById('login-email').value.trim();
    var password = document.getElementById('login-password').value;
    if (!email || !password) {
        swal("Both fields are required!");
        return;
    }
    var usersData = getUsersData();
    var user = usersData.find(function (user) {
        return user.email === email && user.password === password;
    });
    if (user) {
        swal("Login successful!", "Welcome " + user.name + "!", "success");
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