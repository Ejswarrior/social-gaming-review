const React = require('react')

function Post(data) {

    return(
        <div>
        <h1>{data.username}'s review</h1>
            <h3>Review for {data.title}</h3>
            <ul>
            <li>{data.rating}</li>
            <li>{data.review}</li>
            </ul>
        </div>
    )
}

module.exports = Post