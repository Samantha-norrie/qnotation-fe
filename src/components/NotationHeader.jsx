import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import { NOTATION_DETAILS } from "./Utils";

import styled from "styled-components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Container = styled.div`
  color: white;
  display: flex;
  align-items: center;
`;

const NotationHeader = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { notation } = props;

  return (
    <Container>
      <p>
        {NOTATION_DETAILS[Number(notation)].title}
      </p>
      <InfoSharpIcon onClick={handleOpen}></InfoSharpIcon>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography sx={{ mt: 2 }}>
            {NOTATION_DETAILS[Number(notation)].info}
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
};

export default NotationHeader;
