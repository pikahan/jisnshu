import React, {Component, PureComponent} from 'react'
import {HomeWrapper, LeftColumn, RightColumn} from "./style";
import List from "./components/List";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import Recommend from "./components/Recommend";
import {HomeActions, ImmutableTopicList} from '../../store/Home/types'
import {ThunkDispatch} from 'redux-thunk'
import {ImmutableAppState} from '../../store'
import {getHomeInfo} from '../../store/Home/actions'
import {connect} from 'react-redux'

interface HomeAttr {
  
}

interface HomeEventFn {
  changeHomeData: () => void
}

type HomeProps = HomeAttr & HomeEventFn

class Home extends PureComponent<HomeProps> {

  componentDidMount() {
    this.props.changeHomeData();
  }

  render() {
    return (
      <HomeWrapper>
        <LeftColumn>
          <img
            src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
            className="banner-img"
          />
          <Topic/>
          <List/>
        </LeftColumn>
        <RightColumn>
          <Writer/>
          <Recommend/>
        </RightColumn>
      </HomeWrapper>
    )
  }
}

const mapDispatch = (dispatch: ThunkDispatch<ImmutableAppState, null, HomeActions>): HomeEventFn => ({
  changeHomeData: () => {
    dispatch(getHomeInfo())
  }
})

export default connect(null, mapDispatch)(Home)