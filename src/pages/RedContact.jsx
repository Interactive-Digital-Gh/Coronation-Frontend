/* eslint-disable react/no-unescaped-entities */
import 'react-phone-number-input/style.css';
import { fetchCms } from '../lib/cmsCache';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import PhoneInput, { isValidPhoneNumber, isPossiblePhoneNumber } from 'react-phone-number-input';

import contactbanner from "../assets/contact/contactbanner.png";
import { format } from 'date-fns';

import ghana from "../assets/contact/ghana.png";
import nigeria from "../assets/contact/nigeria.png";

import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineMarkEmailUnread, MdOutlineLocationOn } from "react-icons/md";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useRef, useState } from 'react';

const RedContact = () => {

    const form = useRef();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [contactData, setContactData] = useState(null);

    const [showLoader, setShowLoader] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        if (!isValidPhoneNumber(phoneNumber)) {
            toast.error("Please enter a valid phone number.");
            return;
        }

        // EmailJS requires template fields to be inside the form
        // sendForm MUST NOT include template params manually
        emailjs
            .sendForm("service_vpuym4k", "template_0vf2k2b", form.current, {
                publicKey: "od2vIhbdFel9_otjO",
            })
            .then(
                () => {
                    toast.success("Message sent successfully!");
                },
                () => {
                    toast.error("Failed to send message. Please try again.");
                }
            );

        e.target.reset();
        setPhoneNumber("");
        setSelectedDate(null);
    };

    useEffect(() => {
        const fetchcontactData = async () => {
            try {
                const data = await fetchCms("https://coronation-cms.interactivedigital.com.gh/api/contactpage/fetch");
                setContactData(data[0]);

                setShowLoader(false);

            } catch (error) {
                console.error("Error fetching contact data:", error);
            }
        };

        fetchcontactData();
    }, []);

    if (!contactData || showLoader) {
        return (
            <div
                className={`
                    w-full h-screen flex flex-col items-center justify-center
                    bg-white transition-opacity duration-500
                    ${fadeOut ? "opacity-0" : "opacity-100"}
                `}
            >
                <div className="w-16 h-16 border-4 border-[#FF0226] border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-[#FF0226] font-semibold text-lg animate-pulse">
                    Loading content...
                </p>
            </div>
        );
    }

    return (
        <div className="overflow-hidden">

            <ToastContainer />

            <div className="relative">
                <img
                    src={
                        contactData?.header_image
                            ? `https://coronation-cms.interactivedigital.com.gh/${contactData.header_image}`
                            : "assets/purplehome/purplehomebg.png"
                    }
                    className="w-full lg:h-full h-[250px] bg-cover"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="absolute lg:top-[293px] top-[160px] lg:left-20 left-4 w-[858px] h-[152px]">
                    <h2
                        className="lg:text-[56px] text-[24px] w-[511px] h-[128px] font-bold leading-[64px] text-white"
                        dangerouslySetInnerHTML={{ __html: contactData.header_caption }}
                    />
                    <span
                        className="hidden lg:block lg:text-[18px] text-[12px] font-normal lg:leading-[24px] leading-3 text-white"
                        dangerouslySetInnerHTML={{ __html: contactData.header_body }}
                    />
                </div>
            </div>

            <section>
                <div className="flex flex-col md:flex-row items-center justify-center p-6 min-h-screen lg:ml-[70px]">

                    <div className="w-full md:w-1/2 p-6 bg-white text-black rounded-lg shadow-card">
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">

                            {/* FIRST + LAST NAME */}
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label className="block text-sm font-medium text-black">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        placeholder="First name"
                                        required
                                        className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm text-black"
                                    />
                                </div>

                                <div className="w-1/2">
                                    <label className="block text-sm font-medium text-black">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        placeholder="Last name"
                                        required
                                        className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm text-black"
                                    />
                                </div>
                            </div>

                            {/* EMAIL */}
                            <div>
                                <label className="block text-sm font-medium text-black">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    placeholder="you@company.com"
                                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm text-black"
                                />
                            </div>

                            {/* PHONE */}
                            <div>
                                <label className="block text-sm font-medium text-black">
                                    Phone number
                                </label>

                                <PhoneInput
                                    defaultCountry="GH"
                                    placeholder="233 54868650"
                                    value={phoneNumber}
                                    onChange={setPhoneNumber}
                                    className={`flex w-full px-3 py-2 border rounded-md shadow-sm text-black 
                                        ${phoneNumber &&
                                            isPossiblePhoneNumber(phoneNumber)
                                            ? "border-customPurple"
                                            : "border-gray-300"
                                        }
                                    `}
                                />

                                <input type="hidden" name="user_phone" value={phoneNumber} />
                            </div>

                            {/* REQUEST */}
                            <div>
                                <label className="block text-sm font-medium text-black">
                                    Request Related
                                </label>
                                <select
                                    name="user_request"
                                    className="mt-1 block w-full px-3 py-2 border rounded-md text-black"
                                >
                                    <option>Select at least one option</option>
                                    <option>Abandoned call</option>
                                    <option>Call dropped</option>
                                    <option>Product and Services</option>
                                    <option>Request for Cancellation of Policy</option>
                                    <option>Request for Car Tracker</option>
                                    <option>Request for Claim form</option>
                                    <option>Request for Claims payment </option>
                                    <option>Request to Increase Sum Assured</option>
                                    <option>Request for Last payment date</option>
                                    <option>Request for link to digital channels (mobile app, retail portal, website etc.)</option>
                                    <option>Request for Outstanding premium</option>
                                    <option>Request for Part payment</option>
                                    <option>Request for Payment schedule</option>
                                    <option>Request for Policy validation</option>
                                    <option>Request for Proposal form</option>
                                    <option>Request for Quote </option>
                                    <option>Request for Receipt of payment</option>
                                    <option>Request for Relationship Manager</option>
                                    <option>Request for Renewal certificate</option>
                                    <option>Request for Renewal schedule</option>
                                    <option>Request for Termination procedure</option>
                                    <option>Request for USSD code</option>
                                    <option>Request for Coronation Insurance Account Details</option>
                                    <option>Request for Coronation Insurance slogan</option>
                                    <option>Request for Payment Refund</option>
                                    <option>Request for Travel Insurance Certificate</option>
                                    <option>Request for Correction of Name on Insurance Certificate</option>
                                    <option>First Notice of Loss (FNOL) </option>
                                    <option>Other Request</option>
                                </select>
                            </div>

                            {/* ENQUIRY */}
                            <div>
                                <label className="block text-sm font-medium text-black">
                                    Enquiry Related
                                </label>
                                <select
                                    name="user_enquiry"
                                    className="mt-1 block w-full px-3 py-2 border rounded-md text-black"
                                >
                                    <option>Select at least one option</option>
                                    <option>Enquiry on Bancassurance partnership</option>
                                    <option>Enquiry on Claims procedure</option>
                                    <option>Enquiry on Contact details (Email, Telephone number)</option>
                                    <option>Enquiry on Other branches</option>
                                    <option>Enquiry on Policy termination procedure</option>
                                    <option>Enquiry on Products and Services</option>
                                    <option>FNOL enquiry</option>
                                    <option>Other Enquiry</option>
                                    <option>Policy Renewal on Coronation Insurance Mobile App</option>
                                    <option>Policy Renewal on Online  Portal</option>
                                    <option>Online Portal Enquiries</option>
                                    <option>Travel Insurance Procedure</option>
                                    <option>Coronation payment platform</option>
                                    <option>Company Enquiry</option>
                                </select>
                            </div>

                            {/* COMPLAINT */}
                            <div>
                                <label className="block text-sm font-medium text-black">
                                    Complaint Related
                                </label>
                                <select
                                    name="user_complaint"
                                    className="mt-1 block w-full px-3 py-2 border rounded-md text-black"
                                >
                                    <option>Select at least one option</option>
                                    <option>Claims substantiating document issue</option>
                                    <option>Non reciept of Discharge Voucher </option>
                                    <option>Delay in Claims Settlement </option>
                                    <option>Delay in conducting inspection/survey</option>
                                    <option>Delay in receiving Feedback </option>
                                    <option>Disputed Claim offer</option>
                                    <option>Excess buy back issue</option>
                                    <option>Error in Policy document </option>
                                    <option>First Notice of Loss (FNOL) complaint</option>
                                    <option>Hard Copy Policy document not received </option>
                                    <option>Non Receipt of SMS/E-mail notifications</option>
                                    <option>Policy not uploaded on MID portal Online Portal Enquiries</option>
                                    <option>Unable to access online portal</option>
                                    <option>Unable to access mobile app</option>
                                    <option>Unable to access website</option>
                                    <option>Unable to access USSD code</option>
                                    <option>Wrong Debit</option>
                                    <option>Wrong Statement of Account/Account reconciliation</option>
                                    <option>Non Receipt of Travel Insurance Certificate</option>
                                    <option>Other Complaint</option>
                                </select>
                            </div>

                            {/* MESSAGE */}
                            <div>
                                <label className="block text-sm font-medium text-black">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Enter your Message"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border rounded-md text-black"
                                ></textarea>
                            </div>

                            {/* DATE/TIME */}
                            <div>
                                <label className="block text-sm font-medium text-black">
                                    Preferred Date and Time
                                </label>

                                <DatePicker
                                    selected={selectedDate}
                                    onChange={setSelectedDate}
                                    showTimeSelect
                                    dateFormat="Pp"
                                    className="mt-1 block w-full px-3 py-2 border rounded-md text-black"
                                />

                                <input
                                    type="hidden"
                                    name="time"
                                    value={
                                        selectedDate
                                            ? format(selectedDate, "MM/dd/yyyy, HH:mm")
                                            : ""
                                    }
                                />
                            </div>

                            {/* PRIVACY CHECK */}
                            <div className="flex items-start">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    className="h-4 w-4"
                                    required
                                />
                                <label
                                    htmlFor="privacy"
                                    className="ml-2 text-sm text-gray-500"
                                >
                                    You agree to our{" "}
                                    <Link
                                        to="/privacy"
                                        className="text-[#FF0226] hover:underline"
                                    >
                                        privacy policy
                                    </Link>.
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-[#FF0226] text-white font-semibold rounded-md shadow-card"
                            >
                                SEND MESSAGE
                            </button>

                        </form>
                    </div>
                </div>
            </section>

            {/* MAPS (Your design kept exactly the same) */}

            <section>
                <div className="lg:p-20 md:p-14 p-8">
                    <div className="lg:w-[1280px] lg:h-[608px] flex lg:flex-row md:flex-row flex-col gap-6">

                        {/* GHANA CARD */}
                        <div className="lg:w-[628px] w-[320px] h-[608px] border rounded-lg shadow-md bg-[#E9EAEC]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.715074559653!2d-0.19685382525451506!3d5.609034194371856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9bae79bae68f%3A0xb8969a3fa0ca5a02!2s35%20Aviation%20Rd%2C%20Accra!5e0!3m2!1sen!2sgh!4v1726821871869!5m2!1sen!2sgh"
                                height="360"
                                style={{ border: "0" }}
                                className="lg:w-[628px] w-[320px] rounded-lg"
                                loading="lazy"
                            ></iframe>

                            <div className="bg-[#141415] w-full h-[90px] flex items-center gap-6 px-6">
                                <img src={ghana} alt="ghana" loading="lazy" />
                                <h2 className="text-white font-semibold text-[24px] leading-[32px]">
                                    Ghana
                                </h2>
                            </div>

                            <div className="px-6">
                                <div className="flex items-center gap-2">
                                    <BiPhoneCall size={24} />
                                    <div>
                                        <span className="text-[12px] font-medium">Call Us</span>
                                        <p
                                            className="text-[12px] text-[#56575D]"
                                            dangerouslySetInnerHTML={{
                                                __html: contactData.gh_call_no,
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-1">
                                    <MdOutlineMarkEmailUnread size={24} />
                                    <div>
                                        <span className="text-[12px] font-medium">Email</span>
                                        <p
                                            className="text-[12px] text-[#56575D]"
                                            dangerouslySetInnerHTML={{
                                                __html: contactData.gh_email,
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-1">
                                    <MdOutlineLocationOn size={24} />
                                    <div>
                                        <span className="text-[12px] font-medium">Head Office</span>
                                        <p
                                            className="text-[12px] text-[#56575D]"
                                            dangerouslySetInnerHTML={{
                                                __html: contactData.gh_headoffice,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* NIGERIA CARD */}
                        <div className="lg:w-[628px] w-[320px] lg:h-[608px] border rounded-lg shadow-md bg-[#E9EAEC]">

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6043676377985!2d3.4222550747525275!3d6.44481589354647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4d470073e31%3A0x1bed2f1a92ae38de!2s119%20Awolowo%20Rd%2C%20Ikoyi%2C%20Lagos%20106104%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sgh!4v1726824339546!5m2!1sen!2sgh"
                                height="360"
                                style={{ border: "0" }}
                                className="lg:w-[628px] w-[320px] rounded-lg"
                                loading="lazy"
                            ></iframe>

                            <div className="bg-[#141415] w-full h-[90px] flex items-center gap-6 px-6">
                                <img src={nigeria} alt="ghana" loading="lazy" />
                                <h2 className="text-white font-semibold text-[24px] leading-[32px]">
                                    Nigeria
                                </h2>
                            </div>

                            <div className="px-6">
                                <div className="flex items-center gap-2">
                                    <BiPhoneCall size={24} />
                                    <div>
                                        <span className="text-[12px] font-medium">Call Us</span>
                                        <p
                                            className="text-[12px] text-[#56575D]"
                                            dangerouslySetInnerHTML={{ __html: contactData.ng_call_no }}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-1">
                                    <MdOutlineMarkEmailUnread size={24} />
                                    <div>
                                        <span className="text-[12px] font-medium">Email</span>
                                        <p
                                            className="text-[12px] text-[#56575D]"
                                            dangerouslySetInnerHTML={{ __html: contactData.ng_email }}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-1">
                                    <MdOutlineLocationOn size={24} />
                                    <div>
                                        <span className="text-[12px] font-medium">Head Office</span>
                                        <p
                                            className="text-[12px] text-[#56575D]"
                                            dangerouslySetInnerHTML={{
                                                __html: contactData.ng_headoffice,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="relative">
                    <img src={contactbanner} alt="banner" className="w-full h-[284px]" />
                    <div className="absolute top-[35%] left-[7%] text-[56px] text-white font-semibold">
                        Get Insured Today
                    </div>
                </div>
            </section>

        </div>
    );
};

export default RedContact;
