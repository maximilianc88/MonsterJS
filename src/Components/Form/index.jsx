import React from 'react';
import './style.css';
import Button from '../Button'


function MyTextInput(props){
    function handleChange(event){
        if (props.onChange){
            props.onChange(event)
        }
    }
    return(
        <p>
            <input type='email' value={props.value} name={props.name} ref={props.inputRef} onChange={handleChange} placeholder={props.placeholder} className={props.className} />
        </p>
    )
}

// class CustomTextComponent extends React.Component {
//     render 
// }
class FormsAndInputs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            fullName: '',
            content: '',
            email: ''
        }
        this.inputFullNameRef = React.createRef()
        this.inputEmailRef = React.createRef()
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log(this.inputContentRef.value)
        console.log("Final data is", data)
        this.inputEmailRef.current.value = ''
        this.inputFullNameRef.current.value = ''
        this.inputContentRef.value=''
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
        this.inputContentRef.value=''
        this.setState({
            fullName: '',
            email: '',
            content: ''
        })
    })

    // componentDidMount () {
    //     this.inputFullNameRef.current.focus()
    //     this.inputContentRef.current.focus()
    // }

    render () {
        const {fullName} = this.state
        const {email} = this.state
        return (
            <div>
                    <div className='form-header'>
                        <h1>Contact Forms</h1>
                    </div>
                <p>Full name is: {fullName}</p>
                <form id='contact-form' onSubmit={this.handleSubmit}>
                    <input  ref={this.inputFullNameRef} type='text' placeholder='Your Name' value={fullName} name='fullName' onChange = {this.handleInputChange} />
                    <MyTextInput  value={email} name='email' inputRef = {this.inputEmailRef} onChange={this.handleInputChange} placeholder='Email' />
                    <textarea  ref={node => this.inputContentRef = node} placeholder='Type a message here' rows='5' name='content' required={true} onChange = {this.handleInputChange} />
                    <Button  styleClass='btn btn-sunset monster'  value='Send Message'>Submit</Button>
                    <Button styleClass='btn btn-sunset monster'  value='Clear' type='text' onClick={this.handleClearClick}>Clear</Button>  
                </form>
            </div>
        )
    }
}

export default FormsAndInputs