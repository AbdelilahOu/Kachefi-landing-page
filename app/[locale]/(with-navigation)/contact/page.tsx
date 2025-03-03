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
    <div className="mx-auto w-full rounded-lg bg-white p-6">
      <h1 className="mb-4 text-center font-bold text-3xl text-primary">
        {scopedI18N("title")}
      </h1>
      <p className="mx-auto mb-8 max-w-3xl text-center text-gray-600 md:max-w-6xl">
        {scopedI18N("description")}
      </p>
      <div className="container m-auto flex flex-col gap-8 rounded-md bg-white p-2 shadow-md md:h-[70vh] md:flex-row">
        <div className="relative flex w-full flex-col gap-6 rounded-lg bg-primary p-8 text-white md:w-1/3">
          <div>
            <h2 className="font-bold text-2xl">
              {scopedI18N("contact-details")}
            </h2>
            <p className="text-sm">{scopedI18N("contact-message")}</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5" />
            <span> {scopedI18N("phone")}</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5" />
            <span>{scopedI18N("email")}</span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5" />
            <span> {scopedI18N("address")}</span>
          </div>
          <div className="mt-auto flex gap-4">
            <Link
              href="#"
              className="text-slate-300 transition-colors hover:text-gray-200"
            >
              <Facebook className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-slate-300 transition-colors hover:text-gray-200"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-slate-300 transition-colors hover:text-gray-200"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
          <img
            className="absolute bottom-0 left-0 w-full"
            src="/contact-card-bg.png"
            alt=""
          />
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="relative flex w-full flex-col gap-6 pt-4 md:w-2/3"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                        className="rounded-none border-0 border-b-2 border-b-gray-300 px-0 shadow-none focus:border-b-primary focus:ring-0 focus-visible:ring-0"
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
                        className="rounded-none border-0 border-b-2 border-b-gray-300 px-0 shadow-none focus:border-b-primary focus:ring-0 focus-visible:ring-0"
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
                        className="rounded-none border-0 border-b-2 border-b-gray-300 px-0 shadow-none focus:border-b-primary focus:ring-0 focus-visible:ring-0"
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
                        className="rounded-none border-0 border-b-2 border-b-gray-300 px-0 shadow-none focus:border-b-primary focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring"
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
                      className="min-h-[100px] rounded-none border-0 border-b-2 border-b-gray-300 px-0 shadow-none focus:border-b-primary focus:ring-0 focus-visible:ring-0"
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
                className="-bottom-28 -rotate-[29deg] absolute right-16 w-52"
                src="/contact-message.png"
              />
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
