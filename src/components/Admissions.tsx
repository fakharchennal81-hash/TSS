import { useState } from 'react';
import { BookOpen, Users, TrendingUp, ShieldCheck, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { admissionFeatures } from '@/data/content';
import { supabase } from '@/lib/supabase';
import type { AdmissionFormData } from '@/types/admission';

const iconMap: Record<string, typeof BookOpen> = {
  BookOpen,
  Users,
  TrendingUp,
  ShieldCheck,
};

const gradeOptions = [
  'Class 6th',
  'Class 7th',
  'Class 8th',
  'Class 9th',
  'Class 10th',
  '1st Year (FSc Pre-Medical)',
  '1st Year (FSc Pre-Engineering)',
  '1st Year (ICS)',
  '1st Year (I.Com)',
  '2nd Year (FSc Pre-MedICAL)',
  '2nd Year (FSc Pre-Engineering)',
  '2nd Year (ICS)',
  '2nd Year (I.Com)',
];

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export default function Admissions() {
  const [form, setForm] = useState<AdmissionFormData>({
    student_full_name: '',
    guardian_name: '',
    contact_number: '',
    grade_applying: '',
    previous_school: '',
    previous_marks: '',
    address: '',
  });
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('admission_applications').insert({
        student_full_name: form.student_full_name,
        guardian_name: form.guardian_name,
        contact_number: form.contact_number,
        grade_applying: form.grade_applying,
        previous_school: form.previous_school || null,
        previous_marks: form.previous_marks || null,
        address: form.address || null,
      });

      if (error) throw error;

      setSubmitState('success');
      setForm({
        student_full_name: '',
        guardian_name: '',
        contact_number: '',
        grade_applying: '',
        previous_school: '',
        previous_marks: '',
        address: '',
      });
    } catch (err) {
      setSubmitState('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="admissions" className="py-20 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full mb-3">
            Admissions Open
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Begin Your Journey With Us
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mb-4 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Admissions are now open for the new academic session. Apply today and give your child
            the gift of quality education at The Science Scope.
          </p>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {admissionFeatures.map((feature, i) => {
            const Icon = iconMap[feature.icon] ?? BookOpen;
            return (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 card-hover text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-navy-800 to-navy-950 px-8 py-6">
              <h3 className="font-serif text-2xl font-bold text-white">Online Admission Form</h3>
              <p className="text-gray-300 text-sm mt-1">
                Fill in the details below and our team will contact you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-1.5">
                    Student Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="student_full_name"
                    required
                    value={form.student_full_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-100 outline-none transition-all"
                    placeholder="Enter student's full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-1.5">
                    Guardian Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="guardian_name"
                    required
                    value={form.guardian_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-100 outline-none transition-all"
                    placeholder="Father / Guardian's name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-1.5">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="contact_number"
                    required
                    value={form.contact_number}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-100 outline-none transition-all"
                    placeholder="03XX-XXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-1.5">
                    Grade Applying For <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="grade_applying"
                    required
                    value={form.grade_applying}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-100 outline-none transition-all bg-white"
                  >
                    <option value="">Select a grade</option>
                    {gradeOptions.map((grade) => (
                      <option key={grade} value={grade}>
                        {grade}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-1.5">
                    Previous School
                  </label>
                  <input
                    type="text"
                    name="previous_school"
                    value={form.previous_school}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-100 outline-none transition-all"
                    placeholder="Last school attended (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-1.5">
                    Previous Marks / Percentage
                  </label>
                  <input
                    type="text"
                    name="previous_marks"
                    value={form.previous_marks}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-100 outline-none transition-all"
                    placeholder="e.g. 85% or 1020/1100 (optional)"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-800 mb-1.5">
                  Home Address
                </label>
                <textarea
                  name="address"
                  rows={3}
                  value={form.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-100 outline-none transition-all resize-none"
                  placeholder="Enter your home address (optional)"
                />
              </div>

              {/* Status messages */}
              {submitState === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-green-700 text-sm font-medium">
                    Application submitted successfully! Our team will contact you soon.
                  </p>
                </div>
              )}

              {submitState === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-red-700 text-sm font-medium">{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={submitState === 'loading'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-[1.02] disabled:cursor-not-allowed"
              >
                {submitState === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Application
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
