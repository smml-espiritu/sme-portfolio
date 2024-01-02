import { H1, H2, SubH } from "./ui/typography";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { sendContactForm } from "@/lib/api";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import { Loader2 } from "lucide-react";
import { RootWrapper } from "./wrapper";
import ProjectCarousel from "./project-carousel";

const formSchema = z.object({
  emailAddress: z.string().email(),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  message: z.string(),
  subject: z.string(),
});

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      name: "",
      message: "",
      subject: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setSubmitStatus("loading");
      await sendContactForm(data);
      setSubmitStatus("success");
      toast.success("Sent successfully");
    } catch (error) {
      setSubmitStatus("error");
      toast.error("Error submitting form. Please try again.");
    }
  };
  return (
    <RootWrapper>
      <div>
        <div className="flex justify-center md:justify-start items-center h-[98px]">
          <H1>Get in touch</H1>
        </div>
        <div className="grid justify-center grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="w-full max-w-[517px]">
            <Toaster />
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className=" w-full max-w-[517px] flex flex-col gap-4 bg-black p-5 border border-[#737171] rounded-[8px]"
              >
                <FormField
                  control={form.control}
                  name="emailAddress"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Email Address"
                            type="email"
                            {...field}
                            className="rounded-[8px] border-[#737171]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Name"
                            type="text"
                            {...field}
                            className="rounded-[8px] border-[#737171]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Subject"
                            type="text"
                            {...field}
                            className="rounded-[8px] border-[#737171]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Message"
                            {...field}
                            className="rounded-[8px] border-[#737171]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <Button
                  type="submit"
                  className="border w-full rounded-[8px] border-[#737171]"
                  disabled={
                    !form.getValues("emailAddress") ||
                    !form.getValues("name") ||
                    !form.getValues("message") ||
                    !form.getValues("subject")
                  }
                >
                  {submitStatus === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Please wait
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </form>
            </Form>
          </div>
          <div className="border border-[#737171] bg-black w-full max-w-[517px] lg:h-[458px] rounded-[8px]">
            <div className="flex flex-col items-center gap-5 p-5">
              <H2 className="self-start">Testimonial</H2>
              <ProjectCarousel />
            </div>
          </div>
        </div>
      </div>
    </RootWrapper>
  );
};

export default Contact;
