import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with MYO Jaipur. Inquire about daycare, art therapy, or special programs for your child. Located in Civil Lines, Jaipur.",
};

export default function Contact() {
  return <ContactClient />;
}
