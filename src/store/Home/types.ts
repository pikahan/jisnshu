import {Immutable} from "../../util/helpers";
import {List} from "immutable";

export interface ITopic {
  id: number
  title: string
  imgUrl: string
}

export interface IArticle {
  id: number
  title: string
  desc: string
  imgUrl: string
}

export type ImmutableTopic = Immutable<ITopic>

export type ImmutableArticle = Immutable<IArticle>

export type ImmutableTopicList = List<ImmutableTopic>

export type ImmutableArticleList = List<ImmutableArticle>


export interface HomeState {
  topicList: ImmutableTopicList
  articleList: ImmutableArticleList
  recommendList: any
  articlePage: number
  showScroll: boolean
}

export type ImmutableHomeState = Immutable<HomeState>

export interface ChangeHomeDataAction extends HomeDataResult{
  type: typeof HomeActionTypes.CHANGE_HOME_DATA
}

export interface AddHomeListAction {
  type: typeof HomeActionTypes.ADD_ARTICLE_LIST
  list: any
  nextPage: number
}

export interface ToggleTopShowAction {
  type: typeof HomeActionTypes.TOGGLE_SCROLL_TOP
  show: boolean
}

export enum HomeActionTypes {
  CHANGE_HOME_DATA = '@@home/CHANGE_HOME_DATA',
  ADD_ARTICLE_LIST = '@@home/ADD_ARTICLE_LIST',
  TOGGLE_SCROLL_TOP = '@@home/TOGGLE_SCROLL_TOP',
}

export interface HomeDataResult {
  topicList: Array<ITopic>
  articleList: Array<IArticle>
  recommendList: any
}

export type HomeActions = ChangeHomeDataAction | AddHomeListAction | ToggleTopShowAction