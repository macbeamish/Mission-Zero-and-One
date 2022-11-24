import React from 'react';

const Footer = () => {
    return(
<footer className="py-3">
  <div className="container">
    <p className="float-end mb-1">
      <a className="text-dark" href="App.js">Back to top</a>
    </p>
    <p className="mb-1"></p>
    <p className="mb-0">New to Mission Possible? <a className='text-dark' href="/">Visit the FAQ</a> or read our <a className='text-dark' href="../getting-started/introduction/">getting started guide</a>.</p>
  </div>
</footer>
    )
}
export default Footer;