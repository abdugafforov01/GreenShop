import React from 'react'
import { Modal } from 'antd';
import { useState } from 'react';
import out from '../../assets/img/Logout.png'
import { Btns, Login, Out } from './style';
import Tab from '../tab';


export default function Madal() {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };
    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <>
            <Btns className='btns' onClick={showModal}>
                <Out src={out}/>
                <Login>Login</Login>
            </Btns>
            <Modal
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[]}>   
                <Tab/>
            </Modal>
        </>
    );
}
