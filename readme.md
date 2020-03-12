### Extension einbinden
Unter chrome://extensions/ oben rechts den Entwicklermodus aktivieren. Danach oben links "Entpackte Erweiterung laden" ausw�hlen und
im Datei-Explorer den Ordner der Erweiterung ausw�hlen.

### Allgemeine Funktionalit�t
Gibt Daten, die die Funktion "dataFor()" (aus der JavaScript Bibliothek "Knockout.js") liefert, zu einem bestimmten HTML-Element auf der Google Chrome Debug-Konsole aus. 
Dies wird erreicht, indem das Element, zu dem die Daten ausgegeben werden sollen, mit der rechten Maustaste angeklickt und in dem daraufhin entstehenden Context-Men� 
"KnockoutInfo" ausgw�hlt wird.

### Bestehende Probleme
1. Funktioniert nur auf der Dom�ne "http://vm10060/", kann aber in der Manifest-Datein "manifest.json" unter "content_scripts" - "matches" ge�ndert werden.
F�r genauere Info: 	https://developer.chrome.com/extensions/content_scripts#declaratively
Info zu Match-Patterns: https://developer.chrome.com/extensions/match_patterns

2. a-HTML-Tags haben ein eigenes Context-Men�, in dem der KnockoutInfo eintrag nicht erscheint. Die Extension ist also nicht auf Links anwendbar.