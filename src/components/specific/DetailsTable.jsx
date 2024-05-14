import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";


const Table = ({ rows, columns, heading, rowHeight = 52 }) => {
  return (
    <Container
      sx={{
        height: "100vh",
        width:"100vw"
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "1rem 4rem",
          borderRadius: "1rem",
          margin: "auto",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Typography
          textAlign={"center"}
          variant="h4"
          sx={{
            margin: "2rem",
            textTransform: "uppercase",
          }}
        >
          {heading}
        </Typography>
        <DataGrid
        
          rows={rows}
          columns={columns}
          rowHeight={rowHeight}
          style={{ height: "80%",width:"100%" }}
          sx={{
            border: "none",
            ".table-header": {
              bgcolor: "#1c1c1c",
              color: "white",
              width:"100%",
              textAlign:"center"
            },
          }}
        />
      </Paper>
    </Container>
  );
};

export default Table;
