"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Separator } from "@/components/ui/separator";

export default function ContactFormSection() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const preselectedService = params.get("service") || "";

  console.log("Prefill service from URL:", preselectedService);

  const initialValues = {
    user_name: "",
    email: "",
    contact_number: "",
    services: preselectedService,
    message: "",
  };

  console.log("Prefill service from URL:", preselectedService);

  const [formValue, setFormValue] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState("");
  const [open, setOpen] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    title: "Form submitted successfully",
    description: "Thank you for reaching out! We’ll get back to you shortly.",
  });

  const recaptchaRef = useRef(null);

  // Keep formValue.services in sync if user arrives later with param or changes URL
  useEffect(() => {
    const s = new URLSearchParams(location.search).get("service") || "";
    if (s) {
      setFormValue((prev) => ({ ...prev, services: s }));
    }
  }, [location.search]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    // keep your original limited-email validation (gmail/yahoo/hotmail)
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|hotmail\.com)$/;

    if (!values.user_name) {
      errors.user_name = "Name is required.";
    } else if (!nameRegex.test(values.user_name)) {
      errors.user_name = "Name should only contain letters and spaces.";
    }

    if (!values.email) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(values.email)) {
      errors.email =
        "Please enter a valid email (gmail.com, yahoo.com, or hotmail.com).";
    }

    if (!values.contact_number) {
      errors.contact_number = "Contact number is required.";
    } else {
      // strip non-digits (phone input may include + or spaces)
      const phoneDigits = values.contact_number.replace(/\D/g, "");
      if (!/^(\d{11}|\d{12})$/.test(phoneDigits)) {
        errors.contact_number = "Contact number must be 11 or 12 digits.";
      }
    }

    if (!values.services) {
      errors.services = "Please select a service.";
    }

    if (!values.message || !values.message.trim()) {
      errors.message = "Message is required.";
    }

    if (!captchaToken) {
      errors.captcha = "Please check the reCAPTCHA box.";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate(formValue);
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    const payload = {
      ...formValue,
      captchaToken: captchaToken,
      action: "contact_form",
    };

    console.log("Sending payload to backend:", payload);

    try {
      const response = await axios.post(
        "https://www.e-mediabiz.com/api/user.php",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Response:", response.data);

      if (response.data?.status) {
        setFormValue({
          user_name: "",
          email: "",
          contact_number: "",
          services: preselectedService ? preselectedService : "",
          message: "",
        });
        setCaptchaToken("");
        if (recaptchaRef.current && typeof recaptchaRef.current.reset === "function") {
          recaptchaRef.current.reset();
        }

        setAlertInfo({
          title: "Form Submitted Successfully",
          description: "Thank you for reaching out! We’ll get back to you shortly.",
        });
        setOpen(true);
      } else {
        setAlertInfo({
          title: "Submission Failed",
          description: response.data?.message || "Something went wrong.",
        });
        setOpen(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlertInfo({
        title: "Submission Error",
        description: "Network or server error. Check console and server logs.",
      });
      setOpen(true);
    }
  };

  return (
    <div className="w-full">
      <Card
        className="w-full max-w-[480px] mx-auto px-6 py-8 shadow-lg"
        style={{
          backgroundImage: `url(/images/cardBackground.webp)`,
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
                <PhoneInput
                  country={"gb"}
                  id="contact_number"
                  name="contact_number"
                  value={formValue.contact_number}
                  onChange={(value) =>
                    setFormValue({ ...formValue, contact_number: value })
                  }
                  inputStyle={{
                    width: "100%",
                    background: "transparent",
                    border: "1px solid black",
                  }}
                  placeholder="+44 *********"
                />
                {formErrors.contact_number && (
                  <p className="text-red-500 text-sm">
                    {formErrors.contact_number}
                  </p>
                )}
              </div>

              {/* Services Dropdown */}
              <div className="grid gap-2">
                <Label htmlFor="services">Services</Label>
                <select
                  id="services"
                  name="services"
                  value={formValue.services}
                  onChange={(e) =>
                    setFormValue({ ...formValue, services: e.target.value })
                  }
                  className="w-full border border-black rounded-md p-2 bg-transparent"
                >
                  <option value="">-- Select a Service --</option>
                  <option value="Digital Marketing (AI-Enhanced)">
                    Digital Marketing
                  </option>
                  <option value="Social Media Management (Smart & Automated)">
                    Social Media Management
                  </option>
                  <option value="Web & App Development (Future-Ready)">
                    Web & App Development
                  </option>
                  <option value="Cloud & IT Infrastructure Support (Intelligent & Secure)">
                    Cloud & IT Infrastructure Support
                  </option>
                  <option value="Creative Design (Human + AI)">
                    Creative Design
                  </option>
                </select>
                {formErrors.services && (
                  <p className="text-red-500 text-sm">{formErrors.services}</p>
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
                onChange={(token) => {
                  // console.log("captcha token set:", token);
                  setCaptchaToken(token);
                }}
              />
              {formErrors.captcha && (
                <p className="text-red-500 text-sm">{formErrors.captcha}</p>
              )}

              <Button
                type="submit"
                variant="outline"
                className="w-full bg-black text-white hover:bg-teal-500"
                disabled={!captchaToken}
              >
                SEND
              </Button>
            </CardFooter>
          </form>

          <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent className="bg-white text-black">
              <AlertDialogHeader>
                <AlertDialogTitle>{alertInfo.title}</AlertDialogTitle>
                <Separator className=" border-1 text-gray-400" />
                <AlertDialogDescription>
                  {alertInfo.description}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction
                  onClick={() => setOpen(false)}
                  className="bg-black text-white hover:bg-teal-500"
                >
                  OK
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>
    </div>
  );
}
