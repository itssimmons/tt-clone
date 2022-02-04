import VideoPlayer from '../VideoPlayer/index'
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: 1,
    author: 'penelope',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod #food #omg #divertido #fun #epic #hashtag',
    likes: 123,
    comments: 321,
    shares: 12,
    songName: 'Problemón - Alvaro Diaz & Rauw Alejandro',
    albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/09b9bec0272b409d81a082247faafabe~c5_200x200.jpeg',
    src: '../../../assets/video.mp4'
  },
  { 
    id: 2,
    author: 'lavacalola',
    description: 'lorem ipsum dolorectetur adipiscing, tempor incididunt ut labore et dolore magna aliqua. #food #omg #divertido #fun #epic #hashtag',
    likes: 321,
    comments: 123,
    shares: 23,
    songName: 'sonido original - pablitocastilloo',
    albumCover: 'https://www.tiktok.com/music/sonido-original-7052814175923784454',
    src: '../../../assets/video.mp4'
  },
  { 
    id: 3,
    author: 'fumanchu',
    description: 'tempor incididunt ut labore et dolore magna aliqua. #food #omg #divertido #fun #epic #hashtag',
    likes: 321,
    comments: 123,
    shares: 23,
    songName: 'sonido original - A L E X 🥀',
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/324ac6057632c99de72b846183df24ca~c5_720x720.jpeg?x-expires=1643918400&x-signature=uw9NOlc9l9%2BBUPWlS1so2vM8JrY%3D',
    src: '../../../assets/video.mp4'
  }
]

export default function FeedVideos () {
  return VIDEOS.map(video => {
    return (
      <div key={video.id} className={styles.item}>
        <VideoPlayer {...video} />
      </div>
    )
  })
}
