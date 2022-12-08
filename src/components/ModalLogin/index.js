import React from 'react';


import { api } from '../../services';

import { Spinner, Alert } from 'react-bootstrap';

import {
    ButaoExcluideModal,
    ContainerModalLogin,
    FundoPreto,
    ContainerButaoExcluideModal,
    InputsModalLogin,
    Row,
    TituloLoginModal,
    LinkRegistrar,
    ContainerInputs,
    ButaoLoginModal
} from '../../styled';

import { useNavigate } from "react-router-dom";

import Util from '../../Util';

export default function ModalLogin(props) {



    const navigate = useNavigate();


    const [senha, setSenha] = React.useState('')

    const [email, setEmail] = React.useState('')

    const [username, setUsername] = React.useState('')

    const [img, setImg] = React.useState('')

    const [registro, setRegistro] = React.useState(false)

    const [loading, setLoading] = React.useState(false)



    const Login = async () => {

        try {

            const response = await api.post('usuarios/auth', {
                email,
                senha,
            });

            console.log(response)

            localStorage.setItem('token', response.data.token);

            return navigate('/home', { replace: true });

        } catch (err) {
            alert("Erro ao logar!")
            setLoading(false)
            console.log(err)
        }



    }


    React.useEffect(() => {

        const token = localStorage.getItem('token');

        if (token) {

            navigate('/home', { redirect: true })

            return

        };

    }, [])


    const handleLogin = () => {

        if (loading) return;

        if (!registro) {

            setLoading(true)

            Login()

        } else {
            alert('registro')
        }
    }

    const handleImg = async (img) => {

        if (img) {

            const string64 = await Util.convertBase64(img)

            setImg(string64)

        } else {

            alert('img nao encontrada!');
        }


    }


    return (

        <FundoPreto>

            <ContainerModalLogin registro={registro} >

                <ContainerButaoExcluideModal onClick={() => props.onExit()}>

                    <ButaoExcluideModal />

                </ContainerButaoExcluideModal>

                <Row width={'100%'} flex={true} row={false} margintop={"5%"}>

                    <TituloLoginModal>
                        GIDEX
                    </TituloLoginModal>

                    {registro &&

                        <TituloLoginModal>
                            Registrar-se
                        </TituloLoginModal>
                    }


                </Row>

                <ContainerInputs>

                    {registro && <InputsModalLogin onChange={(e) => setEmail(e.currentTarget.value)} placeholder='username' type={'text'} />}

                    <InputsModalLogin onChange={(e) => setEmail(e.currentTarget.value)} placeholder='email' type={'email'} />

                    <InputsModalLogin onChange={(e) => setSenha(e.currentTarget.value)} placeholder='senha' type={'password'} />

                    {registro && <InputsModalLogin onChange={(e) => handleImg(e.currentTarget.files[0])} placeholder='email' type={'file'} accept="image/png" />}

                    <ButaoLoginModal onClick={() => handleLogin()} >

                        {!loading ? ( registro ? "Registrar-se" : "ENTRAR" ) : <Spinner animation="border" style={{ color: '#5225a1' }} />}

                    </ButaoLoginModal>

                    <LinkRegistrar onClick={() => setRegistro(!registro)}>

                       {!registro ? "Registrar-se" : "Logar-se" }

                    </LinkRegistrar>

                </ContainerInputs>




            </ContainerModalLogin>



        </FundoPreto>


    )




}