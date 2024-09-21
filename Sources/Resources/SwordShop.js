const url = 'https://sheets.googleapis.com/v4/spreadsheets/1pEHjimGAl32liRjILOj55aHWf_64SYyVOG08T2kHPFo/values/Swords!A1:G?key=AIzaSyAJos5l0djMCDJQNxXwbyBprvqXkkcBiG8';

$.get(url, function(data) {
const values = data.values;

if (values.length > 0) {
    let Items = $('#Items');

    for (let i = 1; i < values.length; i++) {
        let Name = values[i][0]; 
        let Image = values[i][1];  
        let Price = values[i][2];   
        let Stock = values[i][3];   
        let Type = values[i][4];
        let Aura = values[i][5]
        let Gems = values[i][6]
        let Disabled = Stock == 0 ? 'disabled' : '';
        let WithAura = Aura != null ? '' : 'visibility: hidden;';
        
        let Contenedor = `
        <div class="col-md-4 mb-4">
            <div class="card ${Type} ${Disabled}">
                <div class="card-img-top">
                    <img src="${Image}" alt="${Name}" style="background-color: inherit; border: 30px solid inherit;">
                </div>
                <div class="card-body">
                    <div class="DataInfo">
                        <h2 class="card-title fw-bold">${Name}</h2>
                        <h4 class="card-title">Price: $${Price}</h4>
                        <h4 class="card-text">Stock: ${Stock}</h4>
                        <h4 class="card-text" style="${WithAura}">Aura: ${Aura}</h4>
                        <h4 class="card-text">Gemas: ${Gems}</h4>
                    </div>
                    <div class="ButtonContainer">
                        <button class="btn btn-warning btn-buy ${Disabled}" 
                                data-bs-toggle="modal" 
                                data-bs-target="#formModal"
                                data-name="${Name}"
                                data-price="${Price}"
                                data-stock="${Stock}"
                                data-type="${Type}"
                                data-aura="${Aura}"
                                data-gems"${Gems}">
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;
        $('#Items').append(Contenedor);
    }
}
});

$('#Form').submit(function(event) {
    event.preventDefault();
    
    var extraData = {};
    $('#Form').ajaxSubmit({
        data: extraData,
        dataType: 'jsonp',
        error: function() {
            $('#formModal').modal('hide');
            alert('Petición de compra realizada con éxito. Descargando Ticket de Verificación.');
            function QRVerification() {
                const sheetUrl = 'https://sheets.googleapis.com/v4/spreadsheets/1dhvFivnbt7QlfAG9VGbLrZ7Kv7vkAW0TZnbcKz19b7g/values/QRRequest!A1?key=AIzaSyAJos5l0djMCDJQNxXwbyBprvqXkkcBiG8';
            
                $.get(sheetUrl, function(data) {
                    if (data && data.values && data.values.length > 0 && data.values[0].length > 0) {
                        const imageUrl = data.values[0][0];
                        
                        if (imageUrl) {
                            QRGenerator(imageUrl);
                            console.log('Imagen generada correctamente.');
                        } else {
                            console.error('URL no válida. Reintentando después de 8 segundos...');
                            setTimeout(function() {
                                QRVerification();
                            }, 5000);
                        }
                    } else {
                        console.error('No hay datos en la celda A1 o la respuesta de la API es incorrecta.');
                        setTimeout(function() {
                            console.log('Reintentando obtener la URL después de 8 segundos...');
                            QRVerification();
                        }, 5000);
                    }
                })
            }
            
            QRVerification();
        }
    });
});

function QRGenerator(imageUrl) {
    
    fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
            var downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = "VerificationTicket";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        })
        .catch(error => console.error('Error downloading image:', error));
}

$(document).on('click', '.btn-buy', function() {

    let Name = $(this).data('name');
    let Price = $(this).data('price');
    let Stock = $(this).data('stock');
    let Type = $(this).data('type');
    let Aura = $(this).data('aura');
    let Gems = $(this).data('gems');

    $('#805425399').val(`Product Name: ${Name}\nPrice: $${Price}\nStock: ${Stock}\nType: ${Type}\nAura: ${Aura}\nGems: ${Gems}`);
});

$(window).on('load', function () {
    $('#preloader').fadeOut('slow');
});
