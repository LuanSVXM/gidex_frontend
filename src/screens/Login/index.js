import React from "react";
import { Container, ContainerHeader, Logo, Wallpaper } from "../../styled";
import { Audio, AudioMute } from "../../styled";



export default function Login() {

    const [mute, setMute] = React.useState(false);


    const handleMute = () => {
        setMute(!mute)
    }

    return (

        <Container> 

            {!mute ? <Audio onClick={() => handleMute()}/> : <AudioMute onClick={() => handleMute()} />}

            <Wallpaper
                autoPlay={true}
                loop={true}
               
            >
                <source src={`${window.location.origin}/video/video_fundo.mp4`} type='video/mp4' />
            
            </Wallpaper>


            <ContainerHeader>

                <Logo  src={`${window.location.origin}/logo512.png`}  />

            </ContainerHeader>
            




        </Container>

    )

}