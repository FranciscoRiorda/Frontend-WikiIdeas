import "./App.css";
import ArticuloProvider from "./contexts/articulo";
import Router from "./routes/routes";

function App() {
  return (
    <ArticuloProvider>
      <Router />
    </ArticuloProvider>
  );
}

export default App;
