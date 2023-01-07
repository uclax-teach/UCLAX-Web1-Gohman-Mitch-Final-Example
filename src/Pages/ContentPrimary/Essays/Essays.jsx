import styled from 'styled-components';

/* Components ---------------------------*/
import PageMeta from '@/Common/PageMeta.jsx';
import Inset from '@/Common/Inset.jsx';
import Essay from './Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled EssaysName="Essays">
            <PageMeta title="Essays" />
            <Inset>
                <h1>Essays</h1>

                <Essay q='Q1: Sample question...'>
                    <p>Answer goes here...</p>
                </Essay>

                <Essay q='Q2: Sample question...'>
                    <p>Answer goes here...</p>
                </Essay>

                <Essay q='Q3: Sample question...'>
                    <p>Answer goes here...</p>
                </Essay>

                <Essay q='Q4: Sample question...'>
                    <p>Answer goes here...</p>
                </Essay>

                <Essay q='Q5: Sample question...'>
                    <p>Answer goes here...</p>
                </Essay>

                <Essay q='Q6: Sample question...'>
                    <p>Answer goes here...</p>
                </Essay>

                <Essay q='Q7: Sample question...'>
                    <p>Answer goes here...</p>
                </Essay>



            </Inset>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
