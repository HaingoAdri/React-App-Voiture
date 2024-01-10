import React from "react";
import style from "../dist/css/bootstrap.min.css";
import style2 from "../dist/css/bootstrap.rtl.min.css";
import icons from "../dist/bootstrap-icons.css";
import Login_css from "./Login.css";
import { Link, withRouter } from "react-router-dom";


class Login extends React.Component{

    render(){
        return(
           <body>
            <main>
                <div class="container py-5">
                    <div className="d-flex justify-content-center">
                        
                        <div className="card border">
                            <div className="card-header bg-transparent">
                                <h3 className="text-center text-primary">Login</h3>
                            </div>
                            <div className="card-body p-5">
                                <form > 
                                    <div className="p-4">
                                        <div class="text-dark  ">
                                            <input type="email" class="form-control border-0 border-bottom" id="address" placeholder="📧 Email" required/>
                                        </div>

                                        <p></p>
                                        <div class="text-dark">
                                            <input type="password" class="form-control border-0 border-bottom" id="address" placeholder="🔒 Password" required/>
                                        </div> 
                                        <p></p>

                                        <div class="text-dark">
                                            <a className="text-end text-muted text-decoration-none">Mot de passe oublié ?</a>
                                        </div> 
                                        <p></p>

                                        <div class="p-3 ">
                                            <input type="submit" class="btn btn-outline-primary bg-primary.bg-gradient w-100" value="Connexion"/>
                                        </div>
                                    </div>
                                </form>
                                <div class="p-3 text-center">
                                    <h6>Aucun compte <i className="bi bi-arrow-right-square-fill text-dark"></i> <Link to="/Inscription" className="text-decoration-none text-primary">Inscrivez-vous!</Link></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
           </body>
        );
    }
}
export default Login;