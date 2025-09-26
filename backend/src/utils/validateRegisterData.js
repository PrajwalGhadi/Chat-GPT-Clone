function validateUserData({ username, email, password }) {
  // validationError is to store all the validation errors
  let validationErrors = [];

  // Checking all the fields are present or not
  if (!username || !email || !password) {
    validationErrors.push({
      field: "allfields",
      errorMessage: "All fields are required",
    });
  }

  // checking username length must be greater than 4 and password length must be greater than 8
  if (username && username.length < 4) {
    validationErrors.push({
      field: "username",
      errorMessage: "username must be at least 4 characters long",
    });
  }

  if (password && password.length < 8) {
    validationErrors.push({
      field: "password",
      errorMessage: "password must be at least 8 characters long",
    });
  }

  // checking the password must contain at least one uppercase letter, one lowercase letter, one number, and one special character
  if (
    password &&
    !password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])")
  ) {
    validationErrors.push({
      field: "password",
      errorMessage:
        "password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    });
  }

  // check the email is valid or not using regex
  if (
    email &&
    !email.match("^[a-zA-Z0-9._%+-]+@[a-zA-z0-9.-]+\\.[a-zA-Z]{2,}$")
  ) {
    validationErrors.push({ field: "email", errorMessage: "Invalid Email" });
  }

  return validatetionErrors;
}

module.exports = validateUserData;