import React, { Component } from 'react'
import {Link} from 'react-router-dom'
const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/`;

class PostList extends Component {
	state = {
		posts:[]
	}

	// componentWillMount
	componentWillMount(){
		fetch(URL)
		.then(response =>
			{return response.json()})
		.then(data =>{
		    this.setState({
		      posts: data
		    })
		  })
	}
	//render stuff
	render () {
		return (
			<div className='postWrap'>
			<h1>Blog Titles</h1>
			{this.state.posts.map(function(post){
				return (
				<div key={post._id}>
				<Link to = {'/ShowPost/' + post._id}>
					<p>{post.title}</p>
				</Link>
			</div>

		)})}

			</div>
		)
	}
}

export default PostList
