import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: "",
            tem: "",
            bg1: "#fff",
            out: "0"
        }

    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "CE"){
            this.reset()
        }
        else if(button === "theme"){
            this.changecolor()
        }
        else {
            if(isNaN(button)){
                this.calculate()
                this.setState({
                    result: this.state.result + button
                })
            }
            else{
                this.setState({
                    out: button
                })
                this.setState({
                    result: this.state.result + button,
                    out: button
                })
            }
        }
    };

    changecolor = () =>{
        if(this.state.bg1==="#fff"){
            this.setState({
                bg1: "#000"
            })
        }
        else{
            this.setState({
                bg1: "#fff"
            })
        }

    }

    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                result: (eval(checkResult) || "" ) + "",
                out: (eval(checkResult) || "") + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: "",
            out: "0"
        })
    };
    render() {
        const stylesObj = {
            background: this.state.bg1
        }

        return (
            <div>
                <div className="calculator-body" style={stylesObj} >
                    <h1 style={{ color: 'gray' }}>Simple Calculator</h1>
                    <ResultComponent result={this.state.out}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}
export default App;