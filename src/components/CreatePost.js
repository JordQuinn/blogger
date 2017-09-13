import React, { Component } from 'react'
const URL = 'https://tiny-lasagna-server.herokuapp.com/collections/blogger/'

class CreatePost extends Component {
	state={
		name:'',
		title:'',
		blog: ''
	}


//handle stuff and fetch the tiny lasagna


handleChange = (e) => {
	this.setState ({
		[e.target.name]:	e.target.value
	})
}

handleSubmit = (e) => {
	e.preventDefault()
	this.setState({
		[e.target.name]:	e.target.value
	})

const getitem = JSON.stringify(this.state)

fetch(URL) {
	method: 'POST',
	body:getitem,
	headers: {
		'Accept': 'aplication/json',
		"Content-Type": 'application/json'
	}

}
//do something with the fetch here and then....

.then(response => {
		return response.json()
	})
.then(data => {
	this.setState ({
		this.props.history.push('/ShowPost' +data._id)

	})
.catch(err => {
	console.log(err, 'error')
})
this.setState({name:'', title: '', blog: ''})
}


render() {
  return (
    <div className='postWrap'>
    <form onSubmit={this.handleSubmit}>
      <label>Author's Name</label><br/>
      <input value={this.state.name}onChange={this.handleChange} name='name' type='text' placeholder='Enter name'/><br/>
      <label>Title</label><br/>
      <input value={this.state.title}onChange={this.handleChange} name='title' type='text' placeholder='Title'/><br/>
      <label>Tell your story...</label><br/>
      <textarea value={this.state.blog}onChange={this.handleChange} name='blog'rows='5' cols='10'/>
      <button type='submit'>Submit</button>
    </form>
    </div>
  )
}
}

export default CreatePost
