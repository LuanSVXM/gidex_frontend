import styled, { createGlobalStyle } from "styled-components";

import { BsFillVolumeMuteFill, BsFillVolumeDownFill, BsXLg } from "react-icons/bs";



export default createGlobalStyle`
 
@font-face {
    font-family: 'oswald';
    src: url('./gifont.ttf');
}

`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    cursor: url(./cursor.svg) auto;
    flex:1;
    min-height: 100vh;
    flex-direction: column;
`

export const Wallpaper = styled.video`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    cursor: none;
    user-select: none;
    position: fixed;
    z-index: -1;
`

export const AudioMute = styled(BsFillVolumeMuteFill)`

    position: fixed;
    right: 0;
    margin-right: 40px;
    margin-top: 40px;
    color: red;
    width: 60px;
    height: 60px;
    cursor: pointer;

    &:active{
        opacity: 0.7;
    }

`

export const Audio = styled(BsFillVolumeDownFill)`

    position: fixed;
    right: 0;
    margin-right: 40px;
    margin-top: 40px;
    color: white;   
    width: 60px;
    height: 60px;
    cursor: pointer;

    &:active{
        opacity: 0.7;
    }

`


export const ContainerHeaderLogin = styled.div`
    height: 30vh;
    width: 100%;
    display: flex;
    justify-content: center;
    user-select: none;
    align-items: center;
    padding-top: 0ex;
`


export const Logo = styled.img`
    user-select: none;
    object-fit: contain;
    display: none;
    width: 140px;
    height: 140px;
    background-color: black;
    border-radius: 50%;
    margin-top: 10px;
`


export const ContainerStart = styled.div`
    height: 69vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StartButton = styled.div`

        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-top: 60px;
       
        width: 290px;
        height: 60px;
        animation-name: animacao_sumir;
        animation-duration: 2.5s;
        animation-iteration-count: infinite;

        @keyframes animacao_sumir {
            0% { opacity: 0.2 } 
            100% {  opacity: 1; }
        };

        &:active {
            opacity: 0.6;
        };
`

export const TextButton = styled.span`
    text-align: center;
    cursor: pointer;
    user-select: none;
    font-size: 42px;
    font-family: oswald;
    color: #FFF;
`

export const FundoPreto = styled.div`
    height: 100vh;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: ${window.innerWidth < 600 ? "" : "center"};
    position: absolute;
    z-index: 999;
`

export const ContainerModalLogin = styled.div`

        background-color: white;
        display:flex;
        flex-direction: column;
        align-content: space-between;
        width:  ${window.innerWidth < 380 ? "97%" : "80%"};
        max-width: 400px;
        position: relative;
        height: ${props => props.registro ? "85vh" : "70vh"};
        max-height: ${props => props.registro ? "600px" : "400px"};;
        margin-top: 100px;
        border-radius: 5px;
   
`


export const ContainerButaoExcluideModal = styled.div`

        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        width: 40px;
        height: 40px;
        position: absolute;
        top:0;
        color: #666666;
        right: 0;
        margin-right: 20px;
        margin-top: 20px;

`


export const ButaoExcluideModal = styled(BsXLg)`
        user-select: none;
        width: 20px;
        height: 20px;
        color: #666666;
`

export const Row = styled.div`

    width: ${props => props.width ? props.width : '100%'};
    display: flex; 
    flex-direction: ${props => props.row ? 'row' : 'column'};
    align-items: ${props => props.row ? 'center' : ''};
    justify-content: ${props => props.row ? 'center' : ''}; ;
    margin-top: ${props => props.margintop ? props.margintop : "0px"};

`

export const TituloLoginModal = styled.span`
        user-select: none;
        font-family: oswald;
        letter-spacing: 2.5px;
        margin-bottom: 3%;
        color: #666666;
        font-size: 24px;
        text-align: center;
`

export const ContainerInputs = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 0%;
    height: 75%;
    align-items: center;


`


export const InputsModalLogin = styled.input`

    width: 80%;
    border-radius: 12px;
    background-color: #d1cbcb;
    border: 2px solid #393b40;
    padding-left: 20px;
    font-family: oswald;
    margin-top: -15px;
    margin-bottom: -15px;
    outline: none;
    height: 40px;

    &::placeholder{
        color: #3a3a3a;
    }

    &:focus-visible{
        outline: 1px solid #ddbe65;
    }
    
`

export const ButaoLoginModal = styled.div`

    width: 85%;
    background-color: #2b2c30;
    height: 45px;
    justify-content: center;
    align-items: center;
    cursor: pointer;    
    user-select: none;
    color: white;
    display: flex;
    letter-spacing: 1.5px;
    font-family: oswald;
    border-radius: 4px;

    &:active{
        background-color: #1d1149;
        opacity: 0.5;
    }

`

export const  LinkRegistrar = styled.span`

    color: #2b2c30;
   
    text-decoration: underline;
    
    letter-spacing: 1.5px;
    
    font-size: 19px;
    
    margin-top: -20px;
    
    cursor: pointer;

    &:active{
        opacity: 0.5;
    }

`


export const ContainerSideRender = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: row;
`


export const RenderDiv = styled.div`
    width: ${window.innerWidth-280}px;
    height: 100%;
    background-color: blue;
    overflow: scroll;
    scrollbar-width: none;  
    &::-webkit-scrollbar{
        display: none;
    }
`

export const ContainerSideBar = styled.div`
    width: 280px;
    height: 100%;
    background-color: green;
    overflow: scroll;
    scrollbar-width: none;  
    &::-webkit-scrollbar{
        display: none;
    }
`

export const ContainerHeader = styled.div`
    height: 10vh;
    width: 100vw;
    background-color: yellow;
`