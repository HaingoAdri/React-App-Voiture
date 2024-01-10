import React from "react";
import style from "../dist/css/bootstrap.min.css";
import style2 from "../dist/css/bootstrap.rtl.min.css";
import icons from "../dist/bootstrap-icons.css";
import Login_css from "./Login.css";
class Inscription extends React.Component{
    render(){
        return(
           <body>
            <main>
                <div class="container py-5">
                    <div className="d-flex justify-content-center">
                        <div className="card border">
                            <div className="card-header bg-transparent">
                                <div class="container-fluid text-center">
                                    <h3 class=" fw-bolder text-primary">Inscription</h3>
                                </div>
                            </div>
                            <div className="card-body p-5">
                                <form action="" method="post"> 
                                    <div class="">
                                        <div className="p-1">
                                            <div class="text-dark">
                                                <input type="text" class="form-control form-control border-0 border-bottom" id="address" placeholder="👉 Nom" required/>
                                            </div>

                                            <p></p>

                                            <div class="text-dark">
                                                <input type="text" class="form-control form-control border-0 border-bottom" id="address" placeholder="👉 Premon" required/>
                                            </div>

                                            <p></p>

                                            <div class="text-dark">
                                                <input type="email" class="form-control form-control border-0 border-bottom" id="address" placeholder="📧 Email" required/>
                                            </div>

                                            <p></p>

                                            <div class="text-dark">
                                                <input type="text" class="form-control form-control border-0 border-bottom" id="address" placeholder="🖊️Contact" required/>
                                            </div>

                                            <p></p>
                                            
                                            <div class="text-dark">
                                                <input type="password" class="form-control form-control border-0 border-bottom" id="address" placeholder="🔒 Password" required/>
                                            </div> 

                                            <p></p>
                                            <div class="p-3 text-center">
                                                <input type="submit" class="btn btn-outline-primary bg-primary.bg-gradient w-100" value="S'inscrire"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div class="p-3 text-center">
                                    <h6>Possède compte <i className="bi bi-arrow-right-square-fill text-dark"></i> <a href="/*" className="text-decoration-none text-primary">Connectez-vous!</a></h6>
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
export default Inscription