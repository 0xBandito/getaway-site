type Props = {
  selected: string
  onChange: (value: string) => void
}

const chips = [
  "Caribbean cruise",
  "Europe tour",
  "All-inclusive resort",
  "Honeymoon",
  "Group trip",
  "Not sure yet",
]

export default function TripTypeChips({ selected, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {chips.map((chip) => (
        <button
          key={chip}
          type="button"
          onClick={() => onChange(chip)}
          className={`px-5 py-2.5 rounded-full text-sm border transition-all duration-200 ${
            selected === chip
              ? "bg-[#4A90D9] border-[#4A90D9] text-white"
              : "bg-transparent border-[#d0c8bc] text-[#5B7FA6] hover:border-[#4A90D9] hover:text-[#4A90D9]"
          }`}
          style={{ fontFamily: "var(--font-jost)" }}
        >
          {chip}
        </button>
      ))}
    </div>
  )
}