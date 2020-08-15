import VideoPlayer from './components/VideoPlayer'
import AnimatedImageSearch from './components/AnimatedImageSearch'
import ArrayAlgoChallenge from './components/ArrayAlgoChallenge'
import JavaScriptManipulation from './components/JavaScriptManipulation'

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
    ]
}