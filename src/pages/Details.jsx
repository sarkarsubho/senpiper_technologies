import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "../components/specific/DetailsTable";
import { getLocalStorage } from "../utils/localstorage";
const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 100,
  },

  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    headerClassName: "table-header",
    width: 150,
  },
  {
    field: "phone",
    headerName: "Phone",
    headerClassName: "table-header",
    width: 150,
  },
  {
    field: "serviceQuality",
    headerName: "Service Quality",
    headerClassName: "table-header",
    width: 150,
  },
  {
    field: "beverageQuality",
    headerName: "Beverage Quality",
    headerClassName: "table-header",
    width: 150,
  },
  {
    field: "cleanliness",
    headerName: "Cleanliness",
    headerClassName: "table-header",
    width: 150,
  },

  {
    field: "diningQuality",
    headerName: "Dining Quality",
    headerClassName: "table-header",
    width: 150,
  },
];

const Details = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    let data = getLocalStorage().map((e) => ({
      ...e,
      phone: `${e.phone.country} ${e.phone.number}`,
    }));
    setRows(data);
  }, []);
  return (
    <Table heading={"Review Details"} columns={columns} rows={rows}></Table>
  );
};

export default Details;
