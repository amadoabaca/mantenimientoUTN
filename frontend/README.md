# Documentación del Frontend

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 18.2.7.

## Configuracion inicial
Inicializar el servidor
```bash
npm install
ng serve
```
Dependencias
```bash
@angular/animations : ^18.2.0
@angular/common : ^18.2.0
@angular/compiler : ^18.2.0
@angular/core : ^18.2.0
@angular/forms : ^18.2.0
@angular/platform-browser : ^18.2.0
@angular/platform-browser-dynamic : ^18.2.0
@angular/platform-server : ^18.2.0
@angular/router : ^18.2.0
@angular/ssr : ^18.2.7
express : ^4.18.2
front : file:
rxjs : ~7.8.0
tslib : ^2.3.0
zone.js : ~0.14.10
```
## Estructura del Proyecto
- `public/`
- `src/`
  - `app/`
    - `components/`
    - `guars/`
    - `interfaces/`
    - `services/`
    - `app.component.html`
    - `app.component.css`
    - `app.component.ts`
    - `app.config.ts`
    - `app.modules.ts`
    - `app.routes.ts`
  - `assets/`
  - `index.html`
  - `style.css`
  - `main.ts`
- `angular.json`
- `README.md`
- `package.json`
- `tsconfig.json`
- `tsconfig.app.json`


# ¿Como usar el sistema?

## Seleccionar un perfil para ingresar
<p align="left">
  Elige el perfil asignado para acceder al sistema.
</p>

![Login](https://github.com/amadoabaca/mantenimientoUTN/blob/master/frontend/public/interfaz/1-login.png)

---

## Ingresar usuario y contraseña
<p align="left">
  Ingresa tus credenciales (usuario y contraseña) para autenticarse en el sistema.
</p>

![Login](https://github.com/amadoabaca/mantenimientoUTN/blob/master/frontend/public/interfaz/2-login.png)

---

## Panel de control operario
<p align="left">
  Una vez autenticado, los operarios tienen acceso a un panel personalizado que les permite gestionar sus ordenes de trabajo.
</p>

![Panel de control operario](https://github.com/amadoabaca/mantenimientoUTN/blob/master/frontend/public/interfaz/4-panel-operario.png)

---

## Panel de control administrador
<p align="left">
  Los administradores tienen acceso a un panel avanzado con opciones para gestionar usuarios, solicitudes y ver el historial de OT.
</p>

![Panel de control administrador](https://github.com/amadoabaca/mantenimientoUTN/blob/master/frontend/public/interfaz/5-panel-admin.png)

---

## 1. Solicitar orden de trabajo
<p align="left">
  Los operarios pueden solicitar una orden de trabajo a través de un formulario.
</p>

![Solicitar OT](https://github.com/amadoabaca/mantenimientoUTN/blob/master/frontend/public/interfaz/7-generar-orden-trabajo.png)

---

## 2. Registrar usuario
<p align="left">
  Los administradores tienen la posibilidad de registrar nuevos usuarios en el sistema mediante un formulario de registro.
</p>

![Registro](https://github.com/amadoabaca/mantenimientoUTN/blob/master/frontend/public/interfaz/8-registro.png)

---

## 3. Ver el historial de órdenes de trabajo
<p align="left">
  Consulta el historial de órdenes de trabajo para obtener información sobre tareas anteriores.
</p>

![Historial](https://github.com/amadoabaca/mantenimientoUTN/blob/master/frontend/public/interfaz/9-historial.png)

---

## 4. Visualizar la orden de trabajo
<p align="left">
  Detalle de una orden de trabajo específica.
</p>

![Ver OT](https://github.com/amadoabaca/mantenimientoUTN/blob/master/frontend/public/interfaz/6-orden-trabajo.png)


