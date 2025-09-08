"use client"

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

function ContactFormSection() {
  const initialValues = {
    user_name: "",
    email: "",
    contact_number: "",
    address: "",
    message: "",
  };

  const [formValue, setFormValue] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");

  const recaptchaRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  // ✅ Validation function (clean, tutorial-style)
  const validate = (values) => {
    const errors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|hotmail\.com)$/;
    const phoneRegex = /^(\d{10}|\d{12})$/;

    if (!values.user_name) {
      errors.user_name = "Name is required.";
    } else if (!nameRegex.test(values.user_name)) {
      errors.user_name = "Name should only contain letters and spaces.";
    }

    if (!values.email) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Please enter a valid email (gmail.com, yahoo.com, or hotmail.com).";
    }

    if (!values.contact_number) {
      errors.contact_number = "Contact number is required.";
    } else if (!phoneRegex.test(values.contact_number)) {
      errors.contact_number = "Contact number must be 10 or 12 digits.";
    }

    if (!values.address.trim()) {
      errors.address = "Address is required.";
    }

    if (!values.message.trim()) {
      errors.message = "Message is required.";
    }

    if (!captchaToken) {
      errors.captcha = "Please verify the reCAPTCHA.";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValue));
    setIsSubmit(true);
  };

  // ✅ Only submit when validation passes
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      (async () => {
        try {
          const response = await axios.post(
            "http://localhost/xampp/reactcrudphp/api/user.php",
            formValue
          );
          console.log("Response:", response.data);

          // Reset form
          setFormValue(initialValues);
          setCaptchaToken("");
          recaptchaRef.current.reset();

          alert("Form submitted successfully!");
        } catch (error) {
          console.error("Error submitting form:", error);
          alert("Something went wrong. Try again.");
        }
      })();
    }
  }, [formErrors]);

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
              {/* Name */}
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="user_name"
                  placeholder="David Smith"
                  value={formValue.user_name}
                  onChange={handleInputChange}
                />
                {formErrors.user_name && (
                  <p className="text-red-500 text-sm">{formErrors.user_name}</p>
                )}
              </div>

              {/* Email */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  value={formValue.email}
                  onChange={handleInputChange}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm">{formErrors.email}</p>
                )}
              </div>

              {/* Contact */}
              <div className="grid gap-2">
                <Label htmlFor="contact_number">Contact Number</Label>
                <Input
                  id="contact_number"
                  name="contact_number"
                  placeholder="+94 *********"
                  value={formValue.contact_number}
                  onChange={handleInputChange}
                />
                {formErrors.contact_number && (
                  <p className="text-red-500 text-sm">{formErrors.contact_number}</p>
                )}
              </div>

              {/* Address */}
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={formValue.address}
                  onChange={handleInputChange}
                />
                {formErrors.address && (
                  <p className="text-red-500 text-sm">{formErrors.address}</p>
                )}
              </div>

              {/* Message */}
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Input
                  id="message"
                  name="message"
                  className="h-24"
                  value={formValue.message}
                  onChange={handleInputChange}
                />
                {formErrors.message && (
                  <p className="text-red-500 text-sm">{formErrors.message}</p>
                )}
              </div>
            </div>

            <CardFooter className="flex-col gap-2 px-7 mt-4">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Ldzqb0rAAAAALFR9ye1HagIdtJw-M_KX1eDfRyN"
                onChange={(token) => setCaptchaToken(token)}
                className="grid gap-2 px-4 mb-2"
              />
              {formErrors.captcha && (
                <p className="text-red-500 text-sm">{formErrors.captcha}</p>
              )}

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
