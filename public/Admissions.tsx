import { useState, type FormEvent } from 'react';
import { BookOpen, Users, TrendingUp, ShieldCheck, CheckCircle2, Loader2, AlertCircle, Send } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { admissionFeatures } from '@/data/content';

const gradeOptions = ['9th', '10th', '1st Year', '2nd Year'];

const initialForm = {
  student_full_name: '',
  guardian_name: '',
  contact_number: '',
  grade_applying: '',
  previous_school: '',
  previous_marks: '',
  address: '',
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Admissions() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.student_full_name.trim()) e.student_full_name = 'Student name is required';
    if (!formData.guardian_name.trim()) e.guardian_name = 'Guardian name is required';
    if (!formData.contact_number.trim()) e.contact_number = 'Contact number is required';
    else if (!/^[0-9+\-\s]{7,15}$/.test(formData.contact_number.trim()))
      e.contact_number = 'Please enter a valid phone number';
    if (!formData.grade_applying) e.grade_applying = 'Please select a grade';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      const { error } = await supabase.from('admission_applications').insert({
        student_full_name: formData.student_full_name.trim(),
        guardian_name: formData.guardian_name.trim(),
        contact_number: formData.contact_number.trim(),
        grade_applying: formData.grade_applying,
        previous_school: formData.previous_school.trim() || null,
        previous_marks: formData.previous_marks.trim() || null,
        address: formData.address.trim() || null,
      });

      if (error) throw error;

      setStatus('success');
      setFormData(initialForm);
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const iconMap: Record<string, typeof BookOpen> = {
    BookOpen,
    Users,
    TrendingUp,
    ShieldCheck,
  };

  return (
    <section id="admissions" className="py-20 bg-gradient-to-b from-navy-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Announcement banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-navy-800 via-navy-900 to-navy-950 p-8 sm:p-12 mb-14 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-500/10 rounded-full blur-3xl" />
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold-400/20 border border-gold-400/40 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-gold-300 text-sm font-medium">Now Accepting Applications</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
              Admissions Open for 1st Year & All Grades!
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Join The Science Scope family and give your child the gift of quality education.
              Limited seats available — apply today!
            </p>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {admissionFeatures.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 card-hover text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center mb-4 shadow-md">
                  <Icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Admission form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Form header */}
            <div className="bg-gradient-to-r from-navy-800 to-navy-950 px-8 py-6">
              <h3 className="font-serif text-2xl font-bold text-white mb-1">Online Admission Form</h3>
              <p className="text-gray-300 text-sm">
                Fill in the details below and we'll get back to you shortly.
              </p>
            </div>

            {/* Success notification */}
            {status === 'success' && (
              <div className="mx-8 mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-3 animate-scale-in">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-800">Application Submitted Successfully!</p>
                  <p className="text-sm text-green-700">
                    Thank you for applying to The Science Scope. We will contact you soon.
                  </p>
                </div>
              </div>
            )}

            {/* Error notification */}
            {status === 'error' && (
              <div className="mx-8 mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-center gap-3 animate-scale-in">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-red-800">Submission Failed</p>
                  <p className="text-sm text-red-700">
                    Something went wrong. Please try again or contact us directly at 0312-4950133.
                  </p>
                </div>
              </div>
            )}

            {/* Form body */}
            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-1.5">
                    Student Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="student_full_name"
                    value={formData.student_full_name}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      errors.student_full_name ? 'border-red-400 bg-red-50' : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all disabled:opacity-60`}
                    placeholder="Enter student's full name"
                  />
                  {errors.student_full_name && (
                    <p className="text-xs text-red-500 mt-1">{errors.student_full_name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-1.5">
                    Father / Guardian Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="guardian_name"
                    value={formData.guardian_name}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      errors.guardian_name ? 'border-red-400 bg-red-50' : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all disabled:opacity-60`}
                    placeholder="Enter father/guardian name"
                  />
                  {errors.guardian_name && (
                    <p className="text-xs text-red-500 mt-1">{errors.guardian_name}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-1.5">
                    Contact / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="contact_number"
                    value={formData.contact_number}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      errors.contact_number ? 'border-red-400 bg-red-50' : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all disabled:opacity-60`}
                    placeholder="e.g., 0312-4950133"
                  />
                  {errors.contact_number && (
                    <p className="text-xs text-red-500 mt-1">{errors.contact_number}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-1.5">
                    Grade / Class Applying For <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="grade_applying"
                    value={formData.grade_applying}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      errors.grade_applying ? 'border-red-400 bg-red-50' : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all disabled:opacity-60 bg-white`}
                  >
                    <option value="">Select a grade</option>
                    {gradeOptions.map((grade) => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                  {errors.grade_applying && (
                    <p className="text-xs text-red-500 mt-1">{errors.grade_applying}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-1.5">
                    Previous School Attended
                  </label>
                  <input
                    type="text"
                    name="previous_school"
                    value={formData.previous_school}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all disabled:opacity-60"
                    placeholder="Previous school name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-1.5">
                    Previous Marks / Percentage
                  </label>
                  <input
                    type="text"
                    name="previous_marks"
                    value={formData.previous_marks}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all disabled:opacity-60"
                    placeholder="e.g., 95% or 1140/1200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-800 mb-1.5">
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all resize-none disabled:opacity-60"
                  placeholder="Enter your home address"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-red-600 text-white font-semibold rounded-xl shadow-lg hover:bg-red-700 transition-all hover:shadow-xl hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
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
