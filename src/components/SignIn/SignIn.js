import React, { useState } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  Typography,
  Container,
  Grid,
  Link,
  TextField,
  CssBaseline,
  Button,
  Avatar,
} from "@material-ui/core";

import { useStyles } from "./SignInStyle";
import {login} from "../../services/AuthService"

export default function SignIn() {
  const classes = useStyles();
  const [phone, setPhone] = useState("");
  const [password, setpassword] = useState("");
  const [submitBtn, setSubmitBtn] = useState(false);

  const handlePhoneChange = (e) => {
    e.preventDefault();
    if (e.target.value.toString().length > 10) {
      return;
    }
    setPhone(e.target.value);
  };
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setpassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit button");
    // setSubmitBtn(true);
    const res= await login(phone.trim(),password.trim());
    if(res){
    console.log(res);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            value={phone}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="number"
            id="phone"
            label="Mobile Number"
            name="phone"
            autoComplete="phone"
            autoFocus
            onChange={handlePhoneChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={submitBtn}
          >
            Sign In
          </Button>
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
