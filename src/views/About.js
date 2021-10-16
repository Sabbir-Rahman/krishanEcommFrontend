import { Container, Row, Col, Card } from 'react-bootstrap'
import রাফীর_ছবি from 'assets/img/about/rafi.jpg'
import রাতুলের_ছবি from 'assets/img/about/ratul.jpg'
import সাব্বিরের_ছবি from 'assets/img/about/sabbir.jpg'

const about = () => {
    return (
        <Container fluid >
            <Container fluid className="SignInAndUp"         style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'auto',
        }}>
                <Card style={{ width: '30%', margin: '5%' }}>
                    <Card.Body>
                        <Col >
                            <img
                                src={রাতুলের_ছবি}
                                alt='রাতুলের ছবি পাওয়া যায়নি'
                                style={{
                                    background: 'white',
                                    width: '320px',
                                    height: '420px',
                                    overflow: 'hidden',
                                }}
                            />
                        </Col>
                        <Col style={{ marginLeft: '2%' }}>
                            <Row as='h3'>রাতুল মাহজাবিন</Row>
                            <Row>আইডি: ১৮০০৪২১২৩</Row>
                        </Col>
                    </Card.Body>
                </Card>
                <Card style={{ width: '30%' }}>
                    <Card.Body>
                        <Col >
                            <img
                                src={রাফীর_ছবি}
                                alt='রাফীর ছবি পাওয়া যায়নি'
                                style={{
                                    background: 'white',
                                    width: '320px',
                                    height: '420px',
                                    overflow: 'hidden',
                                }}
                            />
                        </Col>
                        <Col style={{ marginLeft: '2%' }}>
                            <Row as='h3'>মোহতাসিম হাদী রাফী</Row>
                            <Row>আইডি: ১৮০০৪২১৪৫</Row>
                        </Col>
                    </Card.Body>
                </Card>
                <Card style={{ width: '30%', margin: '5%' }}>
                    <Card.Body>
                        <Col >
                            <img
                                src={সাব্বিরের_ছবি}
                                alt='সাব্বিরের ছবি পাওয়া যায়নি'
                                style={{
                                    background: 'white',
                                    width: '320px',
                                    height: '420px',
                                    overflow: 'hidden',
                                }}
                            />
                        </Col>
                        <Col style={{ marginLeft: '2%' }}>
                            <Row as='h3'>মো. সাব্বির রহমান</Row>
                            <Row>আইডি: ১৮০০৪২১৪২</Row>
                        </Col>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    )
}

export default about