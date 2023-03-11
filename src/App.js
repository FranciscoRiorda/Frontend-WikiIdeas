import './styles.css';
import './App.css';
import Buscador from './containers/Buscador/Buscador';
import Header from './components/header';
import Main from './components/main'
import NewTopic from './components/new_topic';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      <Buscador />
      <Main />
      <NewTopic />
      <Footer />
    </>
  );
}

export default App;
