
import RegistrationHeader from "./RegistrationHeader";
import Footer from "../Footer/Footer";

export default function DevelopementInProgress() {
  return (
    <>
      <RegistrationHeader/>
      <div className="container py-0 pl-64 h-full">
        <div className="row">
            <div className="col-md-12">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                            <h2 className="panel-title text-center"> 
                                <br/>
                                Developement in progress
                            </h2>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
