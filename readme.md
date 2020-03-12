### Extension einbinden
Unter chrome://extensions/ oben rechts den Entwicklermodus aktivieren. Danach oben links "Entpackte Erweiterung laden" auswählen und
im Datei-Explorer den Ordner der Erweiterung auswählen.

### Allgemeine Funktionalität
Gibt Daten, die die Funktion "dataFor()" (aus der JavaScript Bibliothek "Knockout.js") liefert, zu einem bestimmten HTML-Element auf der Google Chrome Debug-Konsole aus. 
Dies wird erreicht, indem das Element, zu dem die Daten ausgegeben werden sollen, mit der rechten Maustaste angeklickt und in dem daraufhin entstehenden Context-Menü 
"KnockoutInfo" ausgwählt wird.

### Bestehende Probleme
1. Funktioniert nur auf der Domäne "http://vm10060/", kann aber in der Manifest-Datein "manifest.json" unter "content_scripts" - "matches" geändert werden.
Für genauere Info: 	https://developer.chrome.com/extensions/content_scripts#declaratively
Info zu Match-Patterns: https://developer.chrome.com/extensions/match_patterns

2. a-HTML-Tags haben ein eigenes Context-Menü, in dem der KnockoutInfo eintrag nicht erscheint. Die Extension ist also nicht auf Links anwendbar.