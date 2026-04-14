'use client'

import { useState } from 'react'

interface ScheduleVisitModalProps {
  isOpen: boolean
  onClose: () => void
  propertyTitle: string
}

export function ScheduleVisitModal({ isOpen, onClose, propertyTitle }: ScheduleVisitModalProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  if (!isOpen) return null

  const handleNext = () => setStep(2)
  const handleBack = () => setStep(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send an email or save to DB
    setStep(3)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-nordic-dark/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-background-dark w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="relative p-8">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-nordic-muted hover:text-nordic-dark dark:hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-nordic-dark dark:text-white mb-2">Schedule a Visit</h2>
                <p className="text-nordic-muted text-sm font-medium">Pick a date and time to see <span className="text-mosque">{propertyTitle}</span></p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-nordic-muted mb-2">Select Date</label>
                  <input 
                    type="date" 
                    className="w-full p-4 rounded-xl bg-mosque/5 dark:bg-white/5 border border-mosque/10 text-nordic-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-mosque/20"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-nordic-muted mb-2">Select Time</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['10:00 AM', '02:00 PM', '04:00 PM'].map((time) => (
                      <button 
                        key={time}
                        onClick={() => setFormData({...formData, time})}
                        className={`p-3 text-xs font-bold rounded-lg border transition-all ${
                          formData.time === time 
                          ? 'bg-mosque text-white border-mosque shadow-lg shadow-mosque/20' 
                          : 'border-nordic-dark/10 dark:border-white/10 text-nordic-muted hover:border-mosque'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                disabled={!formData.date || !formData.time}
                onClick={handleNext}
                className="w-full bg-mosque hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold transition-all"
              >
                Next Step
              </button>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-mosque font-bold text-[10px] uppercase tracking-widest mb-2">
                  <button type="button" onClick={handleBack} className="hover:underline flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">arrow_back</span> Back
                  </button>
                </div>
                <h2 className="text-2xl font-bold text-nordic-dark dark:text-white">Your Contact Info</h2>
              </div>

              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name"
                  required
                  className="w-full p-4 rounded-xl bg-mosque/5 dark:bg-white/5 border border-mosque/10 text-nordic-dark dark:text-white focus:outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  type="email" 
                  placeholder="Email Address"
                  required
                  className="w-full p-4 rounded-xl bg-mosque/5 dark:bg-white/5 border border-mosque/10 text-nordic-dark dark:text-white focus:outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <textarea 
                  placeholder="Message (optional)"
                  rows={3}
                  className="w-full p-4 rounded-xl bg-mosque/5 dark:bg-white/5 border border-mosque/10 text-nordic-dark dark:text-white focus:outline-none resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-mosque hover:bg-primary-hover text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-mosque/20"
              >
                Confirm Visit
              </button>
            </form>
          )}

          {step === 3 && (
            <div className="py-10 text-center space-y-6">
              <div className="w-20 h-20 bg-mosque/10 text-mosque rounded-full flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-nordic-dark dark:text-white mb-2">Visit Scheduled!</h2>
                <p className="text-nordic-muted text-sm">We've sent a confirmation to <strong className="text-nordic-dark dark:text-white">{formData.email}</strong>. The agent will contact you soon.</p>
              </div>
              <button 
                onClick={onClose}
                className="w-full bg-nordic-dark dark:bg-white/10 text-white py-4 rounded-xl font-bold transition-all"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
