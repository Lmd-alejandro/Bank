import { AppBar, Card, IconButton, Stack,  } from "@mui/material";
import User from "./user";
import UserID from "./userId";
import LogoutIcon from "@mui/icons-material/Logout";

export default function HomeNavbar({ info }) {
  return (
    <>
      <AppBar sx={{ bgcolor: "transparent", boxShadow: "none", padding: 3 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack>
            <User info={info} />
          </Stack>
          <Stack direction="row" spacing={1}>
            <Stack>
              <UserID info={info} />
            </Stack>
            <Card
              sx={{
                bgcolor: "#a7e0f2",
                padding: "4px",
                width: "45px",
                height: "32px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton>
                <LogoutIcon fontSize="large" />
              </IconButton>
            </Card>
          </Stack>
        </Stack>
      </AppBar>
    </>
  );
}

