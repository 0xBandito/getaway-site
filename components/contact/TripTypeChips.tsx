type Props = {
  selected: string
  onChange: (value: string) => void
}

const chips = ["Cruise", "Tour", "Resort", "Not sure yet"]

export default function TripTypeChips({ selected, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {chips.map((chip) => (
        <button
          key={chip}
          type="button"
          onClick={() => onChange(selected === chip ? "" : chip)}
          className={`px-5 py-2.5 rounded-full text-sm font-body font-medium transition-all duration-200 ${
            selected === chip
              ? "btn-sky"
              : "border border-[var(--color-sky-200)]/40 text-[var(--color-muted)] hover:border-[var(--color-sky)] hover:text-[var(--color-sky)] bg-transparent"
          }`}
        >
          {chip}
        </button>
      ))}
    </div>
  )
}
