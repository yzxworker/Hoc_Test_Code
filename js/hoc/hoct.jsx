import React,{Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default function(Com){
    class Hoct extends Component{
        constructor(porps){
            super(porps);
            this.state={
                num:2,
                des:'这是第二个高阶组件'
            }
        }


        render(){
            return (
                <Com
                    { ...this.props }
                    num={this.state.num} 
                    des={this.state.des}
                />
                )
        }
    }

    return Hoct;
}