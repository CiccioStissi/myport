document.addEventListener('DOMContentLoaded', () => {
    const downloadForm = document.getElementById('download-form');
    const downloadLink = document.getElementById('download-link');

    downloadForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impedisce il ricaricamento della pagina

        const name = document.getElementById('download-name').value;
        const email = document.getElementById('download-email').value;
        const phone = document.getElementById('download-phone').value;

        if (name && email && phone) {
            // Qui potresti inviare i dati a un server per registrarli
            console.log(`Dati ricevuti per il download: Nome: ${name}, Email: ${email}, Telefono: ${phone}`);

            // Attiva il download del file
            downloadLink.click();
            alert('Il download del curriculum è iniziato!');

            // Opzionale: pulisci i campi del modulo dopo il download
            downloadForm.reset();
        } else {
            alert('Per favore, compila tutti i campi per scaricare il curriculum.');
        }
    });
});