import React, { Component } from 'react';

// Componente
class Header extends React.Component{

    //Render
    render(){
        return(
            <div className='header'>
                <h1>Empresa - Soluções Digitais</h1>
                <p>Tabela de Funcionários</p>
                <hr size="10" width="50%"></hr>
            </div>
        );
    }

}

// Exportar
export default Header;