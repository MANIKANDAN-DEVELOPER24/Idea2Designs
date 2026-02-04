import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open("https://wa.me/9361486641", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors animate-bounce z-50"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
}
