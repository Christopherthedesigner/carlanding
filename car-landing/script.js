function changeCarColor(color) {
    const carImage = document.getElementById('car');
    const titleElement = document.getElementById('carTitle');
    switch(color) {
        case 'kaki':
            carImage.src = './img/dacia-kaki.jpg';
            titleElement.innerText = 'LICHEN KAKI';
            break;
        case 'rouge':
            carImage.src = './img/dacia-red.jpg';
            titleElement.innerText = 'ROUGE GOGI';
            break;
        case 'bleu':
            carImage.src = './img/dacia-blue.jpg';
            titleElement.innerText = 'BLEU CENOTE';
            break;
        case 'blanc':
            carImage.src = './img/dacia-white.jpg';
            titleElement.innerText = 'BLANC KAOLIN';
            break;
        case 'grey':
            carImage.src = './img/dacia-grey.jpg';
            titleElement.innerText = 'GRIS ÉCLAIR';
            break;
        case 'black':
            carImage.src = './img/dacia-ardoise.jpg';
            titleElement.innerText = 'BLEU ARDOISE';
            break;
        default:
            carImage.src = './img/dacia-kaki.jpg';
            titleElement.innerText = 'Default LICHEN KAKi';
            break;
    }
}

document.getElementById('arrowLeftMenu').addEventListener('click', function() {
    document.getElementById('menuToggle').checked = false;
  });



  $(function() {
    $('#loadContact').on('click', function() {
        $.get('modal.html', function(data) {
            $('#AjaxTextContent').html(data);
            $('#AjaxModal').fadeIn();
        }).fail(function() {
            console.error('Error fetching modal content');
        });
    });

    $(document).on('click', '#AjaxModal, #CloseTrigger', function(e) {
        if (e.target.id === 'AjaxModal' || e.target.id === 'CloseTrigger') {
            $('#AjaxModal').fadeOut();
        }
    });
});

  
  