import VideoPlayer from './components/VideoPlayer'
import AnimatedImageSearch from './components/AnimatedImageSearch'
import ArrayAlgoChallenge from './components/ArrayAlgoChallenge'
import JavaScriptManipulation from './components/JavaScriptManipulation'
import LazyLoader from './components/LazyLoader'
import ArticlesList from './components/ArticlesList'
import ScrollSpyNavbar from './components/ScrollSpyNavbar'
import OffCanvasSidebar from './components/OffCanvasSidebar'
import VuexToDo from './components/VuexToDo'
import Calculator from './components/Calculator'
import PomodoroTimer from './components/PomodoroTimer'

export default {
    mode: 'history',

    routes: [
        {
            path: '/challenge-5',
            component: VideoPlayer
        },

        {
            path: '/challenge-8',
            component: AnimatedImageSearch
        },

        {
            path: '/challenge-11',
            component: ArrayAlgoChallenge
        },

        {
            path: '/challenge-12',
            component: JavaScriptManipulation
        },

        {
            path: '/challenge-10',
            component: LazyLoader
        },

        {
            path: '/challenge-10-2',
            component: ArticlesList
        },

        {
            path: '/challenge-9',
            component: ScrollSpyNavbar
        },

        {
            path: '/challenge-7',
            component: OffCanvasSidebar
        },

        {
            path: '/vuex-1',
            component: VuexToDo
        },

        {
            path: '/challenge-2',
            component: Calculator
        },

        {
            path: '/challenge-6',
            component: PomodoroTimer
        },
    ]
}