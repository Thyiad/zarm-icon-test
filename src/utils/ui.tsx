import React, { ReactNode } from 'react';
import { Modal, Loading, Toast } from 'zarm';
import { UITypes } from '@thyiad/util';

/**
 * 顶部加载中提示，不阻塞操作
 * @param msg 提示内容
 */
// @ts-ignore
export const msgLoading = (msg: string) => Loading.show();

/**
 * toast消息
 * @param msg 需要toast的消息内容
 * @param type 类型：success, warning, error, info, loading，默认success
 */
export const toast = (msg: string, type: UITypes = UITypes.success) => {
    Toast.show(msg);
};

/**
 * 右上角通知消息
 * @param msg 通知标题
 * @param subMsg 通知描述
 * @param type 类型：success, warning, error, info，默认 success
 */
export const notify = (msg: string, subMsg = '', type: UITypes = UITypes.success) => {
    Toast.show(msg);
};

/**
 * alert 消息框
 * @param msg alert 的 消息内容
 * @param type 类型：info, success, warning, error，默认 info
 * @param content 弹窗内容
 * @param cb 确认回调
 */
export const alert = (
    msg: string,
    type: UITypes = UITypes.success,
    content: string | ReactNode = '',
    cb?: () => void,
) => {
    Modal.alert({
        title: msg,
        content: content,
        okText: '确认',
        onOk: () => {
            cb && cb();
        },
    });
};

/**
 * 确认弹窗
 * @param msg 提示消息
 * @param ok 确认回调
 * @param cancel 取消回调
 */
export const confirm = (msg: string, ok?: () => void, cancel?: () => void, content?: string) => {
    Modal.confirm({
        title: msg,
        content,
        okText: '确认',
        cancelText: '取消',
        onOk() {
            if (ok) {
                ok();
            }
        },
        onCancel() {
            if (cancel) {
                cancel();
            }
        },
    });
};
