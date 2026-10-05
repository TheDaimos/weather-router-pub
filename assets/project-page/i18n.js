(() => {
  "use strict";

  const STORAGE_KEY = "weatherrouter.projectPage.language";
  const DEFAULT_LANGUAGE = "de";
  const SUPPORTED = ["de","en","fr","es","it","nl","pl"];

  const translations = {
    de: {},
    en: {
      "Sprache":"Language","Sprache auswählen":"Select language",
      "Seitennavigation":"Page navigation",
      "Idee":"Idea",
      "Routing":"Routing",
      "Architektur":"Architecture",
      "Providerneutrales Routing für Wetter- und Gefahreninformationen":"Provider-neutral routing for weather and hazard information",
      "WeatherRouter verbindet Anwendungen mit den passenden Wetter- und Gefahreninformationen. Je nach Bedarf, Ort und Situation wählt WeatherRouter geeignete Quellen aus und liefert die benötigten Daten nachvollziehbar zurück.":"WeatherRouter connects applications with the right weather and hazard information. Depending on need, location and situation, WeatherRouter selects suitable sources and delivers the required data transparently.",
      "Wie das Routing funktioniert":"How routing works",
      "Öffentlicher GitHub-Spiegel":"Public GitHub mirror",
      "Originale WeatherRouter Routing-Illustration aus dem Daimos Project Hub":"Original WeatherRouter routing illustration from the Daimos Project Hub",
      "Originale WeatherRouter Routing-Illustration aus dem Daimos Project Hub · unverändert veröffentlicht.":"Original WeatherRouter routing illustration from the Daimos Project Hub · published unchanged.",
      "Die Idee":"The idea",
      "Der Consumer sagt, was er braucht. WeatherRouter kennt die Quellen und entscheidet, woher die Daten kommen.":"The consumer says what it needs. WeatherRouter knows the sources and decides where the data comes from.",
      "WeatherRouter bewertet verfügbare Quellen, berücksichtigt Kontext und Einschränkungen und liefert die passende Ressource samt Provenienz.":"WeatherRouter evaluates available sources, considers context and constraints, and delivers the appropriate resource together with provenance.",
      "01 · Bedarf":"01 · Need",
      "Fachlich anfragen":"Request by function",
      "Ein Consumer beschreibt, was er benötigt — etwa flächigen Niederschlag — statt einen bestimmten Anbieter vorzuschreiben.":"A consumer describes what it needs — for example area-wide precipitation — instead of prescribing a specific provider.",
      "02 · Auswahl":"02 · Selection",
      "Kandidaten bewerten":"Evaluate candidates",
      "WeatherRouter prüft geeignete Kandidaten anhand normalisierter Eigenschaften und harter Ausschlussregeln.":"WeatherRouter evaluates suitable candidates using normalized properties and hard exclusion rules.",
      "03 · Ergebnis":"03 · Result",
      "Resource + Provenienz":"Resource + provenance",
      "Der Consumer erhält die nutzbare Resource und kann nachvollziehen, welche Quelle tatsächlich verwendet wurde.":"The consumer receives the usable resource and can trace which source was actually used.",
      "Routing-Prinzip":"Routing principle",
      "Automatik im Normalfall. Präzision im Expertenmodus.":"Automatic by default. Precise in expert mode.",
      "Breite Routing-Intents ermöglichen automatische Fallback-Ketten. Spezialisierte Capabilities bleiben bestehen, wenn ein Consumer bewusst eine konkrete Messgröße oder Darstellungsart benötigt.":"Broad routing intents enable automatic fallback chains. Specialized capabilities remain available when a consumer deliberately needs a specific measured quantity or representation.",
      "Vereinfachte Routing-Pipeline":"Simplified routing pipeline",
      "Consumer-Request":"Consumer request",
      "Routing-Intent":"Routing intent",
      "Eligibility & Profil":"Eligibility & profile",
      "Coverage & Semantik":"Coverage & semantics",
      "Resource + Provenienz":"Resource + provenance",
      "Provider-IDs sind kein Qualitätswert. Ein Profil schränkt ein, definiert aber keine Provider-Priorität.":"Provider IDs are not a quality score. A profile restricts the candidate set but does not define provider priority.",
      "„Consumer fragen nach einem fachlichen Bedarf. WeatherRouter entscheidet, welche zugelassene und geeignete Quelle diesen Bedarf für den konkreten Kontext am besten erfüllt.“":"“Consumers ask for a functional need. WeatherRouter decides which approved and suitable source best fulfills that need for the specific context.”",
      "Leitprinzip der Themen- und Routing-Strategie":"Guiding principle of the topic and routing strategy",
      "Vier getrennte Ebenen":"Four separate layers",
      "Fachbereich":"Domain",
      "— harte Router- und Freigabegrenze":"— hard router and approval boundary",
      "Thema":"Topic",
      "— fachliche Sicht auf das Problem":"— functional view of the problem",
      "Public Capability / Routing-Intent":"Public capability / routing intent",
      "— Consumer-Vertrag":"— consumer contract",
      "Candidate":"Candidate",
      "— konkrete Provider-Capability":"— concrete provider capability",
      "Warum diese Trennung wichtig ist":"Why this separation matters",
      "Ähnliche Daten sind nicht automatisch identische Daten.":"Similar data is not automatically identical data.",
      "Radarreflektivität, Niederschlagsrate, Satellitenschätzung und Modellakkumulation können denselben visuellen Bedarf bedienen, sind physikalisch aber nicht dasselbe. WeatherRouter hält Herkunft, Messmethode, Zeitsemantik, Größe und Einheit deshalb sichtbar.":"Radar reflectivity, precipitation rate, satellite estimates and model accumulation can serve the same visual need, but they are not physically identical. WeatherRouter therefore keeps provenance, measurement method, temporal semantics, quantity and unit visible.",
      "Coverage":"Coverage",
      "Eine erreichbare technische Quelle bedeutet nicht automatisch fachliche Abdeckung für den angefragten Ort.":"A technically reachable source does not automatically mean functional coverage for the requested location.",
      "Semantik":"Semantics",
      "Messmethode, Beobachtungsart, physikalische Größe und Einheit bleiben Teil der Routingentscheidung.":"Measurement method, observation type, physical quantity and unit remain part of the routing decision.",
      "Transparenz":"Transparency",
      "Diagnose und Provenienz sollen erklären, warum ein Kandidat verworfen und ein anderer ausgewählt wurde.":"Diagnostics and provenance should explain why one candidate was rejected and another selected.",
      "Öffentlicher Projektzugang":"Public project access",
      "Quellspiegel und Projektseite bewusst getrennt vom privaten Entwicklungsstand.":"Source mirror and project page deliberately separated from private development.",
      "Das öffentliche Repository ist ein unabhängig versionierter Validierungs- und Dokumentationsspiegel. Es ist weder die private Entwicklungsquelle noch automatisch ein installierbares Home-Assistant-Paket.":"The public repository is an independently versioned validation and documentation mirror. It is neither the private development source nor automatically an installable Home Assistant package.",
      "weather-router-pub auf GitHub":"weather-router-pub on GitHub",
      "C.K. – Eine Idee weiter gedacht.":"C.K. – One idea further.",
      "WeatherRouter · öffentliche Projektvorstellung":"WeatherRouter · public project presentation"
    },
    fr: {
      "Sprache":"Langue","Sprache auswählen":"Choisir la langue",
      "Seitennavigation":"Navigation de la page","Idee":"Idée","Routing":"Routage","Architektur":"Architecture",
      "Providerneutrales Routing für Wetter- und Gefahreninformationen":"Routage indépendant des fournisseurs pour les informations météo et de danger",
      "WeatherRouter verbindet Anwendungen mit den passenden Wetter- und Gefahreninformationen. Je nach Bedarf, Ort und Situation wählt WeatherRouter geeignete Quellen aus und liefert die benötigten Daten nachvollziehbar zurück.":"WeatherRouter relie les applications aux informations météo et de danger appropriées. Selon le besoin, le lieu et la situation, WeatherRouter sélectionne les sources adaptées et fournit les données nécessaires de manière transparente.",
      "Wie das Routing funktioniert":"Comment fonctionne le routage","Öffentlicher GitHub-Spiegel":"Miroir GitHub public",
      "Originale WeatherRouter Routing-Illustration aus dem Daimos Project Hub":"Illustration de routage WeatherRouter originale du Daimos Project Hub",
      "Originale WeatherRouter Routing-Illustration aus dem Daimos Project Hub · unverändert veröffentlicht.":"Illustration de routage WeatherRouter originale du Daimos Project Hub · publiée sans modification.",
      "Die Idee":"L’idée","Der Consumer sagt, was er braucht. WeatherRouter kennt die Quellen und entscheidet, woher die Daten kommen.":"Le consommateur indique ce dont il a besoin. WeatherRouter connaît les sources et décide d’où proviennent les données.",
      "WeatherRouter bewertet verfügbare Quellen, berücksichtigt Kontext und Einschränkungen und liefert die passende Ressource samt Provenienz.":"WeatherRouter évalue les sources disponibles, tient compte du contexte et des contraintes, puis fournit la ressource appropriée avec sa provenance.",
      "01 · Bedarf":"01 · Besoin","Fachlich anfragen":"Formuler un besoin","Ein Consumer beschreibt, was er benötigt — etwa flächigen Niederschlag — statt einen bestimmten Anbieter vorzuschreiben.":"Un consommateur décrit ce dont il a besoin — par exemple des précipitations surfaciques — au lieu d’imposer un fournisseur précis.",
      "02 · Auswahl":"02 · Sélection","Kandidaten bewerten":"Évaluer les candidats","WeatherRouter prüft geeignete Kandidaten anhand normalisierter Eigenschaften und harter Ausschlussregeln.":"WeatherRouter évalue les candidats appropriés selon des propriétés normalisées et des règles d’exclusion strictes.",
      "03 · Ergebnis":"03 · Résultat","Resource + Provenienz":"Ressource + provenance","Der Consumer erhält die nutzbare Resource und kann nachvollziehen, welche Quelle tatsächlich verwendet wurde.":"Le consommateur reçoit la ressource exploitable et peut identifier la source réellement utilisée.",
      "Routing-Prinzip":"Principe de routage","Automatik im Normalfall. Präzision im Expertenmodus.":"Automatique par défaut. Précis en mode expert.",
      "Breite Routing-Intents ermöglichen automatische Fallback-Ketten. Spezialisierte Capabilities bleiben bestehen, wenn ein Consumer bewusst eine konkrete Messgröße oder Darstellungsart benötigt.":"Des intentions de routage larges permettent des chaînes de repli automatiques. Les capacités spécialisées restent disponibles lorsqu’un consommateur a délibérément besoin d’une grandeur mesurée ou d’un mode de représentation précis.",
      "Vereinfachte Routing-Pipeline":"Chaîne de routage simplifiée","Consumer-Request":"Requête consommateur","Routing-Intent":"Intention de routage","Eligibility & Profil":"Éligibilité & profil","Coverage & Semantik":"Couverture & sémantique","Provider-IDs sind kein Qualitätswert. Ein Profil schränkt ein, definiert aber keine Provider-Priorität.":"Les identifiants de fournisseur ne constituent pas un score de qualité. Un profil restreint la sélection, mais ne définit aucune priorité de fournisseur.",
      "„Consumer fragen nach einem fachlichen Bedarf. WeatherRouter entscheidet, welche zugelassene und geeignete Quelle diesen Bedarf für den konkreten Kontext am besten erfüllt.“":"« Les consommateurs expriment un besoin fonctionnel. WeatherRouter décide quelle source autorisée et adaptée répond le mieux à ce besoin dans le contexte concret. »",
      "Leitprinzip der Themen- und Routing-Strategie":"Principe directeur de la stratégie thématique et de routage","Vier getrennte Ebenen":"Quatre niveaux distincts",
      "Fachbereich":"Domaine","— harte Router- und Freigabegrenze":"— limite stricte de routage et d’autorisation","Thema":"Thème","— fachliche Sicht auf das Problem":"— vue fonctionnelle du problème","Public Capability / Routing-Intent":"Capacité publique / intention de routage","— Consumer-Vertrag":"— contrat consommateur","Candidate":"Candidat","— konkrete Provider-Capability":"— capacité concrète du fournisseur",
      "Warum diese Trennung wichtig ist":"Pourquoi cette séparation est importante","Ähnliche Daten sind nicht automatisch identische Daten.":"Des données similaires ne sont pas automatiquement des données identiques.",
      "Radarreflektivität, Niederschlagsrate, Satellitenschätzung und Modellakkumulation können denselben visuellen Bedarf bedienen, sind physikalisch aber nicht dasselbe. WeatherRouter hält Herkunft, Messmethode, Zeitsemantik, Größe und Einheit deshalb sichtbar.":"La réflectivité radar, le taux de précipitation, l’estimation satellitaire et l’accumulation de modèle peuvent répondre au même besoin visuel, sans être physiquement identiques. WeatherRouter conserve donc visibles la provenance, la méthode de mesure, la sémantique temporelle, la grandeur et l’unité.",
      "Coverage":"Couverture","Eine erreichbare technische Quelle bedeutet nicht automatisch fachliche Abdeckung für den angefragten Ort.":"Une source techniquement accessible ne signifie pas automatiquement une couverture fonctionnelle pour le lieu demandé.","Semantik":"Sémantique","Messmethode, Beobachtungsart, physikalische Größe und Einheit bleiben Teil der Routingentscheidung.":"La méthode de mesure, le type d’observation, la grandeur physique et l’unité restent partie intégrante de la décision de routage.","Transparenz":"Transparence","Diagnose und Provenienz sollen erklären, warum ein Kandidat verworfen und ein anderer ausgewählt wurde.":"Le diagnostic et la provenance doivent expliquer pourquoi un candidat a été rejeté et un autre sélectionné.",
      "Öffentlicher Projektzugang":"Accès public au projet","Quellspiegel und Projektseite bewusst getrennt vom privaten Entwicklungsstand.":"Miroir du code et page du projet délibérément séparés du développement privé.","Das öffentliche Repository ist ein unabhängig versionierter Validierungs- und Dokumentationsspiegel. Es ist weder die private Entwicklungsquelle noch automatisch ein installierbares Home-Assistant-Paket.":"Le dépôt public est un miroir de validation et de documentation versionné indépendamment. Il ne constitue ni la source de développement privée ni automatiquement un paquet Home Assistant installable.","weather-router-pub auf GitHub":"weather-router-pub sur GitHub","C.K. – Eine Idee weiter gedacht.":"C.K. – Une idée poussée plus loin.","WeatherRouter · öffentliche Projektvorstellung":"WeatherRouter · présentation publique du projet"
    },
    es: {
      "Sprache":"Idioma","Sprache auswählen":"Seleccionar idioma",
      "Seitennavigation":"Navegación de la página","Idee":"Idea","Routing":"Enrutamiento","Architektur":"Arquitectura",
      "Providerneutrales Routing für Wetter- und Gefahreninformationen":"Enrutamiento neutral respecto al proveedor para información meteorológica y de peligros",
      "WeatherRouter verbindet Anwendungen mit den passenden Wetter- und Gefahreninformationen. Je nach Bedarf, Ort und Situation wählt WeatherRouter geeignete Quellen aus und liefert die benötigten Daten nachvollziehbar zurück.":"WeatherRouter conecta las aplicaciones con la información meteorológica y de peligros adecuada. Según la necesidad, el lugar y la situación, WeatherRouter selecciona las fuentes apropiadas y entrega los datos necesarios de forma transparente.",
      "Wie das Routing funktioniert":"Cómo funciona el enrutamiento","Öffentlicher GitHub-Spiegel":"Espejo público de GitHub","Originale WeatherRouter Routing-Illustration aus dem Daimos Project Hub":"Ilustración original de enrutamiento de WeatherRouter del Daimos Project Hub","Originale WeatherRouter Routing-Illustration aus dem Daimos Project Hub · unverändert veröffentlicht.":"Ilustración original de enrutamiento de WeatherRouter del Daimos Project Hub · publicada sin cambios.",
      "Die Idee":"La idea","Der Consumer sagt, was er braucht. WeatherRouter kennt die Quellen und entscheidet, woher die Daten kommen.":"El consumidor dice lo que necesita. WeatherRouter conoce las fuentes y decide de dónde proceden los datos.","WeatherRouter bewertet verfügbare Quellen, berücksichtigt Kontext und Einschränkungen und liefert die passende Ressource samt Provenienz.":"WeatherRouter evalúa las fuentes disponibles, tiene en cuenta el contexto y las restricciones y entrega el recurso adecuado junto con su procedencia.",
      "01 · Bedarf":"01 · Necesidad","Fachlich anfragen":"Solicitar por función","Ein Consumer beschreibt, was er benötigt — etwa flächigen Niederschlag — statt einen bestimmten Anbieter vorzuschreiben.":"Un consumidor describe lo que necesita — por ejemplo precipitación sobre un área — en lugar de imponer un proveedor concreto.","02 · Auswahl":"02 · Selección","Kandidaten bewerten":"Evaluar candidatos","WeatherRouter prüft geeignete Kandidaten anhand normalisierter Eigenschaften und harter Ausschlussregeln.":"WeatherRouter evalúa candidatos adecuados mediante propiedades normalizadas y reglas de exclusión estrictas.","03 · Ergebnis":"03 · Resultado","Resource + Provenienz":"Recurso + procedencia","Der Consumer erhält die nutzbare Resource und kann nachvollziehen, welche Quelle tatsächlich verwendet wurde.":"El consumidor recibe el recurso utilizable y puede rastrear qué fuente se utilizó realmente.",
      "Routing-Prinzip":"Principio de enrutamiento","Automatik im Normalfall. Präzision im Expertenmodus.":"Automático por defecto. Preciso en modo experto.","Breite Routing-Intents ermöglichen automatische Fallback-Ketten. Spezialisierte Capabilities bleiben bestehen, wenn ein Consumer bewusst eine konkrete Messgröße oder Darstellungsart benötigt.":"Las intenciones de enrutamiento amplias permiten cadenas de respaldo automáticas. Las capacidades especializadas siguen disponibles cuando un consumidor necesita deliberadamente una magnitud de medida o una representación concreta.",
      "Vereinfachte Routing-Pipeline":"Flujo de enrutamiento simplificado","Consumer-Request":"Solicitud del consumidor","Routing-Intent":"Intención de enrutamiento","Eligibility & Profil":"Elegibilidad y perfil","Coverage & Semantik":"Cobertura y semántica","Provider-IDs sind kein Qualitätswert. Ein Profil schränkt ein, definiert aber keine Provider-Priorität.":"Los identificadores de proveedor no son una puntuación de calidad. Un perfil restringe la selección, pero no define una prioridad de proveedor.",
      "„Consumer fragen nach einem fachlichen Bedarf. WeatherRouter entscheidet, welche zugelassene und geeignete Quelle diesen Bedarf für den konkreten Kontext am besten erfüllt.“":"«Los consumidores solicitan una necesidad funcional. WeatherRouter decide qué fuente autorizada y adecuada satisface mejor esa necesidad en el contexto concreto.»","Leitprinzip der Themen- und Routing-Strategie":"Principio rector de la estrategia temática y de enrutamiento","Vier getrennte Ebenen":"Cuatro capas separadas","Fachbereich":"Dominio","— harte Router- und Freigabegrenze":"— límite estricto de enrutamiento y autorización","Thema":"Tema","— fachliche Sicht auf das Problem":"— visión funcional del problema","Public Capability / Routing-Intent":"Capacidad pública / intención de enrutamiento","— Consumer-Vertrag":"— contrato del consumidor","Candidate":"Candidato","— konkrete Provider-Capability":"— capacidad concreta del proveedor",
      "Warum diese Trennung wichtig ist":"Por qué importa esta separación","Ähnliche Daten sind nicht automatisch identische Daten.":"Datos similares no son automáticamente datos idénticos.","Radarreflektivität, Niederschlagsrate, Satellitenschätzung und Modellakkumulation können denselben visuellen Bedarf bedienen, sind physikalisch aber nicht dasselbe. WeatherRouter hält Herkunft, Messmethode, Zeitsemantik, Größe und Einheit deshalb sichtbar.":"La reflectividad radar, la tasa de precipitación, la estimación por satélite y la acumulación de modelos pueden satisfacer la misma necesidad visual, pero físicamente no son lo mismo. Por ello WeatherRouter mantiene visibles la procedencia, el método de medición, la semántica temporal, la magnitud y la unidad.",
      "Coverage":"Cobertura","Eine erreichbare technische Quelle bedeutet nicht automatisch fachliche Abdeckung für den angefragten Ort.":"Una fuente técnicamente accesible no implica automáticamente cobertura funcional para el lugar solicitado.","Semantik":"Semántica","Messmethode, Beobachtungsart, physikalische Größe und Einheit bleiben Teil der Routingentscheidung.":"El método de medición, el tipo de observación, la magnitud física y la unidad siguen formando parte de la decisión de enrutamiento.","Transparenz":"Transparencia","Diagnose und Provenienz sollen erklären, warum ein Kandidat verworfen und ein anderer ausgewählt wurde.":"El diagnóstico y la procedencia deben explicar por qué se descartó un candidato y se seleccionó otro.",
      "Öffentlicher Projektzugang":"Acceso público al proyecto","Quellspiegel und Projektseite bewusst getrennt vom privaten Entwicklungsstand.":"Espejo de código y página del proyecto deliberadamente separados del desarrollo privado.","Das öffentliche Repository ist ein unabhängig versionierter Validierungs- und Dokumentationsspiegel. Es ist weder die private Entwicklungsquelle noch automatisch ein installierbares Home-Assistant-Paket.":"El repositorio público es un espejo de validación y documentación con versión independiente. No es la fuente privada de desarrollo ni automáticamente un paquete instalable de Home Assistant.","weather-router-pub auf GitHub":"weather-router-pub en GitHub","C.K. – Eine Idee weiter gedacht.":"C.K. – Una idea llevada más allá.","WeatherRouter · öffentliche Projektvorstellung":"WeatherRouter · presentación pública del proyecto"
    },
    it: {
      "Sprache":"Lingua","Sprache auswählen":"Seleziona lingua",
      "Seitennavigation":"Navigazione pagina","Idee":"Idea","Routing":"Instradamento","Architektur":"Architettura",
      "Providerneutrales Routing für Wetter- und Gefahreninformationen":"Instradamento indipendente dal provider per informazioni meteo e di pericolo",
      "WeatherRouter verbindet Anwendungen mit den passenden Wetter- und Gefahreninformationen. Je nach Bedarf, Ort und Situation wählt WeatherRouter geeignete Quellen aus und liefert die benötigten Daten nachvollziehbar zurück.":"WeatherRouter collega le applicazioni alle informazioni meteo e di pericolo più adatte. In base all'esigenza, al luogo e alla situazione, WeatherRouter seleziona le fonti appropriate e fornisce i dati necessari in modo trasparente.",
      "Wie das Routing funktioniert":"Come funziona l'instradamento","Öffentlicher GitHub-Spiegel":"Mirror GitHub pubblico","Originale WeatherRouter Routing-Illustration aus dem Daimos Project Hub":"Illustrazione originale del routing WeatherRouter dal Daimos Project Hub","Originale WeatherRouter Routing-Illustration aus dem Daimos Project Hub · unverändert veröffentlicht.":"Illustrazione originale del routing WeatherRouter dal Daimos Project Hub · pubblicata senza modifiche.",
      "Die Idee":"L'idea","Der Consumer sagt, was er braucht. WeatherRouter kennt die Quellen und entscheidet, woher die Daten kommen.":"Il consumer dice ciò di cui ha bisogno. WeatherRouter conosce le fonti e decide da dove provengono i dati.","WeatherRouter bewertet verfügbare Quellen, berücksichtigt Kontext und Einschränkungen und liefert die passende Ressource samt Provenienz.":"WeatherRouter valuta le fonti disponibili, considera contesto e vincoli e fornisce la risorsa adatta insieme alla provenienza.",
      "01 · Bedarf":"01 · Esigenza","Fachlich anfragen":"Richiesta funzionale","Ein Consumer beschreibt, was er benötigt — etwa flächigen Niederschlag — statt einen bestimmten Anbieter vorzuschreiben.":"Un consumer descrive ciò di cui ha bisogno — ad esempio precipitazioni su un'area — invece di imporre un provider specifico.","02 · Auswahl":"02 · Selezione","Kandidaten bewerten":"Valutare i candidati","WeatherRouter prüft geeignete Kandidaten anhand normalisierter Eigenschaften und harter Ausschlussregeln.":"WeatherRouter valuta i candidati idonei tramite proprietà normalizzate e rigide regole di esclusione.","03 · Ergebnis":"03 · Risultato","Resource + Provenienz":"Risorsa + provenienza","Der Consumer erhält die nutzbare Resource und kann nachvollziehen, welche Quelle tatsächlich verwendet wurde.":"Il consumer riceve la risorsa utilizzabile e può verificare quale fonte è stata effettivamente usata.",
      "Routing-Prinzip":"Principio di routing","Automatik im Normalfall. Präzision im Expertenmodus.":"Automatico di norma. Preciso in modalità esperto.","Breite Routing-Intents ermöglichen automatische Fallback-Ketten. Spezialisierte Capabilities bleiben bestehen, wenn ein Consumer bewusst eine konkrete Messgröße oder Darstellungsart benötigt.":"Intenti di routing ampi consentono catene di fallback automatiche. Le capability specializzate restano disponibili quando un consumer necessita deliberatamente di una specifica grandezza misurata o modalità di rappresentazione.",
      "Vereinfachte Routing-Pipeline":"Pipeline di routing semplificata","Consumer-Request":"Richiesta consumer","Routing-Intent":"Intento di routing","Eligibility & Profil":"Idoneità e profilo","Coverage & Semantik":"Copertura e semantica","Provider-IDs sind kein Qualitätswert. Ein Profil schränkt ein, definiert aber keine Provider-Priorität.":"Gli ID dei provider non sono un indice di qualità. Un profilo restringe la selezione, ma non definisce una priorità tra provider.",
      "„Consumer fragen nach einem fachlichen Bedarf. WeatherRouter entscheidet, welche zugelassene und geeignete Quelle diesen Bedarf für den konkreten Kontext am besten erfüllt.“":"«I consumer esprimono un'esigenza funzionale. WeatherRouter decide quale fonte autorizzata e adatta soddisfa meglio tale esigenza nel contesto concreto.»","Leitprinzip der Themen- und Routing-Strategie":"Principio guida della strategia tematica e di routing","Vier getrennte Ebenen":"Quattro livelli separati","Fachbereich":"Dominio","— harte Router- und Freigabegrenze":"— limite rigido di routing e autorizzazione","Thema":"Tema","— fachliche Sicht auf das Problem":"— vista funzionale del problema","Public Capability / Routing-Intent":"Capability pubblica / intento di routing","— Consumer-Vertrag":"— contratto consumer","Candidate":"Candidato","— konkrete Provider-Capability":"— capability concreta del provider",
      "Warum diese Trennung wichtig ist":"Perché questa separazione è importante","Ähnliche Daten sind nicht automatisch identische Daten.":"Dati simili non sono automaticamente dati identici.","Radarreflektivität, Niederschlagsrate, Satellitenschätzung und Modellakkumulation können denselben visuellen Bedarf bedienen, sind physikalisch aber nicht dasselbe. WeatherRouter hält Herkunft, Messmethode, Zeitsemantik, Größe und Einheit deshalb sichtbar.":"Riflettività radar, intensità di precipitazione, stima satellitare e accumulo di modello possono soddisfare la stessa esigenza visiva, ma non sono fisicamente la stessa cosa. WeatherRouter mantiene quindi visibili provenienza, metodo di misura, semantica temporale, grandezza e unità.",
      "Coverage":"Copertura","Eine erreichbare technische Quelle bedeutet nicht automatisch fachliche Abdeckung für den angefragten Ort.":"Una fonte tecnicamente raggiungibile non implica automaticamente copertura funzionale per il luogo richiesto.","Semantik":"Semantica","Messmethode, Beobachtungsart, physikalische Größe und Einheit bleiben Teil der Routingentscheidung.":"Metodo di misura, tipo di osservazione, grandezza fisica e unità restano parte della decisione di routing.","Transparenz":"Trasparenza","Diagnose und Provenienz sollen erklären, warum ein Kandidat verworfen und ein anderer ausgewählt wurde.":"Diagnostica e provenienza devono spiegare perché un candidato è stato scartato e un altro selezionato.",
      "Öffentlicher Projektzugang":"Accesso pubblico al progetto","Quellspiegel und Projektseite bewusst getrennt vom privaten Entwicklungsstand.":"Mirror del codice e pagina del progetto deliberatamente separati dallo sviluppo privato.","Das öffentliche Repository ist ein unabhängig versionierter Validierungs- und Dokumentationsspiegel. Es ist weder die private Entwicklungsquelle noch automatisch ein installierbares Home-Assistant-Paket.":"Il repository pubblico è un mirror di validazione e documentazione versionato indipendentemente. Non è né la fonte privata di sviluppo né automaticamente un pacchetto Home Assistant installabile.","weather-router-pub auf GitHub":"weather-router-pub su GitHub","C.K. – Eine Idee weiter gedacht.":"C.K. – Un'idea portata oltre.","WeatherRouter · öffentliche Projektvorstellung":"WeatherRouter · presentazione pubblica del progetto"
    },
    nl: {
      "Sprache":"Taal","Sprache auswählen":"Taal kiezen",
      "Seitennavigation":"Paginanavigatie","Idee":"Idee","Routing":"Routering","Architektur":"Architectuur",
      "Providerneutrales Routing für Wetter- und Gefahreninformationen":"Providerneutrale routering voor weer- en gevareninformatie",
      "WeatherRouter verbindet Anwendungen mit den passenden Wetter- und Gefahreninformationen. Je nach Bedarf, Ort und Situation wählt WeatherRouter geeignete Quellen aus und liefert die benötigten Daten nachvollziehbar zurück.":"WeatherRouter verbindt toepassingen met de juiste weer- en gevareninformatie. Afhankelijk van behoefte, locatie en situatie selecteert WeatherRouter geschikte bronnen en levert het de benodigde gegevens transparant terug.",
      "Wie das Routing funktioniert":"Hoe routering werkt","Öffentlicher GitHub-Spiegel":"Openbare GitHub-spiegel","Originale WeatherRouter Routing-Illustration aus dem Daimos Project Hub":"Originele WeatherRouter-routeringsillustratie uit de Daimos Project Hub","Originale WeatherRouter Routing-Illustration aus dem Daimos Project Hub · unverändert veröffentlicht.":"Originele WeatherRouter-routeringsillustratie uit de Daimos Project Hub · ongewijzigd gepubliceerd.",
      "Die Idee":"Het idee","Der Consumer sagt, was er braucht. WeatherRouter kennt die Quellen und entscheidet, woher die Daten kommen.":"De consumer zegt wat hij nodig heeft. WeatherRouter kent de bronnen en bepaalt waar de gegevens vandaan komen.","WeatherRouter bewertet verfügbare Quellen, berücksichtigt Kontext und Einschränkungen und liefert die passende Ressource samt Provenienz.":"WeatherRouter beoordeelt beschikbare bronnen, houdt rekening met context en beperkingen en levert de passende resource inclusief herkomst.",
      "01 · Bedarf":"01 · Behoefte","Fachlich anfragen":"Functioneel aanvragen","Ein Consumer beschreibt, was er benötigt — etwa flächigen Niederschlag — statt einen bestimmten Anbieter vorzuschreiben.":"Een consumer beschrijft wat nodig is — bijvoorbeeld gebiedsdekkende neerslag — in plaats van een specifieke provider voor te schrijven.","02 · Auswahl":"02 · Selectie","Kandidaten bewerten":"Kandidaten beoordelen","WeatherRouter prüft geeignete Kandidaten anhand normalisierter Eigenschaften und harter Ausschlussregeln.":"WeatherRouter beoordeelt geschikte kandidaten op basis van genormaliseerde eigenschappen en harde uitsluitingsregels.","03 · Ergebnis":"03 · Resultaat","Resource + Provenienz":"Resource + herkomst","Der Consumer erhält die nutzbare Resource und kann nachvollziehen, welche Quelle tatsächlich verwendet wurde.":"De consumer ontvangt de bruikbare resource en kan nagaan welke bron daadwerkelijk is gebruikt.",
      "Routing-Prinzip":"Routeringsprincipe","Automatik im Normalfall. Präzision im Expertenmodus.":"Automatisch als standaard. Precies in expertmodus.","Breite Routing-Intents ermöglichen automatische Fallback-Ketten. Spezialisierte Capabilities bleiben bestehen, wenn ein Consumer bewusst eine konkrete Messgröße oder Darstellungsart benötigt.":"Brede routeringsintenties maken automatische fallback-ketens mogelijk. Gespecialiseerde capabilities blijven beschikbaar wanneer een consumer bewust een specifieke meetgrootheid of weergave nodig heeft.",
      "Vereinfachte Routing-Pipeline":"Vereenvoudigde routeringspijplijn","Consumer-Request":"Consumerverzoek","Routing-Intent":"Routeringsintentie","Eligibility & Profil":"Geschiktheid & profiel","Coverage & Semantik":"Dekking & semantiek","Provider-IDs sind kein Qualitätswert. Ein Profil schränkt ein, definiert aber keine Provider-Priorität.":"Provider-ID's zijn geen kwaliteitsmaatstaf. Een profiel beperkt de selectie, maar bepaalt geen providerprioriteit.",
      "„Consumer fragen nach einem fachlichen Bedarf. WeatherRouter entscheidet, welche zugelassene und geeignete Quelle diesen Bedarf für den konkreten Kontext am besten erfüllt.“":"“Consumers vragen om een functionele behoefte. WeatherRouter bepaalt welke toegestane en geschikte bron die behoefte in de concrete context het beste vervult.”","Leitprinzip der Themen- und Routing-Strategie":"Leidraad van de thema- en routeringsstrategie","Vier getrennte Ebenen":"Vier gescheiden lagen","Fachbereich":"Domein","— harte Router- und Freigabegrenze":"— harde routerings- en vrijgavegrens","Thema":"Thema","— fachliche Sicht auf das Problem":"— functionele kijk op het probleem","Public Capability / Routing-Intent":"Publieke capability / routeringsintentie","— Consumer-Vertrag":"— consumercontract","Candidate":"Kandidaat","— konkrete Provider-Capability":"— concrete providercapability",
      "Warum diese Trennung wichtig ist":"Waarom deze scheiding belangrijk is","Ähnliche Daten sind nicht automatisch identische Daten.":"Vergelijkbare gegevens zijn niet automatisch identieke gegevens.","Radarreflektivität, Niederschlagsrate, Satellitenschätzung und Modellakkumulation können denselben visuellen Bedarf bedienen, sind physikalisch aber nicht dasselbe. WeatherRouter hält Herkunft, Messmethode, Zeitsemantik, Größe und Einheit deshalb sichtbar.":"Radarreflectiviteit, neerslagintensiteit, satellietschatting en modelaccumulatie kunnen dezelfde visuele behoefte bedienen, maar zijn fysisch niet hetzelfde. WeatherRouter houdt daarom herkomst, meetmethode, tijdsemantiek, grootheid en eenheid zichtbaar.",
      "Coverage":"Dekking","Eine erreichbare technische Quelle bedeutet nicht automatisch fachliche Abdeckung für den angefragten Ort.":"Een technisch bereikbare bron betekent niet automatisch functionele dekking voor de gevraagde locatie.","Semantik":"Semantiek","Messmethode, Beobachtungsart, physikalische Größe und Einheit bleiben Teil der Routingentscheidung.":"Meetmethode, observatietype, fysieke grootheid en eenheid blijven onderdeel van de routeringsbeslissing.","Transparenz":"Transparantie","Diagnose und Provenienz sollen erklären, warum ein Kandidat verworfen und ein anderer ausgewählt wurde.":"Diagnostiek en herkomst moeten verklaren waarom een kandidaat is afgewezen en een andere geselecteerd.",
      "Öffentlicher Projektzugang":"Openbare projecttoegang","Quellspiegel und Projektseite bewusst getrennt vom privaten Entwicklungsstand.":"Bronspiegel en projectpagina zijn bewust gescheiden van de private ontwikkeling.","Das öffentliche Repository ist ein unabhängig versionierter Validierungs- und Dokumentationsspiegel. Es ist weder die private Entwicklungsquelle noch automatisch ein installierbares Home-Assistant-Paket.":"De openbare repository is een onafhankelijk geversioneerde validatie- en documentatiespiegel. Het is noch de private ontwikkelbron, noch automatisch een installeerbaar Home Assistant-pakket.","weather-router-pub auf GitHub":"weather-router-pub op GitHub","C.K. – Eine Idee weiter gedacht.":"C.K. – Een idee verder gedacht.","WeatherRouter · öffentliche Projektvorstellung":"WeatherRouter · openbare projectpresentatie"
    },
    pl: {
      "Sprache":"Język","Sprache auswählen":"Wybierz język",
      "Seitennavigation":"Nawigacja strony","Idee":"Idea","Routing":"Routing","Architektur":"Architektura",
      "Providerneutrales Routing für Wetter- und Gefahreninformationen":"Niezależny od dostawcy routing informacji pogodowych i o zagrożeniach",
      "WeatherRouter verbindet Anwendungen mit den passenden Wetter- und Gefahreninformationen. Je nach Bedarf, Ort und Situation wählt WeatherRouter geeignete Quellen aus und liefert die benötigten Daten nachvollziehbar zurück.":"WeatherRouter łączy aplikacje z odpowiednimi informacjami pogodowymi i o zagrożeniach. W zależności od potrzeby, lokalizacji i sytuacji WeatherRouter wybiera odpowiednie źródła i w przejrzysty sposób dostarcza potrzebne dane.",
      "Wie das Routing funktioniert":"Jak działa routing","Öffentlicher GitHub-Spiegel":"Publiczne lustro GitHub","Originale WeatherRouter Routing-Illustration aus dem Daimos Project Hub":"Oryginalna ilustracja routingu WeatherRouter z Daimos Project Hub","Originale WeatherRouter Routing-Illustration aus dem Daimos Project Hub · unverändert veröffentlicht.":"Oryginalna ilustracja routingu WeatherRouter z Daimos Project Hub · opublikowana bez zmian.",
      "Die Idee":"Idea","Der Consumer sagt, was er braucht. WeatherRouter kennt die Quellen und entscheidet, woher die Daten kommen.":"Konsument mówi, czego potrzebuje. WeatherRouter zna źródła i decyduje, skąd pochodzą dane.","WeatherRouter bewertet verfügbare Quellen, berücksichtigt Kontext und Einschränkungen und liefert die passende Ressource samt Provenienz.":"WeatherRouter ocenia dostępne źródła, uwzględnia kontekst i ograniczenia oraz dostarcza odpowiedni zasób wraz z informacją o pochodzeniu.",
      "01 · Bedarf":"01 · Potrzeba","Fachlich anfragen":"Zapytanie funkcjonalne","Ein Consumer beschreibt, was er benötigt — etwa flächigen Niederschlag — statt einen bestimmten Anbieter vorzuschreiben.":"Konsument opisuje, czego potrzebuje — na przykład opadu dla obszaru — zamiast wskazywać konkretnego dostawcę.","02 · Auswahl":"02 · Wybór","Kandidaten bewerten":"Ocena kandydatów","WeatherRouter prüft geeignete Kandidaten anhand normalisierter Eigenschaften und harter Ausschlussregeln.":"WeatherRouter ocenia odpowiednich kandydatów na podstawie znormalizowanych właściwości i twardych reguł wykluczających.","03 · Ergebnis":"03 · Wynik","Resource + Provenienz":"Zasób + pochodzenie","Der Consumer erhält die nutzbare Resource und kann nachvollziehen, welche Quelle tatsächlich verwendet wurde.":"Konsument otrzymuje użyteczny zasób i może sprawdzić, które źródło zostało faktycznie użyte.",
      "Routing-Prinzip":"Zasada routingu","Automatik im Normalfall. Präzision im Expertenmodus.":"Automatycznie domyślnie. Precyzyjnie w trybie eksperckim.","Breite Routing-Intents ermöglichen automatische Fallback-Ketten. Spezialisierte Capabilities bleiben bestehen, wenn ein Consumer bewusst eine konkrete Messgröße oder Darstellungsart benötigt.":"Szerokie intencje routingu umożliwiają automatyczne łańcuchy zapasowe. Wyspecjalizowane możliwości pozostają dostępne, gdy konsument świadomie potrzebuje konkretnej wielkości pomiarowej lub sposobu prezentacji.",
      "Vereinfachte Routing-Pipeline":"Uproszczony proces routingu","Consumer-Request":"Żądanie konsumenta","Routing-Intent":"Intencja routingu","Eligibility & Profil":"Kwalifikacja i profil","Coverage & Semantik":"Zasięg i semantyka","Provider-IDs sind kein Qualitätswert. Ein Profil schränkt ein, definiert aber keine Provider-Priorität.":"Identyfikatory dostawców nie są miarą jakości. Profil zawęża wybór, ale nie określa priorytetu dostawców.",
      "„Consumer fragen nach einem fachlichen Bedarf. WeatherRouter entscheidet, welche zugelassene und geeignete Quelle diesen Bedarf für den konkreten Kontext am besten erfüllt.“":"„Konsumenci pytają o potrzebę funkcjonalną. WeatherRouter decyduje, które dozwolone i odpowiednie źródło najlepiej spełnia tę potrzebę w danym kontekście.”","Leitprinzip der Themen- und Routing-Strategie":"Zasada przewodnia strategii tematów i routingu","Vier getrennte Ebenen":"Cztery oddzielne warstwy","Fachbereich":"Domena","— harte Router- und Freigabegrenze":"— twarda granica routingu i dopuszczenia","Thema":"Temat","— fachliche Sicht auf das Problem":"— funkcjonalne spojrzenie na problem","Public Capability / Routing-Intent":"Publiczna capability / intencja routingu","— Consumer-Vertrag":"— kontrakt konsumenta","Candidate":"Kandydat","— konkrete Provider-Capability":"— konkretna capability dostawcy",
      "Warum diese Trennung wichtig ist":"Dlaczego ten podział jest ważny","Ähnliche Daten sind nicht automatisch identische Daten.":"Podobne dane nie są automatycznie danymi identycznymi.","Radarreflektivität, Niederschlagsrate, Satellitenschätzung und Modellakkumulation können denselben visuellen Bedarf bedienen, sind physikalisch aber nicht dasselbe. WeatherRouter hält Herkunft, Messmethode, Zeitsemantik, Größe und Einheit deshalb sichtbar.":"Odbiciowość radarowa, natężenie opadu, szacunki satelitarne i akumulacja modelowa mogą spełniać tę samą potrzebę wizualną, ale fizycznie nie są tym samym. Dlatego WeatherRouter zachowuje widoczne pochodzenie, metodę pomiaru, semantykę czasu, wielkość i jednostkę.",
      "Coverage":"Zasięg","Eine erreichbare technische Quelle bedeutet nicht automatisch fachliche Abdeckung für den angefragten Ort.":"Technicznie dostępne źródło nie oznacza automatycznie funkcjonalnego pokrycia dla żądanej lokalizacji.","Semantik":"Semantyka","Messmethode, Beobachtungsart, physikalische Größe und Einheit bleiben Teil der Routingentscheidung.":"Metoda pomiaru, rodzaj obserwacji, wielkość fizyczna i jednostka pozostają częścią decyzji routingu.","Transparenz":"Przejrzystość","Diagnose und Provenienz sollen erklären, warum ein Kandidat verworfen und ein anderer ausgewählt wurde.":"Diagnostyka i informacja o pochodzeniu powinny wyjaśniać, dlaczego jednego kandydata odrzucono, a innego wybrano.",
      "Öffentlicher Projektzugang":"Publiczny dostęp do projektu","Quellspiegel und Projektseite bewusst getrennt vom privaten Entwicklungsstand.":"Lustro kodu i strona projektu są celowo oddzielone od prywatnego rozwoju.","Das öffentliche Repository ist ein unabhängig versionierter Validierungs- und Dokumentationsspiegel. Es ist weder die private Entwicklungsquelle noch automatisch ein installierbares Home-Assistant-Paket.":"Publiczne repozytorium jest niezależnie wersjonowanym lustrem walidacji i dokumentacji. Nie jest ani prywatnym źródłem rozwoju, ani automatycznie instalowalnym pakietem Home Assistant.","weather-router-pub auf GitHub":"weather-router-pub na GitHub","C.K. – Eine Idee weiter gedacht.":"C.K. – Pomysł rozwinięty dalej.","WeatherRouter · öffentliche Projektvorstellung":"WeatherRouter · publiczna prezentacja projektu"
    }
  };

  const metaByLanguage = {
    de: {
      title: "WeatherRouter · Eine Idee weiter gedacht.",
      description: "WeatherRouter ist eine providerneutrale Vermittlungs- und Entscheidungsschicht für Wetter- und Gefahreninformationen.",
      ogDescription: "Consumer fragen fachliche Fähigkeiten an. WeatherRouter entscheidet, welche Quelle den Bedarf am besten erfüllt."
    },
    en: {
      title: "WeatherRouter · One idea further.",
      description: "WeatherRouter is a provider-neutral mediation and decision layer for weather and hazard information.",
      ogDescription: "Consumers request functional capabilities. WeatherRouter decides which source best fulfills the need."
    },
    fr: {
      title: "WeatherRouter · Une idée poussée plus loin.",
      description: "WeatherRouter est une couche neutre vis-à-vis des fournisseurs pour la médiation et la décision concernant les informations météo et de danger.",
      ogDescription: "Les consommateurs demandent des capacités fonctionnelles. WeatherRouter décide quelle source répond le mieux au besoin."
    },
    es: {
      title: "WeatherRouter · Una idea llevada más allá.",
      description: "WeatherRouter es una capa de mediación y decisión neutral respecto al proveedor para información meteorológica y de peligros.",
      ogDescription: "Los consumidores solicitan capacidades funcionales. WeatherRouter decide qué fuente satisface mejor la necesidad."
    },
    it: {
      title: "WeatherRouter · Un'idea portata oltre.",
      description: "WeatherRouter è un livello di mediazione e decisione indipendente dal provider per informazioni meteo e di pericolo.",
      ogDescription: "I consumer richiedono capacità funzionali. WeatherRouter decide quale fonte soddisfa meglio l'esigenza."
    },
    nl: {
      title: "WeatherRouter · Een idee verder gedacht.",
      description: "WeatherRouter is een providerneutrale bemiddelings- en beslissingslaag voor weer- en gevareninformatie.",
      ogDescription: "Consumers vragen functionele mogelijkheden aan. WeatherRouter bepaalt welke bron het beste aan de behoefte voldoet."
    },
    pl: {
      title: "WeatherRouter · Pomysł rozwinięty dalej.",
      description: "WeatherRouter to niezależna od dostawcy warstwa pośrednicząca i decyzyjna dla informacji pogodowych i o zagrożeniach.",
      ogDescription: "Konsumenci żądają funkcjonalnych możliwości. WeatherRouter decyduje, które źródło najlepiej spełnia potrzebę."
    }
  };

  const normalize = value => value.replace(/\s+/g, " ").trim();

  function chooseInitialLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.includes(saved)) return saved;
    const browser = (navigator.language || "").slice(0,2).toLowerCase();
    return SUPPORTED.includes(browser) ? browser : DEFAULT_LANGUAGE;
  }

  function rememberOriginals() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const key = normalize(node.nodeValue || "");
      if (key && !node.parentElement?.closest("script,style,option")) {
        node.__wrOriginal = node.nodeValue;
        node.__wrKey = key;
      }
    }
    document.querySelectorAll("[aria-label],[alt],[title]").forEach(el => {
      ["aria-label","alt","title"].forEach(attr => {
        if (el.hasAttribute(attr)) {
          el.dataset["wrOriginal" + attr.replace("-","")] = el.getAttribute(attr);
        }
      });
    });
  }

  function translateAttribute(el, attr, dict) {
    const dataKey = "wrOriginal" + attr.replace("-","");
    const original = el.dataset[dataKey];
    if (!original) return;
    const key = normalize(original);
    el.setAttribute(attr, dict[key] || original);
  }

  function applyLanguage(language) {
    const lang = SUPPORTED.includes(language) ? language : DEFAULT_LANGUAGE;
    const dict = translations[lang] || {};
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!node.__wrOriginal || !node.__wrKey) continue;
      const translated = dict[node.__wrKey];
      if (!translated) {
        node.nodeValue = node.__wrOriginal;
        continue;
      }
      const original = node.__wrOriginal;
      const leading = original.match(/^\s*/)?.[0] || "";
      const trailing = original.match(/\s*$/)?.[0] || "";
      node.nodeValue = leading + translated + trailing;
    }

    document.querySelectorAll("[aria-label],[alt],[title]").forEach(el => {
      translateAttribute(el,"aria-label",dict);
      translateAttribute(el,"alt",dict);
      translateAttribute(el,"title",dict);
    });

    const meta = metaByLanguage[lang] || metaByLanguage.de;
    document.documentElement.lang = lang;
    document.title = meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = meta.description;
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.content = meta.ogDescription;

    const selector = document.getElementById("language-select");
    if (selector) selector.value = lang;
    localStorage.setItem(STORAGE_KEY, lang);
  }

  document.addEventListener("DOMContentLoaded", () => {
    rememberOriginals();
    const selector = document.getElementById("language-select");
    if (selector) {
      selector.addEventListener("change", event => applyLanguage(event.target.value));
    }
    applyLanguage(chooseInitialLanguage());
  });
})();