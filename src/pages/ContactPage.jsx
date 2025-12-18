function ContactPage() {
  return (
    <div className="ph4 pv5 mw7 center">
      <h1>Contact</h1>
      <p>If you'd like to reach out, email <a href="mailto:hello@example.com">hello@example.com</a>.</p>
      <form className="mt3">
        <label className="db mb2">Name</label>
        <input className="w-100 pa2 mb3" type="text" name="name" />
        <label className="db mb2">Message</label>
        <textarea className="w-100 pa2 mb3" name="message" rows="6" />
        <button className="pa2" type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;
