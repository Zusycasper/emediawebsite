import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

function ContactFormSection() {
  const [formValue, setFormValue] = useState({
    user_name: "",
    email: "",
    contact_number: "",
    address: "",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState("");
  const recaptchaRef = useRef();

  const handleInputChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]+$/; // letters + spaces only
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|hotmail\.com)$/;
    const phoneRegex = /^(\d{10}|\d{12})$/; // 10 or 12 digits

    if (!nameRegex.test(formValue.user_name)) {
      alert("Name should only contain letters and spaces (no numbers).");
      return false;
    }
    if (!emailRegex.test(formValue.email)) {
      alert("Please enter a valid email (gmail.com, yahoo.com, or hotmail.com).");
      return false;
    }
    if (!phoneRegex.test(formValue.contact_number)) {
      alert("Contact number must be 10 digits or 12 digits with country code.");
      return false;
    }
    if (!formValue.address.trim()) {
      alert("Address cannot be empty.");
      return false;
    }
    if (!formValue.message.trim()) {
      alert("Message cannot be empty.");
      return false;
    }
    if (!captchaToken) {
      alert("Please verify the reCAPTCHA.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "http://localhost/xampp/reactcrudphp/api/user.php",
        formValue
      );
      console.log("Response:", response.data);

      // Reset form + recaptcha
      setFormValue({
        user_name: "",
        email: "",
        contact_number: "",
        address: "",
        message: "",
      });
      setCaptchaToken("");
      recaptchaRef.current.reset();

      alert("✅ Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Something went wrong. Try again.");
    }
  };

  return (
    <div className="w-full">
      <Card
        className="w-full max-w-[480px] mx-auto px-6 py-8 shadow-lg"
        style={{
          backgroundImage: `url(/media/cardBackground.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="user_name"
                  placeholder="David Smith"
                  value={formValue.user_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  value={formValue.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact_number">Contact Number</Label>
                <Input
                  id="contact_number"
                  name="contact_number"
                  placeholder="+94 *********"
                  value={formValue.contact_number}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={formValue.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Input
                  id="message"
                  name="message"
                  className="h-24"
                  value={formValue.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <CardFooter className="flex-col gap-2 px-7 mt-4">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Ldzqb0rAAAAALFR9ye1HagIdtJw-M_KX1eDfRyN"
                onChange={(token) => setCaptchaToken(token)}
                className="grid gap-2 px-4 mb-2"
              />
              <Button
                type="submit"
                variant="outline"
                className="w-full bg-black text-white hover:bg-teal-500"
              >
                SEND
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default ContactFormSection;
