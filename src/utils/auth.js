// Import the entire module as jwtDecode
import * as jwtDecode from 'jwt-decode';

// Create a new class to instantiate for a user
class AuthService {
  // Get user data
  getProfile() {
    // Use jwtDecode instead of decode
    return jwtDecode(this.getToken());
  }

  // Check if the user is logged in
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // Check if the token is expired
  isTokenExpired(token) {
    try {
      const decoded = jwtDecode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // Saves the user token to localStorage
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // This will reload the page and reset the state of the application
    window.location.assign('/');
  }
}

export default new AuthService();
