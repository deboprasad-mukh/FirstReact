import axios from 'axios';
import React, { Component } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Vtodo from './Vtodo'
import Todos from './Todos'
import Todo from './Todo'
import NavBar from './NavBar';
import Home from './Home';
import NotFound from './NotFound'

class Operation extends Component{
    constructor(){
        super();
        this.state={
            todos:[]
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos/").then(res=>{
            res.data.length=10
            
            this.setState({
                ...this.state,
                todos: res.data
            })
        })
    }
    addoredit=(item)=>{
        const items=this.state.todos.filter(items=>items.id!=item.id)
        this.setState({
            ...this.state,
            todos:[...items,item]
        })
    }
    render(){
        console.log(this.state)
        return(

            <BrowserRouter>
                <NavBar/>
                <Switch>
                <Route exact path="/" component={()=><Redirect to="/home"/>}/>
                <Route path="/home" component={()=><Home/>}/>
                <Route path="/allList" component={()=><Vtodo todos={this.state.todos}/>}/>
                <Route path="/product/:id" component={(props)=><Todos item={props.match.params.id}/>}/>
                <Route path="/add" component={()=><Todo addoredit={this.addoredit} Item={
                    {
                        "id": "",
                        "title": ""
                    }
                }/>}/>
                <Route path="/edit/:id" component={(props)=><Todo addoredit={this.addoredit} Item={this.state.todos.find(list=>list?.id==props.match.params.id)}/>}/>
                <Route component={()=><NotFound/>}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Operation