import React from 'react';

//styles
import "../assets/styles/components/Search.scss";

export default function Search() {
    return (
        <section class="main">
            <h2 class="main__title">¿Qué quieres ver hoy?</h2>
            <input type="text" class="input" placeholder="Buscar..."/>
        </section>
    )
}
