"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import { useScopedI18n } from "@/locales/client";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const scopedI18N = useScopedI18n("contact-page");

  const contactFormSchema = z.object({
    firstName: z.string().min(2, {
      message: scopedI18N("first-name-error"),
    }),
    lastName: z.string().min(2, {
      message: scopedI18N("last-name-error"),
    }),
    email: z.string().email({
      message: scopedI18N("email-error"),
    }),
    phone: z.string().min(10, {
      message: scopedI18N("phone-error"),
    }),
    question: z.enum(["question1", "question2", "question3"], {
      required_error: scopedI18N("question-error"),
    }),
    message: z.string().min(10, {
      message: scopedI18N("message-error"),
    }),
  });

  type ContactFormValues = z.infer<typeof contactFormSchema>;

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      question: undefined,
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitting(false);
    form.reset();
  }

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg">
      <h1 className="text-3xl font-bold text-center text-primary mb-4">
        {scopedI18N("title")}
      </h1>
      <p className="text-center text-gray-600 mb-8 max-w-3xl md:max-w-6xl mx-auto">
        {scopedI18N("description")}
      </p>
      <div className="flex container m-auto flex-col md:flex-row gap-8 p-2 rounded-md md:h-[70vh] bg-white shadow-md">
        <div className="bg-primary relative text-white p-8 rounded-lg flex flex-col gap-6 w-full md:w-1/3">
          <div>
            <h2 className="text-2xl font-bold">
              {scopedI18N("contact-details")}
            </h2>
            <p className="text-sm">{scopedI18N("contact-message")}</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5" />
            <span> {scopedI18N("phone")}</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5" />
            <span>{scopedI18N("email")}</span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 mt-1" />
            <span> {scopedI18N("address")}</span>
          </div>
          <div className="flex gap-4 mt-auto">
            <Link
              href="#"
              className="hover:text-gray-200 text-slate-300 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="hover:text-gray-200 text-slate-300 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="hover:text-gray-200 text-slate-300 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
          <img
            className="absolute w-full bottom-0 left-0"
            src="/contact-card-bg.png"
            alt=""
          />
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex relative flex-col pt-4 gap-6 w-full md:w-2/3"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{scopedI18N("first-name-label")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={scopedI18N("first-name-placeholder")}
                        {...field}
                        className="border-0 focus-visible:ring-0 shadow-none rounded-none border-b-2 border-b-gray-300 focus:ring-0 focus:border-b-primary px-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{scopedI18N("last-name-label")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={scopedI18N("last-name-placeholder")}
                        {...field}
                        className="border-0 focus-visible:ring-0 shadow-none rounded-none border-b-2 border-b-gray-300 focus:ring-0 focus:border-b-primary px-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{scopedI18N("email-label")}</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder={scopedI18N("email-placeholder")}
                        {...field}
                        className="border-0 focus-visible:ring-0 shadow-none rounded-none border-b-2 border-b-gray-300 focus:ring-0 focus:border-b-primary px-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{scopedI18N("phone-label")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={scopedI18N("phone-placeholder")}
                        {...field}
                        className="border-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring shadow-none rounded-none border-b-2 border-b-gray-300 focus:ring-0 focus:border-b-primary px-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>{scopedI18N("question-label")}</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="question1" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {scopedI18N("question1")}
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="question2" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {scopedI18N("question2")}
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="question3" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {scopedI18N("question3")}
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{scopedI18N("message-label")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={scopedI18N("message-placeholder")}
                      className="min-h-[100px] border-0 focus-visible:ring-0 shadow-none rounded-none border-b-2 border-b-gray-300 focus:ring-0 focus:border-b-primary px-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="relative flex justify-end">
              <Button
                type="submit"
                size="lg"
                className="self-end bg-primary hover:bg-purple-700"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? scopedI18N("submitting")
                  : scopedI18N("submit-button")}
              </Button>
              <img
                className="absolute -bottom-28 -rotate-[29deg] w-52 right-16"
                src="/contact-message.png"
              />
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
