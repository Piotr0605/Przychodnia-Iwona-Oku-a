/**
 * Dane opisu Przedsięwzięcia wymagane przez § 20 ust. 3 pkt 3 Procedury
 * projektu grantowego „Wsparcie podstawowej opieki zdrowotnej (POZ)”.
 * Kwoty, zadania i cele pochodzą z umowy o powierzenie grantu.
 */
export const grantProject = {
  title: "Wsparcie podstawowej opieki zdrowotnej (POZ)",
  grantee: "NZOZ Podstawowa Opieka Zdrowotna Iwona Okuła",
  program:
    "Fundusze Europejskie na Infrastrukturę, Klimat, Środowisko 2021–2027",
  fund: "Europejski Fundusz Rozwoju Regionalnego",
  projectNumber: "FENX.06.01-IP.03-0001/23",
  targetGroups:
    "Pacjenci korzystający ze świadczeń podstawowej opieki zdrowotnej w placówce NZOZ Podstawowa Opieka Zdrowotna Iwona Okuła przy ul. Mickiewicza 44A w Białymstoku.",
  /** Opis zadań i zakupów z umowy. Puste do czasu uzupełnienia danych z umowy. */
  actions: "",
  /** Cele wskazane we wniosku o powierzenie grantu. */
  goals: [] as string[],
  /** Wartość wydatków kwalifikowalnych Przedsięwzięcia, w złotych. */
  eligibleExpenditurePln: null as number | null,
  /** Wysokość dofinansowania ze środków europejskich, w złotych. */
  euFundingPln: null as number | null,
};

export const grantHashtags = ["#FunduszeEuropejskie", "#FunduszeUE", "#WsparciePOZ"] as const;

export function formatPln(amount: number): string {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    minimumFractionDigits: 2,
  }).format(amount);
}
