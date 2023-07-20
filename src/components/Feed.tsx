
import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

function Feed() {
  return (
    <Box sx={{ bgcolor: "white" }} p={2} flex={4}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </Box>  
  );
}

export default Feed;
