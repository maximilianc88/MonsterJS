import React from 'react';
import './style.css';
import Button from './Button'


function MyEmailInput(props){
    function handleChange(event){
        if (props.onChange){
            props.onChange(event)
        }
    }
    return(
            <input type='email' value={props.value} name={props.name} ref={props.inputRef} onChange={handleChange} placeholder={props.placeholder} className={props.className} />
    )
}

// class CustomTextComponent extends React.Component {
//     render 
// }
class ContactForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            fullName: '',
            content: '',
            email: '',
            phone: '',
        }
        this.inputFullNameRef = React.createRef()
        this.inputEmailRef = React.createRef()
        this.inputPhoneRef = React.createRef()
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log(this.inputContentRef.value)
        console.log("Final data is", data)
        this.inputEmailRef.current.value = ''
        this.inputFullNameRef.current.value = ''
        this.inputContentRef.value=''
        this.inputPhoneRef.current.value=''
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClearClick = (event => {
        event.preventDefault()
        console.log("I am the clear function!")
        this.inputEmailRef.current.value = ''
        this.inputFullNameRef.current.value = ''
        this.inputPhoneRef.current.value = ''
        this.inputContentRef.value=''
        this.setState({
            fullName: '',
            email: '',
            content: '',
            phone: ''
        })
    })

    // componentDidMount () {
    //     this.inputFullNameRef.current.focus()
    //     this.inputContentRef.current.focus()
    // }

    render () {
        const {fullName} = this.state
        const {email} = this.state
        const {phone} = this.state
        return (
            <div className='container mx-0'>
                <div className='row p-0 m-0'>
                    <div className='col-md-12'>                   
                    <div className='form-header'>
                        <h1>Contact Forms</h1>
                    </div></div>
                </div>
                <div className='row p-0 m-0'>
                    <div className='col-md-5 p-0'>
                    <form id='contact-form' onSubmit={this.handleSubmit}>
                <div className='form-elements midnight' id="midnight-form-el-wrapper">
                <label className='midnight-label'>Midnight Contact Form</label>
                    <input  className="text-action" ref={this.inputFullNameRef} type='text' placeholder='Your Name' value={fullName} name='fullName' onChange = {this.handleInputChange} />
                    <input  className="text-action" ref={this.inputPhoneRef} type='tel' placeholder='Your Phone Number (optional)' value={phone} name='phone' onChange = {this.handleInputChange} />
                    <MyEmailInput  className='email-input text-action' value={email} name='email' inputRef = {this.inputEmailRef} onChange={this.handleInputChange} placeholder='Email' />
                    <textarea  className="text-action" ref={node => this.inputContentRef = node} placeholder='Type a message here' rows='5' name='content' required={true} onChange = {this.handleInputChange} />
                    <div id='btnWrapper'>
                    <Button  styleClass='btn btn-sunset lg' value='Send Message'>Submit</Button>
                    <Button  styleClass='btn btn-sunset lg'  value='Clear' type='text' onClick={this.handleClearClick}>Clear</Button>  
                    </div>
               </div>
                </form>
                    </div>
                    <div className='col-md-2 p-0'></div>
                    <div className='col-md-5 p-0'>
                <form id='contact-form' onSubmit={this.handleSubmit}>
                <div className='form-elements moon' id="moon-form-el-wrapper">
                <label className='moon-label'>Moon Contact Form</label>
                    <input  className="text-action" ref={this.inputFullNameRef} type='text' placeholder='Your Name' value={fullName} name='fullName' onChange = {this.handleInputChange} />
                    <input  className="text-action" ref={this.inputPhoneRef} type='tel' placeholder='Your Phone Number (optional)' value={phone} name='phone' onChange = {this.handleInputChange} />
                    <MyEmailInput  className='email-input text-action' value={email} name='email' inputRef = {this.inputEmailRef} onChange={this.handleInputChange} placeholder='Email' />
                    <textarea  className="text-action" ref={node => this.inputContentRef = node} placeholder='Type a message here' rows='5' name='content' required={true} onChange = {this.handleInputChange} />
                    <div id='btnWrapper'>
                    <Button  styleClass='btn btn-sunset lg' value='Send Message'>Submit</Button>
                    <Button  styleClass='btn btn-sunset lg'  value='Clear' type='text' onClick={this.handleClearClick}>Clear</Button>  
                    </div>
               </div>
                </form>
                    </div>
                </div>
                <div className='row p-0 my-1 mx-0'>
                    <div className='col-md-5 p-0'>
                    <form id='contact-form' onSubmit={this.handleSubmit}>
                <div className='form-elements lagoon' id="lagoon-form-el-wrapper">
                <label className='lagoon-label'>Lagoon Contact Form</label>
                    <input  className="text-action" ref={this.inputFullNameRef} type='text' placeholder='Your Name' value={fullName} name='fullName' onChange = {this.handleInputChange} />
                    <input  className="text-action" ref={this.inputPhoneRef} type='tel' placeholder='Your Phone Number (optional)' value={phone} name='phone' onChange = {this.handleInputChange} />
                    <MyEmailInput  className='email-input text-action' value={email} name='email' inputRef = {this.inputEmailRef} onChange={this.handleInputChange} placeholder='Email' />
                    <textarea  className="text-action" ref={node => this.inputContentRef = node} placeholder='Type a message here' rows='5' name='content' required={true} onChange = {this.handleInputChange} />
                    <div id='btnWrapper'>
                    <Button  styleClass='btn btn-sunset lg' value='Send Message'>Submit</Button>
                    <Button  styleClass='btn btn-sunset lg'  value='Clear' type='text' onClick={this.handleClearClick}>Clear</Button>  
                    </div>
               </div>
                </form>
                    </div>
                    <div className='col-md-2 p-0'></div>
                    <div className='col-md-5 p-0'>
                <form id='contact-form' onSubmit={this.handleSubmit}>
                <div className='form-elements sunset' id="sunset-form-el-wrapper">
                <label className='sunset-label'>Sunset Contact Form</label>
                    <input  className="text-action" ref={this.inputFullNameRef} type='text' placeholder='Your Name' value={fullName} name='fullName' onChange = {this.handleInputChange} />
                    <input  className="text-action" ref={this.inputPhoneRef} type='tel' placeholder='Your Phone Number (optional)' value={phone} name='phone' onChange = {this.handleInputChange} />
                    <MyEmailInput  className='email-input text-action' value={email} name='email' inputRef = {this.inputEmailRef} onChange={this.handleInputChange} placeholder='Email' />
                    <textarea  className="text-action" ref={node => this.inputContentRef = node} placeholder='Type a message here' rows='5' name='content' required={true} onChange = {this.handleInputChange} />
                    <div id='btnWrapper'>
                    <Button  styleClass='btn btn-sunset lg' value='Send Message'>Submit</Button>
                    <Button  styleClass='btn btn-sunset lg'  value='Clear' type='text' onClick={this.handleClearClick}>Clear</Button>  
                    </div>
               </div>
                </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactForm