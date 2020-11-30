import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Formulario extends Component {

    state = {
        categoria: 'general',
        pais: 'mx'
    }


    handleChange = e => {
        e.target.name === "slc-categoria" ?
            this.setState({ ...this.state, categoria: e.target.value }, () => {
                this.props.consultarNoticias(this.state.categoria, this.state.pais);
            }) :
            this.setState({ ...this.state, pais: e.target.value }, () => {
                this.props.consultarNoticias(this.state.categoria, this.state.pais);
            });


    }
    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Encuentra noticias por categoria y pais</h2>
                        <div className="col s12 m5 input-field">
                            <select onChange={this.handleChange} name="slc-categoria">
                                <option value="general">General</option>
                                <option value="science">Ciencia</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="technology">Tecnologia</option>
                            </select>
                        </div>
                        <div className="col s12 m5 input-field offset-m2">
                            <select onChange={this.handleChange} name="slc-pais">
                                <option value="mx">Mexico</option>
                                <option value="us">Estados Unidos</option>
                                <option value="ar">Argentina</option>
                                <option value="co">Colombia</option>
                                <option value="br">Brasil</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Formulario.propTypes = {
    consultarNoticias: PropTypes.func.isRequired
}

export default Formulario;