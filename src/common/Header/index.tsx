import React from 'react'
import {CSSTransition} from 'react-transition-group'
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
import {connect} from "react-redux"
import {ThunkDispatch} from "redux-thunk";
import {searchFocus, searchBlur, getList, mouseEnter, mouseLeave, changePage} from "../../store/Header/actions";
import {ImmutableAppState} from "../../store";
import {HeaderActions} from "../../store/Header/types";
import {List} from "immutable";

interface HeaderAttr {
  focused: boolean
  mouseIn: boolean
  list: List<string>
  page: number
  totalPage: number
}

interface HeaderEventFn {
  handleFocus: (list: List<string>) => void
  handleBlur: () => void
  handleMouseEnter: () => void
  handleMouseLeave: () => void
  handleChangePage: (page: number, totalPage: number, span: HTMLSpanElement) => void
}

type HeaderProps = HeaderAttr & HeaderEventFn


class Header extends React.Component<HeaderProps, {}> {
  readonly spanRef: React.RefObject<HTMLSpanElement>;

  constructor(props: HeaderProps) {
    super(props)
    this.spanRef = React.createRef()
  }

  render() {
    const {focused, handleFocus, handleBlur, handleMouseEnter, handleChangePage, handleMouseLeave, list, page, mouseIn, totalPage} = this.props
    const currArr = list.toArray().slice(page * 10, page * 10 + 10)
    return (
      <HeaderWrapper>
        <Logo href="#" className="logo"/>
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
                onFocus={() => handleFocus(list)}
                onBlur={handleBlur}
              />
            </CSSTransition>
            <span className={"zoom iconfont" + (focused ? " focused" : "")}>&#xe617;</span>
            {(focused || mouseIn) &&
            <SearchInfo
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <SearchInfoTitle>
                热门搜索
                <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spanRef.current!)}>
                                    <span
                                      className="iconfont spin"
                                      ref={this.spanRef}
                                    >&#xe606;</span>
                  换一匹
                </SearchInfoSwitch>
                <SearchInfoList>
                  {
                    currArr.map(name => (
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
}


const mapStateToProps = (state: ImmutableAppState): HeaderAttr => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage'])
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<ImmutableAppState, null, HeaderActions>): HeaderEventFn => {
  return {
    handleFocus: list => {
      (list.size === 0) && dispatch(getList())
      dispatch(searchFocus())
    },
    handleBlur: () => dispatch(searchBlur()),
    handleMouseEnter: () => {
      dispatch(mouseEnter())
    },
    handleMouseLeave: () => {
      dispatch(mouseLeave())
    },
    handleChangePage: (page, totalPage, span) => {
      const reg = /[^\d]+/g
      let deg = parseInt(span.style.transform!.replace(reg, ''))
      if (isNaN(deg)) {
        deg = 0
      }
      span.style.transform = `rotate(${deg + 360}deg)`
      const newPage = page + 1
      dispatch(changePage(newPage === totalPage ? 0 : newPage))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

