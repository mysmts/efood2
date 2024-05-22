import styled from 'styled-components';
import variaveis from './../../styles/variaveis';

// Container principal que centraliza os elementos
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

// Disposição do formulário em linha
export const Formulario = styled.form`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 3px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Estilo do botão principal de adicionar
export const Button = styled.button`
  background: ${variaveis.verde};
  color: ${variaveis.branco};
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 9px;
  width: 225px;
  height: 35px;

  &:hover {
    background: ${variaveis.verdeHover};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Botão de cancelar com hover diferente
export const CancelButton = styled(Button)`
  background-color: ${variaveis.vermelho};
  width: 78px;
  height: 35px;

  &:hover {
    background: ${variaveis.vermelhoHover};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Regra geral para os inputs
export const InputNome = styled.input`
  padding: 8px;
  border: 1px solid ${variaveis.cinzaLight};
  border-radius: 4px;
  line-height: 15px;
  font-family: 'Roboto Mono', monospace;
  width: 100%;
`;

// Input de busca com estilo adicional
export const InputSearch = styled(InputNome)`
  width: 100%;
  margin-top: 8px;
  background-color: ${variaveis.grafite};
  color: ${variaveis.cinza};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Input de telefone com estilo adicional
export const InputTelefone = styled(InputNome)`
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Input de email com estilo adicional
export const InputEmail = styled(InputNome)`
  width: 100%;
`;

// Lista de contatos
export const Lista = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const ItemLista = styled.li`
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: ${variaveis.cinzaLight};
  border-radius: 4px;
`;
