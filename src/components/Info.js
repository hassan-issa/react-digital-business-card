export default function Info() {
    return(
        <header className='header'>
            <div>
                <img src={require('./images/profilepic.png')} alt="" width="317"></img>
                <h2>Laura Smith</h2>
                <h4>Frontend Developer</h4>
                <h5>www.LauraSmith.com</h5>
            </div>
            <div className='button-group'>
                <button className='button-email' type="button">Email</button>
                <button className='button-link' type="button">LinkedIn</button>
            </div>
        </header>
    )
}