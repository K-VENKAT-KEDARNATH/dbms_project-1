import React, { Component } from 'react'
import { withRouter } from 'react-router';
import Topnav_admin from '../dashboard/topnav_admin'
import Sidebar_admin from '../dashboard/sidebar_admin'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/profile.css'

class modify_courses extends Component{
    render(){
        return(
            <div className="entire_div_profile">
                {/* <Dashboard/> */}
                <Topnav_admin/>
                <Sidebar_admin/>
                <div className="side_main_box">
                    <p>Modify Courses Here</p><br></br>
                    <p>Like add or delete courses and kavalante handout kuda ikkade ivvochu</p><br></br>
                    <p>window loc is {window.location.pathname}</p>
                </div>  
            </div>
        )
    }
}

export default withRouter(modify_courses)