import React from 'react';
import { useHistory } from 'react-router-dom';

const NoFoundPage: React.FC<RoutePageProps> = () => {
    const history = useHistory();

    return <div>404 not found</div>;
};

export default NoFoundPage;
