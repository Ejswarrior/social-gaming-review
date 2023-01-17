const React = require('react')



function FormSubmit() {
return (
    <div class="col">
    <h2 className='loginHeader'>Enter in your review!</h2>
        <form action='/gamepost' method="POST"> 
            <div class="row">
            <label class="form-label" htmlFor='title' id='title'>Game Title:</label>
            <input class="form-constrol-sm" type="text" name='title' id="title"/>
            </div>
            <div class="row">
            <label class="form-label" htmlFor='review' id='review'>Your Review</label>
            <input class="form-constrol-sm" type="text" name='review' id="review"/>
            </div>
            <div class="row">
            <label class="form-label" htmlFor='rating' id='rating'>Your rating</label>
            <input class="form-constrol-sm" type="number" name='rating' id="rating"/>
            </div>
            <div class="row">
            <input class="btn btn-primary" type='submit' value="Submit"></input>
            </div>
        </form>
    </div>
  )
}

module.exports = FormSubmit