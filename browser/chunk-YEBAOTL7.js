import{j as E,k as w,l as x,r as R}from"./chunk-H5AJQWCE.js";import{Ca as h,Fa as c,I as D,Ma as l,N as F,Na as O,Oa as a,Pa as o,Qa as C,Ra as P,Sa as p,Ta as m,U as v,V as _,Xa as s,Ya as u,aa as M,qa as T,sa as r,xa as U}from"./chunk-REJLWPAF.js";import{e as S,f as b,h as f,i as A,j as y}from"./chunk-NEH2W5MY.js";import"./chunk-4CLCTAJ7.js";function N(e,n){if(e&1){let t=P();a(0,"div",3),p("click",function(){v(t);let d=m();return _(d.toggleCard())}),o()}e&2&&l("@backdropAnimation",void 0)}function V(e,n){if(e&1&&C(0,"div",2),e&2){let t=m();l("innerHTML",t.collapsedContent,T)}}function Y(e,n){if(e&1){let t=P();a(0,"div",4),p("closeCard",function(){v(t);let d=m();return _(d.toggleCard())}),o(),a(1,"button",5),p("click",function(d){return v(t),m().toggleCard(),_(d.stopPropagation())}),s(2,"Cerrar"),o()}if(e&2){let t=m();l("innerHTML",t.expandedContent,T)}}var k=class e{title="T\xEDtulo";collapsedContent="Contenido inicial...";expandedContent="Detalles completos...";cardExpanded=new M;isExpanded=!1;toggleCard(n){if(n&&n.target.tagName==="BUTTON"){this.isExpanded=!this.isExpanded;return}n&&n.target.closest(".expanded-content")||(this.isExpanded=!this.isExpanded)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=h({type:e,selectors:[["app-alg-card"]],inputs:{title:"title",collapsedContent:"collapsedContent",expandedContent:"expandedContent"},outputs:{cardExpanded:"cardExpanded"},decls:4,vars:4,consts:[[1,"backdrop"],[1,"card",3,"click"],[1,"collapsed-content",3,"innerHTML"],[1,"backdrop",3,"click"],[1,"expanded-content",3,"closeCard","innerHTML"],[1,"close-btn",3,"click"]],template:function(t,i){t&1&&(c(0,N,1,1,"div",0),a(1,"div",1),p("click",function(){return!i.isExpanded&&i.toggleCard()}),c(2,V,1,1,"div",2)(3,Y,3,1),o()),t&2&&(O(i.isExpanded?0:-1),r(),l("@expandAnimation",i.isExpanded?"expanded":"collapsed"),r(),O(i.isExpanded?-1:2),r(),O(i.isExpanded?3:-1))},dependencies:[x],styles:[".backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background:#00000080;z-index:999}.card[_ngcontent-%COMP%]{background:var(--color-dark-2);border-radius:1em;box-shadow:0 2px 10px #0000002e;cursor:pointer;overflow:hidden;padding:1.5em;font-size:1em;min-width:10em;min-height:8em;margin:0;transition:box-shadow .2s,background .2s;color:var(--color-text-primary);border:1px solid var(--color-border);font-family:Segoe UI,Roboto,Arial,sans-serif}.card[_ngcontent-%COMP%]:hover:not(.expanded){box-shadow:0 4px 24px #00000040;background:var(--color-dark-3)}.expanded-content[_ngcontent-%COMP%]{cursor:auto;pointer-events:auto;max-height:80vh;overflow-y:auto;padding-bottom:1.5em}.collapsed-content[_ngcontent-%COMP%]{color:var(--color-text-primary);font-family:Segoe UI,Roboto,Arial,sans-serif}.collapsed-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .expanded-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.25em;margin-bottom:.5em}.collapsed-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .expanded-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1em;margin-bottom:1em}.expanded-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1em;padding:.5em 1.5em;border-radius:.5em;border:none;background:var(--color-accent);color:var(--color-dark-1);cursor:pointer;margin-top:1em;font-weight:600;letter-spacing:.03em;transition:background .2s,color .2s}.expanded-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:var(--color-dark-3);color:var(--color-accent)}body.no-scroll[_ngcontent-%COMP%]{overflow:hidden}.alg-card-detail[_ngcontent-%COMP%]{font-size:1em;color:var(--color-text-primary);padding:1.2em 0;border-top:1.5px solid var(--color-border);border-bottom:1.5px solid var(--color-border);border-radius:0;box-shadow:none;background:none;display:flex;flex-direction:column;align-items:center;gap:1em;text-align:center}.alg-card-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .alg-card-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{width:100%;text-align:center}.alg-list[_ngcontent-%COMP%]{margin:0 0 .5em;padding:0;list-style:disc inside;font-size:1em;color:var(--color-text-secondary);text-align:left;display:inline-block;width:auto;max-width:90%}.alg-footer[_ngcontent-%COMP%]{margin-top:1em;font-size:.95em;color:var(--color-text-secondary);text-align:center}.alg-tag[_ngcontent-%COMP%]{background:var(--color-accent);color:var(--color-dark-1);border-radius:.4em;padding:.1em .5em;margin-right:.3em;font-weight:500;font-size:.98em}.warn[_ngcontent-%COMP%]{color:#ff5252;font-weight:500}.expanded-content[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]{background:transparent;color:var(--color-accent);border:2px solid var(--color-accent);border-radius:2em;font-size:1.2em;font-weight:700;padding:.3em 1.2em;margin:1.2em auto 0;cursor:pointer;transition:background .2s,color .2s,border .2s;box-shadow:0 2px 8px #00000014;letter-spacing:.04em;display:inline-block}.expanded-content[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover{background:var(--color-accent);color:var(--color-dark-1);border-color:var(--color-accent)}"],data:{animation:[S("expandAnimation",[A("collapsed",f({width:"300px",height:"200px",position:"relative"})),A("expanded",f({width:"90vw",height:"90vh",position:"fixed",top:"5%",left:"5%",zIndex:1e3})),y("collapsed => expanded",b("0.3s ease-in")),y("expanded => collapsed",b("0.3s ease-out"))]),S("backdropAnimation",[y(":enter",[f({opacity:0}),b("0.3s",f({opacity:1}))]),y(":leave",[b("0.3s",f({opacity:0}))])])]}})};var L={production:!0,apiUrl:"https://algorythm-back.onrender.com/api/algoritmo/completar"};var j=class e{constructor(n){this.http=n}procesarCsv(n,t){let i=new FormData;return i.append("file",n),i.append("tipo",t),this.http.post(L.apiUrl,i)}static \u0275fac=function(t){return new(t||e)(F(R))};static \u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"})};function G(e,n){e&1&&(a(0,"span"),s(1,"Enviar"),o())}function B(e,n){e&1&&C(0,"span",22)}function Q(e,n){e&1&&(a(0,"div",23),s(1,"Procesando..."),o())}function J(e,n){if(e&1&&(a(0,"div",24),s(1),o()),e&2){let t=m();r(),u(t.error)}}function W(e,n){if(e&1&&(a(0,"th"),s(1),o()),e&2){let t=n.$implicit;r(),u(t)}}function Z(e,n){if(e&1&&(a(0,"td"),s(1),o()),e&2){let t=n.$implicit;r(),u(t)}}function ee(e,n){if(e&1&&(a(0,"tr"),c(1,Z,2,1,"td",29),o()),e&2){let t=n.$implicit;r(),l("ngForOf",t)}}function te(e,n){if(e&1&&(a(0,"div",25)(1,"h3",26),s(2,"Resultado procesado"),o(),a(3,"div",27)(4,"table",28)(5,"thead")(6,"tr"),c(7,W,2,1,"th",29),o()(),a(8,"tbody"),c(9,ee,2,1,"tr",29),o()()()()),e&2){let t=m();r(7),l("ngForOf",t.datosProcesados[0]),r(2),l("ngForOf",t.datosProcesados.slice(1))}}var I=class e{constructor(n){this.csvService=n}selectedFile=null;algorithm="";loading=!1;error=null;datosProcesados=null;datosProcesadosChange=new M;onFileSelected(n){this.selectedFile=n.target.files[0]||null,this.error=null}onAlgorithmChange(n){this.algorithm=n.target.value}uploadFile(){if(!this.selectedFile||!this.algorithm){this.error="Selecciona un archivo y un algoritmo.";return}this.loading=!0,this.error=null,this.csvService.procesarCsv(this.selectedFile,this.algorithm).subscribe({next:n=>{this.datosProcesados=n,this.datosProcesadosChange.emit(n),this.loading=!1},error:n=>{this.error="Error al procesar el archivo.",this.loading=!1}})}static \u0275fac=function(t){return new(t||e)(U(j))};static \u0275cmp=h({type:e,selectors:[["app-csv-upload"]],outputs:{datosProcesadosChange:"datosProcesadosChange"},decls:31,vars:6,consts:[[1,"csv-upload-results-row"],[1,"csv-upload-container"],[1,"csv-upload-title"],[1,"csv-upload-form",3,"submit"],[1,"form-group"],["for","file"],[1,"icon-upload"],["type","file","id","file","accept",".csv",3,"change"],["for","algorithm"],[1,"icon-algo"],["id","algorithm",3,"change"],["value",""],["value","arbol"],["value","kmeans"],["value","kmodes"],["value","regresion"],["type","submit",3,"disabled"],[4,"ngIf"],["class","loader",4,"ngIf"],["class","csv-upload-loading",4,"ngIf"],["class","csv-upload-error",4,"ngIf"],["class","csv-result-card",4,"ngIf"],[1,"loader"],[1,"csv-upload-loading"],[1,"csv-upload-error"],[1,"csv-result-card"],[1,"csv-result-title"],[1,"csv-result-table-container"],[1,"csv-result-table"],[4,"ngFor","ngForOf"]],template:function(t,i){t&1&&(a(0,"div",0)(1,"div",1)(2,"h3",2),s(3,"Subir archivo CSV y completar datos"),o(),a(4,"form",3),p("submit",function(g){return i.uploadFile(),g.preventDefault()}),a(5,"div",4)(6,"label",5),C(7,"span",6),s(8," Archivo CSV:"),o(),a(9,"input",7),p("change",function(g){return i.onFileSelected(g)}),o()(),a(10,"div",4)(11,"label",8),C(12,"span",9),s(13," Algoritmo:"),o(),a(14,"select",10),p("change",function(g){return i.onAlgorithmChange(g)}),a(15,"option",11),s(16,"Selecciona un algoritmo"),o(),a(17,"option",12),s(18,"\xC1rboles de Decisi\xF3n"),o(),a(19,"option",13),s(20,"K-Means"),o(),a(21,"option",14),s(22,"K-Modes"),o(),a(23,"option",15),s(24,"Regresi\xF3n Lineal"),o()()(),a(25,"button",16),c(26,G,2,0,"span",17)(27,B,1,0,"span",18),o(),c(28,Q,2,0,"div",19)(29,J,2,1,"div",20),o()(),c(30,te,10,2,"div",21),o()),t&2&&(r(25),l("disabled",i.loading),r(),l("ngIf",!i.loading),r(),l("ngIf",i.loading),r(),l("ngIf",i.loading),r(),l("ngIf",i.error),r(),l("ngIf",i.datosProcesados&&i.datosProcesados.length>0))},dependencies:[x,E,w],styles:['.csv-upload-container[_ngcontent-%COMP%]{padding:2rem 2.5rem 1.5rem;border:1.5px solid var(--color-border);border-radius:1.2em;background:var(--color-dark-2);max-width:420px;margin:0 auto;color:var(--color-text-primary);font-family:Segoe UI,Roboto,Arial,sans-serif;box-shadow:0 4px 24px #0000002e}.csv-upload-title[_ngcontent-%COMP%]{color:var(--color-accent);font-size:1.3em;margin-bottom:1.2em;text-align:center;letter-spacing:.01em}.csv-upload-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.2em}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.4em}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:var(--color-text-secondary);font-size:1em;font-weight:500;margin-bottom:.2em;display:flex;align-items:center;gap:.5em}input[type=file][_ngcontent-%COMP%], select[_ngcontent-%COMP%]{background:var(--color-dark-3);color:var(--color-text-primary);border:1px solid var(--color-border);border-radius:.4em;padding:.4em .6em;font-size:1em}button[type=submit][_ngcontent-%COMP%]{background:var(--color-accent);color:var(--color-dark-1);border:none;padding:.7em 2em;border-radius:.6em;cursor:pointer;font-size:1.1em;font-weight:600;letter-spacing:.03em;box-shadow:0 2px 8px #0000001a;transition:background .2s,color .2s;display:flex;align-items:center;justify-content:center;gap:.5em}button[disabled][_ngcontent-%COMP%], button[disabled][_ngcontent-%COMP%]:hover{background:#3a3a3a;color:#888;cursor:not-allowed}.csv-upload-loading[_ngcontent-%COMP%]{color:var(--color-accent);font-size:1em;margin-top:.7em;text-align:center}.csv-upload-error[_ngcontent-%COMP%]{color:#ff5252;margin-top:.7em;text-align:center;font-weight:500}.loader[_ngcontent-%COMP%]{border:3px solid var(--color-dark-3);border-top:3px solid var(--color-accent);border-radius:50%;width:1.2em;height:1.2em;animation:_ngcontent-%COMP%_spin .8s linear infinite;display:inline-block}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.icon-upload[_ngcontent-%COMP%]:before{content:"\\1f4e5";font-size:1.1em;margin-right:.2em}.icon-algo[_ngcontent-%COMP%]:before{content:"\\2699";font-size:1.1em;margin-right:.2em}.csv-upload-results-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:1.2rem;justify-content:center;align-items:flex-start;margin-top:2.5rem;width:100%;max-width:900px;margin-left:auto;margin-right:auto}.csv-result-card[_ngcontent-%COMP%]{background:var(--color-dark-3);border-radius:.7em;box-shadow:0 2px 8px #0000001a;border:1px solid var(--color-border);color:var(--color-text-primary);font-family:Segoe UI,Roboto,Arial,sans-serif;padding:1.5em 1.5em 1.2em;min-width:320px;max-width:480px;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;margin:0}.csv-result-title[_ngcontent-%COMP%]{color:var(--color-accent);font-size:1.2em;margin-bottom:1em;text-align:center}.csv-result-table-container[_ngcontent-%COMP%]{width:100%;overflow-x:auto}.csv-result-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-size:1em;background:none;color:var(--color-text-primary)}.csv-result-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .csv-result-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid var(--color-border);padding:.5em .8em;text-align:center}.csv-result-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:var(--color-dark-2);color:var(--color-accent);font-weight:600}.csv-result-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n)   td[_ngcontent-%COMP%]{background:var(--color-dark-2)}']})};function ne(e,n){if(e&1){let t=P();a(0,"app-alg-card",5),p("cardExpanded",function(d){let g=v(t).index,q=m();return _(q.onCardExpand(d,g))}),o()}if(e&2){let t=n.$implicit;l("title",t.title)("collapsedContent",t.collapsedContent)("expandedContent",t.expandedContent)}}function oe(e,n){if(e&1&&(a(0,"th"),s(1),o()),e&2){let t=n.$implicit;r(),u(t)}}function ae(e,n){if(e&1&&(a(0,"td"),s(1),o()),e&2){let t=n.$implicit;r(),u(t)}}function ie(e,n){if(e&1&&(a(0,"tr"),c(1,ae,2,1,"td",10),o()),e&2){let t=n.$implicit;r(),l("ngForOf",t)}}function re(e,n){if(e&1&&(a(0,"div",6)(1,"h3",7),s(2,"Resultado procesado"),o(),a(3,"div",8)(4,"table",9)(5,"thead")(6,"tr"),c(7,oe,2,1,"th",10),o()(),a(8,"tbody"),c(9,ie,2,1,"tr",10),o()()()()),e&2){let t=m();r(7),l("ngForOf",t.datosProcesados[0]),r(2),l("ngForOf",t.datosProcesados.slice(1))}}var K=class e{cards=[{title:"\xC1rboles de Decisi\xF3n",collapsedContent:"Modelo de aprendizaje supervisado usado para clasificaci\xF3n y regresi\xF3n. Visualiza decisiones como ramas.",expandedContent:`
      <div class="alg-card-detail">
        <h3>\xBFQu\xE9 es un \xC1rbol de Decisi\xF3n?</h3>
        <p>Un \xE1rbol de decisi\xF3n es un modelo predictivo que representa decisiones y sus posibles consecuencias en forma de \xE1rbol. Cada nodo interno representa una pregunta o condici\xF3n sobre una caracter\xEDstica, cada rama representa el resultado de esa condici\xF3n y cada hoja representa una predicci\xF3n o resultado final.</p>
        <ul class="alg-list">
          <li><strong>F\xE1cil de interpretar y visualizar</strong></li>
          <li>Puede manejar variables categ\xF3ricas y num\xE9ricas</li>
          <li>Propenso al sobreajuste si no se poda correctamente</li>
        </ul>
        <h4>Aplicaciones</h4>
        <ul class="alg-list">
          <li>Clasificaci\xF3n de datos (por ejemplo, diagn\xF3stico m\xE9dico, segmentaci\xF3n de clientes).</li>
          <li>Problemas de regresi\xF3n.</li>
        </ul>
        <h4>Ventajas</h4>
        <ul class="alg-list">
          <li>No requiere normalizaci\xF3n de datos.</li>
          <li>Explicabilidad y transparencia.</li>
        </ul>
        <h4>Desventajas</h4>
        <ul class="alg-list">
          <li>Sensible a peque\xF1os cambios en los datos.</li>
          <li>Puede crear \xE1rboles muy complejos (sobreajuste).</li>
        </ul>
        <h4>Paso a paso: \xBFC\xF3mo construir un \xC1rbol de Decisi\xF3n?</h4>
        <ol class="alg-list">
          <li><strong>Selecciona la mejor caracter\xEDstica para dividir:</strong> Calcula una m\xE9trica como <em>ganancia de informaci\xF3n</em> (ID3), <em>\xEDndice Gini</em> (CART) o <em>ganancia de informaci\xF3n normalizada</em> (C4.5) para cada caracter\xEDstica. Elige la que mejor separa las clases.</li>
          <li><strong>Divide el conjunto de datos:</strong> Separa los datos en subconjuntos seg\xFAn los valores de la caracter\xEDstica seleccionada.</li>
          <li><strong>Repite recursivamente:</strong> Para cada subconjunto, repite el proceso de selecci\xF3n de caracter\xEDstica y divisi\xF3n, creando nuevos nodos y ramas.</li>
          <li><strong>Condici\xF3n de parada:</strong> Det\xE9n la divisi\xF3n si:
            <ul>
              <li>Todos los ejemplos del nodo pertenecen a la misma clase.</li>
              <li>No quedan caracter\xEDsticas para dividir.</li>
              <li>Se alcanza una profundidad m\xE1xima o un n\xFAmero m\xEDnimo de muestras.</li>
            </ul>
          </li>
          <li><strong>Asigna una clase a la hoja:</strong> La clase m\xE1s frecuente en ese nodo se asigna como predicci\xF3n.</li>
        </ol>
        <h4>Ejemplo matem\xE1tico (Ganancia de informaci\xF3n):</h4>
        <div style="text-align:left;max-width:700px;margin:0 auto;">
          <p>Sup\xF3n que tienes un conjunto de datos con la variable objetivo <strong>Y</strong> y una caracter\xEDstica <strong>X</strong>:</p>
          <ol>
            <li>Calcula la entrop\xEDa de Y: <br>
              <code>Entrop\xEDa(Y) = - sum p_i log_2(p_i)</code>
            </li>
            <li>Para cada valor de X, calcula la entrop\xEDa condicional de Y dado X.</li>
            <li>La ganancia de informaci\xF3n es:<br>
              <code>IG(Y, X) = Entrop\xEDa(Y) - Entrop\xEDa(Y|X)</code>
            </li>
            <li>Elige la X con mayor IG para dividir.</li>
          </ol>
        </div>
        <div class="alg-footer">Algoritmos populares: <span class="alg-tag">ID3</span>, <span class="alg-tag">C4.5</span>, <span class="alg-tag">CART</span></div>
      </div>
    `},{title:"K-Modes",collapsedContent:"Algoritmo de clustering para datos categ\xF3ricos. Agrupa objetos similares en K grupos usando coincidencia de modos.",expandedContent:`
      <div class="alg-card-detail">
        <h3>\xBFQu\xE9 es K-Modes?</h3>
        <p>K-Modes es un algoritmo de <strong>clustering</strong> dise\xF1ado para agrupar datos categ\xF3ricos en <strong>K</strong> grupos (clusters) de modo que los objetos dentro de un mismo grupo sean lo m\xE1s similares posible. Es una extensi\xF3n de K-Means, pero en vez de promedios usa <strong>modos</strong> (valores m\xE1s frecuentes) para definir el centroide de cada cluster.</p>
        <ul class="alg-list">
          <li>Ideal para variables categ\xF3ricas (no num\xE9ricas).</li>
          <li>Utiliza la <strong>distancia de coincidencia simple</strong> (Hamming) para medir similitud.</li>
          <li>El centroide de cada cluster es un vector de modos.</li>
        </ul>
        <h4>Aplicaciones</h4>
        <ul class="alg-list">
          <li>Segmentaci\xF3n de clientes por preferencias o categor\xEDas.</li>
          <li>Agrupamiento de documentos, productos o perfiles.</li>
        </ul>
        <h4>Ventajas</h4>
        <ul class="alg-list">
          <li>R\xE1pido y eficiente para grandes conjuntos de datos categ\xF3ricos.</li>
          <li>F\xE1cil de interpretar y de implementar.</li>
        </ul>
        <h4>Desventajas</h4>
        <ul class="alg-list">
          <li>Requiere especificar el n\xFAmero de clusters K.</li>
          <li>Sensible a la inicializaci\xF3n de los centroides.</li>
        </ul>
        <h4>Paso a paso: \xBFC\xF3mo funciona K-Modes?</h4>
        <ol class="alg-list">
          <li><strong>Inicializaci\xF3n:</strong> Selecciona K objetos aleatorios como centroides iniciales (modos).</li>
          <li><strong>Asignaci\xF3n:</strong> Para cada objeto, calcula la distancia de coincidencia simple a cada centroide y as\xEDgnalo al cluster m\xE1s cercano.</li>
          <li><strong>Actualizaci\xF3n:</strong> Para cada cluster, calcula el nuevo modo (valor m\xE1s frecuente) de cada atributo y actualiza el centroide.</li>
          <li><strong>Repite:</strong> Repite los pasos de asignaci\xF3n y actualizaci\xF3n hasta que los centroides no cambien o se alcance un n\xFAmero m\xE1ximo de iteraciones.</li>
        </ol>
        <h4>Ejemplo matem\xE1tico (Distancia de coincidencia simple):</h4>
        <div style="text-align:left;max-width:700px;margin:0 auto;">
          <p>Para dos objetos categ\xF3ricos <strong>X</strong> y <strong>Y</strong> de n atributos:</p>
          <code>dist(X, Y) = sum_{i=1}^n [x_i 
eq y_i]</code>
          <p>Donde <code>[x_i 
eq y_i]</code> es 1 si los valores son diferentes y 0 si son iguales.</p>
        </div>
        <div class="alg-footer">Algoritmo popular: <span class="alg-tag">K-Modes</span></div>
      </div>
    `},{title:"K-Means",collapsedContent:"Algoritmo de clustering para datos num\xE9ricos. Agrupa objetos en K grupos minimizando la distancia a los centroides.",expandedContent:`
      <div class="alg-card-detail">
        <h3>\xBFQu\xE9 es K-Means?</h3>
        <p>K-Means es un algoritmo de <strong>clustering</strong> que agrupa datos num\xE9ricos en <strong>K</strong> grupos (clusters) de tal forma que los objetos dentro de un mismo grupo sean lo m\xE1s similares posible. El centro de cada grupo se llama <strong>centroide</strong> y se calcula como el promedio de los puntos asignados a ese cluster.</p>
        <ul class="alg-list">
          <li>Ideal para variables num\xE9ricas.</li>
          <li>Utiliza la <strong>distancia euclidiana</strong> para medir similitud.</li>
          <li>El centroide es el promedio de los puntos del cluster.</li>
        </ul>
        <h4>Aplicaciones</h4>
        <ul class="alg-list">
          <li>Segmentaci\xF3n de clientes por comportamiento de compra.</li>
          <li>Agrupamiento de im\xE1genes, documentos o datos biom\xE9tricos.</li>
        </ul>
        <h4>Ventajas</h4>
        <ul class="alg-list">
          <li>R\xE1pido y eficiente para grandes conjuntos de datos num\xE9ricos.</li>
          <li>F\xE1cil de interpretar y de implementar.</li>
        </ul>
        <h4>Desventajas</h4>
        <ul class="alg-list">
          <li>Requiere especificar el n\xFAmero de clusters K.</li>
          <li>Sensible a la inicializaci\xF3n de los centroides y a valores at\xEDpicos.</li>
        </ul>
        <h4>Paso a paso: \xBFC\xF3mo funciona K-Means?</h4>
        <ol class="alg-list">
          <li><strong>Inicializaci\xF3n:</strong> Selecciona K puntos aleatorios como centroides iniciales.</li>
          <li><strong>Asignaci\xF3n:</strong> Para cada punto, calcula la distancia euclidiana a cada centroide y as\xEDgnalo al cluster m\xE1s cercano.</li>
          <li><strong>Actualizaci\xF3n:</strong> Para cada cluster, calcula el nuevo centroide como el promedio de los puntos asignados.</li>
          <li><strong>Repite:</strong> Repite los pasos de asignaci\xF3n y actualizaci\xF3n hasta que los centroides no cambien o se alcance un n\xFAmero m\xE1ximo de iteraciones.</li>
        </ol>
        <h4>Ejemplo matem\xE1tico (Distancia euclidiana):</h4>
        <div style="text-align:left;max-width:700px;margin:0 auto;">
          <p>Para dos puntos <strong>X</strong> y <strong>Y</strong> en n dimensiones:</p>
          <code>dist(X, Y) = sqrt{sum_{i=1}^n (x_i - y_i)^2}</code>
        </div>
        <div class="alg-footer">Algoritmo popular: <span class="alg-tag">K-Means</span></div>
      </div>
    `},{title:"Regresi\xF3n Lineal",collapsedContent:"Algoritmo de aprendizaje supervisado para predecir valores num\xE9ricos continuos a partir de variables independientes.",expandedContent:`
      <div class="alg-card-detail">
        <h3>\xBFQu\xE9 es la Regresi\xF3n Lineal?</h3>
        <p>La regresi\xF3n lineal es un algoritmo de <strong>aprendizaje supervisado</strong> que modela la relaci\xF3n entre una variable dependiente (Y) y una o m\xE1s variables independientes (X) mediante una l\xEDnea recta. Se utiliza para predecir valores num\xE9ricos continuos.</p>
        <ul class="alg-list">
          <li>Predice valores num\xE9ricos (por ejemplo, precios, temperaturas, ventas).</li>
          <li>La relaci\xF3n se representa como una l\xEDnea recta: <code>Y = aX + b</code> (simple) o <code>Y = a_1X_1 + a_2X_2 + ... + b</code> (m\xFAltiple).</li>
          <li>Los coeficientes se ajustan para minimizar el error cuadr\xE1tico medio.</li>
        </ul>
        <h4>Aplicaciones</h4>
        <ul class="alg-list">
          <li>Predicci\xF3n de precios de casas, ventas, demanda, etc.</li>
          <li>An\xE1lisis de tendencias y relaciones entre variables.</li>
        </ul>
        <h4>Ventajas</h4>
        <ul class="alg-list">
          <li>F\xE1cil de interpretar y de implementar.</li>
          <li>R\xE1pido para entrenamiento y predicci\xF3n.</li>
        </ul>
        <h4>Desventajas</h4>
        <ul class="alg-list">
          <li>Supone relaci\xF3n lineal entre variables.</li>
          <li>Sensible a valores at\xEDpicos y multicolinealidad.</li>
        </ul>
        <h4>Paso a paso: \xBFC\xF3mo funciona la Regresi\xF3n Lineal?</h4>
        <ol class="alg-list">
          <li><strong>Plantea el modelo:</strong> <code>Y = aX + b</code> (simple) o <code>Y = a_1X_1 + ... + a_nX_n + b</code> (m\xFAltiple).</li>
          <li><strong>Calcula los coeficientes:</strong> Utiliza el m\xE9todo de <em>m\xEDnimos cuadrados</em> para encontrar los valores de <code>a</code> y <code>b</code> que minimizan el error cuadr\xE1tico medio.</li>
          <li><strong>Eval\xFAa el modelo:</strong> Calcula m\xE9tricas como <em>R\xB2</em> y <em>error cuadr\xE1tico medio</em> para medir el ajuste.</li>
          <li><strong>Predice nuevos valores:</strong> Sustituye los valores de X en la ecuaci\xF3n ajustada.</li>
        </ol>
        <h4>Ejemplo matem\xE1tico (M\xEDnimos cuadrados):</h4>
        <div style="text-align:left;max-width:700px;margin:0 auto;">
          <p>Para datos <code>(x_1, y_1), ..., (x_n, y_n)</code>:</p>
          <code>a = \frac{nsum x_iy_i - sum x_i sum y_i}{nsum x_i^2 - (sum x_i)^2}</code><br>
          <code>b = \frac{sum y_i - asum x_i}{n}</code>
        </div>
        <div class="alg-footer">Algoritmo popular: <span class="alg-tag">Regresi\xF3n Lineal</span></div>
      </div>
    `}];datosProcesados=null;onDatosProcesados(n){this.datosProcesados=n}onCardExpand(n,t){n?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll")}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=h({type:e,selectors:[["app-home"]],decls:5,vars:2,consts:[[1,"card-grid"],[3,"title","collapsedContent","expandedContent","cardExpanded",4,"ngFor","ngForOf"],[1,"csv-upload-results-row"],[3,"datosProcesadosChange"],["class","csv-result-card",4,"ngIf"],[3,"cardExpanded","title","collapsedContent","expandedContent"],[1,"csv-result-card"],[1,"csv-result-title"],[1,"csv-result-table-container"],[1,"csv-result-table"],[4,"ngFor","ngForOf"]],template:function(t,i){t&1&&(a(0,"div",0),c(1,ne,1,3,"app-alg-card",1),o(),a(2,"div",2)(3,"app-csv-upload",3),p("datosProcesadosChange",function(g){return i.onDatosProcesados(g)}),o(),c(4,re,10,2,"div",4),o()),t&2&&(r(),l("ngForOf",i.cards),r(3),l("ngIf",i.datosProcesados&&i.datosProcesados.length>0))},dependencies:[k,x,E,w,I],styles:[".card-grid[_ngcontent-%COMP%]{display:grid;gap:1.5rem;justify-items:center;align-items:center;margin:2rem auto;width:max-content}.card-grid[_ngcontent-%COMP%]   app-alg-card[_ngcontent-%COMP%]:nth-child(1){grid-area:1 / 1 / span 2 / span 2}.card-grid[_ngcontent-%COMP%]   app-alg-card[_ngcontent-%COMP%]:nth-child(2){grid-area:1 / 3 / span 2 / span 2}.card-grid[_ngcontent-%COMP%]   app-alg-card[_ngcontent-%COMP%]:nth-child(3){grid-area:3 / 1 / span 2 / span 2}.card-grid[_ngcontent-%COMP%]   app-alg-card[_ngcontent-%COMP%]:nth-child(4){grid-area:3 / 3 / span 2 / span 2}.card-grid[_ngcontent-%COMP%]   app-alg-card[_ngcontent-%COMP%]{width:100%;height:100%;min-width:12em;min-height:10em;max-width:100%;max-height:100%;display:flex}body.no-scroll[_ngcontent-%COMP%]{overflow:hidden}"]})};export{K as HomeComponent};
