import React from "react";
import { ContainerItensSideBar, ContainerSideBar, LogoItensSideBar, LogoSide, SpanItensSideBar } from "../../styled";
import { ImExit } from 'react-icons/im';
import { useNavigate } from "react-router-dom";

export default function SideBar(props) {

    const navigate = useNavigate();

    const Sair = () => {

        localStorage.removeItem('token');

        navigate('/', { refresh: true })

    }

    return (


        <ContainerSideBar >

            <LogoSide src="./gidex2.png" />


            <ContainerItensSideBar onClick={() => props.onChange('personagens')}>

                <LogoItensSideBar src="./icons/characters.png" />

                <SpanItensSideBar> Personagens </SpanItensSideBar>

            </ContainerItensSideBar>

            <ContainerItensSideBar>

                <LogoItensSideBar src="./icons/inventario.webp" />

                <SpanItensSideBar> Inventario </SpanItensSideBar>

            </ContainerItensSideBar>



            <ContainerItensSideBar onClick={() => Sair()}>


                <ImExit style={{
                    height: 32,
                    width: 32,
                    color: 'white'
                }} />

                <SpanItensSideBar> Sair Da Conta </SpanItensSideBar>

            </ContainerItensSideBar>




        </ContainerSideBar>


    )





}