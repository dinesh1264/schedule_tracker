import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Tracker } from "./components/Tracker";
import { RecordsProvider } from "./context/RecordsProvider";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex flex-row">
        <Form />
        <RecordsProvider>
          <Tracker />
        </RecordsProvider>
      </main>
    </>
  );
}

export default App;
