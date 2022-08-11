import axios from "axios";
import React from "react";
import Loder from "./loder";

class Api extends React.Component{
    constructor(props){
        super(props)
        // this.callApi()
        this.state={
            data:null
        }
    }
    callApi(){
        const Url="https://api.github.com/users/ayush8010720467/repos"
        // const Url="www.google/com"
        // fetch(Url).then((resp)=>{
        //     console.log(resp);
        //     return resp.json()
        // }).then((resp)=>{console.log("responce",resp)}).catch((err)=>{
        //     console.log("error",err);
        // })
        axios.get(Url).
        then((resp)=>{
            console.log("responce",resp);
            this.setState({
                data:resp.data
            })
        }).
        catch((err)=>{
            console.log("error",err);
        })

    }
    componentDidMount(){
    this.callApi( )
    }

    getElement(data){
        console.log(data);
        return<>
            <ul>
                {data.map((elem,index)=>{
                    return <li key={index}>{elem.language}</li>
                })}
            </ul>
        </>
    }

    render(){
        return(
    <>
        {/* {this.state.data? "niyamathullah" : <Loder/>} */}
        {this.state.data? this.getElement(this.state.data) : <Loder/>}
        {/* <Loder/> */}
    </>
        )
}
}

export default Api;

