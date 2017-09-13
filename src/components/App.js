import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';


import CreatePost from './CreatePost'
import ShowPost from './ShowPost'
import BaseLayout from './BaseLayout'
import PostList from './PostList'



class App extends Component {
  render() {
    return (
      <Router>
      <BaseLayout>
        <Switch>
        <Route exact path="/" component={PostList}/>
        <Route exact path="/create" component={CreatePost}/>
        <Route exact path="/post/:id" component={ShowPost}/>
        </Switch>
      </BaseLayout>
      </Router>
    );
  }
}

export default App;
