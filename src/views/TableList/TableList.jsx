import React from 'react';
import { Grid } from 'material-ui';

import { RegularCard, Table, ItemGrid } from 'components';

const doctors = [
	'Maurice Harland',
	'Ellen Peck',
	'Ellen Peck',
	'Maurice Harland',
	'Ellen Peck',
	'Justine Watson',
	'Maurice Harland',
	'Justine Watson',
	'Ellen Peck',
	'Maurice Harland',
	'Justine Watson',
	'Justine Watson',
	'Ellen Peck',
	'Ellen Peck',
	'Justine Watson',
	'Ellen Peck',
	'Justine Watson',
	'Maurice Harland',
	'Maurice Harland',
	'Maurice Harland',
	'Justine Watson',
	'Justine Watson',
	'Maurice Harland',
	'Justine Watson',
	'Maurice Harland'
];

const medicines = [
	'Ibuprofen',
	'Levothyroxine',
	'Albuterol',
	'Esomeprazole',
	'Ibuprofen',
	'Fluticasone',
	'Rosuvastatin',
	'Ibuprofen',
	'Albuterol',
	'Esomeprazole',
	'Fluticasone',
	'Valium',
	'Lisdexamfetamine',
	'Ibuprofen',
	'Pregabalin',
	'Tiotropium',
	'Sitagliptin',
	'Insulin glargine',
	'Lisdexamfetamine',
	'Pregabalin',
	'Tiotropium',
	'Sitagliptin',
	'Ibuprofen',
	'Ibuprofen',
	'Sitagliptin'
];

const people = [
	'Agnes Brook',
	'Damon Abram',
	'Emma Crewe',
	'Vivian Hobson',
	'Mariah Clarke',
	'Viola Millhouse',
	'Coy Emerson',
	'Stewart Christophers',
	'Warner Beckham',
	'Julius Christians',
	'Shirley Davies',
	'Horatio Adam',
	'Elvin Kemp',
	'Oswald Parish',
	'Sydney Wardrobe',
	'Jeffrey Tyrrell',
	'Jemma Ayers',
	'Leah Philips',
	'Caleb Barnet',
	'Junior Poole',
	'Chester Norris',
	'Margaretta Fairbairn',
	'Jarvis Sandford',
	'Rowena Nielson',
	'Dena Bunker'
];

const dosages = [
	'20mg',
	'15mg',
	'10mcg',
	'15mg',
	'1000mg',
	'20mg',
	'15mg',
	'10mcg',
	'10mcg',
	'20mg',
	'15mg',
	'10mg',
	'15mg',
	'15mg',
	'10mcg',
	'20mg',
	'15mg',
	'10mcg',
	'10mcg',
	'20mg',
	'15mg',
	'10mcg',
	'10mg',
	'15mg',
	'15mg'
];

const dates = [
	'01/03/2018',
	'01/03/2018',
	'01/03/2018',
	'01/03/2018',
	'29/02/2018',
	'29/02/2018',
	'29/02/2018',
	'29/02/2018',
	'29/02/2018',
	'29/02/2018',
	'29/02/2018',
	'29/02/2018',
	'29/02/2018',
	'29/02/2018',
	'29/02/2018',
	'29/02/2018',
	'29/02/2018',
	'29/02/2018',
	'29/02/2018',
	'29/02/2018',
	'29/02/2018',
	'29/02/2018',
	'29/02/2018',
	'29/02/2018',
	'29/02/2018'
];

const status = [
	'🔵',
	'🔵',
	'🔵',
	'🔵',
	'🔴 Unusually large dose.',
	'🔵',
	'🔵',
	'🔵',
	'🔴 First time being prescribed by this doctor.',
	'🔵',
	'🔵',
	'🔴 Valium being prescibed to a minor.',
	'🔴 20th prescription issued by this doctor this week.',
	'🔵',
	'🔵',
	'🔵',
	'🔵',
	'🔵',
	'🔵',
	'🔵',
	'🔵',
	'🔵',
	'🔵',
	'🔵',
	'🔵'
];

const tableData = [...new Array(25)].map((_, i) => [
	doctors[i],
	people[i],
	medicines[i],
	dosages[i],
	dates[i],
	status[i]
]);
// [
// 	[
// 		'Mason Porter',
// 		'Jeremías Robles',
// 		'Gloucester',
// 		'10mg',
// 		'03/01/2018',
// 		'🔵'
// 	],
// 	[
// 		'Mason Porter',
// 		'Lucía Tay',
// 		'Gloucester',
// 		'10mg',
// 		'03/01/2018',
// 		'🔴'
// 	],
// 	[
// 		'Augusto Alvarez',
// 		'Ramiro Olivera',
// 		'Levothyroxine',
// 		'25mcg',
// 		'03/01/2018',
// 		'🔵'
// 	]
// ]
function TableList({ ...props }) {
	return (
		<Grid container>
			<ItemGrid xs={12} sm={12} md={12}>
				<RegularCard
					cardTitle="Prescriptions"
					cardSubtitle="You can see all the prescriptions your doctors in charge have issued here"
					content={
						<Table
							tableHeaderColor="primary"
							tableHead={[
								'Doctor',
								'Patient',
								'Drug',
								'Dosage',
								'Date (DD/MM/YYYY)',
								'Status'
							]}
							tableData={tableData}
						/>
					}
				/>
			</ItemGrid>
		</Grid>
	);
}

export default TableList;
