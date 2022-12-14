import React from "react";
import ModalLogin from "../../components/ModalLogin";
import { Container, Logo, Wallpaper, ContainerStart, StartButton, TextButton, ContainerHeaderLogin } from "../../styled";
import { Audio, AudioMute } from "../../styled";



export default function Login() {

    const wallpaper = React.useRef(null);

    const [mute, setMute] = React.useState(true);

    const [openModalLogin, setOpenModalLogin] = React.useState(false)



    const handleMute = () => {
        setMute(!mute)
    }

 

    React.useEffect(() => {
        
    }, [])

    return (

        <Container>

           {openModalLogin ?  <ModalLogin onExit={() => {setOpenModalLogin(false)}} /> : "" } 

            {!mute ? <Audio onClick={() => handleMute()} /> : <AudioMute onClick={() => handleMute()} />}

            <Wallpaper
                autoPlay
                loop
                muted={mute}
                controls={false}
                ref={wallpaper}
            >
                <source src={`./video/fundo.mp4`} type="video/mp4" />

            </Wallpaper>


            <ContainerHeaderLogin>

                <Logo src={`${window.location.origin}/logo2.png`} />

            </ContainerHeaderLogin>




            <ContainerStart>


                <StartButton onClick={() => {setOpenModalLogin(true)}}>

                    <TextButton>
                        ENTRAR NO GIDEX
                    </TextButton>

                    </StartButton>


            </ContainerStart>





        </Container>

    )

}