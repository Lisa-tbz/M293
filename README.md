# Dokumentation: Einsatz von Künstlicher Intelligenz (KI) im Projekt „Web Shop“

## Zielsetzung

Im Rahmen meines Webprojekts habe ich eine Produktübersichtsseite mit einer Filterfunktion nach Kategorien entwickelt – ausschliesslich mit HTML, CSS und JavaScript, ohne Backend. Zur Unterstützung nutzte ich verschiedene KI-Tools: **ChatGPT (OpenAI)**, **Windsurf** und **Cursor**, um die technische Umsetzung effizienter und verständlicher zu gestalten.

---

## Aufbau der KI Unterstützung

### Zentrale Komponenten (am Beispiel Windsurf):

- **Prompt Eingabe:** Aufgaben werden in natürlicher Sprache formuliert (z. B. „Erstelle ein responsives Grid-Layout in CSS“).
- **KI Modul:** Die Eingabe wird an ein Sprachmodell (z. B. GPT-4.5) weitergegeben.
- **Codeausgabe:** Die KI liefert direkt ausführbaren HTML-/CSS-/JS-Code.
- **Live Vorschau:** Änderungen sind sofort im Browser sichtbar.

---

## Eingesetzte KI Tools und ihr Nutzen

### ChatGPT (OpenAI)

| Aufgabe                           | Unterstützung durch KI                                                                 |
|----------------------------------|----------------------------------------------------------------------------------------|
| Filterfunktion entwickeln         | Erklärung der clientseitigen Umsetzung mit JavaScript                                 |
| HTML Struktur prüfen              | Feedback zur Eignung der Struktur für dynamische Filter                               |
| JavaScript Logik generieren       | Codebeispiel für Kategorie Filterung mit `data-category`                              |
| Lösungsvarianten bewerten        | Vergleich zwischen HTML Filterbarkeit vs. JavaScript gesteuerter Logik                |

### Windsurf

Ein Online-Editor mit integrierter KI, der HTML, CSS und Markdown unterstützt, inkl. direkter Live-Vorschau.

**Einsatz im Projekt:**
- HTML/CSS-Snippets generieren lassen
- Struktur direkt testen und verändern

### Cursor (IDE mit KI)

- Autovervollständigung und Inline Vorschläge
- Schnelle Anpassung vorhandener JS Funktionen
- Erklärungen direkt im Codebereich

---

## Verwendete Prompts (Auswahl)

1. Wie kann ich Produkte nach Kategorie filtern mit JavaScript ohne Server?
2. Wie sähe das HTML dazu aus?
3. Ich nutze Option 2, kannst du mir helfen mit JavaScript?
4. Ich habe nur HTML, CSS, JS, kein Backend, was ist sinnvoll?

## Vorteile der KI Nutzung in der Webentwicklung
**Zeitersparnis:** Layouts, Filterfunktionen oder Effekte werden deutlich schneller umgesetzt.  
**Lernhilfe:** Die KI erklärt Codezeilen, ideal zum besseren Verständnis.  
**Zugänglichkeit:** Auch komplexe Funktionen lassen sich mit einfachen Prompts erzeugen.  
**Konsistenz:** Moderne Standards wie Responsive Design oder Barrierefreiheit werden berücksichtigt.  


## Nachteile und Risiken

**Fehlerpotenzial:** Die KI kann unvollständigen oder veralteten Code vorschlagen.  
**Blackbox-Charakter:** Oft ist unklar, warum ein Code Vorschlag so generiert wurde.  
**Lernverzögerung:** Übermässige Nutzung kann das eigene Problemlösungsdenken bremsen.  
**Datenschutz:** Eingaben an KI Dienste werden extern verarbeitet – sensible Daten sollten vermieden werden.  

---

## Vergleich: KI-Tools für Webentwicklung

| Tool        | Stärken                                                       | Schwächen                                           |
|-------------|----------------------------------------------------------------|-----------------------------------------------------|
| **ChatGPT** | Vielseitig, gute Erklärungen, interaktiv                      | Kein Live-Code, Copy-Paste nötig                    |
| **Windsurf**| KI mit Live-Vorschau, Markdown-kompatibel, direkt nutzbar     | Weniger mächtig bei komplexem JS                   |
| **Cursor**  | Vervollständigung direkt im Editor, ideal für JavaScript      | Nur sinnvoll bei lokalem Setup                     |
| **Copilot** | Leistungsstark im VS Code, ideal für Profis                   | Eingeschränkte Lernhilfe, teils zu technisch        |

---

## Eigene Erfahrung
Ich finde es wichtig, dass wir lernen mit KI umzugehen. Wichtig hier ist es, sich bewusst zu sein, dass man sich nicht aich die KI verlassen sollte. Es ist essenziell, dass man versteht, was man macht. Des öfteren hatte ich Probleme und die KI's konnten mir nicht helfen.

Am meisten hat mir die KI geholfen dass die Design anzupassen. Hier habe ich die Hilfe von Windsurf am besten gefunden. Was ich gut gefunfen habe ist, dass beschrieben wird, was genau verändert wird und man selbt entscheiden kann, ob man die Veänderungne haben möchte oder nicht. Dies lässt einen besseren Einblick zu. Im Gegensatz zu ChatGPT verändert Windsurf direkt in der IDE den Code, was das ganze vereinfacht. Meine Meinung ist: es ist gut dass wir lernen damit umzugehen, aber ich werde es trotzdem versuchen so wenig wie möglich zu nutzen so lange ich lerne, um alles besser zu verstehen. 

---

## Fazit

Künstliche Intelligenz in Entwicklungsumgebungen ist ein grosser Vorteil.  
Sie hilft dabei, schneller Ergebnisse zu erzielen, Programmierlogik besser zu verstehen und komplexe Aufgaben in einfache Einzelschritte zu zerlegen.  

Gleichzeitig bleibt es wichtig, die Vorschlägek kritisch zu prüfen und sich nicht blind darauf zu verlassen. Bei mir zum Beispiel, half es viele verschiedene Dinge auszutesten, die ich sonst zeitlich nicht geschafft hätte. Mir ist aber auch bewusst geworden, obwohl man KI viel einsetzen kann, gibt es viele Situationen bei dem man sich nicht nur auf die KI verlassen kann. Oft konnte die KI den Fehler nicht finden und wenn man es selbst kann, dann ist es auch einfacher schnell etwas genau anzupassen wie man es will. Mir persönlich hilft es, Themen leichter beizubringen. 

---

## Ausblick

Zukünftig könnten KI gestützte IDEs komplette Webprojekte automatisch generieren, inklusive:

- responsivem Design  
- SEO-Optimierung  
- Barrierefreiheit  

Der Mensch wird dann mehr zum Steuernden als zum Codierenden.  
Umso wichtiger wird es, die Grundlagen selbst zu verstehen.

