import React from "react";

import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { ContainerSideRender, RenderDiv } from "../../styled";
import Render from "../../components/Render";


export default function Home() {

    const navigate = useNavigate();

    const [abas, setAba] = React.useState("")

    const [token, setToken] = React.useState('')

    React.useEffect(() => {

        const token = localStorage.getItem('token');

        console.log(token)

        if (!token) {

            navigate('/', { redirect: true })

            return

        };

        setToken(token)

        setAba("personagens")

    }, [])

    return (
        <React.Fragment>

            <Header />

            <ContainerSideRender>

                <SideBar onChange={(route) => setAba(route) } />

                <Render token={token} render={abas} />

            </ContainerSideRender>

        </React.Fragment>

    )
}