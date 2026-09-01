// Client-provided FAQ content (Google Doc: coronation_insurance_ghana_faq_table).
// Keep the wording in sync with that document — it is client-approved copy.

const whatWeOffer = {
    question: 'What types of insurance does Coronation Insurance Ghana offer?',
    answer:
        'Coronation Insurance Ghana offers a wide range of insurance products for individuals and businesses. Our personal insurance covers motor, travel, and home. For businesses, we offer motor fleet, engineering, marine, and business protection insurance including fire, burglary, and business interruption coverage.',
};

const howToPurchase = {
    question: 'How do I purchase an insurance policy?',
    answer:
        'You can purchase insurance easily through our online portal at ecoronation.com, by visiting any of our agency offices across Ghana, or by contacting us directly via phone or email on 0302 772 606 / 0308 249 068 / infoghana@coronationinsurance.com.ng. Our team will guide you through selecting the right coverage for your needs.',
};

const howToClaim = {
    question: 'How do I file an insurance claim?',
    answer:
        'To file a claim, visit our Self Service portal on ecoronation.com or contact our claims team directly on 0302 772 606 / 0308 249 068 or claims@coronationinsurance.com.gh. You will need to provide your policy number, details of the incident, and any supporting documents such as a police report (for motor claims) or medical reports (for travel claims). Our team processes claims promptly to ensure fast settlement.',
};

const motorCover = {
    question: 'What does motor insurance cover in Ghana?',
    answer:
        "Our motor insurance offers three tiers of protection: Comprehensive (covers accidental damage, fire, theft, and third-party liability), Third Party Fire & Theft (covers fire, theft, and third-party liability), and Third Party Only (covers liability to other road users). All policies comply with Ghana's mandatory motor insurance requirements.",
};

const getAQuote = {
    question: 'Can I get a quote before purchasing a policy?',
    answer:
        'Yes! You can request a free, no-obligation quote by visiting our contact page, calling our office, or using our online portal. Simply provide basic details about what you want to insure, and our team will prepare a personalised quote for you.',
};

const howToRenew = {
    question: 'How do I renew my insurance policy?',
    answer:
        'Policy renewal is quick and easy. You can renew through our Self Service portal online on ecoronation.com, visit any of our agency offices, or contact our customer service team. We recommend renewing before your policy expires to ensure continuous coverage.',
};

const licensed = {
    question: 'Is Coronation Insurance Ghana a licensed and regulated insurer?',
    answer:
        "Yes, Coronation Insurance Ghana is a fully licensed and regulated general insurance company operating under the supervision of the National Insurance Commission (NIC) of Ghana. We are affiliated with the Coronation Group in Nigeria, one of Africa's leading financial services providers with over 18 years of experience.",
};

// General set shown on non-motor product pages.
export const generalFaqs = [whatWeOffer, howToPurchase, howToClaim, getAQuote, howToRenew, licensed];

// Motor pages additionally get the motor-specific question, in the document's original order.
export const motorFaqs = [whatWeOffer, howToPurchase, howToClaim, motorCover, getAQuote, howToRenew, licensed];
