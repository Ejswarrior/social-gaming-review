const React = require('react')
const GameFormUpdate = require('./gameformupdate')
const Default = require('./default')

function Feed(data) {

    const loggedIn = () =>{
        if(data.userAuth){
            return(
        <a href={`http://localhost:3002/profile/${data.userAuth._id}`}><button>Profile</button></a>
            )
        }

        else{
            return(
            <a href={`http://localhost:3002/login`}><button>login</button></a>
            )
        }
    }

    const Posts = data.posts.map((item, index) => {
        return(
            
            <div className='rev'>
            <h2>Posted by: {item.username}</h2>

            <ul>
            <a href={`http://localhost:3002/game/${item._id}`}><li><h3>Review for {item.title}</h3></li></a>
            <li>Rating: {item.rating}</li>
            <li>Review: {item.review}</li>
            </ul>
            <GameFormUpdate data={item._id}/>
            </div>  
        )
    })

    return (
        <Default>
        <div className='revBox'>
        <h1>Welcome to the worlds best Game Review Site</h1>
        {loggedIn()}
        <a href={`http://localhost:3002/post/submit`}><button>Create Post</button></a>
        {Posts}
        </div>
        </Default>
    )
}



module.exports = Feed