import React from 'react';
import { Grid } from 'material-ui';

import { RegularCard, Table, ItemGrid } from 'components';

const blockStyle = {
	border: '1px solid lightgray',
	marginRight: '24px',
	marginBottom: '24px',
	padding: '0'
};

const Hash = props => (
	<p
		style={{
			margin: 0,
			borderBottom: '1px solid lightgray',
			textAlign: 'center',
			padding: '8px 0',
			fontWeight: 'bold',
			fontSize: '20px'
		}}
		{...props}
	/>
);

const Field = props => (
	<p
		style={{
			margin: 0
		}}
		{...props}
	/>
);

const Block = ({ block: { hash, previousHash, data } }) => (
	<div style={blockStyle}>
		<Hash>Tx #{hash.toUpperCase().slice(0, 7)}</Hash>
		<div style={{ padding: '8px' }}>
			<Field>
				<b>Data</b>:
				<div
					style={{
						...blockStyle,
						width: '240px',
						margin: '0 0 0 20px',
						padding: '2px'
					}}
				>
					<Field>
						<b>Doctor</b>: {data.doctor}
					</Field>
					<Field>
						<b>Patient hash</b>: #{(data.patientHash || '392')
							.slice(0, 7)
							.padStart(8, '0')}
					</Field>
					<Field>
						<b>Drug</b>: {data.droga}
					</Field>
					<Field>
						<b>Dose</b>: {data.dosis}
					</Field>
					<Field>
						<b>Comments</b>: {data.comentario}
					</Field>
				</div>
			</Field>
		</div>
	</div>
);

export { Block };
