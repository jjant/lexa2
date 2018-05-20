import React from 'react';
import { Grid, InputLabel } from 'material-ui';

import {
	ProfileCard,
	RegularCard,
	Button,
	CustomInput,
	ItemGrid
} from 'components';

import avatar from 'assets/img/faces/marc.jpg';

const hash = s => {
	var a = 1,
		c = 0,
		h,
		o;
	if (s) {
		a = 0;
		for (h = s.length - 1; h >= 0; h--) {
			o = s.charCodeAt(h);
			a = ((a << 6) & 268435455) + o + (o << 14);
			c = a & 266338304;
			a = c !== 0 ? a ^ (c >> 21) : a;
		}
	}
	return String(a);
};

class UserProfile extends React.Component {
	state = {
		doctor: 'Raul Dominguez',
		drug: 'Rivotril',
		dosage: '10mg',
		comment: '',
		patientFirstName: '',
		patientLastName: ''
	};

	handleSubmit = () => {
		console.log(this.state);
		fetch('https://lexa-blockchain.now.sh/mineBlock', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({
				data: {
					doctor: this.state.doctor,
					droga: this.state.drug,
					dosis: this.state.dosage,
					comentario: this.state.comment,
					patientHash: hash(
						this.state.patientFirstName + this.state.patientLastName
					)
				}
			})
		}).then(() => alert('Prescription created successfully.'));
	};

	setField = fieldName => e => this.setState({ [fieldName]: e.target.value });

	render() {
		return (
			<div>
				<Grid container>
					<ItemGrid xs={12} sm={12} md={8}>
						<RegularCard
							cardTitle="Create a prescription"
							cardSubtitle="Fill in the patient's details"
							content={
								<div>
									<Grid container>
										<ItemGrid xs={12} sm={12} md={6}>
											<CustomInput
												labelText="First Name"
												id="first-name"
												formControlProps={{ fullWidth: true }}
												inputProps={{
													value: this.state.patientFirstName,
													onChange: this.setField('patientFirstName')
												}}
											/>
										</ItemGrid>
										<ItemGrid xs={12} sm={12} md={6}>
											<CustomInput
												labelText="Last Name"
												id="last-name"
												formControlProps={{ fullWidth: true }}
												inputProps={{
													value: this.state.patientLastName,
													onChange: this.setField('patientLastName')
												}}
											/>
										</ItemGrid>
									</Grid>
									<Grid container>
										<ItemGrid xs={12} sm={12} md={4}>
											<CustomInput
												labelText="Drug"
												inputProps={{
													value: this.state.drug,
													onChange: this.setField('drug')
												}}
												id="drug"
												formControlProps={{
													fullWidth: true
												}}
											/>
										</ItemGrid>
										<ItemGrid xs={12} sm={12} md={4}>
											<CustomInput
												labelText="Dosage"
												id="dosage"
												inputProps={{
													value: this.state.dosage,
													onChange: this.setField('dosage')
												}}
												formControlProps={{
													fullWidth: true
												}}
											/>
										</ItemGrid>
									</Grid>
									<Grid container>
										<ItemGrid xs={12} sm={12} md={12}>
											<CustomInput
												labelText="Additional comments"
												id="comment"
												inputProps={{
													value: this.state.comment,
													onChange: this.setField('comment'),
													multiline: true,
													rows: 5
												}}
												formControlProps={{
													fullWidth: true
												}}
											/>
										</ItemGrid>
									</Grid>
								</div>
							}
							footer={
								<Button color="primary" onClick={this.handleSubmit}>
									Submit prescription
								</Button>
							}
						/>
					</ItemGrid>
				</Grid>
			</div>
		);
	}
}

export default UserProfile;
