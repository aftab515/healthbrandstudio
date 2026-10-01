/**
 * Consultation booking configuration — the single place to edit fee and payment settings.
 */
export const CONSULTATION = {
  /** Consultation fee. Set to a real amount, e.g. "PKR 5,000". null = not yet configured (no amount is shown). */
  fee: null as string | null,
  whatsappNumber: "923007920009",
  whatsappDisplay: "+92 300 792 0009",
  email: "healthbrandofficial@gmail.com",
  easypaisa: {
    accountNumber: "03007920009",
    accountTitle: "Aftab Sadiq",
    /** Official Easypaisa merchant Payment Link. Leave null until a verified official link is issued. */
    paymentUrl: null as string | null,
    /** URL of an official Easypaisa payment QR image. Leave null — the QR section stays hidden. */
    qrImageUrl: null as string | null,
  },
};

export const feeLabel = () => CONSULTATION.fee ?? "Confirmed with you on WhatsApp before payment";
