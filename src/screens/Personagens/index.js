import React from 'react';
import { Spinner } from 'react-bootstrap';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services';
import {
    ContainerModalPersonagem,
    ContainerDetalhesModalPersonagem,
    ContainerPersonagens,
    PropriedadesSpanPersonagens,
    ContainerPage,
    ContainerPagination,
} from '../../styled';




export default function Personagens(props) {

    const navigate = useNavigate();

    const [count, setCount] = React.useState(0);

    const [initialPage, setInitialPage] = React.useState(1)

    const [loading, setLoading] = React.useState(false);

    const [personagens, setPersonagens] = React.useState([]);


    React.useEffect(() => {


        if (!props.token) {

            navigate('/', { redirect: true })

            return

        };

        setPersonagens([])

        CarregarPersonagens()


    }, [])


    const PersonagemModal = (personagem) => {



        return (

            <ContainerModalPersonagem key={personagem.id} fundo={personagem.foto ? personagem.foto : './padrao/fundo_personagem.png'}>


                <ContainerDetalhesModalPersonagem>

                    <PropriedadesSpanPersonagens>Aniversario: {personagem.aniversario}</PropriedadesSpanPersonagens>

                    <PropriedadesSpanPersonagens>Arma: {personagem.arma?.nome ? personagem.arma.nome : 'Sem Arma'}</PropriedadesSpanPersonagens>

                    <PropriedadesSpanPersonagens>Elemento: {personagem.elemento?.nome ? personagem.elemento.nome : "Sem Elemento"}</PropriedadesSpanPersonagens>

                    <PropriedadesSpanPersonagens>Nação: {personagem.nacao?.nome ? personagem.nacao.nome : "Sem Nação"}</PropriedadesSpanPersonagens>

                    <PropriedadesSpanPersonagens>Talento: {personagem.talento?.nome ? personagem.talento.nome : "Sem Talento"}</PropriedadesSpanPersonagens>

                </ContainerDetalhesModalPersonagem>

            </ContainerModalPersonagem>

        )

    }

    const CarregarPersonagens = async () => {

        setLoading(true)

        const header = {
            headers: {
                "authorization": props.token,
            }
        }



        try {

            const result = await api.get('personagens/list', header);

            console.log(result.data)

            setPersonagens(result.data.rows)

            setCount(result.data.count)

            setLoading(false)

        } catch (err) {

            console.log(err)

            setLoading(false)

            alert("erro ao pegar personagens")

        }

    }

    const sumPage = () => {
       
        const total_page = Math.ceil(count/3);

        if((initialPage+1) > total_page) return

        setInitialPage(initialPage+1)

    }

    const minusPage = () => {
       
        const total_page = Math.ceil(count/3);

        if((initialPage-1) < 1) return

        setInitialPage(initialPage-1)

    }

    return (

        <React.Fragment>


            <ContainerPersonagens>

                {loading && <Spinner style={{ height: 200, width: 200 }} />}

                {!loading && personagens[0] && personagens.slice(((initialPage - 1) * 3), (initialPage * 3)).map(per => PersonagemModal(per))}


            </ContainerPersonagens>


            {!loading && <ContainerPagination >

                <BsArrowLeft style={{
                    height: 25,
                    width: 25,
                    color: 'white',
                    cursor: 'pointer'

                }} onClick={() => {minusPage()}} />

                <ContainerPage>

                    {initialPage}

                </ContainerPage>

                <BsArrowRight style={{
                    height: 25,
                    width: 25,
                    color: 'white',
                    cursor: 'pointer',

                }} onClick={() => {sumPage()}} />

            </ContainerPagination>
            }

        </React.Fragment>
    )


}