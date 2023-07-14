// import react from "react"
// const Contact=()=>{
//     return(
//         <>
//         <h1>Contact page</h1>
//         </>
//     );  

// };
// export default Contact


import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
