// InfoNavegador.js
// Informacion del navegador
/**
 * Navigator: objeto predefinido que nos da información
 * sobre el navegador que está trabajando en este momento
 */
infoNavegador = new Object();
infoNavegador.nombre = navigator.appName; //
infoNavegador.idioma = navigator.language;
infoNavegador.version = navigator.appVersion;
infoNavegador.plataforma = navigator.platform;
infoNavegador.vendedor = navigator.vendor;
infoNavegador.agente = navigator.userAgent;
infoNavegador.javaActivo = navigator.javaEnabled();

//Prueba de dialectos Firefox
infoNavegador.track = navigator.doNotTrack