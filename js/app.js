$(document).foundation();
$(document).ready(function() {
    var registrationPanel = $(".homepage-registration-forms"),
        loginPanel = $(".homepage-login-forms"),
        headerSignInBtn = $("#header__sign-in"),
        headerSignUpBtn = $("#header__sign-up");
    signInBtn = $("#sign-in");
    headerSignInBtn.click(function(e) {
        e.preventDefault()
        registrationPanel.hide();
        loginPanel.show();
    });
    headerSignUpBtn.click(function(e) {
        e.preventDefault()
        registrationPanel.show();
        loginPanel.hide();
    });
    signInBtn.click(function(e) {
        e.preventDefault()
        registrationPanel.hide();
        loginPanel.show();
    });
    $('#btn-logout').click(function() {
        var ref = new Firebase("https://brilliant-inferno-5201.firebaseio.com");
        ref.unauth();
        window.location.href = "./index.html";
    });
    $('#btn-signin').click(function() {
        var loginUsername = $('#login-username').val();
        var loginPassword = $('#login-password').val();

        console.log(loginPassword);
        var ref = new Firebase("https://brilliant-inferno-5201.firebaseio.com");

        ref.authWithPassword({
            email: loginUsername,
            password: loginPassword
        }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                localStorage.setItem("greetings", loginUsername);
                window.location.href = "user.html";
            }
        });
    });

    $('#btn-signup').click(function() {
        alert('hello!');
        var ref = new Firebase("https://brilliant-inferno-5201.firebaseio.com");
        var email = $("#signup-username").val();
        var userPassword = $("#signup-password").val();
        //  authClient.createUser(email, password, function (error, user) {
        console.log(userPassword);
        ref.createUser({
            email: email,
            password: userPassword
        }, function(error, userData) {
            if (error) {
                console.log("Error creating user:", error);
            } else {
                console.log("Successfully created user account with uid:", userData.uid);
            }
        });
    });
});
