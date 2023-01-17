const React = require('react')
const Default = require('./default')


function Profile(data){


  


    const usersPosts= data.user.posts.map((item, index) => {
        return(
            <div className='profilePost'>
                <ul className='profileList'>
                <a href={`http://localhost:3002/game/${item._id}`}><h3>{item.username}'s review {index + 1}</h3></a>
                    <li>Title: {item.title}</li>
                    <li>Rating: {item.rating}</li>
                    <li>Review: {item.review}</li>
                </ul>

            </div>
        )
    })
    return(
        <Default>
            <div className='profile'>
                <h2 className='profileHead'>Welcome to {data.user.username}'s profile</h2>
                
                    <a href={`http://localhost:3002/game`}><button>Reivew Page</button></a>
                    <form action='/logout' method='POST'><button type='submit'>Logout</button></form>
                
            </div>
                {usersPosts}
            
        </Default>
    )
}

module.exports = Profile