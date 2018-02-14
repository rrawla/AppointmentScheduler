import React from 'react';

const Appointment = ({appointment,onSelected}) => {
	return (  <div className='list-group-item'>
                    <div className={(appointment.Name!=='' && appointment.Phone!=='') ? 'row reserved' : 'row'} onClick={()=>{onSelected(appointment)}}>
                        <div className="col-md-6">
                            <label>{appointment.time}</label>
                        </div>
                        <div className="col-md-3">
                            <label>{appointment.Name}</label>
                        </div>
                        <div className="col-md-3">
                            <label>{appointment.Phone}</label>
                        </div>
                        
                    </div>
                </div>
	);
};

export default Appointment;