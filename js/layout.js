
function ajustarTexto(){
    var columnasWidgets = document.getElementsByName('widget-columnas')
    var columnasAside   = document.getElementsByName('aside-columnas');
    var columnasArticle = document.getElementsByName('articulo-columnas');

    windowSize=window.innerWidth;

    if(windowSize>962){
        for (i=0; i<columnasWidgets.length;i++){
            columnasWidgets[i].textContent='3 Columnas';
        }
        columnasAside[0].textContent='4 Columnas';
        columnasArticle[0].textContent='8 Columnas';
        
    }
    if(windowSize>=768 && windowSize<=962){
        for (i=0; i<columnasWidgets.length;i++){
            columnasWidgets[i].textContent='4 Columnas';
        }
    }
    if(windowSize<768){
        for (i=0; i<columnasWidgets.length;i++){
            columnasWidgets[i].textContent='12 Columnas';
        }
        columnasAside[0].textContent='12 Columnas';
        columnasArticle[0].textContent='12 Columnas';
    }

}

window.onresize=ajustarTexto;