import { useState } from "react";
import { registerAttendee } from "../api/googleSheets";
import { Check, Loader2 } from "lucide-react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    yearOfStudy: "",
    awsExperience: "Beginner",
    dietaryRequirements: "",
    tshirtSize: "M",
    heardFrom: "",
  });

  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const result = await registerAttendee(formData);

    if (result.success) {
      setStatus("success");
      setMessage(result.message);
    } else {
      setStatus("error");
      setMessage(result.error);
    }
  };

  if (status === "success") {
    return (
      <div className="registration-success">
        <div className="success-icon">
          <Check size={32} />
        </div>
        <h3>You're registered!</h3>
        <p>Thank you for registering for AWS Student Community Day — Tirupati 2026.</p>
        <p>We'll send you a confirmation email shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <div className="form-group">
        <label htmlFor="name">Full Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your full name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your.email@college.edu"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91 98765 43210"
        />
      </div>

      <div className="form-group">
        <label htmlFor="college">College / University *</label>
        <input
          type="text"
          id="college"
          name="college"
          value={formData.college}
          onChange={handleChange}
          required
          placeholder="Your college name"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="yearOfStudy">Year of Study</label>
          <select
            id="yearOfStudy"
            name="yearOfStudy"
            value={formData.yearOfStudy}
            onChange={handleChange}
          >
            <option value="">Select year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
            <option value="Graduate">Graduate</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="tshirtSize">T-Shirt Size</label>
          <select
            id="tshirtSize"
            name="tshirtSize"
            value={formData.tshirtSize}
            onChange={handleChange}
          >
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="awsExperience">AWS Experience Level</label>
        <select
          id="awsExperience"
          name="awsExperience"
          value={formData.awsExperience}
          onChange={handleChange}
        >
          <option value="Beginner">Beginner - New to AWS</option>
          <option value="Intermediate">Intermediate - Used AWS before</option>
          <option value="Advanced">Advanced - Regular AWS user</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="dietaryRequirements">Dietary Requirements</label>
        <input
          type="text"
          id="dietaryRequirements"
          name="dietaryRequirements"
          value={formData.dietaryRequirements}
          onChange={handleChange}
          placeholder="Vegetarian, Vegan, etc. (leave blank if none)"
        />
      </div>

      <div className="form-group">
        <label htmlFor="heardFrom">How did you hear about us?</label>
        <input
          type="text"
          id="heardFrom"
          name="heardFrom"
          value={formData.heardFrom}
          onChange={handleChange}
          placeholder="Instagram, College, Friend, etc."
        />
      </div>

      {message && (
        <div className={`form-message ${status === "error" ? "error" : ""}`}>
          {message}
        </div>
      )}

      <button
        type="submit"
        className="btn btn-orange btn-large"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="spin" /> Submitting...
          </>
        ) : (
          "Register Now"
        )}
      </button>
    </form>
  );
}
