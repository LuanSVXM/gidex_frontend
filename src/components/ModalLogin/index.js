import React from 'react';

import { ButaoExcluideModal, ContainerModalLogin, FundoPreto, ContainerButaoExcluideModal, Row, TituloLoginModal, ContainerInputs } from '../../styled';


export default function ModalLogin() {


    return (

        <FundoPreto>

            <ContainerModalLogin >

                <ContainerButaoExcluideModal>

                    <ButaoExcluideModal />

                </ContainerButaoExcluideModal>

                <Row width={'100%'} flex={true} row={true}  margintop={"5%"}>

                    <TituloLoginModal>
                        GIDEX
                    </TituloLoginModal>

                </Row>

                <ContainerInputs>

                </ContainerInputs>




            </ContainerModalLogin>



        </FundoPreto>


    )




}