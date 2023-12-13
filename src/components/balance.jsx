import { Box, Container, Stack, Typography } from "@mui/material";
export default function Balance({ info }) {

  const { userData } = info
  console.log(userData)

  return (
    <>
      {userData ? (
        <div>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "90vh",
            }}
          >
            <Stack textAlign="center" spacing={2}>
              <Stack>
                <Typography variant="h2">$ {userData.money}</Typography>
                <Box bgcolor='#072146' height={5} width={350}></Box>
              </Stack>
              <Stack>
                <Typography variant="subtittle1" fontFamily='Roboto'>Dinero disponible</Typography>
              </Stack>
            </Stack>
          </Container>
        </div>

      ) : (
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "90vh",
          }}
        >
          <Stack textAlign="center">
            <Typography variant="body2">Dinero no disponible</Typography>
          </Stack>
        </Container>

      )}
    </>



  );
}