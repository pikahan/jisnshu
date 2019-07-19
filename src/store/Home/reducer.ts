import {
  ChangeHomeDataAction,
  HomeActions,
  HomeActionTypes, HomeDataResult,
  HomeState,
  ImmutableArticleList, ImmutableHomeState,
  ImmutableTopic,
  ImmutableTopicList
} from './types'
import {fromJS, List} from 'immutable'

export const initialState: ImmutableHomeState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
})

const changeHomeData = (state: ImmutableHomeState, action: ChangeHomeDataAction) => state.merge({
  topicList: fromJS(action.topicList),
  articleList: fromJS(action.articleList),
  recommendList: fromJS(action.recommendList)
})

const reducer = (state = initialState, action: HomeActions) => {
  switch (action.type) {
    case HomeActionTypes.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case HomeActionTypes.ADD_ARTICLE_LIST:
    case HomeActionTypes.TOGGLE_SCROLL_TOP:
    default:
      return state
  }
}

export {reducer as HomeReducer}