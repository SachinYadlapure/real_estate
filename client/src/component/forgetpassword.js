import React from 'react'
import {Stack,Paper,Typography,TextField,Button} from "@mui/material";
import { ToastContainer } from 'react-toastify';

export default function forgetpassword() {









  return (
    <div>
    
   <Stack direction="column" alignItems="center" justifyContent="center" mt={10}>
     <Paper sx={{ width: 400, height: 'auto', padding: 3, backgroundColor: '#E4F1FF', marginLeft: 9 }}>
       <Typography variant="h4" align="center" color="primary" mb={2} style={{ marginBottom: '45px' }}>
         Reset Password
       </Typography>
       <TextField
         label="Enter Mail Here"
         fullWidth
        // onChange={handleEmailChange}
       //  value={mail}
         style={{ marginBottom: '15px' }}
         variant="outlined"
       />
       <TextField
         label="Enter OTP" fullWidth
        // onChange={handleSuggestionChange}
       //  value={suggestion}
         style={{ marginBottom: '15px' }}
         variant="outlined"
       />
       <Button
         variant="contained"
         color="primary"
        // onClick={handleSendSuggestion}
         fullWidth
         style={{ marginBottom: '25px' }}
         sx={{backgroundColor: 'green',color:'white'}}
       >
         Reset password
       </Button>
     </Paper>
     <ToastContainer />
   </Stack>
   </div>

  )
}
