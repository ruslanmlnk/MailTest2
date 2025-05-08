import Avatar1 from '@/../public/images/mainPage/reviews/Aavatar1.png';
import Avatar2 from '@/../public/images/mainPage/reviews/avatar-2.webp';
import Avatar3 from '@/../public/images/mainPage/reviews/Avatar3.png';
import Avatar4 from '@/../public/images/mainPage/reviews/Avata4.png';
import Avatar5 from '@/../public/images/mainPage/reviews/Avatar5.png';
import Avatar6 from '@/../public/images/mainPage/reviews/avatar-6.webp';
import Avatar7 from '@/../public/images/mainPage/reviews/avatar-7.png';
import Avatar8 from '@/../public/images/mainPage/reviews/avatar-8.png';
import Avatar9 from '@/../public/images/mainPage/reviews/avatar-9.png';
import Avatar10 from '@/../public/images/mainPage/reviews/avatar-10.png';
import Avatar11 from '@/../public/images/mainPage/reviews/avatar-11.png';
import Avatar12 from '@/../public/images/mainPage/reviews/avatar-12.png';
// import Video1 from '/video/Video1.mp4';
const Video1 = '/video/Video1.mp4';
const Video2 = '/video/Video5.mp4';
const Video3 = '/video/Video2.mp4';
const Video4 = '/video/Video3.mp4';
const Video5 = '/video/Video4.mp4';
import { StaticImageData } from 'next/image';

interface IReviews {
	id: number;
	img: StaticImageData;
	name: string;
	stars: 1 | 2 | 3 | 4 | 5;
	text: string;
	date: string;
	route: string;
	video: string;
	width: string;
	height: string;
}

export const reviewsStore: IReviews[] = [
	{
		id: 1,
		img: Avatar1,
		name: 'Bill Jenkins',
		stars: 5,
		text: "Hi, I'm Bill, and I cannot express enough how delighted I am with the exceptional service provided by Star Van Lines during my recent move from California to Florida. From the very beginning, their team demonstrated the utmost professionalism and attention to detail. The entire process was streamlined and stress free, making my location a breeze. The movers were punctual, courteous, and handled my belongings with the utmost care. My most cherished possessions arrived to pristine condition, exactly as promised. So I highly recommend Star Van Lines to anyone looking for a seamless and efficient moving experience. So visit Starvanlinemovers.com today to experience the top notch service for yourself. Don't settle for less when it comes to relocating your life. Trust the experts at Star Van Lines to deliver excellence at every step on your journey. You won't be disappointed.",
		date: '<span> December 4, <span>\n2022',
		route: '<span> Long-distance move <span>\nCalifornia to Florida',
		video: Video1,
		width: '100%',
		height: 'auto',
	},
	{
		id: 2,
		img: Avatar2,
		name: 'Anna Kearney',
		stars: 5,
		text: 'Hey, there. I just wanted to make this quick video to give huge shoutout to Star Van Lines moving company. They were so amazing, so efficient in my move from Miami to Atlanta. I would highly, highly recommend their services to anyone. If you need a great moving company, Star Van Lines is it!',
		date: '<span> December 11, <span>\n2022',
		route: '<span> Long-distance move <span>\nMiami to Atlanta',
		video: Video2,
		width: '40%',
		height: 'auto',
	},
	{
		id: 3,
		img: Avatar3,
		name: 'Smith Family	',
		stars: 5,
		text: 'Everything was perfectly smooth. Everybody was super nice, professional, quick. And how do you like like, out of state, moving? Do you recommend it? I would recommend them for sure. 100%. All right. Thank you. Thank you very much.',
		date: '<span> November 18, <span>\n2022',
		route: '<span> Long-distance move <span>\nKirkland, WA to Denver, CO',
		video: Video3,
		width: '40%',
		height: 'auto',
	},
	{
		id: 4,
		img: Avatar4,
		name: 'Halley Burn',
		stars: 5,
		text: "Star Van Lines are totally outstanding. They worked very hard, were polite and kind, wrapped and tabbed. Everything moved as fast as they could to finish the job. Very organized. I would refer these companies to everyone that wants to move. I've moved a lot, and these are the two best companies I have ever had move me. I was amazed at the job they did, and if I move again, I would always choose them. So thank you very much to all the workers that I met and were worked with. I commend you on your job. I've never seen any move that I've had with such excellence. So thank you all. Thank you so much.",
		date: '<span> December 20, <span>\n2022',
		route: '<span> Long-distance move <span>\nL.A. to Sacramento',
		video: Video4,
		width: '40%',
		height: 'auto',
	},
	{
		id: 5,
		img: Avatar5,
		name: 'Liza Brown',
		stars: 5,
		text: "So my friend had used Star Van Lines several times, very successfully with their business, moving big pieces of furniture from La to New York and back again. So I decided I'd get other quotes. But you know what? Actually, they still came in at the most competitive, and, well, I knew they were good. I just didn't expect how good they would be. What a great old fashioned customer service they had. Star Van lines were great. They took care of all my furniture and all my valuables, using lots of blankets, some bungee cords. And actually, they were so fast, they helped me pack my boxes because well, anyway, I admit I was a bit slow. And they re put together my bed at the other end for my first night in my new home. And they helped me unpack my stuff, which I was blown away by New York to Boston was tiring, but we did it successfully. Star Van lines, yeah, they made it a breeze. Thanks, guys. You were awesome. I would highly recommend Star Van Lines for your successful move. Not even a cup chipped.",
		date: '<span> May 24, <span>\n2023',
		route: '<span> Long-distance move <span>\nNew York to Boston',
		video: Video5,
		width: '100%',
		height: 'auto',
	},
	{
		id: 6,
		img: Avatar7,
		name: 'Gilan Mortey',
		stars: 5,
		text: 'Great moving.\nI was very happy with these movers especially the excellent customer service Vasili provided. They were very responsive in setting up the date and quite flexible when I considered changing. I had 3 movers and they were all quite professional and speedy. I chose them because of the positive reviews I read and they were all true. I highly recommend these movers and I will use them again in the future. Thank you!',
		date: '<span> December 26, <span>\n2022',
		route: '<span> Long-distance move <span>\n Denver, CO to Thousand Oaks, CA',
		video: '',
		width: 'auto',
		height: '-webkit-fill-available',
	},
	{
		id: 7,
		img: Avatar8,
		name: 'Joshua Sperrow',
		stars: 5,
		text: 'Great job! Thanks\nI was moving my 1-bedroom apartment from Seattle to Phoenix. All experience was pretty good. Movers were professional, my load was delivered as discussed with the sales. The price was a little higher than average, but it was reasonable, as I understand now. Thanks for the help, recommend',
		date: '<span> Oct 26, <span>\n2022',
		route: '<span> Long-distance move <span>\n Seattle, WA to Phoenix, AZ',
		video: '',
		width: 'auto',
		height: '-webkit-fill-available',
	},
	{
		id: 8,
		img: Avatar9,
		name: 'Mike Mcguire',
		stars: 5,
		text: 'Professionals! Thanks\nStar van lines did a great move for me! I had some doubts before hiring them, the price was not the cheapest on the market but they acted very well. Packed my items in pads, stacked properly, and delivered from Houston to Los Angeles in one week after loading. My last move was awful because of lots of broken items, actually I was afraid to get the same negative result, but no damages or scratches on my furniture this time! So my wife is the happiest person in all California! Thanks again to Star van lines and it’s very cool to hire professional movers than some cheap companies who will act weird and break your stuff!',
		date: '<span> Nov 18, <span>\n2022',
		route: '<span> Long-distance move <span>\n Houston, TX to Los Angeles, CA',
		video: '',
		width: 'auto',
		height: '-webkit-fill-available',
	},
	{
		id: 9,
		img: Avatar10,
		name: 'Natalia Tim',
		stars: 5,
		text: 'Moving\nMax and Eugene did an amazing and easy move for me. I moved from Woodland Hills, CA to Austin, Texas. Thanks so much for your work, guys',
		date: '<span> Nov 20, <span>\n2022',
		route: '<span> Local move within California',
		video: '',
		width: 'auto',
		height: '-webkit-fill-available',
	},
	{
		id: 10,
		img: Avatar11,
		name: 'Tony Russo',
		stars: 5,
		text: 'Great service\nWhen I thought about moving from CA to Georgetown, TX, I thought a lot about choosing a moving company because some of my friends had bad experiences. I found these guys, they did everything quickly and efficiently. It was a really high-quality move, the guys came and did their job really very well, packed all my accessories, behaved very respectfully, answered all my questions, I received my things without damage, and on time that they indicated at pickup',
		date: '<span> Nov 23, <span>\n2022',
		route: '<span> Long-distance move <span>\n West Sacramento, CA to Georgetown, TX',
		video: '',
		width: 'auto',
		height: '-webkit-fill-available',
	},
	{
		id: 11,
		img: Avatar12,
		name: 'Nadia York',
		stars: 5,
		text: 'Good job\nI had an awesome experience. They’re really fast, reliable, and handled everything with care. I’ve been lucky to work with these guys, couldn’t be happier with how smoothly and professionally it went. Nobody likes moving, but it’s so much easier when working with a great team and a good moving company! Highly Recommend!',
		date: '<span> Nov 23, <span>\n2022',
		route: '<span> Long-distance move <span>\n Glendale, CA to Seattle, WA',
		video: '',
		width: 'auto',
		height: '-webkit-fill-available',
	},
];
