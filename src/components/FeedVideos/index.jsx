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
    src: 'https://v16-webapp.tiktok.com/ca3bdab47702e64706eb58ca45ae5a9a/61e3d8b2/video/tos/useast2a/tos-useast2a-ve-0068c004/8dd44893affe4af3a05113f16d931a75/?a=1988&br=4348&bt=2174&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FIrkag3-I&l=2022011602344401022308716127132215&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2ppPDs6ZmdvOjMzNzczM0ApNzY6Z2dmO2U0NzM7NGc8ZmdiZjIucjRfbC5gLS1kMTZzcy5iXl42YzBiYmMwLy01MmI6Yw%3D%3D&vl=&vr='
  },
  { 
    id: 2,
    author: 'lavacalola',
    description: 'Lorem ipsum dolorectetur adipiscing, tempor incididunt ut labore et dolore magna aliqua. #food #omg #divertido #fun #epic #hashtag',
    likes: 321,
    comments: 123,
    shares: 23,
    songName: 'sonido original - pablitocastilloo',
    albumCover: 'https://www.tiktok.com/music/sonido-original-7052814175923784454',
    src: 'https://v16-webapp.tiktok.com/ca3bdab47702e64706eb58ca45ae5a9a/61e3d8b2/video/tos/useast2a/tos-useast2a-ve-0068c004/8dd44893affe4af3a05113f16d931a75/?a=1988&br=4348&bt=2174&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FIrkag3-I&l=2022011602344401022308716127132215&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2ppPDs6ZmdvOjMzNzczM0ApNzY6Z2dmO2U0NzM7NGc8ZmdiZjIucjRfbC5gLS1kMTZzcy5iXl42YzBiYmMwLy01MmI6Yw%3D%3D&vl=&vr='
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
