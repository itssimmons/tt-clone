import VideoPlayer from "../VideoPlayer/index"
import styles from "./styles.module.css"

const VIDEOS = [
	{
		id: 1,
		author: "penelope",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. #food #omg #divertido #fun #epic #hashtag",
		likes: 123,
		comments: 321,
		shares: 12,
		songName: "Problemón - Alvaro Diaz & Rauw Alejandro",
		albumCover: "https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/09b9bec0272b409d81a082247faafabe~c5_200x200.jpeg",
		src: "https://v16-webapp.tiktok.com/85088cb39005b8051184cfdd1281e514/61e2a181/video/tos/useast2a/tos-useast2a-ve-0068c001/b888feb2ccdb4cc387b4ed62a8c14f65/?a=1988&br=3286&bt=1643&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FIrkag3-I&l=202201150426450102230660350C7D5332&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajw2NWU6ZmgzOjMzNzczM0ApOGZmZGY3Nzs1N2g1OjdnN2dvYTVicjRfNmFgLS1kMTZzczU2NGI0MTViMzZeLzAyNGI6Yw%3D%3D&vl=&vr=",
	},
	{
		id: 2,
		author: "lavacalola",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. #food #omg #divertido #fun #epic #hashtag",
		likes: 321,
		comments: 123,
		shares: 23,
		songName: "sonido original - pablitocastilloo",
		albumCover: "https://www.tiktok.com/music/sonido-original-7052814175923784454",
		src: "https://v16-webapp.tiktok.com/5f7be5316c922e96ac3d262930a0cecc/61e29e95/video/tos/useast2a/tos-useast2a-ve-0068c003/1051335c2d194584aef609e09bd14923/?a=1988&br=3962&bt=1981&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FIrkag3-I&l=202201150414300102230861341B7B76C8&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k2OjU6ZmRkOjMzNzczM0ApOzo5OTlnaWVkN2Q6Zjs5Z2dkaWJqcjQwL2RgLS1kMTZzczA0XmJfYDFgMV9iMmEwNF86Yw%3D%3D&vl=&vr=",
	},
];

export default function FeedVideos() {
	return VIDEOS.map((video) => {
		return (
			<div key={video.id} className={styles.item}>
				<VideoPlayer {...video} />
			</div>
		)
	})
}
