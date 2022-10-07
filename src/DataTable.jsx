import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

export default function DataTable({ data }) {
  if (!data) return <div>Loading...</div>;

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "E-mail", width: 300 },
    { field: "status", headerName: "Status" },
  ];

  let id = 0;
  var rows = data.map((company) => {
    return { ...company, id: ++id };
  });

 
  return (
    <Box
      sx={{
        height: 400,
        width: {
          xs: "95vw",
          lg: "70vw",
          xl: "50vw",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        key={rows.name}
      />
    </Box>
  );
}
