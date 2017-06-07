import React ,{Component,PropTypes} from 'react';

export default function(Com){
    class Hoc extends Component{
        constructor(porps){
            super(porps);
            this.state={
                name:'hoc',
                role:"sorry,I don't know"
            }
            this.handleClick=this.handleClick.bind(this);
        }


        handleClick(){
            this.setState({
                name:'changeHOC'
            })
        }


        render() {
            return (
                <Com
                    { ...this.props } 
                    name={this.state.name} 
                    role={this.state.role} 
                    onchange={this.handleClick}
                />
            )   
        }

    }

    return Hoc;
    
}