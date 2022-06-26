import { Divider } from "antd";
import React,{Component} from "react";

class HookClass extends Component {
    state = {
        count: 0
    }

    onUpdate = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render (){
        return (
            <div className="p-hooks">
                <p> Nilai saya ini adalah : {this.state.count}</p>
                <button onClick={this.onUpdate}> Update Nilai </button>

            </div>
        )
    }
}
export default HookClass; 
//Dapat mengupdate value tanpa props dari luar {statefull}