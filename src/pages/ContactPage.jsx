function ContactPage() {
  return (
    <div className="ph4 pt5-ns pb3 mw7 center">
      <h1 className="ma0 pt5-ns f3 f2-ns">Contact</h1>
      <p className="measure ma0 pt2 f5 f4-ns">If you'd like to reach out, email avidrucker AT gmail DOT com or submit your name, email address, and a message below.</p>
      <form className="pt3 pb5-ns"
        action="https://formspree.io/f/mdanozda"
        method="POST"
      >
        <label className="db mb2">Name</label>
        <input className="w-100 pa2 mb3" autoComplete="on" required type="text" name="name" placeholder="Homer Simpson" />
        <label htmlFor="email" className="db mb2">Email</label>
        <input className="w-100 pa2 mb3" autoComplete="on" required type="email" name="email" placeholder="hsimpson@gmail.com" />
        <label className="dn o-0 h0 w0">If you are human, leave this field blank</label>
        <input className="dn o-0 h0 w0" type="text" name="_gotcha" />
        <label className="db mb2">Message</label>
        <textarea className="w-100 pa2 mb3" autoComplete="off" required name="message" rows="6" placeholder="Your message here..." />
        <button className="pa2" type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;
