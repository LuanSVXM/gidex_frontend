import React from "react";

import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { ContainerSideRender, RenderDiv } from "../../styled";


export default function Home() {

    const navigate = useNavigate();

    React.useEffect(() => {

        const token = localStorage.getItem('token');

        console.log(token)

        if (!token) {

            navigate('/', { redirect: true })

            return

        };
    }, [])

    return (
        <React.Fragment>

            <Header />

            <ContainerSideRender>

                <SideBar />

                <RenderDiv />

            </ContainerSideRender>

        </React.Fragment>

    )
}