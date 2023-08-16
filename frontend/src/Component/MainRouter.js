import { Grid, Box } from "@mui/material";
import React from "react";


const MainRouter = () => {
  return (
    <>
      <Grid container>
        <Grid item lg={10} mx="auto">
          <Box mt={5} mb={5}>
            <button type="button" className="btn btn-danger form-control">
              Create New Blog
            </button>
          </Box>
        </Grid>
        <Grid item lg={3} mx="auto">
          <Box
            style={{
              backGround: "grey",
              padding: "20px",
              boxShadow: "0 0 5px",
            }}
          >
            <Box>
              <img
                style={{ width: "300px" }}
                src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </Box>
            <Box>title</Box>
            <Box>description</Box>
            <Box style={{ display: "flex" }}>
              <Box>
                <button type="button" className="btn btn-danger">
                  Update
                </button>
              </Box>
              <Box ml={1}>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default MainRouter;
