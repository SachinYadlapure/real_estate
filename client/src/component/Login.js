import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Bg from '../Images/loginbg.jpg';
import {
  Button,
  Card,
  Stack,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import jkLogo from './logo.png';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};
    if (!username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


 const onHandleClick = async () => {
   if (!validateFields()) {
     return;
   }

   try {
     if (username === "saikrishna" && password === "sai@2004") {
       navigate("/admin");
       toast.success("Admin login successful");
     } else {
       const response = await axios.post("http://localhost:5000/api/login", {
         username,
         password,
       });

       if (response.status === 200) {
         localStorage.setItem("username", username);
         navigate("/homepage");
         toast.success("Login successful");
       } else {
         toast.error("Invalid credentials");
       }
     }
   } catch (error) {
     console.error("Error during login:", error);
     toast.error(error.response?.data?.message || "Authentication failed");
   }
 };

  return (
    <div
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ToastContainer />
      <Stack sx={{ marginRight: "700px" }}>
        <Stack spacing={4}>
          <Card
            elevation={4}
            sx={{
              p: 4,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <img
              src={jkLogo}
              alt="jk logo"
              style={{ width: '200px', height: '127px', marginTop: '10px' }}
            /> */}
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <PersonIcon sx={{ fontSize: 20, marginRight: "8px" }} />
                <TextField
                  label="User name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  sx={{ width: "100%" }}
                  error={!!errors.username}
                  helperText={errors.username}
                />
              </div>
              <br />
              <div style={{ display: "flex", alignItems: "center" }}>
                <VpnKeyIcon sx={{ fontSize: 20, marginRight: "8px" }} />
                <TextField
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{ width: "100%" }}
                  error={!!errors.password}
                  helperText={errors.password}
                />
              </div>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <FormControlLabel
                control={<Checkbox checked={false} />}
                label="Remember Me"
              />
              <p style={{ marginLeft: "auto" }}>
                <Link to="/forgot-password">Forgot Password</Link>
              </p>
            </div>
            <br />
            <Button
              variant="contained"
              onClick={onHandleClick}
              sx={{ width: "100%" }}
            >
              LOGIN
            </Button>
            <p>
              No Account? <Link to="/Register">Sign Up Here!</Link>
            </p>
          </Card>
        </Stack>
      </Stack>
    </div>
  );
};

export default Login;
