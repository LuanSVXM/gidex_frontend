import { RenderDiv } from "../../styled";

import Personagens from "../../screens/Personagens";
import React, { useEffect } from "react";

export default function Render(props) {

    const token = props.token

    const [renderizado, setRenderizado] = React.useState(<></>)

    React.useEffect(() => {

        if(props.render == 'personagens') return setRenderizado(<Personagens token={token}/>)
        
    }, [props.render])

    return (


        <RenderDiv>

            {renderizado}

        </RenderDiv>


    )

}