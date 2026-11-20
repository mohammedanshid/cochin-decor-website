import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, CheckCircle, AlertCircle, Clock, MapPin } from 'lucide-react';

const Consultation = forwardRef(function Consultation(_props, ref) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    stylePreference: 'Sheer & Blackout Curtains'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState(null);

  // Allow parent components to programmatically set style preference and scroll here
  useImperativeHandle(ref, () => ({
    setStylePreference: (style) => {
      setFormData((prev) => ({ ...prev, stylePreference: style }));
    }
  }));

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (!/^[0-9+() -]{7,16}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const enquiryMessage = 
`Hello Cochin Decor,

I would like to book a free in-home window consultation:
• Name: ${formData.name.trim()}
• Phone: ${formData.phone.trim()}
• Location / Details: ${formData.message.trim() || 'Not specified'}
• Preferred Style: ${formData.stylePreference}

Please let me know your available times for an in-home fabric consultation in Kerala. Thank you!`;

    const encodedMessage = encodeURIComponent(enquiryMessage);
    const whatsappUrl = `https://wa.me/917902797037?text=${encodedMessage}`;

    // Initiate WhatsApp action
    try {
      window.open(whatsappUrl, '_blank');
      setSubmittedWhatsAppUrl(whatsappUrl);
    } catch {
      // In case popup blocker intercepts, fallback to window.location
      window.location.href = whatsappUrl;
      setSubmittedWhatsAppUrl(whatsappUrl);
    }

    setIsSubmitting(false);
  };

  const handleReset = () => {
    setSubmittedWhatsAppUrl(null);
    setFormData({
      name: '',
      phone: '',
      message: '',
      stylePreference: 'Sheer & Blackout Curtains'
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Context & Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.22em] text-[#666666] mb-3 font-semibold"
              >
                <span className="w-6 h-[1px] bg-[#111111]" />
                <span>LET'S TRANSFORM YOUR WINDOWS</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#111111] leading-tight font-normal mb-6"
              >
                Your Perfect Curtains <br />
                <span className="italic">Are Just a Consultation Away.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base text-[#555555] leading-relaxed mb-8"
              >
                Tell us about your space, and our team will help you discover the right curtain styles, fabrics, and window solutions for your home.
              </motion.p>

              <div className="space-y-4 pt-6 border-t border-[#EAEAEA]">
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-[#111111] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#111111] font-semibold">Service Coverage</div>
                    <div className="text-sm text-[#666666]">Serving residences across Kochi, Trivandrum, Kozhikode, Thrissur &amp; all Kerala districts</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Phone className="w-5 h-5 text-[#111111] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#111111] font-semibold">Direct Telephone</div>
                    <a href="tel:+917902797037" className="text-sm text-[#111111] font-medium hover:underline">
                      +91 7902797037
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Clock className="w-5 h-5 text-[#111111] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#111111] font-semibold">In-Home Hours</div>
                    <div className="text-sm text-[#666666]">Monday - Saturday: 9:00 AM - 7:00 PM IST</div>
                  </div>
                </div>
              </div>
            </div>

            {/* In-home sample book note */}
            <div className="mt-10 p-5 bg-[#F8F8F6] border border-[#EAEAEA]">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#111111] mb-1">
                Complimentary Showroom-At-Your-Door
              </div>
              <p className="text-xs text-[#666666] leading-relaxed">
                We bring physical fabric swatch collections, motorized track demos, and measurement tools right to your doorstep.
              </p>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F8F8F6] p-8 sm:p-10 border border-[#EAEAEA] shadow-sm">
              
              {!submittedWhatsAppUrl ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="pb-2 border-b border-[#EAEAEA]">
                    <h3 className="font-serif text-2xl text-[#111111] font-medium">
                      Book a Free Consultation
                    </h3>
                    <p className="text-xs text-[#666666] mt-1">
                      Our specialist will connect with you on WhatsApp with fabric samples.
                    </p>
                  </div>

                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#111111] font-semibold mb-2">
                      Your Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`w-full px-4 py-3.5 bg-white border ${
                        errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-[#D4D4D2] focus:border-[#111111]'
                      } text-sm text-[#111111] placeholder-[#999999] focus:outline-none transition-colors`}
                    />
                    {errors.name && (
                      <div className="flex items-center text-xs text-red-600 mt-1.5 space-x-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Phone field */}
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#111111] font-semibold mb-2">
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className={`w-full px-4 py-3.5 bg-white border ${
                        errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-[#D4D4D2] focus:border-[#111111]'
                      } text-sm text-[#111111] placeholder-[#999999] focus:outline-none transition-colors`}
                    />
                    {errors.phone && (
                      <div className="flex items-center text-xs text-red-600 mt-1.5 space-x-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </div>
                    )}
                  </div>

                  {/* Curtain Interest Selection */}
                  <div>
                    <label htmlFor="stylePreference" className="block text-xs uppercase tracking-wider text-[#111111] font-semibold mb-2">
                      Curtain or Blind Preference
                    </label>
                    <select
                      id="stylePreference"
                      name="stylePreference"
                      value={formData.stylePreference}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-white border border-[#D4D4D2] focus:border-[#111111] text-sm text-[#111111] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Sheer & Blackout Curtains">Sheer &amp; Blackout Curtains (Double Track)</option>
                      <option value="Wave Curtains">Wave Curtains (Architectural S-Fold)</option>
                      <option value="Pleated Curtains">Pinch &amp; French Pleated Curtains</option>
                      <option value="Eyelet Curtains">Eyelet Grommet Curtains</option>
                      <option value="Designer Curtains">Designer Fabrics &amp; Linens</option>
                      <option value="Custom-Made Curtains">Full Villa / Custom Made</option>
                      <option value="Modern Blinds">Roller, Zebra &amp; Roman Blinds</option>
                      <option value="Automated Curtain Systems">Automated Motorized Track Systems</option>
                    </select>
                  </div>

                  {/* City / Message field */}
                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#111111] font-semibold mb-2">
                      City / Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your city or a brief message (e.g., Kochi villa, 8 windows, need living room sheer curtains)"
                      className="w-full px-4 py-3.5 bg-white border border-[#D4D4D2] focus:border-[#111111] text-sm text-[#111111] placeholder-[#999999] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#111111] text-white text-xs font-semibold tracking-[0.12em] uppercase hover:bg-neutral-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md cursor-pointer disabled:opacity-50"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Book Consultation</span>
                    </button>
                    <div className="text-[11px] text-[#777777] text-center mt-3">
                      Submitting initiates a secure direct enquiry to our WhatsApp hotline (+91 7902797037).
                    </div>
                  </div>
                </form>
              ) : (
                /* Confirmation State - WhatsApp Actually Initiated */
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-white border-2 border-[#111111] rounded-full flex items-center justify-center mx-auto text-[#111111]">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-semibold">
                      WhatsApp Connected
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#111111] mt-1 mb-3">
                      Consultation Request Initiated
                    </h3>
                    <p className="text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
                      We opened WhatsApp with your pre-filled enquiry for <span className="font-semibold text-[#111111]">{formData.name}</span>. Please tap "Send" in WhatsApp to dispatch your details to our specialist.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-[#EAEAEA] text-left max-w-md mx-auto text-xs space-y-1.5 text-[#555555]">
                    <div><span className="font-medium text-[#111111]">Style:</span> {formData.stylePreference}</div>
                    <div><span className="font-medium text-[#111111]">Phone:</span> {formData.phone}</div>
                    {formData.message && <div><span className="font-medium text-[#111111]">Note:</span> {formData.message}</div>}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={submittedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 bg-[#111111] text-white text-xs font-semibold tracking-wider uppercase inline-flex items-center justify-center space-x-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Re-open WhatsApp</span>
                    </a>

                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-6 py-3 bg-white border border-[#D4D4D2] text-[#111111] text-xs font-semibold tracking-wider uppercase hover:border-[#111111]"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
});

export default Consultation;

