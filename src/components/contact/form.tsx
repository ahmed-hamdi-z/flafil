// Dependencies
import { useRef, useState } from 'react';
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { IoCloseSharp } from "react-icons/io5";

const Form: React.FC = () => {
    const { t } = useTranslation();

    const [message, setMessage] = useState<string | null>(null);
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (form.current) {
            emailjs
                .sendForm(
                    "servicev8fd6",
                    "template_ic6h",
                    form.current,
                    "4a4DTJQWWrODSA"
                )
                .then(
                    () => {
                        setMessage("تم تسجيل ردكم بنجاح");
                        form.current;
                    },
                    (error) => {
                        setMessage(`FAILED... ${error.text}`);
                    }
                );
        }
    };
    return (
        <div className=" w-full h-full flex flex-col-reverse items-center bg-[#1C4233]">
            <form className=" md:w-[60%] w-[90%] my-24" ref={form} onSubmit={sendEmail}>
                <h2 className="text-4xl md:text-7xl font-bold text-[#C8C6AF] text-center py-16"> {t("تواصل معنا")}</h2>
    
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {/* First Name */}
                    <div className="flex flex-col">
                        <label htmlFor="firstName" className="text-[#C8C6AF] ">
                            {t("First name")}
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="first_name"
                            placeholder={t("First name")}
                            className="mt-2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col">
                        <label htmlFor="lastName" className="text-[#C8C6AF]">
                            {t("Last name")}
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="last_name"
                            placeholder={t("Last name")}
                            className="mt-2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Email Address */}
                <div className="mt-4">
                    <label htmlFor="email" className="text-[#C8C6AF]">
                        {t("Email")}
                    </label>
                    <input
                        name="user_email"
                        type="email"
                        id="email"
                        placeholder={t("Email")}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                {/* Phone */}
                <div className="mt-4">
                    <label htmlFor="phone" className="text-[#C8C6AF]">
                        {t("Phone")}
                    </label>
                    <input
                        type="tel"
                        id="country"
                        name="phone"
                        placeholder={t("Phone")}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Notes */}
                <div className="mt-4">
                    <label htmlFor="notes" className="text-[#C8C6AF]">
                        {t("Notes")}
                    </label>
                    <textarea
                        id="notes"
                        name="message"
                        placeholder={t("Notes")}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Submit Button */}
                <div className="mt-6 flex justify-center">
                    <button type="submit"
                        className="bg-[#C8C6AF] text-[#1C4233] text-2xl px-12 py-2.5 rounded-full hover:bg-teal-800 transition duration-300">
                        {t("Submit")}
                    </button>
                </div>
            </form>
            {message && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="relative bg-gradient-to-br from-[#764095] via-purple-500 to-pink-500 bg-black bg-opacity-50 text-white p-6 rounded-2xl shadow-2xl w-96 h-40 flex flex-col items-center justify-center transform transition-transform duration-300">

                        {/* Close Button */}
                        <button
                            onClick={() => setMessage(null)}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
                            aria-label="Close"
                        >
                            <IoCloseSharp size={24} />
                        </button>

                        {/* Message Text */}
                        <p className="text-xl font-bold mb-4">{message}</p>

                        {/* Close Button */}
                        <button
                            onClick={() => setMessage(null)}
                            className="bg-white text-[#764095] px-6 py-2 rounded-full font-semibold hover:bg-[#764095] hover:text-white transition-colors duration-200 ease-in-out shadow-md"
                        >
                            {t("Close")}
                        </button>
                    </div>
                </div>

            )}
        
        </div>
    )
};

export default Form;
