import { DataGrid, GridColumns, GridRowsProp } from "@mui/x-data-grid";

export interface IDataGridExpensesProp {
  rows: GridRowsProp;
  columns: GridColumns;
}

export default function DataGridExpenses(props: IDataGridExpensesProp) {
  const { rows, columns } = props;
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={15}
      rowsPerPageOptions={[15]}
      disableSelectionOnClick
    />
  );
}
