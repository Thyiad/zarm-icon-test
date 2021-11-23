export const IS_DEV = import.meta.env.DEV;
// @ts-ignore
console.log('process.env.node_env: ' + process.env.NODE_ENV);
console.log(import.meta.env);

/**
 * token的cookie名
 */
export const LOGIN_COOKIE_KEY = 'loginCookieKey';

/**
 * 发送请求时token的header名
 */
export const REQUEST_HEADER_TOKEN_NAME = 'accessKey';

/**
 * 已登录角色的cookie名
 */
export const LOGIN_ROLE_KEY = 'loginRoleKey';

export const CTX_SSR_DATA = 'clientSsrData';
