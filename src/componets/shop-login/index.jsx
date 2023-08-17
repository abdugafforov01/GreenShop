import React from 'react'
import { Btn, Btns, Butto, Content, Out, } from './style'
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    user: "",
    password: "",
  })
  const Logan = () => {
    if (data.user === 'xislatbek' && data.password === '200511') {
      navigate('/accaunt')
    }
    else {
      alert('Login yoki Parol xato')
    }
  }
  return (
    <Content>
      <Content.Title>Enter your username and password to login.</Content.Title>
      <form onSubmit={Logan}>
        <Space direction="vertical">
          <Input
            placeholder='email'
            value={data.user}
            onChange={(e) => setData({ ...data, user: e.target.value })}
          />
          <Input.Password
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className='mt-2'
            placeholder="password"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Space>
        <Content.Text>Forgot Password?</Content.Text>
        <Btns type='submit'>Login</Btns>
      </form>
      <Out>Or login with</Out>
      <Butto><Btn><Btn.Google /> Login with Google</Btn></Butto>
      <Butto><Btn><Btn.Facebook /> Login with Google</Btn></Butto>
    </Content>
  )
}
