import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Login from "./Login";

const ModalDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      // form to be created
      <Login handleClose={handleClose} />
    </Dialog>
  );
};

export default ModalDialog;
