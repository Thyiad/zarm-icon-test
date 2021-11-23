import React, { FC } from 'react';
import { render, hydrate } from 'react-dom';
import { AppBrowser } from '@/components/AppContainer';
import { thyEnv } from '@thyiad/util';
import smoothscroll from 'smoothscroll-polyfill';
import { pageLoaded } from './utils/pageLoaded';

if (thyEnv.canUseWindow()) {
    smoothscroll.polyfill();
}

pageLoaded();

render(<AppBrowser />, document.getElementById('root'));
