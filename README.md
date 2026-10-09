## 🌿 Estrategia de ramas

El proyecto utiliza una estrategia de ramificación que separa el despliegue de la aplicación, el mantenimiento del MVP y el desarrollo de nuevas funcionalidades del CRM.

### 🚀 `main` — Versión de producción

Rama destinada exclusivamente al despliegue de la versión vigente del proyecto.

* Contendrá la versión estable publicada de la aplicación, correspondiente inicialmente al MVP (*Minimum Viable Product*).
* Recibirá cambios desde `MVP` cuando las modificaciones estén estables y listas para su publicación.
* Deberá mantenerse alineada con la versión desplegada en `gh-pages`, teniendo en cuenta las diferencias que puedan existir entre el código fuente y los archivos compilados.
* No se utilizará para desarrollar funcionalidades directamente.

### 🧪 `MVP` — Mantenimiento y evolución del MVP

Rama destinada al mantenimiento y desarrollo de pequeñas funcionalidades y ajustes requeridos sobre el MVP existente.

* Los cambios y desarrollos menores del MVP se realizarán directamente sobre esta rama.
* No será necesario crear una rama independiente por cada funcionalidad o ajuste.
* Una vez que los cambios se encuentren estables y hayan sido validados, podrán integrarse en `main` y desplegarse en `gh-pages`, según corresponda.
* Su objetivo es facilitar la evolución del MVP sin interferir con el desarrollo de funcionalidades más amplias del CRM.

### 🛠️ `development` — Integración del proyecto

Rama destinada a integrar las funcionalidades desarrolladas para el proyecto, incluido el CRM.

* Mantendrá una versión integrada y estable de las funcionalidades en desarrollo.
* Servirá como punto de partida para crear ramas de funcionalidades específicas del CRM.
* Recibirá las funcionalidades una vez desarrolladas y validadas mediante el flujo de integración establecido.

### ✨ `feature/X` — Desarrollo de funcionalidades del CRM

Ramas creadas a partir de `development` para desarrollar funcionalidades específicas del CRM.

* Cada rama representará una funcionalidad o mejora concreta.
* Se utilizará la convención `feature/nombre-funcionalidad` para identificar cada desarrollo.
* Una vez terminada y validada la funcionalidad, se integrará en `development` mediante un *Pull Request*.
* Estas ramas deberán mantenerse enfocadas en una funcionalidad específica y no se utilizarán para los ajustes menores del MVP.

**Ejemplos:**

* `feature/gestion-clientes`
* `feature/seguimiento-ventas`
* `feature/reportes-crm`

### 🌐 `gh-pages` — Publicación web

Rama utilizada por GitHub Pages para publicar la página web.

* Contendrá los archivos necesarios para desplegar la versión pública de la aplicación.
* Se actualizará cuando una versión del MVP esté lista para publicarse.
* Podrá recibir los archivos generados a partir de `MVP` o `main`, según el proceso de despliegue definido para el proyecto.

---

### 📌 Resumen de ramas

| Rama          | Propósito                             | Flujo de trabajo                                           |
| ------------- | ------------------------------------- | ---------------------------------------------------------- |
| `main`        | Versión de producción                 | Recibe versiones estables listas para publicación          |
| `MVP`         | Evolución del MVP                     | Desarrollos menores directamente sobre la rama             |
| `development` | Integración del proyecto y CRM        | Punto de partida para las ramas `feature/*`                |
| `feature/X`   | Desarrollo de funcionalidades del CRM | Se crea desde `development` y se integra de vuelta en ella |
| `gh-pages`    | Despliegue web                        | Recibe los archivos de la versión que se publicará         |

### 🔄 Flujo de trabajo

**Para el MVP:**

`MVP` → Validación y estabilización → `main` → `gh-pages`

**Para el CRM:**

`development` → `feature/nombre-funcionalidad` → `development`

Este esquema permite mantener un ciclo de evolución ágil para el MVP y, al mismo tiempo, organizar el desarrollo del CRM mediante ramas independientes por funcionalidad.
