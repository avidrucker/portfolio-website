function ContactPage() {
  return (
    <div className="ph4 pt5 pb3 mw7 center">
      <h1 className="ma0 pt5 f2">Contact</h1>
      <p className="measure ma0 pt2 f4">If you'd like to reach out, email avidrucker AT gmail DOT com or submit your name, email address, and a message below.</p>
      <form className="pt3 pb5">
        <label className="db mb2">Name</label>
        <input className="w-100 pa2 mb3" required type="text" name="name" placeholder="Homer Simpson" />
        <label className="db mb2">Email</label>
        <input className="w-100 pa2 mb3" required type="email" name="email" placeholder="hsimpson@gmail.com" />
        <label className="db mb2">Message</label>
        <textarea className="w-100 pa2 mb3" required name="message" rows="6" placeholder="Your message here..." />
        <button className="pa2" type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;
