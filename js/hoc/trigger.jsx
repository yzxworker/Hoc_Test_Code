import React ,{ Component,PropTypes} from 'react';

export default function(Com){
    class Trigger extends Component{
        constructor(props){
            super(props);
            this.state={
                handleFunc:"no"
            }
            this.jobTrigger=this.jobTrigger.bind(this);
            this.changejob=this.changejob.bind(this);
        }

        componentDidMount(){
            if(this.props.job){
                this.jobTrigger()
            }else{
                console.log('没有添加job事件')
            }
        }

        jobTrigger(){
            console.log('职业:'+this.props.job);
        }

        changejob(){
            if(this.props.onjob){
                this.props.onjob(this.props.job);
            }
        }

        render(){
            return (
                <Com 
                    { ...this.props }
                    handleFunc={this.state.handleFunc}
                    changejob={this.changejob}
                />
            )
        }
    }

    return Trigger;
}