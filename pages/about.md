---
layout: about_page
title: About
permalink: /about
---

<style>
.about-page-content { max-width: 880px; padding: 0; margin: 10px auto; }
.about-profile { margin: 24px 0 0; }
.about-intro { display: grid; grid-template-columns: minmax(0, 1fr) 180px; gap: 32px; align-items: start; }
.about-intro .about-lead { font-size: 18px; line-height: 1.5; margin: 0 0 20px; font-weight: 400; }
.about-intro .about-portrait { display: block; width: 100%; max-width: 180px; height: auto; margin: 0; }
.about-links { display: flex; flex-wrap: wrap; gap: 10px 24px; font-size: 15px; line-height: 1.6; }
.about-biography { max-width: 72ch; margin: 24px 0 0; padding-top: 20px; border-top: 1px solid #ddd; }
.about-biography h2 { font-size: 30px; margin-top: 28px; color: YellowGreen; text-shadow: 0 0 2px Black, 0 0 2px Black, 0 0 2px Black, 0 0 2px Black; }
.about-biography h2:first-child { margin-top: 0; }
.about-biography p { font-size: 15px; line-height: 1.7; font-weight: 400; }
@media (max-width: 600px) {
  .about-profile { margin-top: 20px; }
  .about-intro { grid-template-columns: minmax(0, 1fr); gap: 20px; }
  .about-intro .about-portrait { width: 160px; max-width: 100%; }
  .about-biography { margin-top: 24px; }
}
</style>

<div class="about-profile">
  <div class="about-intro">
    <div>
      <p class="about-lead"><b>Tiffany Funk</b> is a writer, scholar, and artist working across poetry, fiction, sound, and computation.</p>
      <nav class="about-links" aria-label="Explore Tiffany Funk's work and contact information">
        <a href="{{ '/writing' | relative_url }}">Writing &rarr;</a>
        <a href="{{ '/scholarship' | relative_url }}">Scholarship &rarr;</a>
        <a href="https://docs.google.com/document/d/1C29W0GVsGH8K8YWtZSyxWjSTECafZ8_2F8dtW3P0qqQ/edit?usp=sharing">Full CV &rarr;</a>
        <a href="mailto:tiffany.a.funk@gmail.com">Contact &rarr;</a>
      </nav>
    </div>
    <img class="about-portrait" src="{{ '/assets/img/funk_profile.jpg' | relative_url }}" alt="Portrait of Tiffany Funk">
  </div>

  <div class="about-biography">
    <h2>Writing &amp; research</h2>
    <p>Her work explores archives and the feedback systems that shape attention.</p>
    <p>Her poetry and hybrid writing include interactive browser works in which the reader’s actions shape the text. Her poem <a href="https://malefica.press/this-is-disease-tiffany-funk-2/">“This is Disease”</a> appears in <em>Malefica Press</em>, and “cat.exe” appears in <a href="https://www.gossamerwight.com/store/p/unstable-realities-pdf"><em>Unstable Realities</em></a>, an anthology from GossamerWight. Additional poetry and fiction are forthcoming in Oroboro / Death Rattle Literary and Crow &amp; Cross Keys. <a href="{{ '/writing' | relative_url }}">Explore her writing.</a></p>
    <p>Her first book, <em>HPSCHD: Inside John Cage and Lejaren A. Hiller Jr.'s Radical Multimedia Collaboration</em>, is forthcoming March 2, 2027, from the <a href="https://www.press.uillinois.edu/books/?id=c059957">University of Illinois Press</a>. Drawing on archival research and her own background in computational art, the book examines Cage and Hiller's 1969 multimedia work as a foundational moment in the history of human-machine collaboration — programming as performance, code as score, listening as a way of inhabiting systems too large to hold whole.</p>
    <p>Her current scholarly project, <em>Haunted Circuits and Sounding Care</em>, traces feedback as care infrastructure across sound art, clinical practice, and digital platforms — from medieval chant to the BBC Radiophonic Workshop to the algorithmic loops of contemporary streaming and voice assistants. The book argues that the same formal grammar of cue, threshold, and return can hold attention in care or harvest it for capital, and listens for the difference.</p>

    <h2>Teaching &amp; editorial work</h2>
    <p>She holds a PhD in art history and an MFA in new media, and is Visiting Assistant Professor at the University of Illinois Chicago, where she teaches in the Interdisciplinary Education in the Arts (IDEA) program she co-developed.</p>
    <p>Funk is Editor-in-Chief of <em>The Video Game Art Reader</em>. Her scholarly writing has appeared in <em>Leonardo</em>, <em>Antennae</em>, edited collections from Routledge and Radius, and exhibition catalogs including <em>Coded: Art Enters the Computer Age, 1952–1982</em> at the Los Angeles County Museum of Art. Her art practice in creative coding, performance, and electronics has been shown at the Beall Center for Art + Technology at UC Irvine and other university and gallery venues.</p>
  </div>
</div>


