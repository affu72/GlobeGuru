import PageNav from "../components/PageNav";
import {Typography, Button, Stack, IconButton} from "@mui/material";
import SendSharpIcon from "@mui/icons-material/SendSharp";

function MaterialUI() {
  return (
    <div>
      <PageNav></PageNav>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4">h4 heading</Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>

      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">h6 heading</Typography>

      <Typography variant="body1" gutterBottom={true}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
        sapiente natus modi debitis voluptatibus ipsa in quia quibusdam atque
        dolor?
      </Typography>

      <Typography variant="body2" gutterBottom={true} noWrap>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente autem
        placeat error. Sapiente nesciunt deleniti fugiat molestias voluptate
        minus accusamus aliquam! Doloribus nihil quia sequi mollitia non sit
        facere eveniet.
      </Typography>

      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <Button variant="text" href="https://www.google.com" target="_blank">
            text
          </Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <Stack spacing={2} direction={"row"}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
        </Stack>

        <Stack spacing={2} display={"block"} direction={"row"}>
          <Button variant="contained" size="small">
            Small
          </Button>

          <Button variant="contained" size="medium">
            Medium
          </Button>

          <Button variant="contained" size="large" disabled>
            Large
          </Button>
        </Stack>

        <Stack direction={"row"} spacing={2}>
          <Button
            variant="contained"
            startIcon={<SendSharpIcon />}
            disableRipple
            onClick={() => alert("This is button")}
          >
            Send
          </Button>

          <Button
            variant="contained"
            endIcon={<SendSharpIcon />}
            disableElevation
          >
            Send
          </Button>

          <IconButton aria-label="send" size="medium" color="primary">
            <SendSharpIcon />
          </IconButton>
        </Stack>
      </Stack>
    </div>
  );
}

export default MaterialUI;
