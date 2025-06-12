# Informe de Despliegue

## Descripción

Aplicación web simple desarrollada en HTML, CSS y JavaScript con un formulario de registro.

## Proceso de CI/CD

- El proyecto cuenta con un workflow de GitHub Actions para CI/CD.
- El pipeline actual ejecuta un build y simula pruebas en cada push a `main`.
- Se configuró un segundo workflow (`gh-pages-deploy.yml`) que realiza el despliegue automático a GitHub Pages.

## Proceso de Despliegue

- Cada commit a `main` activa el workflow de deploy automático.
- La acción `gh-pages` publica la app directamente en GitHub Pages.
- El resultado es visible en la URL de producción.

## Monitoreo y Logging

- Para esta app estática simple se utiliza UptimeRobot para monitoreo de disponibilidad.
- En caso de escalar la app a un backend, se pueden integrar servicios como Sentry o LogRocket.

## Problemas encontrados

- Se ajustó el workflow inicial para evitar fallos relacionados con `npm install` innecesarios.
- Se automatizó el proceso de deploy para evitar dependencias manuales.

## URL de producción

👉 https://edsel675.github.io/mi-app-web/
