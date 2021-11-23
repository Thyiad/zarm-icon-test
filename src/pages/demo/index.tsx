import React, { FC } from 'react';
import * as api from '@/constants/api';
import { thyUI, UITypes, thyReq } from '@thyiad/util/lib/index';
import { Button, Input } from 'zarm';
import MyIcon from '@/components/MyIcon';

const DemoPage: FC<RoutePageProps> = (props) => {
    return (
        <div style={{ padding: 24 }}>
            <MyIcon type="home" theme="primary" />
        </div>
    );
};

export default DemoPage;
