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

export const ModalBackground = styled.div`
    width: 100vw;
    height: 100vw;
    background-color: black;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: start;
    padding-top: 150px;
`;

export const modalContainer = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 12px;
    background-color: cadetblue;
    box-shadow: rgba(0, 0, 0, 0.35);
    display: flex;
    flex-direction: column;
    padding: 25px;
`;

export const titleCloseBtn = styled.div`
    display: flex;
    justify-content: end;
`;

export const BotaoCaiFora = styled.button`
    backgound-color: rgba(255, 157, 157, 1);
    color: black;
    width: 50px;
    font-size: 16px;
    height: 50px;
    border-radius: 50%;
`;

export const Texto = styled.p`
    color: white;
`;