import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-12">
            <div className="container mx-auto px-4 md:pl-64 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-center md:text-left">
                    © 2025 Ghulaman-e-Siddiqui Akbar International
                </p>
                <div className="flex space-x-5 mt-4 md:mt-0">
                    <a href="https://www.facebook.com/share/16iKsu3ACw/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/Ghulaman-e-Siddiqui-Akbar-International/assets/facebook.svg"
                            alt="Facebook"
                            className="w-6 h-6 hover:scale-110 transition-transform"
                        />
                    </a>
                    
                    <a href="https://www.instagram.com/ghulamanesiddiquiakbar?igsh=cTQ4eTF0b29id3J2" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/Ghulaman-e-Siddiqui-Akbar-International/assets/instagram.svg"
                            alt="Instagram"
                            className="w-6 h-6 hover:scale-110 transition-transform"
                        />
                    </a>
                    <a href="https://whatsapp.com/channel/0029VaEqmXZ2kNFrcpgXKk1M" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/Ghulaman-e-Siddiqui-Akbar-International/assets/whatsapp.svg"
                            alt="Whatsapp"
                            className="w-6 h-6 hover:scale-110 transition-transform"
                        />
                    </a>
                    
                </div>
            </div>
        </footer>
    );
}
