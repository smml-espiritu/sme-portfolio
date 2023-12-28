interface ContactFormData {
  name: string;
  emailAddress: string;
  message: string;
}

export const sendContactForm = async (data: ContactFormData) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
