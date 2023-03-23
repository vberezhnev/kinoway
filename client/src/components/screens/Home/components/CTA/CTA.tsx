export const CTA = () => {
  return (
    <div className="container">
      <div className="title-wrapper">
        <h2 className="cta-title">Trial start first 30 days.</h2>
        <p className="cta-text">
          Enter your email to create or restart your membership.
        </p>
      </div>
      <form className="cta-form">
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="email-field"
        />
        <button type="submit" className="cta-form-btn">
          Get started
        </button>
      </form>
    </div>
  );
};
