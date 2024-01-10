import React from "react";
import style from "../dist/css/bootstrap.min.css";
import style2 from "../dist/css/bootstrap.rtl.min.css";
import icons from "../dist/bootstrap-icons.css";
import { Link} from "react-router-dom";


class Acceuil extends React.Component{
    render(){
        return(
           <body>
            <main>
                <div class="container py-5">
                    <div className="d-flex justify-content-center">
                        <footer class="footer mt-auto py-3 bg-light">
                            <div class="container">
                                <span class="text-muted">Place sticky footer content here.</span>
                            </div>
                        </footer>
                    </div>
                </div>
            </main>
           </body>
        );
    }
}
export default Acceuil