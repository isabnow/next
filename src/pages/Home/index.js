import React from 'react';
import { Image } from 'react-bootstrap';
import { Col, Row } from 'reactstrap';
import ControlledCarousel from './components/carousel';
import { ButtonProduct } from './components/Button';
import styles from './Home.module.css'
import { Divider } from './components/Divider';
// import { Container } from './styles';

function Home() {
    const produtos = [
        {
            name: 'Ensino Infantil',
            path: 'teste1'
        },
        {
            name: 'Ensino Fundamental',
            path: 'teste1'
        },
        {
            name: 'Ensino Médio',
            path: 'teste1'
        },
        {
            name: 'Ensino Técnico',
            path: 'teste1'
        },
        {
            name: 'Ensino Superior',
            path: 'teste1'
        },
    ]

    const logo = '/images/logorede.png'
    const imageCta = '/images/psicologa.png'

    const redeEnsino = [
        {
            number: '7',
            name: 'Unidades'
        },
        {
            number: '600',
            name: 'Alunos formados'
        },
        {
            number: '+50',
            name: 'Colaboradores'
        },
        {
            number: '+300',
            name: 'Aprovações'
        },
    ]

    const unidades = [
        {
            path: '/images/redejardins.jpg',
            title: 'Colégio Jardins',
            subtitle: 'Jardins - Aracaju/SE'
        },
        {
            path: '/images/redejardinsgo1.jpg',
            title: 'Colégio Jardins GO',
            subtitle: 'Aruana - Aracaju/SE'
        },
        {
            path: '/images/redejardinsgosul.jpg',
            title: 'Colégio Jardins Sul',
            subtitle: 'Pituba - Salvador/BA'
        },
        {
            path: '/images/redejardinsgo1.jpg',
            title: 'Colégio Jardins Sul',
            subtitle: 'Aruana - Aracaju/SE'
        },
        {
            path: '/images/redejardins.jpg',
            title: 'Colégio Jardins ALL',
            subtitle: 'Orlando Dantas - Aracaju/SE'
        }
    ]

    return (
        <>
            <div className={`${styles.header} pt-5`}>
                <div className='container'>
                    <Row className='align-items-center'>
                        <Col lg={5}>
                            <div className='pb-5'>
                                <div className='text-center'>
                                    <Image src={logo} width={200} className={`${styles.imageLogo} m-auto`} />
                                </div>
                                <div className={styles.titleHeader}>
                                    <h1 className='pt-3 pb-3'>
                                        Do berçário ao superior a Rede Jardins está presente
                                    </h1>
                                </div>
                                <ButtonProduct produtos={produtos} />
                            </div>
                        </Col>
                        <Col lg={7} className='text-center'>
                            <div>
                                <ControlledCarousel />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className='container pb-5'>
                <div className={`${styles.titleHeader} pt-3 pb-3 text-center`}>
                    <h2>
                        Nossa rede de ensino
                    </h2>
                    <Divider />
                </div>
                <Row>
                    {
                        redeEnsino.map((e, i) => {
                            return (
                                <Col lg={3} key={i}>
                                    <div className={styles.cardsRedeEnsino}>
                                        <h2 className='text-center'>
                                            {e.number}
                                        </h2>
                                        <h3 className='text-center'>
                                            {e.name}
                                        </h3>
                                    </div>
                                </Col>
                            )
                        }
                        )
                    }
                </Row>
            </div>
            <div className='mb-5'>
                <Row className={styles.containerLimit}>
                    {
                        unidades.map((e, i) => {
                            return (
                                <Col key={i} className={styles.colunasRedes} style={{
                                    backgroundImage: `url(${e.path})`
                                }}>
                                    <div className={styles.backgroundUnidades}>
                                        <h2>{e.title}</h2>
                                        <h6>{e.subtitle}</h6>
                                    </div>
                                </Col>
                            )
                        }
                        )
                    }
                </Row>
                <Row className={styles.containerLimit + ' ' + styles.contCta}>
                    <Col lg={6}>
                        <div className={styles.cta}>
                            <h2>
                                Agende uma visita em uma de nossas unidades
                            </h2>
                        </div>
                        <div className='text-left'>
                            <ButtonProduct produtos={[{path:'', name:'bla'}]} className='text-left'/>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className={styles.imageCta}>
                            <Image src={imageCta}
                                layout='fill'
                                objectFit='contain' />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Home;