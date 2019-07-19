import React, {Component} from 'react'
import {TopicItem, TopicWrapper} from "../style";
import {ImmutableAppState} from "../../../store";
import {ImmutableTopicList} from "../../../store/Home/types";
import {connect} from "react-redux";

interface TopicAttr {
  list: ImmutableTopicList
}

interface TopicEventFn {

}

type TopicProps = TopicAttr & TopicEventFn

const Topic: React.FC<TopicProps> = ({list}) => {
  return (
    <TopicWrapper>
      {
        list.map(item => (

          <TopicItem key={item.get('id')}>
            <img
              className="topic-pic"
              src={item.get('imgUrl')}
            />
            {item.get('title')}
          </TopicItem>
        ))
      }
    </TopicWrapper>
  )
}

const mapStateToProps = (state: ImmutableAppState): TopicAttr => {
  return {
    list: state.getIn(['home', 'topicList'])
  }
}
export default connect(mapStateToProps)(Topic)