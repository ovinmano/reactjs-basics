/*
//----------------------remove data static
import { Component } from "react"
import Table from "./table";

class App extends Component {
    state = {
        characters : [ {
            name: 'manoj',
            job: 'Frondend',
        },
        {
            name: 'Kumar',
            job: 'Backend',
        },
        {
            name: 'Dennis',
            job: 'Mernstack',
        }, ]
    }
    removeCharacter=(index)=>{

       const {characters} = this.state

       let filtered = characters.filter((character,i)=>{
            return i!==index    
       });
       this.setState({characters:filtered});
    }
    render(){
        const {characters}=this.state
        return (
            <div className="container">
                <h1>Table</h1>
                <Table removeCharacter = {this.removeCharacter} charactersData = {characters}/>
            </div>
        )
    }
}
export default App;
*/

//------------------form submit dynamic data getting user data

import { Component } from "react"
import ApiExample from "./ApiExample";
import Form from "./Form";
import Table from "./table";

class App extends Component {
    state = {
        characters : []
    }
    removeCharacter=(index)=>{

       const {characters} = this.state

       let filtered = characters.filter((character,i)=>{
            return i!==index    
       });
       this.setState({characters:filtered});
    }

    handleSubmit = (character)=>{
        this.setState({characters:[...this.state.characters,character]})
    }

    render(){
        const {characters}=this.state
        return (
            <div className="container">
                <h1>Table</h1>
                <Table removeCharacter = {this.removeCharacter} charactersData = {characters}/>
                <Form handleSubmit={this.handleSubmit}/>
                <h3>Api Example</h3>
                <ApiExample/>
            </div>
        )
    }
}
export default App;
