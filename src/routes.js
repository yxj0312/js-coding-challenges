import VideoPlayer from './components/VideoPlayer'
import AnimatedImageSearch from './components/AnimatedImageSearch'
import ArrayAlgoChallenge from './components/ArrayAlgoChallenge'

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
    ]
}