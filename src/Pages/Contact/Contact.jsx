import styled from 'styled-components';

/* Components ---------------------------*/
import Head from '@/Layout/Head.jsx';
import Inset from '@/Layout/Inset.jsx';
import Forms from './Forms.jsx';

const Contact = () => {
    return (
        <ContactStyled className="Contact">
            <Head title="Contact" />
            <Inset>
                <h1>Contact</h1>
                <Forms />
            </Inset>
        </ContactStyled>
    );
};

export default Contact;

const ContactStyled = styled.div``;
