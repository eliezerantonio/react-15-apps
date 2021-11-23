import React from "react";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";
const Formulario = ({ saveCategory }) => {
  const OPTIONS = [
    { value: "general", label: "Geral" },
    { value: "business", label: "Negocios" },
    { value: "entertaiment", label: "Entretedimento" },
    { value: "health", label: "Saude" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Desportos" },
    { value: "technology", label: "Tecnologia" },
  ];

  const [category, SelectNews] = useSelect("general", OPTIONS);

  const searchNews = (e) => {
    e.preventDefault();
    saveCategory(category);
  };
  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={searchNews}>
          <h2 className={styles.heading}>Encontro Noticias por categoria</h2>
          <SelectNews />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles["btn-block"]} btn-large amber darken-2 `}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
