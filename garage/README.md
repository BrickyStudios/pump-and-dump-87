# Garage (3D-Version)

Hier entsteht die 3D-Koop-Version von Pump & Dump '87. Die Idee steht in [IDEE.md](IDEE.md), gebaut ist davon noch nichts.

## Was schon da ist

- `index.html`: Platzhalter-Seite. Der Titelbildschirm der Notizblock-Version verlinkt schon hierher.
- `vendor/three.js`: three.js 0.186.1 als eine Datei, setzt `THREE` global. Ein Build-Schritt ist nicht nötig.
- `vendor/peerjs.min.js`: PeerJS 1.5.4 für Online-Koop per Raumcode, direkt zwischen den Browsern (WebRTC). Für die Vermittlung nutzt es den kostenlosen PeerJS-Server, einen eigenen Server braucht es nicht.
- `config.js`: Entwurf für Tuning-Werte (Woche, Anrufe, SEC, Mitarbeiter, Partys, Energie). Noch nirgends angeschlossen, nimm, was passt.
- `assets/provenance.yaml`: Herkunft und Lizenz der Dateien in `vendor/`.

## Lokal starten

```bash
cd pump-and-dump-87
python3 -m http.server 8000
```

Dann http://localhost:8000/garage/ öffnen.

## Aus der Notizblock-Version übernehmen

In `../index.html` liegen Farben und Schriften (`:root`), die gezeichneten Anrufer (`drawFace`), die Zeitungsseite (`drawPaper`), die Sounds (`SFX`) und alle Texte auf Deutsch und Englisch (`S`, `LINES`, `REPLIES`).

Ein Push auf `main` geht direkt live auf https://brickystudios.github.io/pump-and-dump-87/garage/
