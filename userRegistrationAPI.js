// Import required modules
const express = require("express");
const Joi = require("joi");

const app = express();
app.use(express.json());

// User registration endpoint
app.post("/api/v1/createuser", (req, res) => {
  // Define validation schema
  const schema = Joi.object({
    username: Joi.string().required().messages({
      "any.required": "Username is required",
      "string.base": "Username must be a string",
    }),
    email: Joi.string().email().required().messages({
      "any.required": "Email is required",
      "string.email": "Email must be a valid email address",
    }),
    password: Joi.string().required().messages({
      "any.required": "Password is required",
    }),
    mobile: Joi.number().integer().required().messages({
      "any.required": "Mobile number is required",
      "number.base": "Mobile number must be a number",
      "number.integer": "Mobile number must be an integer",
    }),
    address: Joi.string().optional().messages({
      "string.base": "Address must be a string",
    }),
  });

  // Validate the incoming data
  const { error, value } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      status: "error",
      message: "Validation failed",
      errors: error.details.map((err) => err.message),
    });
  }

  // If validation is successful, proceed with registration logic
  res.status(201).json({
    status: "success",
    message: "User registered successfully",
    data: value, // Return validated data (optional)
  });
});

// Start the server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
