import React from 'react'
import ResetStyle from './reset'
import CommonStyle from './common'
import IconFontStyle from "../statics/iconfont/iconfont";

const GlobalStyle: React.FC = () => (
    <>
        <IconFontStyle />
        <ResetStyle />
        <CommonStyle />
    </>
)

export default GlobalStyle