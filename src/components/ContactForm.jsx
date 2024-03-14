import React, { useState } from "react";
import { FaPhone, FaTelegram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  var msg =
    `✉️ Email: ` +
    email +
    `%0A📞 Phone: ` +
    phone +
    `%0A📝 Message: ` +
    message;

  const sendTelegramMessage = async (token, admin, message) => {
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${admin}&text=${message}`,
        {
          method: "GET",
          redirect: "follow",
        }
      );

      const responseData = await response.json();

      return responseData;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const TelegramMessageSender = (e) => {
    e.preventDefault();
    sendTelegramMessage(import.meta.env.VITE_BOT_TOKEN, import.meta.env.VITE_CHAT_ID, msg);
    setEmail('')
    setPhone('')
    setMessage('')
  };

  return (
    <form className="flex flex-col gap-3 w-full md:w-[50%] text-white" onSubmit={TelegramMessageSender}>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-bold">
          Email:
        </label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="email@example.com"
          className="outline-none text-[.9rem] font-montserrat border border-[#ffffff6b] py-2 px-3 rounded-md bg-transparent focus:border-[#66FCF1]"
          id="email"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="font-bold">
          Number:
        </label>
        <input
          type="tel"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          placeholder="+996 700 123 456"
          className="outline-none text-[.9rem] font-montserrat border border-[#ffffff6b] py-2 px-3 rounded-md bg-transparent focus:border-[#66FCF1]"
          id="phone"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="msg" className="font-bold">
          Message:
        </label>
        <textarea
          placeholder="Write..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          rows={4}
          className="outline-none text-[.9rem] font-montserrat border border-[#ffffff6b] py-2 px-3 rounded-md bg-transparent focus:border-[#66FCF1]"
        ></textarea>
      </div>
      <div>
        <button
        type="submit"
          className="px-8 mt-3 font-montserrat py-2 border border-[#66FCF1] rounded-sm"
        >
          Send
        </button>
      </div>
      <div className="flex flex-col md:hidden text-[#ffffff8a] gap-4 w-full md:w-auto mt-3 pt-3 border-t border-[#ffffff75]">
        <a
          href="mailto: ametovmukhammedali07@gmail.com"
          className="flex items-center gap-2 text-[1.1rem] font-lspartan duration-200 hover:text-[#66FCF1]"
        >
          <IoMdMail />
          ametovmukhammedali07@gmail.com
        </a>
        <a
          href="tel: +998(94)833-06-81"
          className="flex items-center gap-2 text-[1rem] font-lspartan duration-200 hover:text-[#66FCF1]"
        >
          <FaPhone />
          +998(94)833-06-81
        </a>
        <a
          href="https://t.me/ametovme"
          className="flex items-center gap-2 text-[1.1rem] font-lspartan duration-200 hover:text-[#66FCF1]"
        >
          <FaTelegram />
          ametovme
        </a>
      </div>
    </form>
  );
};

export default ContactForm;
