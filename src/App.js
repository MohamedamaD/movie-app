import "./App.scss";
import { useSelector } from "react-redux";
import { Footer, Header } from "./containers";
import { Loading } from "./pages";
function App() {
  const loading = useSelector((state) => state.loading.loading);

  return (
    <div className="App">
      {loading && <Loading />}
      <Header />
      <Footer />
    </div>
  );
}

export default App;
