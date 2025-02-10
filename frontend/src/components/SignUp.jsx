import { useState, useRef } from "react";
import { Link } from "react-router";

/**
 * SignUp Component
 * --------------------
 * This function manages and returns a user SignUp page and redirects
 * the user to a sign up page if necessary. Also includes a 'forgot
 * password' option to reset password.
 *
 * @returns {JSX.Element} A User SignUp Component.
 */
const SignUp = () => {
  // Input box references
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  // Password handling variables
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const timeoutRef = useRef(null);

  /**
   * Handles form submission when the user presses the Sign Up button.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handleSignUp = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    console.log(`Email: ${email}`); // DEBUGGER

    const username = usernameRef.current.value;
    console.log(`Username: ${username}`); // DEBUGGER

    const password = passwordRef.current.value;
    console.log(`Password: ${password}`); // DEBUGGER

    const confirmPassword = confirmPasswordRef.current.value;
    console.log(`Password: ${confirmPassword}`); // DEBUGGER
  };

  /**
   *
   * @param {JSX.onChange} e - The onChange event.
   */
  const handleConfirmPassword = (e) => {
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (timeoutRef.current) clearTimeout(timeoutRef.current); // Clear previous timeout

    timeoutRef.current = setTimeout(() => {
      const isMatch = password === confirmPassword;
      if (isMatch !== passwordsMatch) {
        setPasswordsMatch(isMatch);
        console.log(isMatch ? "Passwords match!" : "Passwords do not match!"); // DEBUGGER
      }
    }, 300); // Debounce by 300ms
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
      {/* This form returns entries in the email, username, password,
      and confirm password input boxes upon submission.*/}
      <form
        onSubmit={handleSignUp}
        className="border-secondary bg-primary/80 mi:p-16 flex w-[425px] flex-col items-center justify-center gap-4 overflow-y-auto rounded-3xl border-2 p-8 text-center"
      >
        {/* Logo */}
        <img src="https://placehold.co/300x100" className="rounded-lg" />

        <h2>Welcome to Study Buddy!</h2>

        <hr />

        {/* Input Fields */}
        <span className="flex w-full flex-col gap-6">
          <div className="flex flex-col">
            <label className="text-left font-semibold">Email</label>
            <input
              ref={emailRef}
              onKeyDown={handleKeyDown}
              placeholder="Email"
              type="email"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-left font-semibold">
              Username<i></i>
            </label>
            <input
              ref={usernameRef}
              onKeyDown={handleKeyDown}
              placeholder="Username"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-left font-semibold">Password</label>
            <div className="relative w-full">
              <input
                ref={passwordRef}
                onKeyDown={handleKeyDown}
                placeholder="Password"
                type="password"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-left font-semibold">Confirm Password</label>
            <div className="relative flex w-full">
              <input
                ref={confirmPasswordRef}
                onKeyDown={handleKeyDown}
                onChange={handleConfirmPassword}
                placeholder="Confirm Password"
                className={`w-full ${!passwordsMatch && "border-red-600"}`}
                type="password"
              />
              {!passwordsMatch && (
                <p className="absolute top-full text-xs text-red-600">
                  Passwords must match!
                </p>
              )}
            </div>
          </div>

          <button type="submit" className="action-button">
            Sign Up
          </button>

          {/* Redirect to login page */}
          <span>
            <label>Already registered? </label>
            <Link to="/login">Login</Link>
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

export default SignUp;
