import {
  Alert,
  Card,
  Container,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { useState } from "react";
import axios from "axios";
import { useData } from "./dataContext";
import { useNavigate } from 'react-router-dom'; 

const url = "https://bank.jedidiazfagundez.site/api";

export default function Form({info}) {

  const navigate = useNavigate()
  const { setUserData, setUserToken} = info

  const [formData, setFormData] = useState({
    account: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handdleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }; 

  const handdleClick = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${url}/login`, formData);
      setUserData(response.data.user);
      setUserToken(response.data.token)
      navigate('/home')
    } catch (error) {
      console.error(
        "Ha ocurrido un error en el proceso de ingreso:",
        error.response.data.msg
      );
      setAlertMessage(
        `Ha ocurrido un error en el proceso de ingreso: ${error.response.data.msg}`
      );
      setAlertOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Card sx={{ padding: 5, width: 300, textAlign: "center" }}>
          <Typography variant="h5" mb={2} fontFamily='roboto'>
            Entra a tu cuenta de BBVA
          </Typography>
          <Typography variant="subtittle1" fontFamily='roboto'>
            Ingresa tu cuenta y contraseña
          </Typography>
          <Stack spacing={2} mt={3}>
            <Stack>
              <TextField
                variant="filled"
                name="account"
                label="Cuenta"
                onChange={handdleInputChange}
                sx={{ backgroundColor: "##96d7eb" }}
              />
            </Stack>
            <Stack>
              <TextField
                variant="filled"
                type="password"
                name="password"
                label="Contraseña"
                onChange={handdleInputChange}
                sx={{ backgroundColor: "##96d7eb" }}
              />
            </Stack>
            <LoadingButton
              variant="contained"
              loading={loading}
              onClick={handdleClick}
              to="/home"
              sx={{
                backgroundColor: "#2906ec",
                transition: "transform 0.3s ease",
                "&:hover": {
                  backgroundColor: "#2906ec",
                  transform: "scale(1.05)",
                },
              }}
            >
              Entrar
            </LoadingButton>
          </Stack>
        </Card>
      </Container>
      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={() => setAlertOpen(false)}
      >
        <Alert onClose={() => setAlertOpen(false)} severity="error">
          {alertMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
