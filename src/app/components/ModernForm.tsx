"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormField {
  name: string;
  type: "text" | "email" | "tel" | "textarea" | "select" | "file" | "checkbox";
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  validation?: (value: string) => string | null;
  icon?: React.ReactNode;
}

interface ModernFormProps {
  title: string;
  subtitle?: string;
  fields: FormField[];
  onSubmit: (data: Record<string, any>) => Promise<void>;
  submitText?: string;
  multiStep?: boolean;
  className?: string;
}

const ModernForm: React.FC<ModernFormProps> = ({
  title,
  subtitle,
  fields,
  onSubmit,
  submitText = "Submit",
  multiStep = false,
  className = ""
}) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fieldsPerStep = multiStep ? Math.ceil(fields.length / 3) : fields.length;
  const totalSteps = multiStep ? Math.ceil(fields.length / fieldsPerStep) : 1;
  const currentFields = multiStep 
    ? fields.slice(currentStep * fieldsPerStep, (currentStep + 1) * fieldsPerStep)
    : fields;

  const handleInputChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }

    // Real-time validation
    const field = fields.find(f => f.name === name);
    if (field?.validation) {
      const error = field.validation(value);
      if (error) {
        setErrors(prev => ({ ...prev, [name]: error }));
      }
    }
  };

  const validateStep = () => {
    const stepErrors: Record<string, string> = {};
    
    currentFields.forEach(field => {
      const value = formData[field.name] || "";
      
      if (field.required && !value) {
        stepErrors[field.name] = `${field.label} is required`;
      } else if (field.validation && value) {
        const error = field.validation(value);
        if (error) {
          stepErrors[field.name] = error;
        }
      }
    });

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps - 1));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep()) return;

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      // Reset form on success
      setFormData({});
      setCurrentStep(0);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileUpload = (name: string, files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0];
      handleInputChange(name, file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent, fieldName: string) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    handleFileUpload(fieldName, files);
  };

  const renderField = (field: FormField) => {
    const value = formData[field.name] || "";
    const error = errors[field.name];

    switch (field.type) {
      case "textarea":
        return (
          <div key={field.name} className="form-group">
            <textarea
              className="form-textarea"
              placeholder={field.placeholder || field.label}
              value={value}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              required={field.required}
            />
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

      case "select":
        return (
          <div key={field.name} className="form-group">
            <div className="relative">
              <select
                className="form-select"
                value={value}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                required={field.required}
              >
                <option value="">{field.placeholder || `Select ${field.label}`}</option>
                {field.options?.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {field.icon && <div className="form-icon">{field.icon}</div>}
              <div className="select-arrow">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
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

      case "file":
        return (
          <div key={field.name} className="form-group">
            <div
              className={`form-file-upload ${dragOver ? 'dragover' : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, field.name)}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                onChange={(e) => handleFileUpload(field.name, e.target.files)}
                required={field.required}
              />
              <div className="form-file-content">
                <svg className="form-file-icon mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <div className="text-white/80 font-semibold mb-1">
                  {value ? value.name : `Upload ${field.label}`}
                </div>
                <div className="text-white/60 text-sm">
                  Drag and drop or click to browse
                </div>
              </div>
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

      case "checkbox":
        return (
          <div key={field.name} className="form-checkbox">
            <input
              type="checkbox"
              id={field.name}
              checked={value}
              onChange={(e) => handleInputChange(field.name, e.target.checked)}
              required={field.required}
            />
            <label htmlFor={field.name}>{field.label}</label>
          </div>
        );

      default:
        return (
          <div key={field.name} className="form-group">
            <div className="relative">
              <input
                type={field.type}
                className="form-input"
                placeholder=" "
                value={value}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                required={field.required}
              />
              <label className="form-label">{field.label}</label>
              {field.icon && <div className="form-icon">{field.icon}</div>}
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
    }
  };

  return (
    <div className={`modern-form ${className}`}>
      {/* Form Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">{title}</h2>
        {subtitle && (
          <p className="text-white/70">{subtitle}</p>
        )}
      </div>

      {/* Step Indicator */}
      {multiStep && totalSteps > 1 && (
        <div className="form-step-indicator">
          {Array.from({ length: totalSteps }, (_, index) => (
            <React.Fragment key={index}>
              <div className={`form-step ${
                index < currentStep ? 'completed' : 
                index === currentStep ? 'active' : ''
              }`}>
                {index < currentStep ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              {index < totalSteps - 1 && (
                <div className={`form-step-line ${index < currentStep ? 'completed' : ''}`} />
              )}
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Form Content */}
      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentFields.map(renderField)}
          </motion.div>
        </AnimatePresence>

        {/* Form Actions */}
        <div className="flex gap-4 mt-8">
          {multiStep && currentStep > 0 && (
            <button
              type="button"
              onClick={handlePrevious}
              className="flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Previous
            </button>
          )}
          
          {multiStep && currentStep < totalSteps - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="flex-1 form-button"
            >
              Next Step
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 form-button"
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
                submitText
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ModernForm;