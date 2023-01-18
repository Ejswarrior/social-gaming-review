const React = require('react')
const Default = require('./default')



function FormSubmit() {
return (
    <Default>
    <div className="submitContainer">
    <h2 className='loginHeader'>Enter in your review!</h2>
        <form action='/gamepost' method="POST"> 
            <div className='submitForm'>
            <label class="form-label" htmlFor='title' id='title'>Game Title:</label>
            <input class="form-constrol-sm" type="text" name='title' id="title"/>
            
            <label class="form-label" htmlFor='review' id='review'>Your Review</label>
            <input class="form-constrol-sm" type="text" name='review' id="review"/>
            
            <label class="form-label" htmlFor='rating' id='rating'>Your rating</label>
            <input class="form-constrol-sm" type="number" name='rating' id="rating"/>
            
            <input class="btn btn-primary" type='submit' value="Submit"></input>
            </div>
        </form>
    </div>
    </Default>
  )
}

module.exports = FormSubmit