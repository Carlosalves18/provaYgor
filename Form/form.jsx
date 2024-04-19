import './form.css'
const Form = () =>{
    return(
        <div>
            
            <form >
                <input className='EM' placeholder='Name'/>
                <input className='EM' placeholder='Last Name' />
                <input className='EM' placeholder='Email Aderess' />
                <input className='EM' placeholder='Password' />
                <button className='clam'>CLAIM YOUR FREE TRIAL</button>
            </form>
        </div>
    )
}
export default Form