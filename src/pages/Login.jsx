import Form from "../components/form";
import Navbar from "../components/Navbar";
import { Box, Container } from "@mui/material";

export default function Login({info}) {

return (
    <>
    <Box
        sx={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        }}
    >
    <Container>
        <Navbar />
        <Form info={info}/>
    </Container>
    </Box>
    </>
);
}