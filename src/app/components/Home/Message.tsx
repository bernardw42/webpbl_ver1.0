"use client"

import { useInView } from 'react-intersection-observer';

export default function Message() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-200px 0px', // Adjust the root margin as needed
    });

    return (
        <div className="bg-[#033C5A] w-full pt-[200px] pb-[200px] max-lg:pb-[150px] max-lg:pt-[150px] flex justify-center items-center">
           <div className="flex flex-wrap max-lg:flex-col justify-center items-center max-w-7xl gap-x-[100px] gap-y-[70px] px-8">
                <div className="flex flex-col max-w-[400px] gap-y-[50px]">
                    <h1 className="text-white text-[40px] max-md:text-[35px] font-semibold">Switch to Panca Budi Logistindo now!</h1>
                    <p className="text-white text-[18px] max-md:text-[15px] font-extralight">Panca Budi Logistindo is a logistic & supply chain management solution for businesses across various industries. Supported by technology that can monitor all shipments and product management in real time. Panca Budi Logistindo provides end-to-end services from warehouse management with instant capacity to distribution & delivery management.</p>
                </div>
                <div className={`bg-white rounded-2xl w-[600px] max-md:w-[400px] max-sm:w-[300px] h-[690px] flex flex-col justify-between items-center py-10 transition-opacity duration-[2000ms] drop-shadow-2xl ${inView ? 'opacity-100' : 'opacity-0'}`} ref={ref}>
                            <h2 className="text-[40px] max-md:text-[32px] tracking-tight font-extrabold text-center text-gray-900 max-w-[500px] px-6">Get in touch with Panca Budi Logistindo</h2>
                            <form action="#" className="space-y-2">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                                <input type="email" id="email" className="block p-2 w-[500px] max-md:w-[320px] max-sm:w-[250px] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500" placeholder="name@email.com" required></input>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Company</label>
                                <input type="text" id="subject" className="block p-2 w-[500px] max-md:w-[300px] max-sm:w-[250px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Company Name" required></input>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                                <input type="text" id="subject" className="block p-2 w-[500px] max-md:w-[300px] max-sm:w-[250px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required></input>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your Message</label>
                                <textarea id="message" rows={6} className="block p-2 w-[500px] max-md:w-[300px] max-sm:w-[250px] text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" className="w-[500px] max-md:w-[300px] max-sm:w-[250px] bg-red-600 hover:bg-red-900 text-white py-3 px-5 rounded-lg">Send Message</button>
                            </form>
                </div>

            </div>
        </div>
    );
}
