import type { SurveyField } from "@/data/surveySections";

interface SurveyFieldControlProps {
  field: SurveyField;
  value: string;
  onChange: (value: string) => void;
}

export function SurveyFieldControl({
  field,
  value,
  onChange,
}: SurveyFieldControlProps) {
  const base =
    "mt-1 w-full rounded-lg border border-deck-border bg-deck-black px-3 py-2 text-sm text-white placeholder:text-zinc-600 focus:border-deck-orange focus:outline-none focus:ring-1 focus:ring-deck-orange";

  switch (field.type) {
    case "textarea":
      return (
        <textarea
          id={field.id}
          rows={4}
          placeholder={field.placeholder}
          className={base}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    case "select":
      return (
        <select
          id={field.id}
          className={base}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">Select…</option>
          {field.options?.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      );
    case "radio":
      return (
        <div className="mt-2 flex flex-wrap gap-4">
          {field.options?.map((o) => (
            <label
              key={o.value}
              className="inline-flex cursor-pointer items-center gap-2 text-sm"
            >
              <input
                type="radio"
                name={field.id}
                value={o.value}
                checked={value === o.value}
                onChange={() => onChange(o.value)}
                className="border-deck-border text-deck-orange focus:ring-deck-orange"
              />
              {o.label}
            </label>
          ))}
        </div>
      );
    case "date":
      return (
        <input
          id={field.id}
          type="date"
          className={base}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    case "number":
      return (
        <input
          id={field.id}
          type="number"
          min={field.min}
          max={field.max}
          step={field.step}
          placeholder={field.placeholder}
          className={base}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    default:
      return (
        <input
          id={field.id}
          type="text"
          placeholder={field.placeholder}
          className={base}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      );
  }
}
