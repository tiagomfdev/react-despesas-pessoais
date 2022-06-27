import { BrowserRouter, Route, Routes } from "react-router-dom";
import PersonalExpenses from "./pages/PersonalExpenses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="despesas">
          <Route path=":srDate" element={<PersonalExpenses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
