import React from 'react';
import { Grid } from 'material-ui';
import { Block } from './Block';
import { RegularCard, Table, ItemGrid } from 'components';

const blockStyle = {
	border: '1px solid lightgray',
	width: '200px',
	marginRight: '24px',
	padding: '8px'
};

const td = [
	['Maurice Harland', 'Agnes Brook', 'Ibuprofen', '20mg', '01/03/2018', '🔵'],
	['Ellen Peck', 'Damon Abram', 'Levothyroxine', '15mg', '01/03/2018', '🔵'],
	['Ellen Peck', 'Emma Crewe', 'Albuterol', '10mcg', '01/03/2018', '🔵'],
	[
		'Maurice Harland',
		'Vivian Hobson',
		'Esomeprazole',
		'15mg',
		'01/03/2018',
		'🔵'
	],
	[
		'Ellen Peck',
		'Mariah Clarke',
		'Ibuprofen',
		'1000mg',
		'29/02/2018',
		'🔴 Unusually large dose.'
	],
	[
		'Justine Watson',
		'Viola Millhouse',
		'Fluticasone',
		'20mg',
		'29/02/2018',
		'🔵'
	],
	[
		'Maurice Harland',
		'Coy Emerson',
		'Rosuvastatin',
		'15mg',
		'29/02/2018',
		'🔵'
	],
	[
		'Justine Watson',
		'Stewart Christophers',
		'Ibuprofen',
		'10mcg',
		'29/02/2018',
		'🔵'
	],
	[
		'Ellen Peck',
		'Warner Beckham',
		'Albuterol',
		'10mcg',
		'29/02/2018',
		'🔴 First time being prescribed by this doctor.'
	],
	[
		'Maurice Harland',
		'Julius Christians',
		'Esomeprazole',
		'20mg',
		'29/02/2018',
		'🔵'
	],
	[
		'Justine Watson',
		'Shirley Davies',
		'Fluticasone',
		'15mg',
		'29/02/2018',
		'🔵'
	],
	[
		'Justine Watson',
		'Horatio Adam',
		'Valium',
		'10mg',
		'29/02/2018',
		'🔴 Valium being prescibed to a minor.'
	],
	[
		'Ellen Peck',
		'Elvin Kemp',
		'Lisdexamfetamine',
		'15mg',
		'29/02/2018',
		'🔴 20th prescription issued by this doctor this week.'
	],
	['Ellen Peck', 'Oswald Parish', 'Ibuprofen', '15mg', '29/02/2018', '🔵'],
	[
		'Justine Watson',
		'Sydney Wardrobe',
		'Pregabalin',
		'10mcg',
		'29/02/2018',
		'🔵'
	],
	['Ellen Peck', 'Jeffrey Tyrrell', 'Tiotropium', '20mg', '29/02/2018', '🔵'],
	['Justine Watson', 'Jemma Ayers', 'Sitagliptin', '15mg', '29/02/2018', '🔵'],
	[
		'Maurice Harland',
		'Leah Philips',
		'Insulin glargine',
		'10mcg',
		'29/02/2018',
		'🔵'
	],
	[
		'Maurice Harland',
		'Caleb Barnet',
		'Lisdexamfetamine',
		'10mcg',
		'29/02/2018',
		'🔵'
	],
	['Maurice Harland', 'Junior Poole', 'Pregabalin', '20mg', '29/02/2018', '🔵'],
	[
		'Justine Watson',
		'Chester Norris',
		'Tiotropium',
		'15mg',
		'29/02/2018',
		'🔵'
	],
	[
		'Justine Watson',
		'Margaretta Fairbairn',
		'Sitagliptin',
		'10mcg',
		'29/02/2018',
		'🔵'
	],
	[
		'Maurice Harland',
		'Jarvis Sandford',
		'Ibuprofen',
		'10mg',
		'29/02/2018',
		'🔵'
	],
	['Justine Watson', 'Rowena Nielson', 'Ibuprofen', '15mg', '29/02/2018', '🔴'],
	['Maurice Harland', 'Dena Bunker', 'Sitagliptin', '15mg', '29/02/2018', '🔴']
];
const randHex = () => Math.abs((Math.random() * 0xffffffff) << 0).toString(16);

const newBlocks = td.map(
	([doctor, patientName, drugName, dose, date, status], i) => ({
		index: i,
		hash: randHex(),
		data: {
			doctor,
			droga: drugName,
			dosis: dose,
			date,
			patientHash: randHex()
		}
	})
);

const newBlocksPosta = [
	{
		index: 0,
		hash: '44915c9b',
		data: {
			doctor: 'Maurice Harland',
			droga: 'Ibuprofen',
			dosis: '20mg',
			date: '01/03/2018',
			patientHash: '605b7ad8'
		}
	},
	{
		index: 1,
		hash: '3e7f32c5',
		data: {
			doctor: 'Ellen Peck',
			droga: 'Levothyroxine',
			dosis: '15mg',
			date: '01/03/2018',
			patientHash: '42dd3306'
		}
	},
	{
		index: 2,
		hash: '10ed9a4',
		data: {
			doctor: 'Ellen Peck',
			droga: 'Albuterol',
			dosis: '10mcg',
			date: '01/03/2018',
			patientHash: '65f8081'
		}
	},
	{
		index: 3,
		hash: '6c78d124',
		data: {
			doctor: 'Maurice Harland',
			droga: 'Esomeprazole',
			dosis: '15mg',
			date: '01/03/2018',
			patientHash: '11aeb2db'
		}
	},
	{
		index: 4,
		hash: '204b7276',
		data: {
			doctor: 'Ellen Peck',
			droga: 'Ibuprofen',
			dosis: '1000mg',
			date: '29/02/2018',
			patientHash: '58127a26'
		}
	},
	{
		index: 5,
		hash: '58031d41',
		data: {
			doctor: 'Justine Watson',
			droga: 'Fluticasone',
			dosis: '20mg',
			date: '29/02/2018',
			patientHash: '4b2b38d5'
		}
	},
	{
		index: 6,
		hash: '386f4253',
		data: {
			doctor: 'Maurice Harland',
			droga: 'Rosuvastatin',
			dosis: '15mg',
			date: '29/02/2018',
			patientHash: '7b1478f7'
		}
	},
	{
		index: 7,
		hash: '542e212e',
		data: {
			doctor: 'Justine Watson',
			droga: 'Ibuprofen',
			dosis: '10mcg',
			date: '29/02/2018',
			patientHash: '3c6d2e08'
		}
	},
	{
		index: 8,
		hash: '6b545ffd',
		data: {
			doctor: 'Ellen Peck',
			droga: 'Albuterol',
			dosis: '10mcg',
			date: '29/02/2018',
			patientHash: '1342f31'
		}
	},
	{
		index: 9,
		hash: '2c1b3485',
		data: {
			doctor: 'Maurice Harland',
			droga: 'Esomeprazole',
			dosis: '20mg',
			date: '29/02/2018',
			patientHash: '69115f7f'
		}
	},
	{
		index: 10,
		hash: '54bc9963',
		data: {
			doctor: 'Justine Watson',
			droga: 'Fluticasone',
			dosis: '15mg',
			date: '29/02/2018',
			patientHash: '13c096da'
		}
	},
	{
		index: 11,
		hash: '6f6c4e60',
		data: {
			doctor: 'Justine Watson',
			droga: 'Valium',
			dosis: '10mg',
			date: '29/02/2018',
			patientHash: '7e94b600'
		}
	},
	{
		index: 12,
		hash: '7bf9e8f4',
		data: {
			doctor: 'Ellen Peck',
			droga: 'Lisdexamfetamine',
			dosis: '15mg',
			date: '29/02/2018',
			patientHash: '375fd97d'
		}
	},
	{
		index: 13,
		hash: '18ec5e77',
		data: {
			doctor: 'Ellen Peck',
			droga: 'Ibuprofen',
			dosis: '15mg',
			date: '29/02/2018',
			patientHash: '6b5fea3d'
		}
	},
	{
		index: 14,
		hash: '7ffa0dab',
		data: {
			doctor: 'Justine Watson',
			droga: 'Pregabalin',
			dosis: '10mcg',
			date: '29/02/2018',
			patientHash: '52b49733'
		}
	},
	{
		index: 15,
		hash: '513f78bb',
		data: {
			doctor: 'Ellen Peck',
			droga: 'Tiotropium',
			dosis: '20mg',
			date: '29/02/2018',
			patientHash: '7e3bd952'
		}
	},
	{
		index: 16,
		hash: '1ed80b62',
		data: {
			doctor: 'Justine Watson',
			droga: 'Sitagliptin',
			dosis: '15mg',
			date: '29/02/2018',
			patientHash: '6273da02'
		}
	},
	{
		index: 17,
		hash: '38f11d11',
		data: {
			doctor: 'Maurice Harland',
			droga: 'Insulin glargine',
			dosis: '10mcg',
			date: '29/02/2018',
			patientHash: '31abe394'
		}
	},
	{
		index: 18,
		hash: '65539c0b',
		data: {
			doctor: 'Maurice Harland',
			droga: 'Lisdexamfetamine',
			dosis: '10mcg',
			date: '29/02/2018',
			patientHash: '4101b25d'
		}
	},
	{
		index: 19,
		hash: '56952493',
		data: {
			doctor: 'Maurice Harland',
			droga: 'Pregabalin',
			dosis: '20mg',
			date: '29/02/2018',
			patientHash: '713e1dc9'
		}
	},
	{
		index: 20,
		hash: '606d7c77',
		data: {
			doctor: 'Justine Watson',
			droga: 'Tiotropium',
			dosis: '15mg',
			date: '29/02/2018',
			patientHash: '4b0d8dcb'
		}
	},
	{
		index: 21,
		hash: 'b614a3e',
		data: {
			doctor: 'Justine Watson',
			droga: 'Sitagliptin',
			dosis: '10mcg',
			date: '29/02/2018',
			patientHash: '51ed4ddc'
		}
	},
	{
		index: 22,
		hash: '5e1d3ff5',
		data: {
			doctor: 'Maurice Harland',
			droga: 'Ibuprofen',
			dosis: '10mg',
			date: '29/02/2018',
			patientHash: '733a8302'
		}
	},
	{
		index: 23,
		hash: '72ca2486',
		data: {
			doctor: 'Justine Watson',
			droga: 'Ibuprofen',
			dosis: '15mg',
			date: '29/02/2018',
			patientHash: '5f971935'
		}
	},
	{
		index: 24,
		hash: '185c8c14',
		data: {
			doctor: 'Maurice Harland',
			droga: 'Sitagliptin',
			dosis: '15mg',
			date: '29/02/2018',
			patientHash: '6838125e'
		}
	}
];
class Blockchain extends React.Component {
	componentDidMount() {
		// fetch('https://lexa-blockchain.now.sh/blocks')
		// 	.then(d => d.json())
		// 	.then(([genesisBlock, ...blocks]) => {
		// 		console.log(blocks);
		// 		this.setState({ blocks });
		// 	});
	}

	render() {
		return (
			<div style={{ display: 'flex', flexWrap: 'wrap' }}>
				{newBlocksPosta.map(block => <Block key={block.hash} block={block} />)}
				{/* {this.state.blocks.map(block => (
					<Block key={block.hash} block={block} />
				))} */}
			</div>
		);
	}
}

export { Blockchain };
