import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';

class AddBlackLivePage extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            date: '',
            occupation: '',
            image: '',
            msg: ''
        }
    };

    formRef = React.createRef();
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddBlackLive(this.state.formData)
    }
    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };
render() {
    return (
        <>
            <NavBar 
                pageName={"Share How Your Life Matter This Week!"}
            />
            <div className="AddBLackLivePage">
                    <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                            <input name="name" id="name" type="text" className="active" value={this.state.formData.name} onChange={this.handleChange} required />
                            <label htmlFor="name">Name</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                            <input name="date" id="date" type="text" className="active" value={this.state.formData.date} onChange={this.handleChange} required/>
                            <label htmlFor="date">Date</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                            <input name="occupation" id="occupation" type="text" className="active" value={this.state.formData.occupation} onChange={this.handleChange}/>
                            <label htmlFor="occupation">occupation</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                            <input name="image" id="imageURL" type="file" className="active" value={this.state.formData.image} onChange={this.handleChange}/>
                            <label htmlFor="ImageURL"></label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                            <input name="msg" id="msg" type="text" className="active" value={this.state.formData.msg} onChange={this.handleChange}/>
                            <label htmlFor="msg">How You Matter This Week</label>
                            </div>
                        </div>
                        
                        <button
                            type="submit"
                            className="btn red"
                            disabled={this.state.invalidForm}
                        ><i className="material-icons left">add</i>
                            Add How Your Life Matter This Week!
                        </button>                           
                    </form>
                </div>

        </>
    )
}
}

export default AddBlackLivePage;