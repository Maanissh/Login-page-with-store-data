function storeUserData() {
    // Get user input
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Create an object to store user data
    var userData = {
      username: username,
      email: email,
      password: password
    };

    // Convert the object to a JSON string and store it in local storage
    localStorage.setItem('userData', JSON.stringify(userData));

    alert('Sign up successful!');
    // You can redirect or perform other actions here
    window.location.href = "https://www.amazon.in/";
  }