
import { calculateInvestmentResults } from "../investment"

export default function Results({ input}) {
    const resultData = calculateInvestmentResults(input);

      return (
    <div className="overflow-x-auto mt-6">
      <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Year</th>
            <th className="border px-4 py-2">Interest</th>
            <th className="border px-4 py-2">End Value</th>
            <th className="border px-4 py-2">Annual Investment</th>
          </tr>
        </thead>
        <tbody>
          {resultData.map((row) => (
            <tr key={row.year}>
              <td className="border px-4 py-2">{row.year}</td>
              <td className="border px-4 py-2">
                {row.interest.toLocaleString()}
              </td>
              <td className="border px-4 py-2">
                {row.valueEndOfYear.toLocaleString()}
              </td>
              <td className="border px-4 py-2">
                {row.annualInvestment.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}