import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {updateAppt} from '../actions/index';
import InputMask from 'react-input-mask';

let $=window.$;
class AppointmentDialog extends Component 
{
    constructor(props)
    {
        super(props)
        this.state={
            Name:'',
            Phone:'',
            msg:''
        }
    }
   
    
    componentWillReceiveProps(prevProps)
    {
        console.log(prevProps);
        this.setState({Name:prevProps.appointment.Name,Phone:prevProps.appointment.Phone});
    }
    
    handleSubmit()
    {
        
        let {appointment}=this.props;
        let {Name,Phone}=this.state;
        let _number=parseInt(Phone.replace(/[^0-9]/g, ''),10);
        if(Name!=='' && Name.length > 0)
        {
            
                if(isNaN(_number) || !isValidPhone(Phone))
                {
                    this.setState({msg:'Incomplete or Invalid phone number.'});
                     return;
                }
         }
         else if(!isNaN(_number) && isValidPhone(Phone))
         {
            this.setState({msg:'Please enter Name.'});
            return;
         }
        
        let updatedAppointment={
            id:appointment.id,
            time:appointment.time,
            Name:Name,
            Phone:Phone
        }
        // if one of the required fields is empty - remove the appointment
        if(Name==='' && Phone==='')
        {
            updatedAppointment={
                id:appointment.id,
                time:appointment.time,
                Name:'',
                Phone:''
            }
        }
        console.log(updatedAppointment);
       
        this.props.updateAppt(updatedAppointment);
        this.reset()
        $('#modalAppointment').modal('hide');
        
    }
    reset()
    {
        this.setState({Name:'',Phone:''});
    }
    handleInput(e)
    {
          const name = e.target.name;
          const value = e.target.value;
          this.setState({msg:''});
          this.setState({[name]:value});
    }
    render()
    {
    
     return(
                <div aria-labelledby="modalAppointmentLabel"
                    className="modal modal-wide fade"
                    data-backdrop="static"
                    data-keyboard="false"
                    id="modalAppointment"
                    role="dialog"
                    tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                                <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <h4 className="modal-title"
                                        id="modalAppointmentLabel">Selected time slot : {this.props.appointment.time}</h4>
                                </div>
                                <div className="modal-body">
                                        <div className="form-group row">
                                            <div className="text-center text-danger">
                                                    {this.state.msg}
                                            </div>
                                        </div>    
                                        <div className="form-group">
                                            <form role="form">
                                                
                                                <div className="form-group row">
                                                    <label htmlFor="Name" className="col-xs-2 col-form-label">Name:</label>
                                                        <div className="col-xs-8">
                                                            <input type="text" name="Name"  className="form-control" id="Name" maxLength="120" value={this.state.Name || ''}  onChange={this.handleInput.bind(this)} placeholder="Enter First Name, Last Name" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                            <label htmlFor="Phone" className="col-xs-2 col-form-label">Phone :</label>
                                                            <div className="col-xs-8">
                                                                <InputMask alwaysShowMask={false} type="text" name="Phone" className="form-control" mask="(999)-999-9999" maskChar=" "   id="Phone" value={this.state.Phone || ''}  onChange={this.handleInput.bind(this)} placeholder="Enter Phone Number" />                                                                
                                                            </div>
                                                            
                                                    </div>  
                                                             
                                            </form>
                                        </div>  
                                        
                                        <div className="form-group row">
                                            <div className="col-xs-8">
                                                <div className="btn-toolbar pull-right">
                                                    <button type="submit" className="btn btn-primary" onClick={()=>{this.handleSubmit();}}>Submit</button>
                                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                </div>
                                          </div>
                                        </div>
                                </div>
                         </div>
                    </div>
                </div>
        )
    }
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({updateAppt}, dispatch);
}
function mapStateToProps(state) {
	return {
        appointment: state.appointment
	}
}
function isValidPhone(str) {
    
    var isphone = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(str);
    return isphone;
  }
export default connect(mapStateToProps,mapDispatchToProps)(AppointmentDialog);
