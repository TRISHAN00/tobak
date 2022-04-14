import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import "../styles/Framework.css";
import "../styles/responsive.css";
import Layout from "./Layout";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
