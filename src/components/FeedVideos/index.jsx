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
    src: 'https://v16-webapp.tiktok.com/bebe1d8c1fea0eb7cabd63fc3c0221a3/61fb157e/video/tos/useast2a/tos-useast2a-pve-0068/ed10d726b59246b294e647dad40eb072/?a=1988&br=2202&bt=1101&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3W_nz7Th_VT.lXq&l=2022020217362101022307302719772701&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2t3bzY6Zjp3OTMzNzczM0ApNThlOTU7Z2RlN2llODhpM2c0NHJncjRfNnFgLS1kMTZzc2A1M14zLWFgLy0vXzYwY186Yw%3D%3D&vl=&vr='
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
    src: 'https://v16-webapp.tiktok.com/bd4b4456e5814d34ba2d3effe7061446/61fb132f/video/tos/useast2a/tos-useast2a-ve-0068c004/44145a0d018c449bb4f208ecc847bd03/?a=1988&br=4686&bt=2343&cd=0%7c0%7c1%7c0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=xoq9-3w_nz7thklv.lxq&l=20220202172612010223073027166fe9e0&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=m2vrojk6zm85ojmznzczm0apzzs4adpkotw5n2g2odxnowdwagotcjrfmgpgls1kmtzzczayl2bgms4vljm2ytfexze6yw%3d%3d&vl=&vr='
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
    src: 'https://v16-webapp.tiktok.com/96f5013535764eb38660d3f3e5b9d5e5/61fb3f5e/video/tos/useast2a/tos-useast2a-ve-0068c002/1da04f79a83941698d56dcd4104c5738/?a=1988&br=3554&bt=1777&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3W_nz7ThZN7.lXq&l=202202022034480102230871451D8D473B&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anl2ZDw6ZjU7OTMzNzczM0ApZjg4Z2U5ZmRlNzwzaDZoaWc0LzNpcjRfMHFgLS1kMTZzc2M1MzFfNC8yYGM0NS0yYzM6Yw%3D%3D&vl=&vr='
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
