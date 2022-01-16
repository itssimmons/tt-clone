import VideoPlayer from '../VideoPlayer/index'
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: 1,
    author: 'penelope',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. #food #omg #divertido #fun #epic #hashtag',
    likes: 123,
    comments: 321,
    shares: 12,
    songName: 'Problemón - Alvaro Diaz & Rauw Alejandro',
    albumCover:
      'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/09b9bec0272b409d81a082247faafabe~c5_200x200.jpeg',
    src: 'https://v16-webapp.tiktok.com/35cacbbceecbaab59669b43dd8d27eba/61e38c73/video/tos/useast2a/tos-useast2a-pve-0068/d93c6d6bcfc644f89966038924d277d8/?a=1988&br=1054&bt=527&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FIrkag3-I&l=2022011521091901019216302621ED2A06&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M29xajs6ZmVsOjMzNzczM0ApODtpOzNmaTs6NzVpZmczZWdmLl8vcjRnZGNgLS1kMTZzc2MtYS0wYmEuY19fYDFeXi06Yw%3D%3D&vl=&vr='
  },
  {
    id: 2,
    author: 'lavacalola',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. #food #omg #divertido #fun #epic #hashtag',
    likes: 321,
    comments: 123,
    shares: 23,
    songName: 'sonido original - pablitocastilloo',
    albumCover:
      'https://www.tiktok.com/music/sonido-original-7052814175923784454',
    src: 'https://v16-webapp.tiktok.com/320b2f55866d0883ebeddd5d8eea37fd/61e3934d/video/tos/useast2a/tos-useast2a-ve-0068c001/21177c54164b42eba4be3ddc8b9d3828/?a=1988&br=2102&bt=1051&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FIrkag3-I&l=2022011521384501019020922919F23A9B&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2plNjY6Zng5OTMzNzczM0ApaTk5M2llNDw5N2k1aTszN2dmMV9scjRva2VgLS1kMTZzczYwLV80LzM1X2AtMzA2LWI6Yw%3D%3D&vl=&vr='
  }
]

export default function FeedVideos () {
  return VIDEOS.map((video) => {
    return (
      <div key={video.id} className={styles.item}>
        <VideoPlayer {...video} />
      </div>
    )
  })
}
