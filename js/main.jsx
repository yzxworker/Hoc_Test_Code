import React,{Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Sub from './components/sub.jsx'
class App extends Component {
    constructor(){
        super();
        this.state={
            mowen:"莫问"
        }
        this.handlejob=this.handlejob.bind(this);
    }

    handlejob(a){
        var bb=this.state.mowen;
        this.setState({
            mowen:"相知"
        })
    }

    render(){
        return (
            <div>
                <Sub job={this.state.mowen} onjob={this.handlejob}/>
            </div>
            )
    }
}





























ReactDOM.render(
    <App/>,
    document.getElementById('app')
)