const React = require('react')
const Default = require('./default')

function CreateAccount(){
    return(
        <Default>
            <div className='form'>
                <h2>Create Your Account</h2>
                    <form action="createaccount" method="POST">
                        <div className='inputs'>
                            <label htmlFor='username' id='username'>Username</label>
                            <input type="text" name='username' id="username"/>
                        

                        
                            <label htmlFor='password' id='password'>Password</label>
                            <input type="password" name='password' id="password"/>
                        

                        <input type='submit' value="Submit"></input>
                        </div>
                    </form>
            </div>
        </Default>
    )
}

module.exports = CreateAccount