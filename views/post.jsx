const React = require('react')
const Default = require('./default')

function Post(data) {

    return(
        <Default>
        <div className="postContainer">
            <h1>{data.username}'s review</h1>
            <ul className='postList'>
                <li>Review for {data.title}</li>
                <li>Rating: {data.rating}</li>
                <li>Review: {data.review}</li>
            </ul>
        </div>
        </Default>
    )

}

module.exports = Post