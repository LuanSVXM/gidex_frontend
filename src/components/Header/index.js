import React from "react";
import { ContainerHeader, FotoHeader, UsernameHeader } from "../../styled";



export default function Header () {

    const [username , setUserName] = React.useState('')

    const [img, setImg] = React.useState('')

    React.useEffect(() => {

        const img_cache = localStorage.getItem('logo');

        if(img_cache.trim() != 'null' && img_cache && img_cache.length > 0) {
            setImg(img_cache)
        }

        const username_cache = localStorage.getItem('nome');
        
        if(username_cache.trim() != 'null' && username_cache && username_cache.length > 0) {
            setUserName(username_cache)
        }


    },[])



    return (

        <ContainerHeader >

                <FotoHeader src={img == '' ? './padrao/logo_padrao.jpeg' : img} />

                <UsernameHeader>{username}</UsernameHeader>

            </ContainerHeader>
    )



}