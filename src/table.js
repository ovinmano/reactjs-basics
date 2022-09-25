
/*
//----------------------remove data static

const { Component } = require("react");

const TableHeader = () => {
    return (<thead>
        <tr>
            <th>NAME</th>
            <th>JOB</th>
            <th>ACTION</th>
        </tr>
    </thead>)
}
const TableBody = (props) => {

    const {charactersData,removeCharacter} = props
    const rows = charactersData.map((character,index) => {
        return (<tr key={index}>
            <td>{character.name}</td>
            <td>{character.job}</td>
            <td><button onClick={()=>removeCharacter(index)}>Delete</button></td>
        </tr>)
    })

    return (
        <tbody>
            {rows}
        </tbody>)
}

class Table extends Component {
    render() {
        const { charactersData,removeCharacter } = this.props //destructure
        return (
            <table>
                <TableHeader />
                <TableBody removeCharacter={removeCharacter} charactersData={charactersData} />
            </table>
        )
    }
}
export default Table;
*/


//----------------form submit dynamic data getting user data

const { Component } = require("react");

const TableHeader = () => {
    return (<thead id="cont">
        <tr>
            <th id="nam">NAME</th>
            <th id="jobs">JOB</th>
            <th id="act">ACTION</th>
        </tr>
    </thead>)
}
const TableBody = (props) => {

    const {charactersData,removeCharacter} = props
    const rows = charactersData.map((character,index) => {
        return (<tr key={index}>
            <td id="nam">{character.name}</td>
            <td id="jobs">{character.job}</td>
            <td id="act"><button  id="btnn" onClick={()=>removeCharacter(index)}>Delete</button></td><br></br>
        </tr>)
    })

    return (
        <tbody>
            {rows}
        </tbody>)
}

class Table extends Component {
    render() {
        const { charactersData,removeCharacter } = this.props //destructure
        return (
            <table>
                <TableHeader />
                <TableBody removeCharacter={removeCharacter} charactersData={charactersData} />
            </table>
        )
    }
}
export default Table;