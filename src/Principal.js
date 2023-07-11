// Importar módulo
import React from 'react';

// Importar o Header
import Header from './Header';

// Importar o formulário
import Formulario from './Formulario';

// Importar a tabela
import Tabela from './Tabela';

// Componente
class Principal extends React.Component{

    // Construtor
    constructor(props){
        super(props);

        this.state = {
            nome : '',
            idade : '',
            cargo : '',
            salario : '',
            vetor : []
        }
    }

    // Função ao digitar (onChange)
    aoDigitar = (campo) => {
        this.setState({[campo.target.name] : campo.target.value});
    }

    // Função clique (onSubmit)
    aoClicar = (botao) => {
        botao.preventDefault();
        
        var copiaVetor = [...this.state.vetor];

        copiaVetor.push({
            'nome' : this.state.nome,
            'idade' : this.state.idade,
            'cargo' : this.state.cargo,
            'salario' : this.state.salario
        });

        this.setState({vetor : copiaVetor});

        this.setState({
            nome : '',
            idade : '',
            cargo : '',
            salario: ''
        });
    }

    // Render
    render(){
        return(
            <div>
                <Header />
                <Formulario campoNome={this.state.nome} campoIdade={this.state.idade} campoCargo={this.state.cargo} campoSalario={this.state.salario} funcaoBotao={this.aoClicar} funcaoCampo={this.aoDigitar} />
                <Tabela dados={this.state.vetor} />
            </div>
        );
    }

}

// Exportar componente
export default Principal;