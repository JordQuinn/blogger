import React, { Component } from 'react'

const { id } = this.props.match.params;
const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;


class ShowPost extends Component {
	state={
			title:'',
			name:'',
			blog:''
		}


//this is here because it says so in NewLine
	componentWillMount() {
		//Do the fetch of URL
		fetch(URL)
			.then(response => {
				return response.json()
			})
			.then(response =>{
				this.setState({
					title: title,
					name:  name,
					blog: blog,
				})
			}
		//Update state with title, name and blog from the fetch response
	}

    render () {
  		return (
  			<div>
  			<h1>ShowPost</h1>
  			<h3>Title:</h3>
  			<p>{this.state.title}</p>
  			<h3>Author:</h3>
  			<p>{this.state.name}</p>
  			<h3>Post:</h3>
  			<p>{this.state.blog}</p>
  			</div>
  		)
  	}
  }

  export default ShowPost
