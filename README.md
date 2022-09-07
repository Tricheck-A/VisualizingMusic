# VisualizingMusic - Projekt für das KD 22 NFM VIII an der FH Dortmund
<h2>Aufgabe:</h2>
<p>
  Eine Tonsequenz (Musikstück, Track, Sprache) wird visuell-abstrakt
  (oder konkret, mit Bildern/Bildsequenzen) analysiert, interpretiert
  und visualisiert. Die visuelle Interpretation kann digital (Processing/P5.js,
  Animate CC, After Effects, C4D/Blender) und/oder analog (Buch, Magazin,
  Plakatserie) umgesetzt werden.
</p>

<p>
  <strong>
  a) Jede:r Studierende recherchiert mindestens zwei Sequenzen und stellt
  diese im Plenum vor. Das ausgewählte Stück wird strukturell im Zeitverlauf
  analysiert, u.a. nach:
  </strong>
  <ul>
    <li>Okkurenzen (Anwesenheit oder Abwesenheit von Tönen)</li>
    <li>Redundanzen (Wiederholungen)</li>
    <li>Tempo (Geschwindigkeit & Geschwindigkeitsänderungen)</li>
    <li>Rhythmus (Tondauer und -wechsel)</li>
    <li>Dynamik (Lautstärkeverlauf)</li>
    <li>Harmonik (Zusammenklang verschiedener Stimmen, Dissonanzen)</li>
    <li>Melodie (Tonhöhenverlauf / Sprachmelodie)</li>
    <li>Klangfarben & Instrumentierung</li>
  </ul>
</p>
<p>
  Es entsteht eine Art »visuelle Partitur« mit einer Zeitachse, auf der die
  unterschiedlichen strukturellen Dimensionen notiert werden.
</p>
<p>
  <strong>
  b) Den strukturellen Dimensionen aus a) werden nun visuelle Dimensionen
  zugeordnet, die über die Zeit verändert werden können, z.B.:
  </strong
  <ul>
    <li>Form (Punkt, Linie, Kreis / Ellipse, Quadrat / Rechteck, Dreieck etc.)</li>
    <li>Größe / Proportionen</li>
    <li>Farbe (Farbton, Sättigung, Helligkeit, Textur)</li>
    <li>Hintergrund (Farbe, Helligkeit, Textur)</li>
    <li>Lage (Position, Drehwinkel)</li>
    <li>Anordnung / Ausrichtung / Abstände (Raster)</li>
    <li>Bewegung / Translation / Rotation</li>
    <li>Verzerrung</li>
    <li>Okkurenz (Sichtbar / Unsichtbar)</li>
    <li>Synchronität / Asynchronität</li>
  </ul>
</p>
<p>
  Aus der Kombination der Ergebnisse aus a) und b) soll dann ein Storyboard
  entstehen, welches die Grundlage für die Umsetzung darstellt. Es
  enthält gegebenenfalls auch Überlegungen zur Art der interaktiven Einflussnahme
  durch den Nutzer sowie die Bedienbarkeit der Visualisierung.
</p>
<br>



<h2>Konzept:</h2>
<h3>Songwahl: Go Fuck Yourself - Two Feet</h3>
<p>
  Die Idee ist eine Gestaltung des Liedes in Form von einer interaktiven 3D Umgebung. Es soll
  möglich sein, mit der 3D Visualisierung zu interagieren, und Parameter als User ändern zu
  können um Einfluss auf die Visualisierung zu haben. So soll es möglich sein, sich in dem
  Raum der Gestaltung zu bewegen, und beispielsweise Farben oder Formen zu ändern. Dadurch
  wird der Visualisierung bei jedem Anschauen eine einzigartige Komponente verschafft,
  da man sie jedes Mal anders sehen und erleben kann. Das Projekt wird mithilfe der p5js Library
  mit HTML, CSS und JavaScript durchgeführt, und als Website umgesetzt, damit das Projekt
  leicht zugänglich über jeden Webbrowser wird. Zudem wird die Website responsive gestaltet,
  damit sie über möglichst viele Displaygrößen im Full Screen genutzt werden kann (Smarphones
  und Tablets ausgeschlossen).
</p>
<p>
  Das Konzept der Visualisierung ist von unserem Sonnensystem und den darin enthaltenen
  Elementen inspiriert. Im Zentrum der 3D Umgebung befindet sich die Sonne.
  Zur Visualisierung der Okkurenzn werden Elemente wie Planeten, Gravitationsfelder, oder Kometen
  die sich im Weltall befinden, verwendet und animiert. Für den Artstyle wurde ein Lineart
  ähnlicher Stil ausgewählt, da dieser sich in einen endlosen schwarzen Raum voller Sterne
  am besten fügt. Des Weiteren harmonieren die Leere und die minimalistischen Elemente aufgrung
  der teilweise wenigen Okkurenzen des Liedes sehr gut mit der Stimmung des Songs.
</p>
<br>






<h2>Umsetzung:</h2>
<p>
  Die finale Umsetzung ist dem anfänglichen Konzept sehr treu geblieben. So handelt es sich um eine 3D Umgebung,
  die mithilfe von HTML, CSS und JS im Webbrowser von jedem genutzt werden kann. Sie ist für Desktop Bildschirme
  responsive angepasst worden und passt sich somit der Bildschirmbreite entsprechend an. <br>
  
  <h3>Features</h3>
  Mehrere features wurden dem Projekt hinzugefügt, um die Visualisierung interessanter und interaktiver zu gestalten:
  <ul>
    <li>3D Orbit Umgebung mit Zoom Funktionalität</li>
    <li>Zwei verschiedene Farbeinstellunen für alle animierten Elemente</li>
    <li>Pausieren der Animation während der Lied- und Animationswiedergabe</li>
    <li>Zeitanzeige zur Erkennung des akutellen Zeitpunktes im Lied</li>
    <li>Wiedergabe-Slider zum Auswählen und Ändern des akutellen Zeitpunktes im Lied mit Live-Preview der Animation beim Sliden</li>
    <li>Dark/ Light-Mode</li>
  </ul>
  
  <h3>Visualisierung</h3>
  Für die Visualisierung wurde das Hauptaugenmerk auf die Gravitationsringe und Planeten gelegt. Dabei wurde das Lied in die 
  einzelnen Okkurenzen heruntergebrochen und diese anschließend passenden Animationen zugeordnet <i>(Für die Okkurenzen siehe [Analyse-TwoFeet.pdf](https://github.com/Tricheck-A/VisualizingMusic/files/9507136/Analyse-TwoFeet.pdf))</i>.
  Die Animationen enstprechen zum Großteil denen des Konzepts <i>(siehe [Konzept-TwoFeet](https://github.com/Tricheck-A/VisualizingMusic/files/9507142/Konzept-TwoFeet_26-06.pdf))</i>. Jedoch wurden ein paar Änderungen im Vergleich
  zum Konzept vorgenommen. So wurde die Idee der Gitarre als Sternenbild verworfen, und stattdessen andere Animationen erstellt, die
  passender zum Klang sind.
</p>
