<div align="center">

# WeatherRouter 1.0.0 FINAL

### Wetterdaten intelligent verbinden.

**Native Home-Assistant-Integration · Providerneutrales Wetter- und Gefahrenrouting**

**Konzept und Entwicklung: Christian Köhler**

[Offizielle Projektseite](https://thedaimos.github.io/weather-router-pub/) · [GitHub-Repository](https://github.com/TheDaimos/weather-router-pub) · [Installation](#installation) · [Lizenz](LICENSE.md)

</div>

WeatherRouter verbindet zahlreiche fachlich unterschiedliche Wetter-, Umwelt- und Gefahrenquellen mit einer zentralen, nachvollziehbaren Consumer-Schnittstelle. Consumer fragen nach einer Fähigkeit; WeatherRouter prüft zulässige Datenquellen, Abdeckung, Aktualität und Datenart.

## Projektlinks

Offizielle Projektseite: https://thedaimos.github.io/weather-router-pub/

Öffentliches GitHub-Repository: https://github.com/TheDaimos/weather-router-pub

Release 1.0.0 FINAL: https://github.com/TheDaimos/weather-router-pub/releases/tag/v1.0.0

Falls HACS einen externen Link fälschlich als GitHub-Dateipfad öffnet, die vollständige Adresse aus dieser Liste direkt im Browser verwenden.

## Version 1.0.0 FINAL

- 39 registrierte Provider und acht Fachbereiche; auf **Neuinstallationen** standardmäßig aktiviert. Bestehende gespeicherte Einstellungen bleiben erhalten.
- Consumer API V1 / V2, Providerdiagnose und WeatherRouter Lab.
- DWD, OPERA und NASA sowie Wind-, Temperatur-, Niederschlags- und synoptische Datenwege nach jeweiligem Providervertrag.
- Interne Premium-Projektpräsentation unter `/weather_router_static/weather-router-overview.html` – einschließlich Original-Branding und Link zur offiziellen Projektseite.
- Eigener WeatherRouter-Seitenleisteneintrag für Administratoren.
- OPERA-Wissenschafts-, Lizenz-, Verfügbarkeits- und Freigabeschranken bleiben bestehen; „aktiviert“ ist nicht mit „liefert aktuell Daten“ gleichzusetzen.

Die FINAL-Funktionsbasis wurde aus WR `0.10.327 DEV / Loader 330` überführt. Loaderkennung: `1.0-loader-330`. Bestehende Consumer-Verträge wurden bei der reinen FINAL-Versionierung nicht absichtlich geändert.

## Installation

1. In **HACS → Benutzerdefinierte Repositories** `https://github.com/TheDaimos/weather-router-pub` als **Integration** hinzufügen.
2. Die veröffentlichte Version **1.0.0** auswählen und installieren.
3. Home Assistant vollständig neu starten.
4. Unter **Einstellungen → Geräte & Dienste → Integration hinzufügen** nach **WeatherRouter** suchen.
5. Die Seitenleiste **WeatherRouter** als Administrator öffnen und die Provider prüfen.

Der offizielle GitHub-Release `v1.0.0` ist veröffentlicht. Bei fehlender Versionsanzeige HACS neu laden und den Repository-Eintrag aktualisieren.

## Datenschutz und Verantwortung

Automatisierte Provider- und wissenschaftliche Freigaben ersetzen keine Prüfung von Nutzungsbedingungen, räumlicher Abdeckung oder Originaldaten. Ein einzelner Providerausfall soll andere Provider nicht unnötig blockieren.

Private Realtests, Export2Git und instanzbezogene Diagnoseinformationen gehören ausschließlich in das private `TheDaimos/Project-Log-And-Export`-Archiv und sind **nicht** Bestandteil dieser Distribution.

## Lizenz

[WeatherRouter-Gemeinschaftslizenz (Modell B)](LICENSE.md). Copyright © 2026 **Christian Köhler**, ursprünglicher Urheber und Projektgründer. Rechte Dritter bleiben unberührt.

---
**WeatherRouter · Eine Idee weiter gedacht.**
