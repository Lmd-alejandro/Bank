import { Toolbar, AppBar, Link, Stack, Button } from "@mui/material";

export default function Navbar() {
  return (
    <>
      <AppBar sx={{ backgroundColor: "#072146" }}>
        <Toolbar>
          <Stack
            direction="row"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack justifyContent="flex-start" alignItems="center">
              <Link to="/">
              <img src="/src/assets/Logo-BBVA.png" width={120} />
              </Link>
            </Stack>
            <Stack
              spacing={1}
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Stack>                
                <Button variant="text" sx={{ color: "#fff", backgroundColor: "",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#004",
                      transform: "scale(1.05)",
                    },}}>
                  Movimientos
                </Button>
              </Stack>
              <Stack>
                <Button variant="text" sx={{ color: "#fff", backgroundColor: "",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#004",
                      transform: "scale(1.05)",
                    }, }}>
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
