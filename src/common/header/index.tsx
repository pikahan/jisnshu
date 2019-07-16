import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
} from './style';
interface IState {
    focused: boolean
}

export default class Header extends Component<{}, IState> {

    constructor(props: {}) {
        super(props)
        this.state = {
            focused: false
        }
    }

    handleFocus: () => void = () => {
        this.setState({
            focused: true
        })
    }

    handleBlur: () => void = () => {
        this.setState({
            focused: false
        })
    }

    render() {

        const { focused } = this.state

        return (
            <HeaderWrapper>
                <Logo href="#" className="logo" />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                type="text"
                                className={focused ? " focused" : ""}
                                placeholder="搜索"
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
                            />
                        </CSSTransition>
                        <span className={"zoom iconfont" + (focused ? " focused" : "")}>&#xe617;</span>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="reg">注册</Button>
                    <Button className="writting">
                        <span className="iconfont">&#xe618;</span>
                        写文章
                    </Button>
                </Addition>
            </HeaderWrapper>


        )
    }
}