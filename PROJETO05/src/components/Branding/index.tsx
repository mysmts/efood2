// Componente.jsx

import React from 'react';
import { BrandingStyle, EnunciadoStyle } from './styles'; // Importe os estilos corretamente

export const Branding = () => {
  return <BrandingStyle>iContact</BrandingStyle>;
};

export const EnunciadoCadastro = () => {
  return <EnunciadoStyle>Cadastrar</EnunciadoStyle>;
};

export const EnunciadoBusca = () => {
  return <EnunciadoStyle>Buscar</EnunciadoStyle>;
};
