import React from 'react';
import { useHistory } from 'react-router-dom';

const NoFoundPage: React.FC<RoutePageProps> = () => {
    const history = useHistory();

    return <div>500 page</div>;
};

export default NoFoundPage;
