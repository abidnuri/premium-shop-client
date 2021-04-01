import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const SignIn = () => {
    const [formData, setFormData] = useState({
        name: null,
        email: null,
        password: null
    });
    const [user, setUser] = useState({});

    const [option, setOption] = useState('registar');

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {

        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                var token = credential.accessToken;
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email: email };
                // console.log(signedInUser);
                setLoggedInUser(signedInUser);

                history.replace(from);

            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Row className="justify-content-center">
                        <Col md={12} className="p-4">
                            <div className="text-center">
                                <Button onClick={handleGoogleSignIn} variant="success" size="sm" >
                                    <FontAwesomeIcon icon={faGoogle} />
                                    Login With Google
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default SignIn;