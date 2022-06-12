
import React from 'react';
import './Contact.css'
const Contact = () => {

    const handleSubmit = data => {

        console.log(data.email, data.text);

        <script type="text/javascript" src="https://form.jotform.com/jsform/221594617422456"></script>


    }
    return (
        <div>
      
            <div className="hero min-h-screen    ">

                <div className="hero-content flex-col lg:flex-row-reverse  contact-form">
                    <div className="text-center lg:text-left  ">
                        <h1 className="text-5xl text-white font-bold">CONTACT ME</h1>
                        <p className="py-6  text-white">Send Your Query To me. Let me know about your demands ,I will get in touch.</p>
                    </div>
                    <form onSubmit={handleSubmit}>

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder=" Enter  email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Write Something</span>
                                    </label>
                                    <textarea type="text" className="textarea input input-bordered " placeholder="write something"></textarea>

                                </div>
                                <div className="form-control mt-6">
                                    <input type='submit' value='submit' className="btn btn-primary "></input>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;