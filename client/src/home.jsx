import React from "react";
import Login from './Login';

function Home () {

    function Welcome () {

        return (
            <div>
                환영합니다 고객님!
            </div>
        )

    }

    function toLogin() {
        return (
            <div>
                <Login/>
            </div>
        )
    }

    // if (적절한 jwt 있다면) { return ( <div><Welcome/></div>) } else


    
}

export default Home;