import styled from 'styled-components';

/* Components ---------------------------*/
import PageMeta from '@/Common/PageMeta.jsx';
import Inset from '@/Common/Inset.jsx';
import Forms from './Forms.jsx';

const Contact = () => {
    return (
        <ContactStyled className="Contact">
            <PageMeta title="Contact" />
            <Inset>
                <h1>Contact</h1>
                <Forms />
            </Inset>
        </ContactStyled>
    );
};

export default Contact;

const ContactStyled = styled.div``;
