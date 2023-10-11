console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

// The exercise starts here!

function showMeMessage(userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now! ${userRole}`);
}

handleUserLogin(showMeMessage);

handleUserLogin((userName, userRole) => {
  console.log(`Welcome ${userName}! You are logged in now! ${userRole}`);
});
