import styled from "styled-components"

export const Fundo = styled.div`
    background-color: #26401B;
`;

export const Quadro = styled.div`
    background-color: #A60311;
    width: 450px;
    margin-bottom: 25px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 25px;
`;


export const Foto = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
`;

export const TextoPerfil = styled.p`
    font-size: 37px;
    color: #fff;
`;

export const Galeria = styled.div`
    padding-top: 25px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
`;