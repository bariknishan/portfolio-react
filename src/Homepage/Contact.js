
import React from 'react';

const Contact = () => {

    const handleSubmit = data => {

        console.log(data.email, data.text);

        <script type="text/javascript" src="https://form.jotform.com/jsform/221594617422456"></script>


    }
    return (
        <div>
      
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">CONTACT ME</h1>
                        <p className="py-6">Send Your Query and email.Let me know about your demands .</p>
                    </div>
                    <form onSubmit={handleSubmit}>

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Write Something</span>
                                    </label>
                                    <textarea type="text" className="textarea input input-bordered" placeholder="text"></textarea>

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