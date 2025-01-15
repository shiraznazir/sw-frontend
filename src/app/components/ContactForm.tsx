"use client";

import React, { useEffect, useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { sendEnquiry } from "@/apis";
import { toast } from 'react-toastify';
import Spinner from "@/components/ui/spinner";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(50, { message: "Name must not exceed 50 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  mobileNumber: z
    .string()
    .regex(/^\d{10}$/, { message: "Mobile number must be 10 digits." })
    .nonempty({ message: "Mobile number is required." }),
  address: z.string().nonempty({ message: "Address is required." }),
  message: z.string().nonempty({ message: "Message is required." }),
  pincode: z
    .string()
    .regex(/^\d{6}$/, { message: "Pincode must be 6 digits." })
    .nonempty({ message: "Pincode is required." }),
  type: z.string().nonempty({ message: "Type is required." }),
});

type FormData = z.infer<typeof formSchema>;

const InputField = ({
  name,
  label,
  type,
}: {
  name: keyof FormData;
  label: string;
  type?: string;
}) => {
  const { getFieldState, register, formState, reset } =
    useFormContext<FormData>();
  const { error } = getFieldState(name, formState);

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error, toast]);

  return (
    <div className="form-item mb-4">
      <Label htmlFor={name} className="block text-sm font-medium mb-1">
        {label}
      </Label>
      <Input {...register(name)} id={name} placeholder={label} />
      {error && <p className="text-sm text-red-600 mt-1">{error.message}</p>}
    </div>
  );
};

const ContactForm = ({
  onClose,
  type,
}: {
  type: string;
  onClose?: () => void;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobileNumber: "",
      address: "",
      pincode: "",
      message: "",
      type: type,
    },
  });

  const onSubmit = async (data: FormData) => {
    // Convert data into FormData
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("mobileNumber", data.mobileNumber);
    formData.append("pincode", data.pincode);
    formData.append("message", data.message);
    formData.append("address", data.address);
    formData.append("type", data.type);

    methods.reset();

    try {
      setIsLoading(true);
      // Send POST request with FormData
      const response = await sendEnquiry(formData);
      if (response.status) {
        toast.success("Your enquiry form is filled successfully");
      } else {
        setIsLoading(false);
        toast.error("Form is not filled successfully");
      }

      setTimeout(() => {
        onClose && onClose();
        setIsLoading(false);
      }, 5000);
    } catch (error) {
      setIsLoading(false);
      toast.error("Form is not filled successfully");
      console.error("Form is not filled successfully", error);
      setTimeout(() => {
        onClose && onClose();
      }, 5000);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="px-10 py-10 overflow-y-auto">
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          <InputField name="name" label="Full Name" />
          <InputField name="email" label="Email Address" />
          <InputField name="mobileNumber" label="Mobile Number" />
          <InputField name="pincode" label="Pincode" />
          <div className="form-item mb-4">
            <Label htmlFor="address" className="block text-sm font-medium mb-1">
              Address
            </Label>
            <Textarea
              {...methods.register("address")}
              id="address"
              placeholder="Address"
            />
            {methods.formState.errors.address && (
              <p className="text-sm text-red-600 mt-1">
                {methods.formState.errors.address.message}
              </p>
            )}
          </div>
          <div className="form-item mb-4">
            <Label htmlFor="message" className="block text-sm font-medium mb-1">
              Your Message
            </Label>
            <Textarea
              {...methods.register("message")}
              id="message"
              placeholder="Type your message here."
            />
            {methods.formState.errors.message && (
              <p className="text-sm text-red-600 mt-1">
                {methods.formState.errors.message.message}
              </p>
            )}
          </div>
          <Button type="submit" className="mt-4" disabled={isLoading}>
            {isLoading ? <Spinner size="lg" /> : "Submit"}
          </Button>
        </form>
      </div>
    </FormProvider>
  );
};

export default ContactForm;
