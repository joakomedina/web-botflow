"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionTitle } from "./SectionTitle";

const hourOptions = [10, 20, 30, 40];
const weeksPerYear = 52;
const hoursPerWorkWeek = 40;
const hoursPerWorkYear = 2080;

function formatThousands(value: number): string {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function getMonthsLabel(months: number): string {
  if (months >= 12) {
    const years = Math.round(months / 12);
    return years === 1 ? "1 año de trabajo" : `${years} años de trabajo`;
  }
  return `${months} meses de trabajo`;
}

export function TimeCalculator() {
  const [selectedHours, setSelectedHours] = useState<number>(20);
  const annualHours = selectedHours * weeksPerYear;
  const workWeeks = Math.round(annualHours / hoursPerWorkWeek);
  const workMonths = Math.round((annualHours * 12) / hoursPerWorkYear);

  return (
    <section className="py-18">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Calculadora"
          title="¿Cuánto tiempo podrías recuperar?"
          description="¿Cuántas horas dedica tu equipo cada semana a tareas repetitivas?"
        />
        <div className="panel-card p-8 md:p-10">
          <div className="flex flex-wrap gap-3">
            {hourOptions.map((hours) => (
              <button
                key={hours}
                type="button"
                onClick={() => setSelectedHours(hours)}
                className={cn(
                  "btn-base px-6 py-3",
                  selectedHours === hours
                    ? "btn-primary"
                    : "border border-[color:var(--panel-border)] bg-white text-[color:var(--color-dark)]"
                )}
              >
                {hours} horas
              </button>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-cyan-50 px-6 py-8 text-center">
            <p className="text-3xl font-bold text-[color:var(--color-dark)] md:text-4xl">
              {formatThousands(annualHours)} horas al año
            </p>
            <p aria-hidden className="my-2 text-2xl font-bold text-[color:var(--color-secondary)]">
              =
            </p>
            <p className="text-2xl font-bold text-[color:var(--color-dark)] md:text-3xl">
              {workWeeks} semanas laborales
            </p>
            <p aria-hidden className="my-2 text-2xl font-bold text-[color:var(--color-secondary)]">
              =
            </p>
            <p className="text-2xl font-bold text-[color:var(--color-primary)] md:text-3xl">
              {getMonthsLabel(workMonths)}
            </p>
          </div>
          <p className="mt-6 text-center text-lg font-semibold text-[color:var(--color-dark)]">
            ¿Qué harías si recuperaras todo ese tiempo?
          </p>
        </div>
      </div>
    </section>
  );
}
