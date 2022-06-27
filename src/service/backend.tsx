export interface IExpenses {
  id: number;
  descricao: string;
  categoria: string;
  valor: number;
  mes: string;
  dia: string;
}

export function getExpensesEndpoint(date: string): Promise<IExpenses[]> {
  return fetch(`http://localhost:3001/despesas?mes=${date}&_sort=dia`).then(
    (response) => response.json()
  );
}
