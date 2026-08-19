export const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+966511397873";

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const sellAccountMessage = [
  "Hi, I want to sell my gaming account.",
  "Game:",
  "Account level:",
  "Key skins / inventory:",
  "Price expectation:",
].join("\n");
