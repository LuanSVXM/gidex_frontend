import React from "react";
import { ContainerItensSideBar, ContainerSideBar, LogoItensSideBar, LogoSide, SpanItensSideBar } from "../../styled";


export default function SideBar() {


    return (


        <ContainerSideBar >

            <LogoSide src="./gidex2.png" />


            <ContainerItensSideBar>

                <LogoItensSideBar src="./icons/characters.png" />

                <SpanItensSideBar> Personagens </SpanItensSideBar>

            </ContainerItensSideBar>

            <ContainerItensSideBar>

                <LogoItensSideBar src="./icons/inventario.webp" />

                <SpanItensSideBar> Inventario </SpanItensSideBar>

            </ContainerItensSideBar>

        </ContainerSideBar>


    )





}