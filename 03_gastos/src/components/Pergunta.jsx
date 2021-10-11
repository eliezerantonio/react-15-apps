import React from 'react'
import Error from './Error'

const Pergunta = ({setRestante, setOrcamento, setMostrarPergunta}) => {
    //definir o estado

    const [quantidade, setQuantidade] = React.useState(0)
    const [error, setError] = React.useState(false)

    //funcao que recebe o orcamento
    const handleChange = e => {
       setQuantidade(parseInt(e.target.value, 10))
    }

    //submit para definir o Orcamento

    const definirOrcamento = e => {
        e.preventDefault();

        //validar  
        if (quantidade < 1|| isNaN(quantidade)) {
            setError(true)
            return
        }
        //se passar na validacao
        setError(false);
        setOrcamento(quantidade);
        setRestante(quantidade)
       

    }
    return (
        <div>
            <h2>Cola seu Orcamento</h2>
            {error? <Error msg="Orcamento incorreto"/>:null}
            <form onSubmit={definirOrcamento}>
                            <input type="number" className="u-full-width" placeholder="Seu orcamento" onChange={handleChange} />
            <input type="submit" className="button-primary u-full-width" value="Definir orcamento"/>
</form>
        </div>
    )
}

export default Pergunta
