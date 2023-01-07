import { Helmet } from 'react-helmet';

const PageMeta = ({ title }) => {
    return (
        <Helmet>
            <title>{title} :: CrossFit Decimate</title>
        </Helmet>
    );
};

export default PageMeta;
