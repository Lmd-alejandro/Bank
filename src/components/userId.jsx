import { Card, IconButton, Stack, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CopyToClipboard from "react-copy-to-clipboard";

export default function UserID({info}) {

  const {userData} = info

  return (
    <>
      <Card
        sx={{
          width: 140,
          textAlign: "center",
          bgcolor: "#a7e0f2",
          borderRadius: "5px",
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Stack>
            <Typography variant="h6" color="black" fontFamily='roboto'>
              No. {userData.account}
            </Typography>
          </Stack>
          <Stack>
            <CopyToClipboard text="014">
              <IconButton>
                <ContentCopyIcon sx={{ color: "black" }} />
              </IconButton>
            </CopyToClipboard>
          </Stack>
        </Stack>
      </Card>
    </>
  );
}
