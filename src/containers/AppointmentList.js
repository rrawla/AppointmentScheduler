import React, {Component} from 'react';
import Appointment from '../components/Appointment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {AppointmentSelected} from '../actions/index';
import AppointmentDialog from '../components/AppointmentDialog';
let $=window.$;

class AppointmentList extends Component {
	onSelected(appointment)
	{
		// launch modal dialog
		this.props.AppointmentSelected(appointment);
		$('#modalAppointment').modal('toggle');
		
		
	}
	render() {
		let {appointments}=this.props;

		return (
			<div>
				<ul className="list-group">
					{appointments.map(appointment => <Appointment key={appointment.id} appointment={appointment} onSelected={()=>{this.onSelected(appointment)}} />)}
				</ul>
				<AppointmentDialog/>
			</div>
		)
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({AppointmentSelected}, dispatch);
}
function mapStateToProps(state) {
	return {
		appointments: state.appointments
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(AppointmentList);