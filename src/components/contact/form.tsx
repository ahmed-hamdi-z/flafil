// Dependencies
import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { IoCloseSharp } from "react-icons/io5";

const Form: React.FC = () => {


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
        <div className=" w-full h-full flex justify-center items-center bg-[#1C4233] text-right">
            <form className=" md:w-[60%] w-[90%] my-24" ref={form} onSubmit={sendEmail}>
                <h2 className="text-4xl md:text-7xl font-bold text-[#C8C6AF] text-center py-16">تواصل معنا</h2>



                <div className="mt-4">
                    <label htmlFor="name" className="text-[#C8C6AF]">
                        الاسـم
                    </label>
                    <input
                        name="user_name"
                        type="name"
                        id="name"
                        placeholder="الاسم"
                        className="w-full mt-2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-right"
                    />
                </div>

                {/* Email Address */}
                <div className="mt-4">
                    <label htmlFor="email" className="text-[#C8C6AF]">
                        البريد الإلكتروني
                    </label>
                    <input
                        name="user_email"
                        type="email"
                        id="email"
                        placeholder="البريد الإلكتروني"
                        className="w-full mt-2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-right"
                    />
                </div>
                {/* Phone */}
                <div className="mt-4">
                    <label htmlFor="phone" className="text-[#C8C6AF]">
                        رقم الجوال
                    </label>
                    <input
                        type="tel"
                        id="country"
                        name="phone"
                        placeholder="رقم الجوال"
                        className="w-full mt-2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-right"
                    />
                </div>

                {/* Notes */}
                <div className="mt-4">
                    <label htmlFor="notes" className="text-[#C8C6AF]">
                        رسالتك
                    </label>
                    <textarea
                        id="notes"
                        name="message"
                        placeholder="رسالتك"
                        className="w-full mt-2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-right"
                    />
                </div>

                {/* Submit Button */}
                <div className="mt-6 flex justify-center">
                    <button type="submit"
                        className="bg-[#C8C6AF] text-[#1C4233] text-2xl px-12 py-2.5 rounded-full hover:bg-teal-800 transition duration-300">
                        إرسال
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
                            Close
                        </button>
                    </div>
                </div>

            )}

        </div>
    )
};

export default Form;
