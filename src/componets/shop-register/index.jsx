import React from 'react'
import { Btn, Btns, Butto, Content, Out, } from './style'
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

export default function Register() {
    return (
            <Content>
                <Content.Title>Enter your email and password to register.</Content.Title>
                <Space direction="vertical">
                    <Input placeholder='Username' />
                    <Input className='mt-1' placeholder='Enter your email address' />
                    <Input.Password
                    className='mt-1'
                        placeholder="Password"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                    <Input className='mt-1' placeholder='Confirm Password' />
                </Space>
                <Butto><Btns>Register</Btns></Butto>
                <Out>Or login with</Out>
                <Butto><Btn><Btn.Google /> Login with Google</Btn></Butto>
                <Butto><Btn><Btn.Facebook /> Login with Google</Btn></Butto>
            </Content>
    )
}
