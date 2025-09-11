

export default function Form({onChange, userInput}) {

  return (
<section className="max-w-md mx-auto p-2 bg-gradient-to-r from-teal-600 to-yellow-400">
<div className="bg-gradient-to-r from-teal-500 to-yellow-300 shadow-sm rounded-xl p-4 space-y-3">
<h2 className="text-teal-600 bg-yellow-200  border rounded-full text-lg font-semibold">Investment Inputs</h2>


<label className="block text-sm">
<span className="text-md text-black">Initial Investment</span>
<input
className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
type="number"
required
onChange={(e) => onChange('initialInvestment', e.target.value)}
value={userInput.initialInvestment}
/>
</label>


<label className="block text-sm">
<span className="text-md text-black">Annual Investment</span>
<input
className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
type="number"
required
onChange={(e) => onChange('annualInvestment', e.target.value)}
value={userInput.annualInvestment}
/>
</label>


<div className="grid grid-cols-2 gap-3">
<label className="block text-sm">
<span className="text-md text-black">Expected Return (%)</span>
<input
className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
type="number"
required
onChange={(e) => onChange('expectedReturn', e.target.value)}
value={userInput.expectedReturn}
/>
</label>


<label className="block text-sm">
<span className="text-md text-black">Duration (yrs)</span>
<input
className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
type="number"
required
onChange={(e) => onChange('duration', e.target.value)}
value={userInput.duration}
/>
</label>
</div>
</div>
</section>
)
}