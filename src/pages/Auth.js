import React, { useCallback, useState } from "react";
import Container from "../layout/Container";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { signin } from "../actions/auth";

const Auth = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = useCallback(
    (e) => {
      dispatch(signin({ login, password }, history));
    },
    [dispatch, history, login, password]
  );

  return (
    <>
      <Container>
        <Stack spacing={2}>
          <TextField
            id="login"
            label="login"
            value={login}
            onChange={handleLoginChange}
          />
          <TextField
            id="password"
            type="password"
            label="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button variant="outlined" onClick={handleClick}>
            {" "}
            <AccountCircleIcon />
            Login
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Auth;
