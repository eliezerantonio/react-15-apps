import React from 'react'

const Pergunta = () => {
    return (
        <div>
            <h2>Cola seu Orcamento</h2>
            <input type="number" className="u-full-width" placeholder="Seu orcamento" />
            <input type="submit" className="button-primary u-full-width" value="Definir orcamento"/>
        </div>
    )
}

export default Pergunta
