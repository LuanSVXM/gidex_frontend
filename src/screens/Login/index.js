import React from "react";
import { Container, Wallpaper } from "../../styled";
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
                muted={mute}
            >
                <source src={`${window.location.origin}/video/video_fundo.mp4`} type='video/mp4' />
            
            </Wallpaper>

            




        </Container>

    )

}