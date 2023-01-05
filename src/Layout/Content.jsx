import styled from 'styled-components';

const Content = ({children}) => {
    return (
        <ContentStyled className='Content'>
            {children}
        </ContentStyled>
    );
}

export default Content;

const ContentStyled = styled.main`
    background-color: #fff;
    min-height: 600px;

    .Inset {
        padding: 50px 10px;
    }
`;