# Quiosco Next.js con App Router y Prisma

Este proyecto es una aplicación de quiosco desarrollada con [Next.js](https://nextjs.org/) (App Router), [Prisma ORM](https://www.prisma.io/), y PostgreSQL. Permite gestionar productos, categorías y órdenes, con panel de administración y funcionalidades en tiempo real.

## Características

- **Next.js App Router**: Navegación moderna y rutas anidadas.
- **Prisma ORM**: Acceso y manipulación de datos en PostgreSQL.
- **Panel de administración**: CRUD de productos y visualización de órdenes.
- **Carga de imágenes**: Integración con Cloudinary.
- **Notificaciones**: Uso de [react-toastify](https://fkhadra.github.io/react-toastify/introduction).
- **Estado global**: Manejo de pedidos con [zustand](https://docs.pmnd.rs/zustand/getting-started/introduction).
- **Validación**: Formularios validados con [zod](https://zod.dev/).
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/).

## Requisitos

- Node.js 18+
- PostgreSQL
- Variables de entorno configuradas (`DATABASE_URL`, etc.)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/quiosco-next.git
   cd quiosco-next
   ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Configura las variables de entorno en un archivo .env:
    ```bash
    DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/tu_db
    ```

4. Ejecuta las migraciones y genera el cliente Prisma:
    ```bash
    npx prisma migrate deploy
    npx prisma generate
    ```

5. (Opcional) Si quieres poblar la base de datos con datos de ejemplo:
    ```bash
    npm run prisma:seed
    ```

## Uso
Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre http://localhost:3000 en tu navegador para ver la aplicación.

Scripts útiles:
- npm run dev: Inicia el servidor de desarrollo.
- npm run build: Compila la aplicación para producción.
- npm run start: Inicia la aplicación en modo producción.
- npm run lint: Ejecuta el linter.
- npm run prisma:seed: Ejecuta el script de seed para poblar la base de datos.

## Estructura del proyecto

prisma/           # Esquema y seeds de la base de datos
src/              # Lógica de negocio, utilidades, tipos y prisma client
components/       # Componentes reutilizables (UI, productos, órdenes, admin)
app/              # Rutas y páginas (Next.js App Router)

## Tecnologías principales
- Next.js
- Prisma ORM
- React
- Tailwind CSS
- Cloudinary
- Zustand
- React Toastify
- Zod

## Licencia
MIT


```bash
    Proyecto creado para fines educativos y de práctica con Next.js y Prisma.
```