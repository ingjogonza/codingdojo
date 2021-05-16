import React, { Component } from "react";
import './styles/blocks.css'

class Blocks extends Component{
    render(){
        return (
            <div>
                <div className="row">
                    <div id="header" className="col sm-4 med-4 lg-4"></div>
                </div> 
                <div className="row">
                    <div id="navigation" className="col sm-0 med-0 lg-1"></div>
                    <div id="main_content" className="col sm-4 med-4 lg-3">
                        <div className="row">
                            <div className="subcontents col sm-4 med-2 lg-one-third"></div>
                            <div className="subcontents col sm-4 med-2 lg-one-third"></div>
                            <div className="subcontents col sm-4 med-2 lg-one-third"></div>
                        </div>
                        <div className="row">
                            <div id="advertisement" className="col sm-4 med-4 lg-4"></div>
                        </div>
                    </div>             
                </div>        
            </div>
            
        
        )
    }

}
export default Blocks;