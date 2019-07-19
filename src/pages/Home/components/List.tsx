import React from 'react'
import {ListInfo, ListItem} from '../style'
import {HomeActions, ImmutableArticleList} from '../../../store/Home/types'
import {ImmutableAppState} from '../../../store'
import {ThunkDispatch} from 'redux-thunk'
import {connect} from 'react-redux'

interface ListAttr {
  list: ImmutableArticleList
  page: any
}

interface ListEventFn {
  getMoreList: () => void
}

type ListProps = ListAttr & ListEventFn

const List: React.FC<ListProps> = ({list, getMoreList, page}) => {
  return (
    <div>
      {
        list.map((item, index) => {
          return (
            <ListItem key={item.get('id')} >
              <img alt='' className='pic' src={item.get('imgUrl')} />
              <ListInfo>
                <h3 className='title'>{item.get('title')}</h3>
                <p className='desc'>{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          );
        })
      }
      {/*<LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>*/}
    </div>
  )
}

const mapState = (state: ImmutableAppState): ListAttr => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
});

const mapDispatch = (dispatch: ThunkDispatch<ImmutableAppState, null, HomeActions>) => ({
  getMoreList() {

  }
})

export default connect(mapState, mapDispatch)(List)