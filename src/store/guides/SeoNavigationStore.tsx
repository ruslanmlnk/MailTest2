import Texas from '../../../public/images/guides/montana/flag.png';
import alaska from '@/../public/images/guides/montana/flag/alaska.svg';
import Alabama from '@/../public/images/guides/montana/flag/Alabama.webp';
import arizona from '@/../public/images/guides/montana/flag/Arizona.webp';
import arkansas from '@/../public/images/guides/montana/flag/arkansas.svg';
import california from '@/../public/images/guides/montana/flag/California.svg';
import colorado from '@/../public/images/guides/montana/flag/Colorado.png';
import connecticut from '@/../public/images/guides/montana/flag/Connecticut.webp';
import delaware from '@/../public/images/guides/montana/flag/Delaware.webp';
import florida from '@/../public/images/guides/montana/flag/Florida.svg';
import georgia from '@/../public/images/guides/montana/flag/Georgia.svg';
import hawaii from '@/../public/images/guides/montana/flag/Hawaii.png';
import idaho from '@/../public/images/guides/montana/flag/Idaho.webp';
import illinois from '@/../public/images/guides/montana/flag/illinois.svg';
import indiana from '@/../public/images/guides/montana/flag/Indiana.svg';
import iowa from '@/../public/images/guides/montana/flag/Iowa.svg';
import kansas from '@/../public/images/guides/montana/flag/Kansas.svg';
import kentucky from '@/../public/images/guides/montana/flag/kentucky.svg';
import louisiana from '@/../public/images/guides/montana/flag/Louisiana.webp';
import maine from '@/../public/images/guides/montana/flag/Maine.svg';
import maryland from '@/../public/images/guides/montana/flag/Maryland.png';
import massachusetts from '@/../public/images/guides/montana/flag/massachusetts.svg';
import michigan from '@/../public/images/guides/montana/flag/michigan.svg';
import minnesota from '@/../public/images/guides/montana/flag/minnesota.svg';
import mississippi from '@/../public/images/guides/montana/flag/Mississippi.png';
import missouri from '@/../public/images/guides/montana/flag/Missouri.webp';
import montana from '@/../public/images/guides/montana/flag/montana.svg';
import nebraska from '@/../public/images/guides/montana/flag/nebraska.svg';
import nevada from '@/../public/images/guides/montana/flag/nevada.svg';
import newhampshire from '@/../public/images/guides/montana/flag/New_Hampshire.webp';
import newjersey from '@/../public/images/guides/montana/flag/new-jersey.webp';
import newmexico from '@/../public/images/guides/montana/flag/new mexico.svg';
import newyork from '@/../public/images/guides/montana/flag/new-york.webp';
import northcarolina from '@/../public/images/guides/montana/flag/north carolina.svg';
import northdakota from '@/../public/images/guides/montana/flag/north dacota.svg';
import ohio from '@/../public/images/guides/montana/flag/Ohio.png';
import oklahoma from '@/../public/images/guides/montana/flag/oklahoma.svg';
import oregon from '@/../public/images/guides/montana/flag/oregon.svg';
import pennsylvania from '@/../public/images/guides/montana/flag/pennsylvania.svg';
import rhodeisland from '@/../public/images/guides/montana/flag/Rhode Island.png';
import southcarolina from '@/../public/images/guides/montana/flag/south carolina.svg';
import southdakota from '@/../public/images/guides/montana/flag/south dacota.svg';
import tennessee from '@/../public/images/guides/montana/flag/tennessee.svg';
import utah from '@/../public/images/guides/montana/flag/Utah.webp';
import vermont from '@/../public/images/guides/montana/flag/vermont.svg';
import virginia from '@/../public/images/guides/montana/flag/virginia.svg';
import washington from '@/../public/images/guides/montana/flag/washington.svg';
import westvirginia from '@/../public/images/guides/montana/flag/west virginia.svg';
import wisconsin from '@/../public/images/guides/montana/flag/wisconsin.svg';
import wyoming from '@/../public/images/guides/montana/flag/wyoming.svg';
import { StaticImageData } from 'next/image';

export interface ICities {
	index: string;
	services: ICitiesServices[];
}

interface ICitiesServices {
	flag: StaticImageData;
	name: string;
}

export const bigCities: ICities[] = [
	{
		index: 'Texas',
		services: [
			{
				flag: Texas,
				name: 'Houston',
			},
			{
				flag: Texas,
				name: 'San Antonio',
			},
			{
				flag: Texas,
				name: 'Dallas',
			},
			{
				flag: Texas,
				name: 'Austin',
			},
			{
				flag: Texas,
				name: 'Fort Worth',
			},
			{
				flag: Texas,
				name: 'El Paso',
			},
		],
	},
	{
		index: 'alabama',
		services: [
			{
				flag: Alabama,
				name: 'Huntsville',
			},
			{
				flag: Alabama,
				name: 'Montgomery',
			},
			{
				flag: Alabama,
				name: 'Birmingham',
			},
			{
				flag: Alabama,
				name: 'Mobile',
			},
			{
				flag: Alabama,
				name: 'Tuscaloosa',
			},
			{
				flag: Alabama,
				name: 'Hoover',
			},
		],
	},
	{
		index: 'alaska',
		services: [
			{
				flag: alaska,
				name: 'Anchorage',
			},
			{
				flag: alaska,
				name: 'Fairbanks',
			},
			{
				flag: alaska,
				name: 'Juneau',
			},
			{
				flag: alaska,
				name: 'Knik-Fairview',
			},
			{
				flag: alaska,
				name: 'Badger',
			},
			{
				flag: alaska,
				name: 'College',
			},
		],
	},
	{
		index: 'arizona',
		services: [
			{
				flag: arizona,
				name: 'Phoenix',
			},
			{
				flag: arizona,
				name: 'Tucson',
			},
			{
				flag: arizona,
				name: 'Mesa',
			},
			{
				flag: arizona,
				name: 'Chandler',
			},
			{
				flag: arizona,
				name: 'Gilbert',
			},
			{
				flag: arizona,
				name: 'Glendale',
			},
		],
	},
	{
		index: 'arkansas',
		services: [
			{
				flag: arkansas,
				name: 'Little Rock',
			},
			{
				flag: arkansas,
				name: 'Fayetteville',
			},
			{
				flag: arkansas,
				name: 'Fort Smith',
			},
			{
				flag: arkansas,
				name: 'Springdale',
			},
			{
				flag: arkansas,
				name: 'Jonesboro',
			},
			{
				flag: arkansas,
				name: 'Rogers',
			},
		],
	},
	{
		index: 'california',
		services: [
			{
				flag: california,
				name: 'Los Angeles',
			},
			{
				flag: california,
				name: 'San Diego',
			},
			{
				flag: california,
				name: 'San Jose',
			},
			{
				flag: california,
				name: 'San Francisco',
			},
			{
				flag: california,
				name: 'Fresno',
			},
			{
				flag: california,
				name: 'Sacramento',
			},
		],
	},
	{
		index: 'colorado',
		services: [
			{
				flag: colorado,
				name: 'Denver',
			},
			{
				flag: colorado,
				name: 'Colorado Springs',
			},
			{
				flag: colorado,
				name: 'Aurora',
			},
			{
				flag: colorado,
				name: 'Fort Collins',
			},
			{
				flag: colorado,
				name: 'Lakewood',
			},
			{
				flag: colorado,
				name: 'Thornton',
			},
		],
	},
	{
		index: 'connecticut',
		services: [
			{
				flag: connecticut,
				name: 'Bridgeport',
			},
			{
				flag: connecticut,
				name: 'New Haven',
			},
			{
				flag: connecticut,
				name: 'Hartford',
			},
			{
				flag: connecticut,
				name: 'Stamford',
			},
			{
				flag: connecticut,
				name: 'Waterbury',
			},
			{
				flag: connecticut,
				name: 'Norwalk',
			},
		],
	},
	{
		index: 'delaware',
		services: [
			{
				flag: delaware,
				name: 'Wilmington',
			},
			{
				flag: delaware,
				name: 'Dover',
			},
			{
				flag: delaware,
				name: 'Newark',
			},
			{
				flag: delaware,
				name: 'Middletown',
			},
			{
				flag: delaware,
				name: 'Smyrna',
			},
			{
				flag: delaware,
				name: 'Milford',
			},
		],
	},
	{
		index: 'florida',
		services: [
			{
				flag: florida,
				name: 'Jacksonville',
			},
			{
				flag: florida,
				name: 'Miami',
			},
			{
				flag: florida,
				name: 'Tampa',
			},
			{
				flag: florida,
				name: 'Orlando',
			},
			{
				flag: florida,
				name: 'St. Petersburg',
			},
			{
				flag: florida,
				name: 'Hialeah',
			},
		],
	},
	{
		index: 'georgia',
		services: [
			{
				flag: georgia,
				name: 'Atlanta',
			},
			{
				flag: georgia,
				name: 'Augusta',
			},
			{
				flag: georgia,
				name: 'Columbus',
			},
			{
				flag: georgia,
				name: 'Macon',
			},
			{
				flag: georgia,
				name: 'Savannah',
			},
			{
				flag: georgia,
				name: 'Athens',
			},
		],
	},
	{
		index: 'hawaii',
		services: [
			{
				flag: hawaii,
				name: 'Honolulu',
			},
			{
				flag: hawaii,
				name: 'East Honolulu',
			},
			{
				flag: hawaii,
				name: 'Pearl City',
			},
			{
				flag: hawaii,
				name: 'Waipahu',
			},
			{
				flag: hawaii,
				name: 'Hilo',
			},
			{
				flag: hawaii,
				name: 'Kailua',
			},
		],
	},
	{
		index: 'idaho',
		services: [
			{
				flag: idaho,
				name: 'Boise',
			},
			{
				flag: idaho,
				name: 'Meridian',
			},
			{
				flag: idaho,
				name: 'Nampa',
			},
			{
				flag: idaho,
				name: 'Idaho Falls',
			},
			{
				flag: idaho,
				name: 'Pocatello',
			},
			{
				flag: idaho,
				name: 'Caldwell',
			},
		],
	},
	{
		index: 'illinois',
		services: [
			{
				flag: illinois,
				name: 'Chicago',
			},
			{
				flag: illinois,
				name: 'Aurora',
			},
			{
				flag: illinois,
				name: 'Rockford',
			},
			{
				flag: illinois,
				name: 'Joliet',
			},
			{
				flag: illinois,
				name: 'Naperville',
			},
			{
				flag: illinois,
				name: 'Springfield',
			},
		],
	},
	{
		index: 'indiana',
		services: [
			{
				flag: indiana,
				name: 'Indianapolis',
			},
			{
				flag: indiana,
				name: 'Fort Wayne',
			},
			{
				flag: indiana,
				name: 'Evansville',
			},
			{
				flag: indiana,
				name: 'South Bend',
			},
			{
				flag: indiana,
				name: 'Carmel',
			},
			{
				flag: indiana,
				name: 'Fishers',
			},
		],
	},
	{
		index: 'iowa',
		services: [
			{
				flag: iowa,
				name: 'Des Moines',
			},
			{
				flag: iowa,
				name: 'Cedar Rapids',
			},
			{
				flag: iowa,
				name: 'Davenport',
			},
			{
				flag: iowa,
				name: 'Sioux City',
			},
			{
				flag: iowa,
				name: 'Iowa City',
			},
			{
				flag: iowa,
				name: 'West Des Moines',
			},
		],
	},
	{
		index: 'kansas',
		services: [
			{
				flag: kansas,
				name: 'Wichita',
			},
			{
				flag: kansas,
				name: 'Overland Park',
			},
			{
				flag: kansas,
				name: 'Kansas City',
			},
			{
				flag: kansas,
				name: 'Olathe',
			},
			{
				flag: kansas,
				name: 'Topeka',
			},
			{
				flag: kansas,
				name: 'Lawrence',
			},
		],
	},
	{
		index: 'kentucky',
		services: [
			{
				flag: kentucky,
				name: 'Louisville',
			},
			{
				flag: kentucky,
				name: 'Lexington',
			},
			{
				flag: kentucky,
				name: 'Bowling Green',
			},
			{
				flag: kentucky,
				name: 'Owensboro',
			},
			{
				flag: kentucky,
				name: 'Covington',
			},
			{
				flag: kentucky,
				name: 'Georgetown',
			},
		],
	},
	{
		index: 'louisiana',
		services: [
			{
				flag: louisiana,
				name: 'New Orleans',
			},
			{
				flag: louisiana,
				name: 'Baton Rouge',
			},
			{
				flag: louisiana,
				name: 'Shreveport',
			},
			{
				flag: louisiana,
				name: 'Metairie',
			},
			{
				flag: louisiana,
				name: 'Lafayette',
			},
			{
				flag: louisiana,
				name: 'Lake Charles',
			},
		],
	},
	{
		index: 'maine',
		services: [
			{
				flag: maine,
				name: 'Portland',
			},
			{
				flag: maine,
				name: 'Lewiston',
			},
			{
				flag: maine,
				name: 'Bangor',
			},
			{
				flag: maine,
				name: 'South Portland',
			},
			{
				flag: maine,
				name: 'Auburn',
			},
			{
				flag: maine,
				name: 'Biddeford',
			},
		],
	},
	{
		index: 'maryland',
		services: [
			{
				flag: maryland,
				name: 'Baltimore',
			},
			{
				flag: maryland,
				name: 'Frederick',
			},
			{
				flag: maryland,
				name: 'Rockville',
			},
			{
				flag: maryland,
				name: 'Gaithersburg',
			},
			{
				flag: maryland,
				name: 'Bowie',
			},
			{
				flag: maryland,
				name: 'Hagerstown',
			},
		],
	},
	{
		index: 'massachusetts',
		services: [
			{
				flag: massachusetts,
				name: 'Boston',
			},
			{
				flag: massachusetts,
				name: 'Worcester',
			},
			{
				flag: massachusetts,
				name: 'Springfield',
			},
			{
				flag: massachusetts,
				name: 'Cambridge',
			},
			{
				flag: massachusetts,
				name: 'Lowell',
			},
			{
				flag: massachusetts,
				name: 'Brockton',
			},
		],
	},
	{
		index: 'michigan',
		services: [
			{
				flag: michigan,
				name: 'Detroit',
			},
			{
				flag: michigan,
				name: 'Grand Rapids',
			},
			{
				flag: michigan,
				name: 'Warren',
			},
			{
				flag: michigan,
				name: 'Sterling Heights',
			},
			{
				flag: michigan,
				name: 'Ann Arbor',
			},
			{
				flag: michigan,
				name: 'Dearborn',
			},
		],
	},
	{
		index: 'minnesota',
		services: [
			{
				flag: minnesota,
				name: 'Minneapolis',
			},
			{
				flag: minnesota,
				name: 'St. Paul',
			},
			{
				flag: minnesota,
				name: 'Rochester',
			},
			{
				flag: minnesota,
				name: 'Bloomington',
			},
			{
				flag: minnesota,
				name: 'Brooklyn Park',
			},
			{
				flag: minnesota,
				name: 'Duluth',
			},
		],
	},
	{
		index: 'mississippi',
		services: [
			{
				flag: mississippi,
				name: 'Jackson',
			},
			{
				flag: mississippi,
				name: 'Gulfport',
			},
			{
				flag: mississippi,
				name: 'Southaven',
			},
			{
				flag: mississippi,
				name: 'Hattiesburg',
			},
			{
				flag: mississippi,
				name: 'Biloxi',
			},
			{
				flag: mississippi,
				name: 'Meridian',
			},
		],
	},
	{
		index: 'missouri',
		services: [
			{
				flag: missouri,
				name: 'Kansas City',
			},
			{
				flag: missouri,
				name: 'St. Louis',
			},
			{
				flag: missouri,
				name: 'Springfield',
			},
			{
				flag: missouri,
				name: 'Independence',
			},
			{
				flag: missouri,
				name: 'Columbia',
			},
			{
				flag: missouri,
				name: "Lee's Summit",
			},
		],
	},
	{
		index: 'montana',
		services: [
			{
				flag: montana,
				name: 'Billings',
			},
			{
				flag: montana,
				name: 'Missoula',
			},
			{
				flag: montana,
				name: 'Great Falls',
			},
			{
				flag: montana,
				name: 'Bozeman',
			},
			{
				flag: montana,
				name: 'Butte',
			},
			{
				flag: montana,
				name: 'Helena',
			},
		],
	},
	{
		index: 'nebraska',
		services: [
			{
				flag: nebraska,
				name: 'Omaha',
			},
			{
				flag: nebraska,
				name: 'Lincoln',
			},
			{
				flag: nebraska,
				name: 'Bellevue',
			},
			{
				flag: nebraska,
				name: 'Grand Island',
			},
			{
				flag: nebraska,
				name: 'Kearney',
			},
			{
				flag: nebraska,
				name: 'Fremont',
			},
		],
	},
	{
		index: 'nevada',
		services: [
			{
				flag: nevada,
				name: 'Las Vegas',
			},
			{
				flag: nevada,
				name: 'Henderson',
			},
			{
				flag: nevada,
				name: 'Reno',
			},
			{
				flag: nevada,
				name: 'North Las Vegas',
			},
			{
				flag: nevada,
				name: 'Enterprise',
			},
			{
				flag: nevada,
				name: 'Spring Valley',
			},
		],
	},
	{
		index: 'new-hampshire',
		services: [
			{
				flag: newhampshire,
				name: 'Manchester',
			},
			{
				flag: newhampshire,
				name: 'Nashua',
			},
			{
				flag: newhampshire,
				name: 'Concord',
			},
			{
				flag: newhampshire,
				name: 'Derry',
			},
			{
				flag: newhampshire,
				name: 'Dover',
			},
			{
				flag: newhampshire,
				name: 'Rochester',
			},
		],
	},
	{
		index: 'new-jersey',
		services: [
			{
				flag: newjersey,
				name: 'Newark',
			},
			{
				flag: newjersey,
				name: 'Jersey City',
			},
			{
				flag: newjersey,
				name: 'Paterson',
			},
			{
				flag: newjersey,
				name: 'Elizabeth',
			},
			{
				flag: newjersey,
				name: 'Trenton',
			},
			{
				flag: newjersey,
				name: 'Clifton',
			},
		],
	},
	{
		index: 'new-mexico',
		services: [
			{
				flag: newmexico,
				name: 'Albuquerque',
			},
			{
				flag: newmexico,
				name: 'Las Cruces',
			},
			{
				flag: newmexico,
				name: 'Rio Rancho',
			},
			{
				flag: newmexico,
				name: 'Santa Fe',
			},
			{
				flag: newmexico,
				name: 'Roswell',
			},
			{
				flag: newmexico,
				name: 'Farmington',
			},
		],
	},
	{
		index: 'new-york',
		services: [
			{
				flag: newyork,
				name: 'New York',
			},
			{
				flag: newyork,
				name: 'Buffalo',
			},
			{
				flag: newyork,
				name: 'Rochester',
			},
			{
				flag: newyork,
				name: 'Yonkers',
			},
			{
				flag: newyork,
				name: 'Syracuse',
			},
			{
				flag: newyork,
				name: 'Albany',
			},
		],
	},
	{
		index: 'north-carolina',
		services: [
			{
				flag: northcarolina,
				name: 'Charlotte',
			},
			{
				flag: northcarolina,
				name: 'Raleigh',
			},
			{
				flag: northcarolina,
				name: 'Durham',
			},
			{
				flag: northcarolina,
				name: 'Greensboro',
			},
			{
				flag: northcarolina,
				name: 'Winston-Salem',
			},
			{
				flag: northcarolina,
				name: 'Fayetteville',
			},
		],
	},
	{
		index: 'north-dakota',
		services: [
			{
				flag: northdakota,
				name: 'Fargo',
			},
			{
				flag: northdakota,
				name: 'Bismarck',
			},
			{
				flag: northdakota,
				name: 'Grand Forks',
			},
			{
				flag: northdakota,
				name: 'Minot',
			},
			{
				flag: northdakota,
				name: 'West Fargo',
			},
			{
				flag: northdakota,
				name: 'Mandan',
			},
		],
	},
	{
		index: 'ohio',
		services: [
			{
				flag: ohio,
				name: 'Columbus',
			},
			{
				flag: ohio,
				name: 'Cleveland',
			},
			{
				flag: ohio,
				name: 'Cincinnati',
			},
			{
				flag: ohio,
				name: 'Toledo',
			},
			{
				flag: ohio,
				name: 'Akron',
			},
			{
				flag: ohio,
				name: 'Dayton',
			},
		],
	},
	{
		index: 'oklahoma',
		services: [
			{
				flag: oklahoma,
				name: 'Oklahoma City',
			},
			{
				flag: oklahoma,
				name: 'Tulsa',
			},
			{
				flag: oklahoma,
				name: 'Norman',
			},
			{
				flag: oklahoma,
				name: 'Broken Arrow',
			},
			{
				flag: oklahoma,
				name: 'Edmond',
			},
			{
				flag: oklahoma,
				name: 'Lawton',
			},
		],
	},
	{
		index: 'oregon',
		services: [
			{
				flag: oregon,
				name: 'Portland',
			},
			{
				flag: oregon,
				name: 'Salem',
			},
			{
				flag: oregon,
				name: 'Eugene',
			},
			{
				flag: oregon,
				name: 'Gresham',
			},
			{
				flag: oregon,
				name: 'Hillsboro',
			},
			{
				flag: oregon,
				name: 'Beaverton',
			},
		],
	},
	{
		index: 'pennsylvania',
		services: [
			{
				flag: pennsylvania,
				name: 'Philadelphia',
			},
			{
				flag: pennsylvania,
				name: 'Pittsburgh',
			},
			{
				flag: pennsylvania,
				name: 'Allentown',
			},
			{
				flag: pennsylvania,
				name: 'Erie',
			},
			{
				flag: pennsylvania,
				name: 'Reading',
			},
			{
				flag: pennsylvania,
				name: 'Upper Darby',
			},
		],
	},
	{
		index: 'rhode-island',
		services: [
			{
				flag: rhodeisland,
				name: 'Providence',
			},
			{
				flag: rhodeisland,
				name: 'Warwick',
			},
			{
				flag: rhodeisland,
				name: 'Cranston',
			},
			{
				flag: rhodeisland,
				name: 'Pawtucket',
			},
			{
				flag: rhodeisland,
				name: 'East Providence',
			},
			{
				flag: rhodeisland,
				name: 'Woonsocket',
			},
		],
	},
	{
		index: 'south-carolina',
		services: [
			{
				flag: southcarolina,
				name: 'Columbia',
			},
			{
				flag: southcarolina,
				name: 'Charleston',
			},
			{
				flag: southcarolina,
				name: 'North Charleston',
			},
			{
				flag: southcarolina,
				name: 'Mount Pleasant',
			},
			{
				flag: southcarolina,
				name: 'Rock Hill',
			},
			{
				flag: southcarolina,
				name: 'Greenville',
			},
		],
	},
	{
		index: 'south-dakota',
		services: [
			{
				flag: southdakota,
				name: 'Sioux Falls',
			},
			{
				flag: southdakota,
				name: 'Rapid City',
			},
			{
				flag: southdakota,
				name: 'Aberdeen',
			},
			{
				flag: southdakota,
				name: 'Brookings',
			},
			{
				flag: southdakota,
				name: 'Watertown',
			},
			{
				flag: southdakota,
				name: 'Mitchell',
			},
		],
	},
	{
		index: 'tennessee',
		services: [
			{
				flag: tennessee,
				name: 'Nashville-Davidson',
			},
			{
				flag: tennessee,
				name: 'Memphis',
			},
			{
				flag: tennessee,
				name: 'Knoxville',
			},
			{
				flag: tennessee,
				name: 'Chattanooga',
			},
			{
				flag: tennessee,
				name: 'Clarksville',
			},
			{
				flag: tennessee,
				name: 'Murfreesboro',
			},
		],
	},
	{
		index: 'utah',
		services: [
			{
				flag: utah,
				name: 'Salt Lake City',
			},
			{
				flag: utah,
				name: 'West Valley City',
			},
			{
				flag: utah,
				name: 'West Jordan',
			},
			{
				flag: utah,
				name: 'Provo',
			},
			{
				flag: utah,
				name: 'Orem',
			},
			{
				flag: utah,
				name: 'Sandy',
			},
		],
	},
	{
		index: 'vermont',
		services: [
			{
				flag: vermont,
				name: 'Burlington',
			},
			{
				flag: vermont,
				name: 'South Burlington',
			},
			{
				flag: vermont,
				name: 'Rutland',
			},
			{
				flag: vermont,
				name: 'Barre',
			},
			{
				flag: vermont,
				name: 'Montpelier',
			},
			{
				flag: vermont,
				name: 'Winooski',
			},
		],
	},
	{
		index: 'virginia',
		services: [
			{
				flag: virginia,
				name: 'Virginia Beach',
			},
			{
				flag: virginia,
				name: 'Chesapeake',
			},
			{
				flag: virginia,
				name: 'Arlington',
			},
			{
				flag: virginia,
				name: 'Norfolk',
			},
			{
				flag: virginia,
				name: 'Richmond',
			},
			{
				flag: virginia,
				name: 'Newport News',
			},
		],
	},
	{
		index: 'washington',
		services: [
			{
				flag: washington,
				name: 'Seattle',
			},
			{
				flag: washington,
				name: 'Spokane',
			},
			{
				flag: washington,
				name: 'Tacoma',
			},
			{
				flag: washington,
				name: 'Vancouver',
			},
			{
				flag: washington,
				name: 'Bellevue',
			},
			{
				flag: washington,
				name: 'Everett',
			},
		],
	},
	{
		index: 'west-virginia',
		services: [
			{
				flag: westvirginia,
				name: 'Charleston',
			},
			{
				flag: westvirginia,
				name: 'Huntington',
			},
			{
				flag: westvirginia,
				name: 'Parkersburg',
			},
			{
				flag: westvirginia,
				name: 'Morgantown',
			},
			{
				flag: westvirginia,
				name: 'Wheeling',
			},
			{
				flag: westvirginia,
				name: 'Weirton',
			},
		],
	},
	{
		index: 'wisconsin',
		services: [
			{
				flag: wisconsin,
				name: 'Milwaukee',
			},
			{
				flag: wisconsin,
				name: 'Spokane',
			},
			{
				flag: wisconsin,
				name: 'Tacoma',
			},
			{
				flag: wisconsin,
				name: 'Vancouver',
			},
			{
				flag: wisconsin,
				name: 'Bellevue',
			},
			{
				flag: wisconsin,
				name: 'Everett',
			},
		],
	},
	{
		index: 'wyoming',
		services: [
			{
				flag: wyoming,
				name: 'Cheyenne',
			},
			{
				flag: wyoming,
				name: 'Casper',
			},
			{
				flag: wyoming,
				name: 'Laramie',
			},
			{
				flag: wyoming,
				name: 'Gillette',
			},
			{
				flag: wyoming,
				name: 'Rock Springs',
			},
			{
				flag: wyoming,
				name: 'Sheridan',
			},
		],
	},
];

export const popularCities: ICities[] = [
	{
		index: 'alabama',
		services: [
			{
				flag: Alabama,
				name: 'Houston',
			},
			{
				flag: Alabama,
				name: 'San Antonio',
			},
		],
	},
	{
		index: 'california',
		services: [
			{
				flag: california,
				name: 'Los Angeles',
			},
			{
				flag: california,
				name: 'San Francisco',
			},
		],
	},
];
