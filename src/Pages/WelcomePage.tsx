import Header from "../components/Header";
import Memento from "../components/Memento";
import NavBar from "../components/NavBar";
import "../styles/App.css";

const img = "src/assets/images/to_do_list.jpg";
const title = "Santa Claus Memento !";
const text =
  "Mon cher Père Noêl, n'oublie pas de consulter ce memento pour t'assurer que chaque tâche est accomplie avant la grande nuit de Noël - chaque détail compte pour rendre cette tournée inoubliable !";

export default function WelcomePage() {
  return (
    <>
      <Header img={img} title={title} text={text} />
      <NavBar />
      <Memento />
    </>
  );
}
