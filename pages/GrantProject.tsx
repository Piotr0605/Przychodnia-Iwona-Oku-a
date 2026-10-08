import React from "react";
import { useAccessibility } from "../contexts/AccessibilityContext";
import { formatPln, grantHashtags, grantProject } from "../data/grantProject";

const LOGO_SRC = "/fundusze/logo-feniks-rp-ue-nfz.png";
const LOGO_ALT =
  "Zestawienie znaków: Fundusze Europejskie, barwy Rzeczypospolitej Polskiej, flaga Unii Europejskiej oraz Narodowy Fundusz Zdrowia";

export const GrantProject: React.FC = () => {
  const { isHighContrast } = useAccessibility();
  const heading = isHighContrast ? "text-yellow-400" : "text-gray-900";
  const body = isHighContrast ? "text-gray-200" : "text-gray-700";
  const card = isHighContrast ? "bg-gray-900 border border-yellow-400" : "bg-white";
  const detailsReady =
    grantProject.actions.trim().length > 0 &&
    grantProject.goals.length > 0 &&
    grantProject.eligibleExpenditurePln !== null &&
    grantProject.euFundingPln !== null;

  return (
    <div className={`min-h-screen py-16 pt-32 md:pt-40 ${isHighContrast ? "bg-black text-white" : "bg-gray-50"}`}>
      <article className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-6 md:p-10 rounded-2xl shadow-sm max-w-4xl mx-auto ${card}`}>
          <div className="bg-white rounded-xl p-4 md:p-6 mb-8 overflow-x-auto">
            <img src={LOGO_SRC} alt={LOGO_ALT} className="w-full min-w-[640px] h-auto" />
          </div>

          <h1 className={`text-3xl md:text-4xl font-bold mb-6 ${heading}`}>{grantProject.title}</h1>

          <div className={`space-y-4 text-base md:text-lg leading-relaxed ${body}`}>
            <p>
              <strong>{grantProject.grantee}</strong> realizuje Przedsięwzięcie pn. „{grantProject.title}” na
              podstawie umowy zawartej z Narodowym Funduszem Zdrowia.
            </p>
            <p>
              Przedsięwzięcie jest dofinansowane ze środków {grantProject.fund} w ramach Programu{" "}
              {grantProject.program}.
            </p>
            <p>
              Projekt grantowy nr <strong>{grantProject.projectNumber}</strong>.
            </p>
          </div>

          <section className="mt-10">
            <h2 className={`text-2xl font-bold mb-3 ${heading}`}>Grupy docelowe</h2>
            <p className={body}>{grantProject.targetGroups}</p>
          </section>

          {grantProject.actions.trim() && (
            <section className="mt-10">
              <h2 className={`text-2xl font-bold mb-3 ${heading}`}>Zadania i działania</h2>
              <div className={`space-y-4 ${body}`}>
                {grantProject.actions.split(/\n\s*\n/).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          )}

          {grantProject.goals.length > 0 && (
            <section className="mt-10">
              <h2 className={`text-2xl font-bold mb-3 ${heading}`}>Cele Przedsięwzięcia</h2>
              <ul className={`list-disc pl-6 space-y-2 ${body}`}>
                {grantProject.goals.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </section>
          )}

          {(grantProject.eligibleExpenditurePln !== null || grantProject.euFundingPln !== null) && (
            <section className="mt-10">
              <h2 className={`text-2xl font-bold mb-3 ${heading}`}>Wartość Przedsięwzięcia</h2>
              <dl className={`space-y-3 ${body}`}>
                {grantProject.eligibleExpenditurePln !== null && (
                  <div>
                    <dt className="font-semibold">Wartość wydatków kwalifikowalnych</dt>
                    <dd>{formatPln(grantProject.eligibleExpenditurePln)}</dd>
                  </div>
                )}
                {grantProject.euFundingPln !== null && (
                  <div>
                    <dt className="font-semibold">Dofinansowanie ze środków europejskich</dt>
                    <dd>{formatPln(grantProject.euFundingPln)}</dd>
                  </div>
                )}
              </dl>
            </section>
          )}

          {!detailsReady && (
            <p className={`mt-10 ${body}`}>
              Zadania, cele, wartość wydatków kwalifikowalnych oraz wysokość dofinansowania ze środków
              europejskich zostaną opublikowane w tym opisie na podstawie umowy o powierzenie grantu.
            </p>
          )}

          <p className={`mt-10 font-semibold tracking-wide ${isHighContrast ? "text-yellow-400" : "text-brand-700"}`}>
            {grantHashtags.join(" ")}
          </p>
        </div>
      </article>
    </div>
  );
};
