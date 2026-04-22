"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

const OfficeLocation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section className="pt-24 pb-8">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          <div
            className="w-full lg:w-1/2 bg-gradient-to-br from-greenfont1 to-greenfont2 text-white p-8 md:p-10 rounded-2xl"
            data-aos="fade-right"
          >
            <h2 className="text-3xl font-bold mb-6">Kantor Kami</h2>
            <p className="text-lg mb-8 text-white/90">
              Jl. Akankahselamatduniaakhirat No.14 C, Kec. Jagakarsa, Ragunan,
              Jakarta Selatan.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="font-semibold">Jam Buka</p>
                  <p className="text-white/80 text-sm">Senin - Jum&apos;at: 09.00 - 17.00</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-semibold">Telepon</p>
                  <p className="text-white/80 text-sm">0856 7893 9991</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-white/80 text-sm">aniteknologi@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-[400px] rounded-2xl overflow-hidden shadow-lg" data-aos="fade-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.336798158626!2d106.81154531523176!3d-6.349085393151596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef2374e7139b%3A0x6aaae4ae3c0343!2sJl.%20Akankahselamatduniaakhirat%20No.14%20C%2C%20Ragunan%2C%20Jakarta%20Selatan%2C%20Jakarta%20Special%20Capital%20Region!5e0!3m2!1sen!2sid!4v1713776543210!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;