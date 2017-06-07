import React,{Component,PropTypes} from 'react';
import Hoc from '../hoc/hoc.jsx';
import Hoct from '../hoc/hoct.jsx';
import Trigger from '../hoc/trigger.jsx';
import {compose} from 'ramda';

class Sub extends Component {
    constructor(props){
        super(props);
    }
    render () {
        const {name,role,onchange,num,des,changejob,job}=this.props;
        return (
            <div>
                <p onClick={onchange}>名字：{name}</p>
                <p>角色：{role}</p>
                <p>工作：{job}</p>
                <button onClick={changejob}>trigger</button>
            </div>
        );
    }
}
const HocSub = compose(
                    Hoc,
                    Hoct,
                    Trigger
                    )(Sub)
export default HocSub;