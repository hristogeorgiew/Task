import React, {Fragment, Component} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';


//set cookies
import { instanceOf } from 'prop-types';
import { withCookies, Cookies} from 'react-cookie';
class Login extends Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    }

    constructor(props) {
        super(props);
    }


    render() {
        return(
            <Fragment>
                <Helmet>
                    <title>Login Page</title>
                </Helmet>
                <Container>
                    <Row>
                        <Col>
                            <h2>Login</h2>
                            <Form>
                                
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Login
