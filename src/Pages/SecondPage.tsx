import Header from "../components/Header";
import Caracters from "../components/Caracters";
import NavBar from "../components/NavBar";
import "../styles/App.css";

export default function SecondPage() {
  const img = "src/assets/images/to_do_list.jpg";
  const title = "Santa Claus Team !";
  const text =
    "Mon cher Père Noêl, l'ensemble de notre équipe est détaillée ci-dessous afin de n'oublier personne pour la Grande Réunion précédent la distribution des cadeaux !";

  return (
    <>
      <Header img={img} title={title} text={text} />
      <NavBar />
      <Caracters />
    </>
  );
}
