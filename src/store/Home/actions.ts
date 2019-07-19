import {HomeActions, HomeActionTypes, HomeDataResult} from './types'
import axios from 'axios'
import {ThunkAction} from 'redux-thunk'
import {ImmutableAppState} from '../index'


const changHomeData = (result: HomeDataResult): HomeActions => ({
  type: HomeActionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})
//
// const addHomeList = (list, nextPage) => ({
//   type: HomeActionTypes.ADD_ARTICLE_LIST,
//   list: fromJS(list),
//   nextPage
// })
//

export const getHomeInfo = (): ThunkAction<void, ImmutableAppState, null, HomeActions> => async dispatch => {
  try {
    const { data } = await axios.get('/api/home.json')
    dispatch(changHomeData(data.data))
  } catch(e) {
    console.log(e, 'cannot find home.json')
  }
}
//
// export const getMoreList = (page) => {
//   return (dispatch) => {
//     axios.get('/api/homeList.json?page=' + page).then((res) => {
//       const result = res.data.data
//       dispatch(addHomeList(result, page + 1))
//     })
//   }
// }
//
// export const toggleTopShow = (show) => ({
//   type: HomeActionTypes.TOGGLE_SCROLL_TOP,
//   show
// })