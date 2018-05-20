import React from 'react';
import PropTypes from 'prop-types';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
import {
	ContentCopy,
	Store,
	InfoOutline,
	Warning,
	DateRange,
	LocalOffer,
	Update,
	ArrowUpward,
	AccessTime,
	Accessibility
} from '@material-ui/icons';
import { withStyles, Grid } from 'material-ui';

import {
	StatsCard,
	ChartCard,
	TasksCard,
	RegularCard,
	Table,
	ItemGrid
} from 'components';

import {
	dailySalesChart,
	emailsSubscriptionChart,
	completedTasksChart
} from 'variables/charts';

import dashboardStyle from 'assets/jss/material-dashboard-react/dashboardStyle';

class Dashboard extends React.Component {
	state = {
		value: 0
	};
	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleChangeIndex = index => {
		this.setState({ value: index });
	};
	render() {
		return (
			<div>
				<Grid container>
					<ItemGrid xs={12} sm={6} md={4}>
						<StatsCard
							icon={Store}
							iconColor="green"
							title="Prescriptions issued this week"
							description="56"
							statIcon={DateRange}
							statText="Last 24 Hours"
						/>
					</ItemGrid>
					<ItemGrid xs={12} sm={6} md={4}>
						<StatsCard
							icon={InfoOutline}
							iconColor="red"
							title="Alerts this week"
							description="4"
							statIcon={LocalOffer}
						/>
					</ItemGrid>
					<ItemGrid xs={12} sm={6} md={4}>
						<StatsCard
							icon={Accessibility}
							iconColor="blue"
							title="Doctors in charge"
							description="4"
							statIcon={Update}
						/>
					</ItemGrid>
				</Grid>
				<Grid container>
					<ItemGrid xs={12} sm={12} md={12}>
						<RegularCard
							headerColor="orange"
							cardTitle="Latest incidents"
							cardSubtitle="Incidents ocurred during last week"
							content={
								<Table
									tableHeaderColor="warning"
									tableHead={['Doctor', 'Patient', 'Drug', 'Status']}
									tableData={[
										[
											'Ellen Peck',
											'Mariah Clarke',
											'Ibuprofen',
											'🔴 Unusually large dose.'
										],
										[
											'Justine Watson',
											'Warner Beckham',
											'Albuterol',
											'🔴 First time being prescribed by this doctor.'
										],
										[
											'Justine Watson',
											'Horatio Adam',
											'Valium',
											'🔴 Valium being prescibed to a minor.'
										],
										[
											'Ellen Peck',
											'Elvin Kemp',
											'Lisdexamfetamine',
											'🔴 20th prescription issued by this doctor this week.'
										]
									]}
								/>
							}
						/>
					</ItemGrid>
				</Grid>
			</div>
		);
	}
}

Dashboard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
