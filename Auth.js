function handleGoogleAuth(context) {
  console.log(`Google ${context} clicked — hook up Google Identity Services + backend here.`);
  alert('Google sign-in isn\'t connected yet. This button is ready for the backend team to wire up.');
}

const googleLoginBtn = document.getElementById('googleLoginBtn');
if (googleLoginBtn) {
  googleLoginBtn.addEventListener('click', () => handleGoogleAuth('login'));
}

const googleSignupBtn = document.getElementById('googleSignupBtn');
if (googleSignupBtn) {
  googleSignupBtn.addEventListener('click', () => handleGoogleAuth('signup'));
}

// ===========================
// Basic client-side form handling (placeholder until backend is ready)
// ===========================
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Login form submitted — connect to backend auth endpoint here.');
    alert('Login isn\'t connected to a backend yet.');
  });
}

const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Signup form submitted — connect to backend auth endpoint here.');
    alert('Signup isn\'t connected to a backend yet.');
  });
}
