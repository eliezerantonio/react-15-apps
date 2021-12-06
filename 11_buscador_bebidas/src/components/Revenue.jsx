import React from "react";
import { ModalContext } from "../context/ModalContext";

import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const Revenue = ({ revenue }) => {
  //configs modal de material ui

  const [modalStyled] = React.useState(getModalStyle);

  const [open, setOpen] = React.useState(false);

  const classe = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //extrair contexto
  const { saveIdRevenue } = React.useContext(ModalContext);

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{revenue.strDrink}</h2>
        <img
          className="card-img-top"
          src={revenue.strDrinkThumb}
          alt={`Imagem de ${revenue.strDrink}`}
        />
        <div className="card-body">
          <button
            className="btn btn-block btn-primary"
            onClick={() => {
                saveIdRevenue(revenue.idDrink);
                handleOpen()
            }}
          >
            {" "}
            Ver receita
          </button>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
