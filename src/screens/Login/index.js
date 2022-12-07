import React from "react";
import ModalLogin from "../../components/ModalLogin";
import { Container, ContainerHeader, Logo, Wallpaper, ContainerStart, StartButton, TextButton } from "../../styled";
import { Audio, AudioMute } from "../../styled";



export default function Login() {

    const wallpaper = React.useRef(null);

    const [mute, setMute] = React.useState(true);



    const handleMute = () => {
        setMute(!mute)
    }

 

    React.useEffect(() => {
        
    }, [])

    return (

        <Container>

            <ModalLogin />

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


            <ContainerHeader>

                <Logo src={`${window.location.origin}/logo2.png`} />

            </ContainerHeader>




            <ContainerStart>


                <StartButton >

                    <TextButton>
                        ENTRAR NO GIDEX
                    </TextButton>

                    </StartButton>


            </ContainerStart>





        </Container>

    )

}