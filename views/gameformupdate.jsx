const React = require('react')

const GameFormUpdate = (data) => {
    const id = `${Object.values(data)}`
  return (
    <div class="submitContainer">
        <form action={`/gameupdate/${id}?_method=PUT`} method="POST"> 
            <div class="submitForm">
            <label class="form-label" htmlFor='title' id='title'>Game Title:</label>
            <input class="form-constrol-sm" type="text" name='title' id="title"/>
            
            <label class="form-label" htmlFor='review' id='review'>Your Review</label>
            <input class="form-constrol-sm" type="text" name='review' id="review"/>
            
            <label class="form-label" htmlFor='rating' id='rating'>Your rating</label>
            <input class="form-constrol-sm" type="number" name='rating' id="rating"/>
            
            <input type="submit" value="Update"/>
            </div>
            </form>
            <form action={`/gamedelete/${id}?_method=DELETE`} method='POST'>
            <input type="submit" value="Delete" />
            </form>     
    </div>
  );
 }


module.exports = GameFormUpdate