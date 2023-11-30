import {
    Card,
    Stack,
    Typography,
    TextField
  } from "@mui/material";

import Navbar from "../components/Navbar";

export default function Login(){


return(
    <>
        <Navbar/>

     <Card sx={{ padding: 5, width: 300 }}>

        <Typography variant="h5" mb={3}>
          Entra a Banco BBVA
        </Typography>

        <Typography variant="subtittle1">
            Entra con tu cuenta y contraseña
        </Typography>
        <Stack spacing={2} mt={4}>
            <Stack>
                <TextField variant="filled" label="Cuenta" sx ={{ backgroundColor: "grey"}}/>
            </Stack>
        </Stack>
    </Card>
        </>
      
    )
}
