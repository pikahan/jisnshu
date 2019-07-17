import React from 'react'
import { CSSTransition } from 'react-transition-group'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    SearchInfo,
    NavSearch,
    Addition,
    Button, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList
} from './style';
import { connect } from "react-redux"
import { ThunkDispatch } from "redux-thunk";
import {searchFocus, searchBlur, getList} from "../../store/header/actions";
import {ImmutableAppState} from "../../store";
import {HeaderActions} from "../../store/header/types";


interface HeaderProps {
    focused: boolean
    list: Array<string>
    handleFocus: () => void
    handleBlur: () => void
}

const Header: React.FC<HeaderProps> = ({ focused, handleFocus, handleBlur, list }) => {
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
                    { focused &&
                        <SearchInfo>
                            <SearchInfoTitle>
                                热门搜索
                                <SearchInfoSwitch>换一匹</SearchInfoSwitch>
                                <SearchInfoList>
                                    {
                                        list.map(name => (
                                            <SearchInfoItem key={name}>{name}</SearchInfoItem>
                                        ))
                                    }
                                </SearchInfoList>
                            </SearchInfoTitle>
                        </SearchInfo>
                    }
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


const mapStateToProps = (state: ImmutableAppState) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list'])
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<ImmutableAppState, null, HeaderActions>) => {
    return {
        handleFocus: () => {
            dispatch(searchFocus())
            dispatch(getList())
        },
        handleBlur: () => dispatch(searchBlur()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

