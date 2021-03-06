import React, { FC, useEffect } from 'react';
import { BrowserRouter, StaticRouter, Switch, useHistory } from 'react-router-dom';
import { Provider, StoreProviderProps } from '@/redux/store';
import routes from '@/route';
import RouteWithSubRoutes from '@/components/RouteWithSubRoutes';
import 'zarm/lib/style/index.css';
import '../assets/scss/common.scss';
import '../app.scss';
import { initThyiadUtil } from '@/utils/index';

initThyiadUtil();

export const AppBody: FC = () => {
    const history = useHistory();
    useEffect(() => {
        history.listen((e) => {
            // 此处做路由监听
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Switch>
            {routes.map((route) => (
                <RouteWithSubRoutes key={route.name} {...route} />
            ))}
        </Switch>
    );
};

export const AppProvider: FC<StoreProviderProps> = (props: StoreProviderProps) => {
    return (
        <Provider context={props.context}>
            <AppBody />
        </Provider>
    );
};

export const AppBrowser: FC = () => {
    return (
        <BrowserRouter>
            <AppProvider />
        </BrowserRouter>
    );
};
