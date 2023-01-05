import { Helmet } from 'react-helmet';

const Head = ({ title }) => {
    return (
        <Helmet>
            <title>{title} :: CrossFit Decimate</title>
        </Helmet>
    );
};

export default Head;
