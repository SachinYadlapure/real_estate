import React, { useState } from 'react';
import {
  Button,
  Paper,
  Stack,
  TextField,
} from '@mui/material';
import jkLogo from './logo.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Bg from '../Images/signlogo1.jpg'

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    gmail: '',
    phone_number: '',
    dob: ''
  });
  const [alert, setAlert] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validateMobile = (phone_number) => {
    const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    return mobileRegex.test(phone_number);
  };

  const calculateAge = (dateOfBirth) => {
    const dobDate = new Date(dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
      return age - 1;
    }
    return age;
  };

  const onHandleClick = async () => {
    const { username, password, gmail, phone_number, dob } = formData;
    const newErrors = {};

    // Validate each field and set error messages if validation fails
    if (!username.trim()) newErrors.username = "Username is required";
    if (!gmail.trim() || !validateEmail(gmail))
      newErrors.gmail = "Please enter valid email";
    if (!password.trim() || password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (!phone_number.trim() || !validateMobile(phone_number))
      newErrors.phone_number = "Please enter 10 digits mobile number";
    if (!dob.trim()) {
      newErrors.dob = "Date of birth is required";
    } else {
      const age = calculateAge(dob);
      if (age < 18) newErrors.dob = "You must be at least 18 years old";
    }

    setErrors(newErrors);

    // Proceed only if there are no errors
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post("http://localhost:5000/api/signup", {
          username,
          gmail,
          password,
          phone_number,
          dob,
        });

        console.log("Registration successful:", response.data);
        setSuccessMessage("Successfully registered. Redirecting to login...");
        setTimeout(() => {
          navigate("/login");
        }, 3000);

        // Display success toast
        toast.success("Successfully registered. Redirecting to login...");
      } catch (error) {
        setErrors({ general: "Error during registration. Please try again." });
        toast.error(error.response.data.message || "Error during registration. Please try again.");
      }
    } else {
     console.log("error");
    }
  };
  const closeAlert = () => {
    setAlert(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={20}
        sx={{ width: "27%", height: "590px", marginLeft: "850px" }}
      >
        <Stack spacing={2}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            {/* <img src={jkLogo} alt="jk logo" style={{ width: '200px', height: '127px', top:'100' }} /> */}
            <TextField
              label="User name"
              value={formData.username}
              onChange={handleFormChange}
              name="username"
              sx={{ width: "90%" }}
              error={!!errors.username}
              helperText={errors.username}
            />
            <br />
            <TextField
              label="Gmail"
              value={formData.gmail}
              onChange={handleFormChange}
              name="gmail"
              sx={{ width: "90%" }}
              error={!!errors.gmail}
              helperText={errors.gmail}
            />
            <br />
            <TextField
              type="password"
              label="Password"
              value={formData.password}
              onChange={handleFormChange}
              name="password"
              sx={{ width: "90%" }}
              error={!!errors.password}
              helperText={errors.password}
            />
            <br />
            <TextField
              label="Phone Number"
              value={formData.phone_number}
              onChange={handleFormChange}
              name="phone_number"
              sx={{ width: "90%" }}
              error={!!errors.phone_number}
              helperText={errors.phone_number}
            />
            <br />
            <TextField
              type="date"
              label="Date of Birth"
              value={formData.dob}
              onChange={handleFormChange}
              name="dob"
              InputLabelProps={{ shrink: true }}
              sx={{ width: "90%" }}
              error={!!errors.dob}
              helperText={errors.dob}
            />
            <p>
              Already a user? <Link to="/login">Login Here</Link>
            </p>
            <Button variant="contained" onClick={onHandleClick}>
              REGISTER
            </Button>
          </div>
          {alert && (
            <div>
              <p style={{ color: "red" }}>{successMessage}</p>
              <Button variant="contained" onClick={closeAlert}>
                Close
              </Button>
            </div>
          )}
        </Stack>
      </Paper>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default Register;
