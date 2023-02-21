import React from "react";
import {
  Button,
  Grid,
  Paper,
  Typography,
  TextField,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
} from "@mui/material";
import { useStateContext } from "../../States/Contexts/ContextProvider";

const Subscribe = () => {
  const { section2Ref } = useStateContext();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ padding: "0rem 1rem 0rem 1rem" }} ref={section2Ref}>
      <Paper>
        <Grid
          alignItems="center"
          justifyContent="center"
          container
          sx={{ marginTop: "3rem" }}
        >
          <Grid item md={6} xs={11} sm={6} lg={6}>
            <Typography
              sx={{
                marginTop: { md: "1rem", xs: "1rem" },
                fontWeight: "400",
                fontSize: "30px",
              }}
            >
              Be the first to receive the <br /> latest news and product
              <br />
              updates.
            </Typography>
          </Grid>

          <Button
            // variant="outlined"
            onClick={handleClickOpen}
            sx={{
              mt: "1rem",
              textTransform: "lowercase",
              width: "20%",
              backgroundColor: "red",
              color: "white",
              "&:hover": {
                backgroundColor: "green",
              },
            }}
          >
            Subscribe
          </Button>
          <Dialog open={open}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address
                here. We will send updates occasionally.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Paper>
    </div>
  );
};

export default Subscribe;
