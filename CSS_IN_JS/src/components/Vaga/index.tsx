// src/components/Vaga/index.tsx

import React from 'react';
import { LinkAnuncio, TitleAnuncioDaVaga, VagasAnuncio } from './styles'; 

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <VagasAnuncio>
    <TitleAnuncioDaVaga>{props.titulo}</TitleAnuncioDaVaga>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <LinkAnuncio href="#">Ver detalhes e candidatar-se</LinkAnuncio>
  </VagasAnuncio>
)

export default Vaga

// src/components/Vaga/index.tsx
export {}; // Adicione este export vazio para tornar o arquivo um módulo