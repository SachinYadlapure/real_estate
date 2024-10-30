import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Alert, Button, Paper, Stack, TextField,Select,MenuItem, Typography, Grid, Card, CardContent } from '@mui/material';
import NavBarDesign from './Navbar';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Footer from './Footer';

export default function EmailSendAndSeller() {
  const [mail, setMail] = useState('');
  const [vmail, setVMail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [sellerid, setSellerId] = useState('');
  const [sellerData, setSellerData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [editingSeller, setEditingSeller] = useState(null);
  const [updatedSellerData, setUpdatedSellerData] = useState({
    sellerid: '',
    sellername: '',
    sellerphno: '',
    selleremail: '',
    selleraddress: '',
    landarea: '',
    imgurl:'',
    landaddress: '',
    landcost: '',
    producttype:''
  });


  const fetchSellerData = async () => {
    try {
      if (!sellerid || sellerid === '') {
        console.log('Seller ID is empty. Cannot fetch data.');
        return;
      }

      console.log('Fetching data for seller ID:', sellerid);
      const response = await axios.post(`http://localhost:5000/api/seller/seller/${sellerid}`, { sellerid: sellerid });
      setSellerData(response.data);
    } catch (error) {
      setSellerData([]);
      setErrorMessage(error.response ? error.response.data.message : 'Error fetching seller data');
    }
  };

  const handleEmailChange = (e) => {
    setMail(e.target.value);
  };

  const handleSelleridChange = (e) => {
    setSellerId(e.target.value);
  };

  const handleVEmailChange = (e) => {
    setVMail(e.target.value);
  };

  const handleOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/email', {
        email: mail,
        sellerid: sellerid
      });

      if (response.status === 200) {
        setOtpSent(true);
        toast.success('OTP sent successfully!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      } else {
        toast.error('invalid Email', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    } catch (err) {
      console.error('Error sending OTP:', err);
      toast.error('Error sending OTP. Please try again later.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  const handleDelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:5000/api/seller/${_id}`);
      const updateData = sellerData.filter(item => item._id !== _id);
      setSellerData(updateData);
    } catch (error) {
      console.error({ "error deleting ": error });
    }
  };

  const handleEdit = (seller) => {
    setEditingSeller(seller);
    setUpdatedSellerData({
      sellername: seller.sellername,
      sellerphno: seller.sellerphno,
      selleremail: seller.selleremail,
      selleraddress: seller.selleraddress,
      landarea: seller.landarea,
      landaddress: seller.landaddress,
      landcost: seller.landcost,
      imgurl:seller.imgurl,
      producttype: seller.producttype
    });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/seller/${editingSeller._id}`, updatedSellerData);
      const updatedData = sellerData.map(item => item._id === editingSeller._id ? { ...item, ...updatedSellerData } : item);
      setSellerData(updatedData);
      setEditingSeller(null);
    } catch (error) {
      console.error({ "error updating ": error });
    }
  };



  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/email/verify-otp', {
        otp: vmail,
        sellerid: sellerid,
      });
      if (response.data.status === 200) {
        setOtpVerified(true);
       
        fetchSellerData(); // Fetch seller data after OTP verification
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <div>
      <ToastContainer/>
    <Stack direction="row" sx={{ marginLeft: 2 }} >
    <NavBarDesign/>
    <Stack sx={{ marginRight:10 ,m:10,marginLeft:0}}  spacing={3}>
      <Paper sx={{ width: 400, height: 'auto', padding: 3, backgroundColor: '#E4F1FF', marginLeft: 2 }}>
        <Typography variant="h4" align="center" color="primary" mb={2} style={{ marginBottom: '25px' }}>
          Seller Authentication
        </Typography>
        <TextField
          label="Enter seller ID" 
          fullWidth
          onChange={handleSelleridChange}
          style={{ marginBottom: '15px' }}
          variant="outlined"
        />
        <TextField
          label="Enter Email"
          fullWidth
          onChange={handleEmailChange}
          style={{ marginBottom: '15px' }}
          variant="outlined"
        />
         {otpSent && (
        <TextField
          label="Enter OTP Here"
          fullWidth
          onChange={handleVEmailChange}
          style={{ marginBottom: '20px' }}
          variant="outlined"
        />
      )}
      {otpSent &&  <Button
        variant="contained"
        color="primary"
        onClick={handleOtp}
        fullWidth
        style={{ marginBottom: '25px' }}
      >
        Resend OTP
      </Button>}

      <Button
        variant="contained"
        color="primary"
        onClick={otpSent ? verifyOtp : handleOtp}
        fullWidth
        style={{ marginBottom: '25px' }}
      >
        {otpSent ? 'Verify OTP' : 'Send OTP'}
      </Button>
      {otpVerified && (
        <Alert severity="success" style={{ marginTop: '20px' }}>
          OTP Verified Successfully!
        </Alert>
      )}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </Paper>

      {editingSeller && (
      <Paper sx={{ width: 400, height: 'auto', padding: 3, backgroundColor: '#E4F1FF', marginLeft: 2 }}>
        <Typography variant="h5" align="center" style={{ marginBottom: '20px', color: '' }}>
          Update Land Information
        </Typography>
        <Stack spacing={2}>
        <TextField
          fullWidth
          label="Seller Name"
          variant="outlined"
          name="sellername"
          value={updatedSellerData.sellername}
          onChange={handleEdit}
        />
        <TextField
          fullWidth
          label="Seller Phone Number"
          variant="outlined"
          name="Sellerphno"
          value={updatedSellerData.sellerphno}
          onChange={handleEdit}
        />
        <TextField
          fullWidth
          label="Seller Email"
          variant="outlined"
          name="Selleremail"
          value={updatedSellerData.selleremail}
          onChange={handleEdit}
        />
        <TextField
                fullWidth
                label="image url"
                variant="outlined"
                name="ImageUrl"
                value={updatedSellerData.imgurl}
                onChange={handleEdit}
           />
        <TextField
          fullWidth
          label="Seller Address"
          variant="outlined"
          name="selleraddress"
          value={updatedSellerData.selleraddress}
          onChange={handleEdit}
        />
          <TextField
          fullWidth
          label="Land Area"
          variant="outlined"
          name="landarea"
          value={updatedSellerData.landarea}
          onChange={handleEdit}
        />
          <TextField
          fullWidth
          label="Land Address"
          variant="outlined"
          name="landaddress"
          value={updatedSellerData.landaddress}
          onChange={handleEdit}
        />
          <TextField
          fullWidth
          label="Land Cost"
          variant="outlined"
          name="landcost"
          value={updatedSellerData.landcost}
          onChange={handleEdit}
        />
        <Select
    value={updatedSellerData.producttype}
    name="producttype"
    onChange={handleEdit}
    sx={{ width: '200px', marginBottom: '10px' }}
    variant="outlined"
    required
    fullWidth
  >
    <MenuItem value="choose here!"></MenuItem>
    <MenuItem value="Villa">Villa</MenuItem>
    <MenuItem value="Bungalow">Bungalow</MenuItem>
    <MenuItem value="Flat">Flat</MenuItem>
    <MenuItem value="Field">Field</MenuItem>
    <MenuItem value="House Land">House Land</MenuItem>
    <MenuItem value="Farm House">Farm House</MenuItem>
    <MenuItem value="Apartment">Apartment</MenuItem>
  </Select>
        <Button variant="contained" color="primary" onClick={handleUpdate} style={{ marginTop: '10px' }}>
          Update
        </Button></Stack>
      </Paper>
    )}

    </Stack>


   
   <Stack sx={{ marginRight:10 ,m:10,marginLeft:0}}>
 
      <Stack direction="row">
     

{otpVerified && <Stack sx={{m:1,width:900}}>
    <Typography variant="h6" sx={{ marginLeft: 83, marginTop: 0 }}>
      Seller ID: {sellerid}
    </Typography></Stack>}</Stack>

    
      {otpVerified &&  <Stack><Typography variant="h4" align="center"  style={{ marginBottom: '20px', color: '' }}>
          Land Information
        </Typography>
        <Grid container direction="column" spacing={6}>
          {sellerData.map((item, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card sx={{ backgroundColor: '#E4F1FF', height: '100%',width:700 }}>
                <CardContent>
                <Stack direction="row">
                  <Stack>
                  <Typography variant="h6" component="h5" style={{ marginBottom: '10px' }}>
                    Seller ID: {item.sellerid}
                  </Typography>
                 
                  <Typography color="primary" style={{ marginBottom: '10px' }}>
                    Seller Name: {item.sellername}
                  </Typography>
                  <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                    Seller Phone Number: {item.sellerphno}
                  </Typography>
                  <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                    Seller Email: {item.selleremail}
                  </Typography>
                  <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                    Seller Address: {item.selleraddress}
                  </Typography>
                  <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                    Land Area: {item.landarea}
                  </Typography>
                  <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                    Land Address: {item.landaddress}
                  </Typography>
                  <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                    Land Cost: {item.landcost}
                  </Typography>
                  <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                    Property Type: {item.producttype}
                  </Typography></Stack>
                  <Stack> 
                  <br></br>
                  <br></br>
                  <br></br>
                    <img src={item.imgurl} alt="Seller Image" style={{ width: '250px', height: '200px', marginLeft:'50px',marginTop:6}}/></Stack></Stack>
                  <Stack direction="row" spacing={1} style={{ marginTop: '10px' }}>
                    <Button variant="contained" startIcon={<DeleteIcon />} onClick={() => handleDelete(item._id)}>
                      Delete
                    </Button>
                    <Button variant="contained" startIcon={<SendIcon />} onClick={() => handleEdit(item)}>
                      Edit
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid> </Stack>}</Stack>
     

    

   

   
  </Stack>
  <Footer/>
  </div>
);
}

