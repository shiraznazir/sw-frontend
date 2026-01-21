"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendEnquiry } from "@/apis";
import { toast } from 'react-toastify';

interface FormData {
  name: string;
  email: string;
  mobileNumber: string;
  address: string;
  message: string;
  pincode: string;
  type: string;
}

interface ContactFormProps {
  onClose?: () => void;
  type: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose, type }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobileNumber: "",
    address: "",
    pincode: "",
    message: "",
    type: type,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string): string | null => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.length < 2) return "Name must be at least 2 characters";
        if (value.length > 50) return "Name must not exceed 50 characters";
        return null;
      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Invalid email address";
        return null;
      case "mobileNumber":
        if (!value.trim()) return "Mobile number is required";
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(value)) return "Mobile number must be 10 digits";
        return null;
      case "pincode":
        if (!value.trim()) return "Pincode is required";
        const pincodeRegex = /^\d{6}$/;
        if (!pincodeRegex.test(value)) return "Pincode must be 6 digits";
        return null;
      case "address":
        if (!value.trim()) return "Address is required";
        return null;
      case "message":
        if (!value.trim()) return "Message is required";
        return null;
      default:
        return null;
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }

    // Real-time validation
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    Object.keys(formData).forEach(key => {
      if (key !== "type") {
        const error = validateField(key, formData[key as keyof FormData]);
        if (error) {
          newErrors[key] = error;
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Convert data into FormData
      const submitData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, value);
      });

      const response = await sendEnquiry(submitData);
      
      if (response.status) {
        toast.success("Your enquiry form is filled successfully");
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          mobileNumber: "",
          address: "",
          pincode: "",
          message: "",
          type: type,
        });
        setTimeout(() => {
          onClose && onClose();
        }, 2000);
      } else {
        toast.error("Form is not filled successfully");
      }
    } catch (error) {
      toast.error("Form is not filled successfully");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (name: keyof FormData, label: string, type: string = "text", isTextarea: boolean = false) => {
    const value = formData[name];
    const error = errors[name];

    return (
      <div className="form-group">
        <div className="relative">
          {isTextarea ? (
            <textarea
              className="form-textarea"
              placeholder=" "
              value={value}
              onChange={(e) => handleInputChange(name, e.target.value)}
              required
              rows={4}
            />
          ) : (
            <input
              type={type}
              className="form-input"
              placeholder=" "
              value={value}
              onChange={(e) => handleInputChange(name, e.target.value)}
              required
            />
          )}
          <label className="form-label">{label}</label>
        </div>
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="form-error show"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="modern-form px-6 py-8">
      {/* Form Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          {type === "customer" ? "Book a Service Call" : "Partner with Us"}
        </h2>
        <p className="text-white/70">
          {type === "customer" 
            ? "Get expert HVAC service with 24/7 emergency support" 
            : "Join our network of certified service providers"
          }
        </p>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderField("name", "Full Name")}
          {renderField("email", "Email Address", "email")}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderField("mobileNumber", "Mobile Number", "tel")}
          {renderField("pincode", "Pincode")}
        </div>
        
        {renderField("address", "Address", "text", true)}
        {renderField("message", "Your Message", "text", true)}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="form-button w-full"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting...
            </div>
          ) : (
            "Submit Enquiry"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
