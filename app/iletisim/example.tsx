"use client";
import { useState } from 'react';

export default function Iletisim() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        // Diğer alanlar burada olacak
    });

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-red-500 to-white p-4">
            <form className="bg-white p-8 rounded-lg shadow-lg">
                {step === 1 && (
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            İsim:
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <button onClick={handleNext} type="button" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                            İleri
                        </button>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Telefon:
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <div className="mt-4">
                            <button onClick={handleBack} type="button" className="mr-2 bg-gray-500 text-white py-2 px-4 rounded">
                                Geri
                            </button>
                            <button onClick={handleNext} type="button" className="bg-blue-500 text-white py-2 px-4 rounded">
                                İleri
                            </button>
                        </div>
                    </div>
                )}
                {/* Diğer adımlar burada devam edecek */}
            </form>
        </div>
    );
}
