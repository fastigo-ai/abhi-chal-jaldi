import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const ContactInputBox = ({ type, name, placeholder, value, onChange }) => (
  <div className="mb-6">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full rounded border border-gray-300 bg-transparent p-3 text-base text-body-color outline-none transition focus:border-primary dark:border-dark-3 dark:text-white dark:placeholder:text-dark-6"
    />
  </div>
);

const ContactTextArea = ({ name, placeholder, row, value, onChange }) => (
  <div className="mb-6">
    <textarea
      name={name}
      rows={row}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full rounded border border-gray-300 bg-transparent p-3 text-base text-body-color outline-none transition focus:border-primary dark:border-dark-3 dark:text-white dark:placeholder:text-dark-6"
    />
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "32aa49c6-f810-4143-9758-0035385c4ccf");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully ✅");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Something went wrong ❌");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]">
      <Helmet>
        <title>Contact Door2fy | 10-Minute Doorstep Laptop Support</title>
        <meta
          name="description"
          content="Need instant laptop repair or IT support? Contact Door2fy for 10-minute doorstep assistance. Call +91 9599094941 or message us online."
        />
        <meta
          property="og:title"
          content="Contact Door2fy | 10-Minute Doorstep Laptop Support"
        />
        <meta
          property="og:description"
          content="Get in touch with Door2fy — India’s 10-minute doorstep service platform for laptops & tech support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://door2fy.in/contact" />
        <meta property="og:image" content="/logo.png" />
        <link rel="canonical" href="https://door2fy.in/contact" />
      </Helmet>
      <div className="container">
        <div className="-mx-4 flex flex-wrap lg:justify-between">
          {/* LEFT SIDE INFO */}
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              
              <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white">
                GET IN TOUCH WITH US
              </h2>
              <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                Have questions or ideas? Drop us a message and we’ll get back to
                you soon.
              </p>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-[60px] items-center justify-center rounded bg-primary/5 text-primary">
                  📞
                </div>
                {/* <div>
                  <h4 className="text-xl font-bold text-dark dark:text-white">
                    Phone Number
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                    (+91) 9599094941
                  </p>
                </div> */}
              </div>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-[60px] items-center justify-center rounded bg-primary/5 text-primary">
                  📧
                </div>
                <div>
                  <h4 className="text-xl font-bold text-dark dark:text-white">
                    Email Address
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                    support@Door2fy.in
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
              <form onSubmit={handleSubmit}>
                <ContactInputBox
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <ContactInputBox
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <ContactInputBox
                  type="text"
                  name="phone"
                  placeholder="Your Phone (optional)"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <ContactTextArea
                  name="message"
                  placeholder="Your Message"
                  row="6"
                  value={formData.message}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full rounded border border-primary  p-3  transition hover:bg-opacity-90 bg-[#53BED1] hover:bg-[#53BED1] text-white ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
