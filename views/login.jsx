const React = require('react')

import {useState, useEffect} from 'react'
import Default from './default'

function Login(){

    return(
        <Default>
                <div className="form">
                    <h2 className='loginHeader'>Enter in Login Info</h2>
                    <form action='logincheck' method="POST"> 
                        <div class="inputs">
                        <label class="form-label" htmlFor='username' id='username'>Username</label>
                        <input class="form-constrol-sm" type="text" name='username' id="password"/>

                        <label class="form-label" htmlFor='password' id='password'>Password</label>
                        <input class="form-constrol-sm" type="password" name='password' id="password"/>
                        <input class="btn btn-primary" type='submit' value="Log in"></input>
                        </div>
                    </form>

                <p>If you need to create and account, click here:</p><a href='http://localhost:3002/createaccount'>Create Account</a>
                </div>
            </Default>
)
}

module.exports = Login

