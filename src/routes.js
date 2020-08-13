import VideoPlayer from './components/VideoPlayer'
import AnimatedImageSearch from './components/AnimatedImageSearch'

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
    ]
}