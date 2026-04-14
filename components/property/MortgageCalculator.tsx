'use client'

import { useState, useEffect } from 'react'

interface MortgageCalculatorProps {
  propertyPrice: number
}

export function MortgageCalculator({ propertyPrice }: MortgageCalculatorProps) {
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [interestRate, setInterestRate] = useState(6.5)
  const [loanTerm, setLoanTerm] = useState(30)
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  useEffect(() => {
    const downPaymentAmount = (propertyPrice * downPaymentPercent) / 100
    const loanAmount = propertyPrice - downPaymentAmount
    const monthlyInterestRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12

    if (monthlyInterestRate === 0) {
      setMonthlyPayment(loanAmount / numberOfPayments)
      return
    }

    const payment = 
      (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
    
    setMonthlyPayment(payment)
  }, [propertyPrice, downPaymentPercent, interestRate, loanTerm])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount)
  }

  return (
    <div className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-mosque/10 shadow-sm">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-mosque/10 text-mosque rounded-full">
          <span className="material-symbols-outlined text-2xl">calculate</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-nordic-dark dark:text-white">Mortgage Calculator</h3>
          <p className="text-sm text-nordic-muted">Estimated monthly payment for this property</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          {/* Down Payment */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-nordic-dark dark:text-white/80">Down Payment ({downPaymentPercent}%)</label>
              <span className="text-sm font-bold text-mosque">{formatCurrency((propertyPrice * downPaymentPercent) / 100)}</span>
            </div>
            <input 
              type="range" 
              min="5" 
              max="50" 
              step="5"
              className="w-full accent-mosque h-1.5 bg-nordic-dark/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer"
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(parseInt(e.target.value))}
            />
          </div>

          {/* Interest Rate */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-nordic-dark dark:text-white/80">Interest Rate ({interestRate}%)</label>
            </div>
            <input 
              type="range" 
              min="1" 
              max="15" 
              step="0.1"
              className="w-full accent-mosque h-1.5 bg-nordic-dark/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            />
          </div>

          {/* Loan Term */}
          <div className="space-y-4">
            <label className="block text-sm font-bold text-nordic-dark dark:text-white/80 mb-4">Loan Term (Years)</label>
            <div className="grid grid-cols-3 gap-2">
              {[15, 20, 30].map((term) => (
                <button 
                  key={term}
                  onClick={() => setLoanTerm(term)}
                  className={`p-3 text-xs font-bold rounded-lg border transition-all ${
                    loanTerm === term 
                    ? 'bg-mosque text-white border-mosque shadow-md' 
                    : 'border-nordic-dark/10 dark:border-white/10 text-nordic-muted hover:border-mosque'
                  }`}
                >
                  {term} Years
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-8 bg-mosque/5 dark:bg-white/5 rounded-2xl border border-mosque/10">
          <div className="text-[10px] uppercase tracking-widest font-bold text-nordic-muted mb-2">Estimated Payment</div>
          <div className="text-5xl font-light text-mosque mb-2">{formatCurrency(monthlyPayment)}<span className="text-base font-bold text-nordic-muted ml-1">/mo</span></div>
          <p className="text-xs text-nordic-muted text-center max-w-[200px] leading-relaxed">
            *This is an estimate only. Taxes and insurance not included.
          </p>
          <button className="mt-8 w-full bg-nordic-dark dark:bg-white/10 text-white py-4 rounded-xl font-bold hover:bg-mosque transition-all shadow-lg">
            Get Pre-Approved
          </button>
        </div>
      </div>
    </div>
  )
}
