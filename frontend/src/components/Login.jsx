import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router";

/**
 * Login Component
 * --------------------
 * This function manages and returns a user login page and redirects
 * the user to a sign up page if necessary. Also includes a 'forgot
 * password' option to reset password.
 *
 * @returns {JSX.Element} A User Login Component.
 */
const Login = () => {
  const navigate = useNavigate();

  // Input box references
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [rememberMe, setRememberMe] = useState(false); // "Keep me logged in" checkbox state.

  /**
   * Skips the login page if the user is already logged in.
   */
  useEffect(() => {
    const isUserLoggedIn =
      localStorage.getItem("isLoggedIn") === "true" ||
      sessionStorage.getItem("isLoggedIn") === "true";
    // isUserLoggedIn && navigate("/dashboard"); ### UNCOMMENT AFTER IMPLEMENTING LOGIC
  }, [navigate]);

  /**
   * Handles form submission when the user presses the Login button. Sets localStorage
   * and sessionStorage accordingly.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   * @param {boolean} rememberMe - True if "Keep me logged in" checkbox is checked.
   */
  const handleLogin = (e, rememberMe) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    console.log(`Username: ${username}`); // DEBUGGER
    localStorage.setItem("username", usernameRef.current.value);

    const password = passwordRef.current.value;
    console.log(`Password: ${password}`); // DEBUGGER

    // If remember me box is checked, save in local storage, else
    // save in session storage. Change these accordingly when
    // backend is set up.
    rememberMe
      ? localStorage.setItem("isLoggedIn", "true")
      : sessionStorage.setItem("isLoggedIn", "true");
  };

  /**
   * Handles key presses and prevents the user from entering spaces.
   *
   * @param {React.KeyboardEvent<HTMLInputElement>} e - The key press event.
   */
  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  return (
    <main className="flex h-fit items-center justify-center">
      {/* This form returns entries in the username and password input boxes upon submission,
        and saves username in local storage. Allows the user to stay logged in. */}
      <form
        onSubmit={handleLogin}
        className="border-secondary bg-primary/80 mi:p-16 flex w-[425px] flex-col items-center justify-center gap-4 overflow-y-auto rounded-3xl border-2 p-8 text-center"
      >
        {/* Logo */}
        <img src="https://placehold.co/300x100" className="rounded-lg" />

        <h2>Welcome to Study Buddy!</h2>

        <hr />

        {/* Input fields */}
        <span className="flex w-full flex-col gap-6">
          <div className="flex flex-col">
            <label className="text-left font-semibold">Username</label>
            <input
              ref={usernameRef}
              onKeyDown={handleKeyDown}
              placeholder="Username"
            />
          </div>
          <div className="relative flex w-full flex-col">
            <span className="flex items-center justify-between">
              <label className="font-semibold">Password</label>

              {/* Forgot password, redirect to Reset Password page */}
              <Link to="/reset-password" className="mi:text-sm text-xs">
                Forgot password?
              </Link>
            </span>
            <input
              ref={passwordRef}
              onKeyDown={handleKeyDown}
              placeholder="Password"
              type="password"
            />

            {/* Remember me checkbox */}
            <div className="flex items-center gap-1 pt-1">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-3 w-3"
              />
              <label className="text-xs">Remember Me</label>
            </div>
          </div>
          <hr />
          <button type="submit" className="action-button">
            Login
          </button>

          {/* Redirect to sign up page */}
          <span>
            <label>New user? </label>
            <Link to="/sign-up">Register now</Link>
          </span>
        </span>

        {/* Other ways to login */}
        <span className="flex w-full items-center gap-2">
          <hr />
          <p className="text-secondary">OR</p>
          <hr />
        </span>
        <button className="flex w-full justify-center">
          <img
            src="https://logo.clearbit.com/google.com"
            alt="Google Logo"
            className="w-5"
          />
        </button>
        <button className="flex w-full justify-center">
          <img
            src="https://logo.clearbit.com/apple.com"
            alt="Apple Logo"
            className="w-5"
          />
        </button>
      </form>
    </main>
  );
};

export default Login;
