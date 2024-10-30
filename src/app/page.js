import NavBar from "../../components/NavBar";
import SectionPrincipal from "../../components/SectionPrincipal";
import SectionTitle from "../../components/SectionTitle";
import SectionSobre from "../../components/SectionSobre";
import SectionIntro from "../../components/SectionIntro";
import SectionContato from "../../components/SectionContato";
import styles from "./page.module.css";
import SectionBeneficios from "../../components/SectionBeneficios";

export default function Home() {
  return (
    <div className={styles.Container}>
      <NavBar />
      <SectionPrincipal/>
      <SectionTitle 
        title="Sobre"
        id="sobre"
      />
      <SectionIntro />
      <SectionBeneficios />
      <SectionSobre id="sobre"/>
      <SectionTitle 
        title="Contato"
      />
      <SectionContato  id="contato"/>
    </div>
  );
}
