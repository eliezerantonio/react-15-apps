import React from 'react'

const Formulario = () => {

    const [nome,setNome  ]=React.useState('')
    const [quantidade,setQuantidade  ]=React.useState(0)
    return (
        <div>
            <form> 
                <h2> Adicione seus gastos aqui</h2>
                
                <div className="campo">
                <label>Nome gasto</label>
                    <input type="text" className="u-full-width" placeholder="Saldo" value={nome}
                        onChange={e=>setNome(e.target.value)}/> 
                 
                </div>
 
                <div className="campo">
                <label>Quantidade  gasta</label>
                    <input type="number" className="u-full-width" placeholder="3000 kz" value={ quantidade } onChange={e=>setQuantidade(e.target.value)}/> 

                </div>

<input type="submit" className=" button-primary u-full-width" value="Definir gasto"/>
            </form>
        </div>
    )
}

export default Formulario
