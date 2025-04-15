import React from 'react';
import './MiComponente.css';
import { ReactComponent as Logo } from './logo.svg';

function MiComponente() {
    return (
        <div className="mi-componente">
            <Logo className="logo" />
            <h2>Este es mi primer componente</h2>
            <p>¡Estoy aprendiendo React!</p>
        </div>
    );
}

export default MiComponente;