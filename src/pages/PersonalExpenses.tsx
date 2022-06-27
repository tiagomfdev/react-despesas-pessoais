import { Box } from "@mui/material";

import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DataGridExpenses from "../component/DataGridExpenses";
import FilterBar from "../component/FilterBar";
import { getExpensesEndpoint, IExpenses } from "../service/backend";

const columns: GridColDef[] = [
  {
    field: "descricao",
    headerName: "Despesas",
    flex: 1,
    editable: false,
  },
  {
    field: "categoria",
    headerName: "Categoria",
    flex: 1,
    editable: false,
  },
  {
    field: "dia",
    headerName: "Dia",
    type: "number",
    width: 80,
    editable: false,
  },
  {
    field: "valor",
    headerName: "Valor",
    type: "number",
    width: 200,
    editable: false,
  },
];

function sumExpenses(expenses: IExpenses[]): number {
  return expenses.length > 0
    ? expenses.reduce((a, b) => {
        return { ...a, valor: a.valor + b.valor };
      }).valor
    : 0;
}

export default function PersonalExpenses() {
  const [expenses, setExpenses] = useState<GridRowsProp>([]);
  const [totalExpenses, setTotalExpenses] = useState<string>("0");
  const [dateString, setDateString] = useState<string>(
    useParams<string>().srDate!
  );

  let navigate = useNavigate();

  useEffect(() => {
    function getExpensesData(date: string): void {
      getExpensesEndpoint(date).then((expensesData) => {
        setTotalExpenses(
          sumExpenses([...expensesData])
            .toFixed(2)
            .toString()
        );
        setExpenses(expensesData);
      });
    }

    getExpensesData(dateString);
    navigate(`../${dateString}`, { replace: true });
  }, [dateString, navigate]);

  return (
    <Box>
      <FilterBar
        totalExpenses={totalExpenses}
        dateString={useParams<string>().srDate!}
        onChangeFilter={setDateString}
      />
      <Box height={"940px"} sx={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <DataGridExpenses rows={expenses} columns={columns} />
      </Box>
    </Box>
  );
}
