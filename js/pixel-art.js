var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorColor.style.backgroundColor = colorActual;

  })
);

var paleta = document.getElementById("paleta");
var grillapixeles = document.getElementById("grilla-pixeles");
var Pixeles = [];
var indicadorColor = document.getElementById("indicador-de-color");
var mouseEvent = false;




function paletaColores() {
  for (var i = 0; i < nombreColores.length; i++) {
    var div = document.createElement("div");

    div.addEventListener("click", function (o) {
      indicadorColor.style.backgroundColor = o.target.style.backgroundColor;

    });


    div.style.backgroundColor = nombreColores[i];
    paleta.appendChild(div);


  }
}


var div;
function grilla() {
  for (var i = 1749; i > Pixeles.length; i--) {
    div = document.createElement("div");
    div.style= Pixeles[i];  
    div.className = "pixel";
    grillapixeles.appendChild(div);





    div.addEventListener("click", function (o) {
      o.target.style.backgroundColor = indicadorColor.style.backgroundColor;

    });
  }

};





$("#grilla-pixeles").mousedown(function(){
   mouseEvent = true;
   sentencia();
   console.log(mouseEvent);
});

$("#grilla-pixeles").mouseup(function(){
   mouseEvent = false;
   sentencia();
   console.log(mouseEvent);
});

function pintar(){
  $(".pixel").mouseover(function(o){
    o.target.style.backgroundColor = indicadorColor.style.backgroundColor;
    console.log("pintar");
  });
};


function sentencia(){
  if (mouseEvent){
    pintar();
    console.log("chau");
  }
  else {
    $(".pixel").unbind();
    console.log("asasd");
  }
};






 $("#guardar").click(function(){
   guardarPixelArt();

 });

$("#borrar").click(function(){
  $(".pixel").fadeOut(400); 
  $(".pixel").css("background-color","white");
  $(".pixel").fadeIn(1000);
});

$("#batman").click(function(){
  cargarSuperheroe(batman);
});

$("#wonder").click(function(){
  cargarSuperheroe(wonder);
});

$("#flash").click(function(){
  cargarSuperheroe(flash);
});

$("#invisible").click(function(){
  cargarSuperheroe(invisible);
})



paletaColores();
grilla();

