<?php
require 'includes/header.php';
?>

    <h2>videos tutoriar</h2>
    <main class="container">
        <div>
            <h3>Tailwind Vs. Bootstrap: ¿Qué Framework CSS Necesitas?</h3>
        </div>
        <div class="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/2NuGuBpP5fo?si=st_pLwYYRVcyREiN"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ImOR0o-QHOQ?si=DuuHxATYyVDJwwzE"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <form class="j">
            <fieldset>
                <legend>Que te parecio el video escribe tu comentario</legend>
                <div>
                    <label for="com">comentario</label>
                    <textarea type="" id="com" placeholder="comentario"></textarea>
                </div>

                <input type="submit">
            </fieldset>
        </form>
        <div class="canal">
            <h3>Nuestro canal de youtube</h3>
            <a href="https://www.youtube.com/@FaztTech"><svg xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-brand-youtube-kids" width="52" height="52" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M18.608 17.75l-3.9 .268h-.027a13.83 13.83 0 0 0 -3.722 .828l-2.511 .908a4.111 4.111 0 0 1 -3.287 -.216a3.82 3.82 0 0 1 -1.98 -2.527l-1.376 -6.05a3.669 3.669 0 0 1 .536 -2.86a3.964 3.964 0 0 1 2.489 -1.661l11.25 -2.354c2.137 -.448 4.247 .85 4.713 2.9l1.403 6.162a3.677 3.677 0 0 1 -.697 3.086a4.007 4.007 0 0 1 -2.89 1.512v.002z" />
                    <path d="M9 10l1.208 5l4.292 -4z" />
                </svg></a>
        </div>

    </main>
    
    <?php 
    include 'includes/footer.php';