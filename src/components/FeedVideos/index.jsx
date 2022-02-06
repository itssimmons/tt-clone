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
    src: '../../../assets/video.mp4',
    srcPhoto: 'https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/XA6KIXE6FBFM5EWSA25JI5YAU4.jpg'
  },
  { 
    id: 2,
    author: 'lavacalola',
    description: 'lorem ipsum dolorectetur adipiscing, tempor incididunt ut labore et dolore magna aliqua. #food #omg #divertido #fun #epic #hashtag',
    likes: 321,
    comments: 123,
    shares: 23,
    songName: 'sonido original - pablitocastilloo',
    albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/09b9bec0272b409d81a082247faafabe~c5_200x200.jpeg',
    src: '../../../assets/video.mp4',
    srcPhoto: 'https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/XA6KIXE6FBFM5EWSA25JI5YAU4.jpg'
  },
  { 
    id: 3,
    author: 'fumanchu',
    description: 'tempor incididunt ut labore et dolore magna aliqua. #food #omg #divertido #fun #epic #hashtag',
    likes: 321,
    comments: 123,
    shares: 23,
    songName: 'sonido original - A L E X 🥀',
    albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/09b9bec0272b409d81a082247faafabe~c5_200x200.jpeg',
    src: '../../../assets/video.mp4',
    srcPhoto: 'https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/XA6KIXE6FBFM5EWSA25JI5YAU4.jpg'

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
