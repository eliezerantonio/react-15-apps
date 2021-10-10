import React from 'react'

const Formulario = () => {
    return (
        <div>
            <form> 
                <h2> Adicione seus gastos aqui</h2>
                
                <div className="campo">
                <label>Nome gasto</label>
                <input type="text" className="u-full-width" placeholder="Saldo"/> 
                
                </div>
 
                <div className="campo">
                <label>Quantidade  gasta</label>
                <input type="number" className="u-full-width" placeholder="3000 kz"/> 
                
                    

                </div>

<input type="submit" className=" button-primary u-full-width" value="Definir gasto"/>
            </form>
        </div>
    )
}

export default Formulario
