import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    borderRadius: 8, // Adjust the value as needed for the desired roundness
    boxShadow: 24,
    p: 4,
  };

const RetrieveEventUser = ({ eventpostId }) => {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOpen = async () => {
    try {
      setLoading(true);

      const response = await fetch(`http://localhost:5001/eventposts/eventregistered/${eventpostId}`);

      if (!response.ok) {
        console.error(`Error fetching user data for eventpostId ${eventpostId}: ${response.status} - ${response.statusText}`);
        return;
      }

      const data = await response.json();
      setUserData(data);
      setOpen(true);
    } catch (error) {
      console.error(`Error fetching user data for eventpostId ${eventpostId}: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setUserData(null);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Button onClick={handleOpen}>View</Button>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" textAlign={'center'}>Registered Event User</Typography>
          <TableContainer component={Paper} borderRadius={8}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Action</TableCell> {/* Add a new column for the email button */}
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.isArray(userData) ? (
                  userData.map((user) => (
                    <React.Fragment key={user.id}>
                      <TableRow>
                        <TableCell>{user.firstName}</TableCell>
                        <TableCell>{user.lastName}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => window.location.href = `mailto:${user.email}`}
                          >
                            Email User
                          </Button>
                        </TableCell>
                      </TableRow>
                    </React.Fragment>
                  ))
                ) : (
                  <TableRow>
                    <TableCell>{userData && userData.firstName}</TableCell>
                    <TableCell>{userData && userData.lastName}</TableCell>
                    <TableCell>{userData && userData.email}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => window.location.href = `mailto:${userData && userData.email}`}
                      >
                        Email User
                      </Button>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </div>
  );
};

export default RetrieveEventUser;
