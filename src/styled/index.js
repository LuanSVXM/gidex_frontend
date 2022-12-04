import styled from "styled-components";

import { BsFillVolumeMuteFill, BsFillVolumeDownFill } from "react-icons/bs";


export const Container = styled.div`
    width: 100%;
    display: flex;
    cursor: url(./cursor.svg) auto;
    flex:1;
    min-height: 100vh;
    flex-direction: column;
`

export const Wallpaper = styled.video`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    cursor: none;
    user-select: none;
    position: fixed;
    z-index: -1;
`

export const AudioMute = styled(BsFillVolumeMuteFill)`

    position: fixed;
    right: 0;
    margin-right: 40px;
    margin-top: 40px;
    color: red;
    width: 60px;
    height: 60px;
    cursor: pointer;

    &:active{
        opacity: 0.7;
    }

`

export const Audio = styled(BsFillVolumeDownFill)`

    position: fixed;
    right: 0;
    margin-right: 40px;
    margin-top: 40px;
    color: white;   
    width: 60px;
    height: 60px;
    cursor: pointer;

    &:active{
        opacity: 0.7;
    }

`


export const ContainerHeader = styled.div`
    height: 30vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`