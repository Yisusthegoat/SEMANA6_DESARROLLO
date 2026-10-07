# CampusConecta

SPA de demostracion para consultar un directorio de contactos universitarios ficticios y registrar contactos locales mediante un formulario.

Los usuarios obtenidos desde la API son datos ficticios de demostracion. No representan personas reales de una universidad.

## Instalacion

```bash
npm install
```

## Ejecucion

```bash
npm run dev
```

Abrir la URL local que muestre Vite, normalmente:

```text
http://localhost:5173/
```

## Compilacion

```bash
npm run build
```

## Rutas

- `/`: inicio, aviso de datos demo y accesos principales.
- `/directorio`: listado de contactos, busqueda, carga, error y lista vacia.
- `/registro`: formulario controlado para crear contactos locales.
- `/acerca`: tecnologias y conceptos usados.
- `*`: pagina 404 con enlace al inicio.

## API

La aplicacion consume:

```text
https://jsonplaceholder.typicode.com/users
```

El consumo se realiza con Axios, `async/await`, `try/catch` y `AbortController`. Si React ejecuta efectos adicionales en desarrollo por `StrictMode`, la solicitud anterior se cancela y no se muestra como error de red.

## Limitaciones

- Los contactos registrados son locales y se pierden al recargar la pagina.
- No hay inicio de sesion.
- No se escribe informacion en la API.
- La busqueda filtra por nombre o correo.

## Evidencias sugeridas

- Navegacion entre rutas sin recarga completa.
- Indicador visual de ruta activa.
- Carga correcta de contactos de la API.
- Error de red y recuperacion con el boton Reintentar.
- Busqueda sin resultados.
- Validaciones del formulario.
- Contacto registrado apareciendo en el directorio.
- Pagina 404.
- Consola sin errores y `npm run build` correcto.

En DevTools revisar:

- Console: que no existan errores de React, rutas o solicitudes.
- Network: que la solicitud a `jsonplaceholder.typicode.com/users` responda correctamente o muestre el error esperado al simular fallo.

## Documentacion de apoyo IA

En `src/App.jsx` se documenta el apoyo aplicado al flujo de props:

```js
// IA: organizar el flujo de contactos locales entre Registro y Directorio -> Solucion manual: el estado vive en App y se transmite por props a las rutas.
```

## Subir a GitHub

```bash
git init
git add .
git commit -m "Crear SPA CampusConecta"
git branch -M main
git remote add origin URL_DEL_REPOSITORIO
git push -u origin main
```

Reemplazar `URL_DEL_REPOSITORIO` por el enlace real del repositorio creado en GitHub. No se publica automaticamente desde este proyecto.
