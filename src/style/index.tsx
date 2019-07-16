import React from 'react'
import ResetStyle from './reset'
import CommonStyle from './common'

const GlobalStyle: React.FC = () => (
    <>
        <ResetStyle />
        <CommonStyle />
    </>
)

export default GlobalStyle