import React from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Switch
} from "@mui/material";
import LineChart from './charts/LineChart'

interface RepoItemDetailsProps {
  open: boolean;
  handleClose: () => void;
}
const RepoItemDetails = ({ open, handleClose }: RepoItemDetailsProps) => {
  return (
    <>
      <Dialog
        className="chart-modal"
        open={open}
        // className="repo-details"
        // TransitionComponent={Transition}
        // keepMounted
        onClose={handleClose}
      >
        <DialogTitle>{"Insert Name of Repo"}</DialogTitle>
        <Switch/>
        <DialogContent>
        <LineChart/>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleClose()}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RepoItemDetails;
