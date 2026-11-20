# WeatherRouter 1.0.2 FINAL – Native Seitenleisten-Einstellung

Datum: 20.11.2026

## Änderung

- Native Home-Assistant-OptionsFlow mit Zahnrad am WeatherRouter-Integrationseintrag.
- Option **„In Seitenleiste anzeigen“** (DE) / **“Show in sidebar”** (EN).
- Standard **aktiviert**, damit das bisherige Verhalten auf Neuinstallationen erhalten bleibt.
- Umschalten speichert die Auswahl in ConfigEntry-Optionen und lädt WeatherRouter regulär neu.
- Beim Deaktivieren wird das WeatherRouter-Panel aus der Seitenleiste entfernt, beim Aktivieren wieder registriert.
- Bestehende Optionen für Router, Provider, Fachbereiche und Consumer-Profile werden unverändert übernommen.
- Veraltete Beschreibung im Einrichtungsdialog in DE/EN aktualisiert.

## OPERA-Dienste bei Neuinstallationen

- RATE, DBZH und ACRR werden als Dienstpräferenzen bei Neuinstallationen standardmäßig aktiviert.
- Explizit zuvor gespeicherte AUS-Entscheidungen bleiben erhalten.
- Die isolierte OPERA-Entwicklungsvorschau, wissenschaftliche Freigaben, Gültigkeitsprüfungen und die NASA-IMERG-Opt-in-Ergänzung werden dadurch **nicht** eingeschaltet.
- Regressionstests prüfen die Defaults, die Übernahme expliziter Werte und den unveränderten Status `UNVERIFIED`.

## Historisch bestätigte OPERA-Zeitwerte

- OPERA-Gültigkeitsdauer: **1650 Sekunden**.
- Stale-Grenze: **1651 Sekunden**.
- Isolierte Entwicklungsvorschau: Standard-Gültigkeitsdauer **1650 Sekunden**, ohne Änderung ihrer Freigabe.
- Beide Werte wurden am 02.11.2026 nach Korrektur eines fehlerhaften 900-s-Fallbacks durch Export2Git bestätigt.
- Bereits gespeicherte Betreiberwerte haben weiterhin Vorrang vor den Defaults.

## Grenzen

- Keine Änderung an Provider-Routing, OPERA-Freigaben oder Consumer-API-Verträgen.
- Die Freigabe für einen realen Home-Assistant-Test steht aus: Zahnrad, Umschaltung AUS/AN, Neustartpersistenz, GewitterRadar-PRO-Kopplung.
- Die vollständige öffentliche DEV-Testsuite hat weiterhin bekannte Abweichungen; grüner Distributionscheck ist kein funktionaler Gesamttest.
- PROD VM101 bleibt unberührt.

## Versionsschutz

Der öffentliche Release `v1.0.1` bleibt unverändert. Der Quellstand wird erst nach Prüfung als `v1.0.2` veröffentlicht.
