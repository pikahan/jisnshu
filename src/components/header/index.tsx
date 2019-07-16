import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { HeaderState } from "../../store/header/types"
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
import { connect } from "react-redux"
import { Dispatch } from "redux";
import { searchFocus, searchBlur } from "../../store/header/actions";
import {AppState} from "../../store";


interface HeaderProps {
    focused: boolean
    handleFocus: () => void
    handleBlur: () => void
}

export class Header extends Component<HeaderProps, {}> {
    render() {
        const { focused, handleFocus, handleBlur } = this.props
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
                                onFocus={handleFocus}
                                onBlur={handleBlur}
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

const mapStateToProps = ({ header }: AppState) => {
    return {
        focused: header.focused
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        handleFocus: () => dispatch(searchFocus()),
        handleBlur: () => dispatch(searchBlur())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

