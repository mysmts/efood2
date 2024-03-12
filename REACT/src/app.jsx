import React, { useState, useEffect } from "react";
import TabelaIMC from "./componentes/tabela/index";
import Perfil from "./componentes/perfil/index";
import Formulario from "./componentes/formulario/index"; // Adicionei a importação do componente Formulario

function App() {
  return (
    <>
      <div className="divBlock">
        <Perfil />
        <section id="result">
        <Formulario />
          <section id="reference-table">
            <TabelaIMC />
          </section>
        </section>
      </div>
    </>
  );
}

export default App;