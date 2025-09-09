"use client";

import { useState, useRef } from "react";
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
  const [captchaToken, setCaptchaToken] = useState("");
  const [open, setOpen] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    title: "Form submitted successfully",
    description: "Thank you for reaching out! We’ll get back to you shortly.",
  });

  const recaptchaRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|hotmail\.com)$/;
    const phoneRegex = /^(\d{11}|\d{12})$/;

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
    } else if (!phoneRegex.test(values.contact_number)) {
      errors.contact_number = "Contact number must be 10 or 12 digits.";
    }

    if (!values.address.trim()) {
      errors.address = "Address is required.";
    }

    if (!values.message.trim()) {
      errors.message = "Message is required.";
    }

    // For v2 checkbox, user must tick captcha which sets captchaToken
    if (!captchaToken) {
      errors.captcha = "Please check the reCAPTCHA box.";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // client-side validation
    const errors = validate(formValue);
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    // Build payload (include captchaToken)
    const payload = {
      ...formValue,
      captchaToken: captchaToken,
      action: "contact_form", // optional, kept for compatibility
    };

    console.log("Sending payload to backend:", payload);

    try {
      const response = await axios.post(
        "http://localhost/xampp/reactcrudphp/api/user.php",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Response:", response.data);

      if (response.data?.status) {
        // success
        setFormValue(initialValues);
        setCaptchaToken("");
        // reset checkbox
        recaptchaRef.current && recaptchaRef.current.reset();

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
                <PhoneInput
                  country={"lk"} // default Sri Lanka (+94), you can change
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
                  placeholder="+94 *********"
                />
                {formErrors.contact_number && (
                  <p className="text-red-500 text-sm">
                    {formErrors.contact_number}
                  </p>
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
                onChange={(token) => {
                  console.log("captcha token set:", token);
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

export default ContactFormSection;
