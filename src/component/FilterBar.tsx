import {
  AppBar,
  Toolbar,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export default function FilterBar(props: {
  totalExpenses: string;
  onChangeFilter: (date: string) => void;
}) {
  const [anoString, setAnoString] = useState<string>("2021");
  const [mesString, setMesString] = useState<string>("01");

  const onChangeSelect = props.onChangeFilter;
  const totalExpenses = props.totalExpenses;

  function handleChangeAnoFilter(ano: string) {
    setAnoString(ano);
  }

  function handleChangeMesFilter(mes: string) {
    setMesString(mes);
  }

  useEffect(() => {
    (() => {
      const dateString = `${anoString}-${mesString}`;
      onChangeSelect(dateString);
    })();
  }, [mesString, anoString, onChangeSelect]);

  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          bgcolor: "white",
          color: "black",
          paddingTop: 2,
          paddingBottom: 2,
        }}
      >
        <Box>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="AnoInputLabel">Ano</InputLabel>
            <Select
              labelId="AnoInputLabel"
              id="AnoInput"
              onChange={(e) => {
                handleChangeAnoFilter(e.target.value as string);
              }}
              value={anoString}
            >
              <MenuItem value="2000">2000</MenuItem>
              <MenuItem value="2001">2001</MenuItem>
              <MenuItem value="2002">2002</MenuItem>
              <MenuItem value="2003">2003</MenuItem>
              <MenuItem value="2004">2004</MenuItem>
              <MenuItem value="2005">2005</MenuItem>
              <MenuItem value="2006">2006</MenuItem>
              <MenuItem value="2007">2007</MenuItem>
              <MenuItem value="2008">2008</MenuItem>
              <MenuItem value="2009">2009</MenuItem>
              <MenuItem value="2010">2010</MenuItem>
              <MenuItem value="2011">2011</MenuItem>
              <MenuItem value="2012">2012</MenuItem>
              <MenuItem value="2013">2013</MenuItem>
              <MenuItem value="2014">2014</MenuItem>
              <MenuItem value="2015">2015</MenuItem>
              <MenuItem value="2016">2016</MenuItem>
              <MenuItem value="2017">2017</MenuItem>
              <MenuItem value="2018">2018</MenuItem>
              <MenuItem value="2019">2019</MenuItem>
              <MenuItem value="2020">2020</MenuItem>
              <MenuItem value="2021">2021</MenuItem>
              <MenuItem value="2022">2022</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="MesInputLabel">Mês</InputLabel>
            <Select
              labelId="MesInputLabel"
              id="MesInput"
              onChange={(e) => handleChangeMesFilter(e.target.value as string)}
              value={mesString}
            >
              <MenuItem value={"01"}>Janeiro</MenuItem>
              <MenuItem value={"02"}>Fevereiro</MenuItem>
              <MenuItem value={"03"}>Março</MenuItem>
              <MenuItem value={"04"}>Abril</MenuItem>
              <MenuItem value={"05"}>Maio</MenuItem>
              <MenuItem value={"06"}>Junho</MenuItem>
              <MenuItem value={"07"}>Julho</MenuItem>
              <MenuItem value={"08"}>Agosto</MenuItem>
              <MenuItem value={"09"}>Setembro</MenuItem>
              <MenuItem value={"10"}>Outubro</MenuItem>
              <MenuItem value={"11"}>Novembro</MenuItem>
              <MenuItem value={"12"}>Dezembro</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box flex="1"></Box>
        <Box>
          <span>Despesas total: </span>
          <strong>{totalExpenses}</strong>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
