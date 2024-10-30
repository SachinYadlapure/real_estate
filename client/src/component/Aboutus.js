import React from 'react';
import Navbar from './Navbar';
import {
  Paper,
  Stack,
  Card,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import av from "../Images/avatar.jpg"; 
const individualData = [
  {
    name: "Bindushree D",
    id: "P18CD22S126054",
    phoneNumber: "7899483492",
    email: "bindu6211@gmail.com",
    avatar: av,
  },
];

export default function Aboutus() {
  const cardStyle = {
    marginLeft: '20px',
    marginBottom: '20px',
    backgroundColor: '#ffffff',
    width: '25%',
    height: '450px',
    marginTop: '200px',
    borderRadius: '15px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  };

  return (
    <div>
      <Navbar />
      <div style={containerStyle}>
        {individualData.map((individual, index) => (
          <Card elevation={12} style={cardStyle} key={index}>
            <Stack>
              <Paper elevation={12} sx={{ width: '100%', height: '700px', borderRadius: '15px' }}>
                <img
                  src={individual.avatar}
                  alt={individual.name}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    display: 'block',
                    margin: '20px auto',
                  }}
                />
                <h1 align="center">{individual.name}</h1>
                <hr />
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>{individual.name}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>ID Number</TableCell>
                      <TableCell>{individual.id}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Phone Number</TableCell>
                      <TableCell>{individual.phoneNumber}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Email</TableCell>
                      <TableCell>{individual.email}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
            </Stack>
          </Card>
        ))}
      </div>
    </div>
  );
}