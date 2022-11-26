import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser, updateUser } from "../../States/Action/UserActions";
import {
  Button,
  Grid,
  Paper,
  Container,
  createTheme,
  Typography,
  CircularProgress,
} from "@mui/material";
import InputAuth from "../Auth/InputAuth";

const Profile = () => {
  const [updateEmail, setUpdateEmail] = useState("");
  const [updateFirstName, setUpdateFirstName] = useState("");
  const [updateLastName, setUpdateLastName] = useState("");
  const [updateBio, setUpdateBio] = useState("");
  const [editProfile, setEditProfile] = useState(false);

  const dispatch = useDispatch();
  const theme = createTheme();

  const user = JSON.parse(localStorage.getItem("profile"));
  const id = user?.result?._id;

  const { loading } = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getUser(id));
  }, [id, dispatch]);

  const handleSubmit = () => {
    dispatch(
      updateUser(id, {
        email: updateEmail,
        bio: updateBio,
        firstName: updateFirstName,
        lastName: updateLastName,
      })
    );

    setUpdateBio("");
    setUpdateEmail("");
    setUpdateFirstName("");
    setUpdateLastName("");
  };

  return (
    <div style={{ marginTop: "7rem" }}>
      <div>
        {!editProfile ? (
          <Button
            onClick={() => setEditProfile(true)}
            variant="contained"
            style={{ float: "right", borderRadius: "1rem" }}
          >
            edit Profile
          </Button>
        ) : (
          <Button
            onClick={() => setEditProfile(false)}
            variant="contained"
            style={{ float: "right", borderRadius: "1rem" }}
          >
            cancel
          </Button>
        )}
      </div>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <Typography
            sx={{
              textAlign: { md: "center", sm: "center" },
              fontSize: "1.5rem",
            }}
          >{`${user?.result.firstName} ${user?.result.lastName}`}</Typography>

          <Typography
            sx={{
              textAlign: { md: "center", sm: "center" },
              fontSize: "1.3rem",
            }}
          >
            {user?.result.email}
          </Typography>
          <Typography sx={{ textAlign: "center", fontSize: "1.7rem" }}>
            bio : {user?.result.bio}
          </Typography>

          <Container component="main" maxWidth="xs">
            {editProfile && (
              <Paper
                elevation={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: theme.spacing(2),
                }}
              >
                <Grid container spacing={2}>
                  <InputAuth
                    disabled
                    label="email"
                    type="email"
                    value={updateEmail}
                    onChange={(e) => setUpdateEmail(e.target.value)}
                  />
                  <InputAuth
                    label="firstName"
                    value={updateFirstName}
                    onChange={(e) => setUpdateFirstName(e.target.value)}
                  />
                  <InputAuth
                    label="lastName"
                    type="email"
                    value={updateLastName}
                    onChange={(e) => setUpdateLastName(e.target.value)}
                  />
                  <InputAuth
                    multiline
                    rows={4}
                    label="bio"
                    value={updateBio}
                    onChange={(e) => setUpdateBio(e.target.value)}
                  />
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{
                      margin: theme.spacing(3, 0, 2),
                      marginTop: theme.spacing(3),
                    }}
                    onClick={() => {
                      handleSubmit();
                      setEditProfile(false);
                    }}
                  >
                    submit
                  </Button>
                  {/* <button
                    // disabled={updateFirstName || !updateLastName ? true : false}
                    onClick={() => {
                      handleSubmit();
                      setEditProfile(false);
                    }}
                  >
                    submit
                  </button> */}
                </Grid>
              </Paper>
            )}
          </Container>
        </div>
      )}
    </div>
  );
};

export default Profile;
