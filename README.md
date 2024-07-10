This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
![Icono](/public/snake-1.png)

# CaseSnake

Una tienda que personaliza tus cases para tu iphone a partir de cualquier imagen.


## Descripción

CaseSnake es una aplicación web que permite a los usuarios personalizar y comprar fundas para sus iPhones utilizando imágenes personalizadas. La aplicación ofrece una experiencia de usuario fluida y segura, con integración para autenticación, pagos y envío de correos.

## Características

- Personalización de fundas para iPhone con imágenes.
- Autenticación de usuarios.
- Integración con Stripe para pagos seguros.
- Subida de imágenes mediante Uploadthing.
- Notificaciones por correo electrónico utilizando React Email y Resend.
- Base de datos gestionada con Prisma y NeonTech.
- Interfaz de usuario elegante utilizando como base Shadcn.

## Tecnologías Utilizadas

- **Framework**: [Next.js](https://nextjs.org/)
- **Autenticación**: [Kinde](https://app.kinde.com/auth/cx/_:nav&m:register&psid:f105452d7044486f9f0f6125a205b3da)
- **Estilos**: [Shadcn](https://ui.shadcn.com/docs/installation)
- **Subida de Archivos**: [Uploadthing](https://uploadthing.com/)
- **Base de Datos**: [NeonTech](https://neon.tech/)
- **Integración de Pagos**: [Stripe](https://dashboard.stripe.com/setup-guide)
- **Maquetado de Correos**: [React Email](https://react.email/)
- **Envío de Correos**: [Resend](https://resend.com/api-keys)

## Ejecutar Entorno DEV

1. Clonar el repositorio
2. Renombrar el archivo **.env.example** a **.env** y llenar las variables correspondientes
3. Instalar las dependencias

```
npm install
```

4.  Configurar la base de datos (NeonTech)

```
npx prisma db push
```

