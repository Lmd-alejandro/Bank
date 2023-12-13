import { Toolbar, AppBar, Link, Stack, Button } from "@mui/material";

export default function Navbar() {
  return (
    <>
      <AppBar sx={{ backgroundColor: "#cdffff" }}>
        <Toolbar>
          <Stack
            direction="row"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack justifyContent="flex-start" alignItems="center">
              <Link to="/">
              <img src="/src/assets/bbva.png" width={120} />
              </Link>
            </Stack>
            <Stack
              spacing={1}
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Stack>
                <Button
                  variant="filled"
                  to='/home'
                  sx={{
                    backgroundColor: "#d0ebee",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#d0ebee",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                <Button variant="text" sx={{ color: "black" }}>
                  Movimientos
                </Button>
                </Button>
              </Stack>
              <Stack>
                <Button variant="text" sx={{ color: "black" }}>
                  Transferir
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
