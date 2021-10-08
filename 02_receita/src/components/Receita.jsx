import React from 'react'

import PropTypes from "prop-types";
const Receita = ({receita,eliminarReceita}) => {
    return (
        <div className="cita">
            <p>Mascote:<span>{receita.mascote }
            </span></p>
            <p>Dono:<span>{receita.proprietario}
            </span></p>
            <p>Data:<span>{receita.data}
            </span></p>

            <p>Hora:<span>{receita.hora}
            </span></p>

            <p>Sintomas:<span>{receita.sintomas}
            </span>
            </p>
            <button className="button eliminar u-full-width" onClick={()=>eliminarReceita(receita.id)}>Eliminar &times;</button>
        </div>
    )
}

Receita.propTypes = {
    
    receita: PropTypes.object.isRequired,
    eliminarReceita:PropTypes.func.isRequired

}
export default Receita
