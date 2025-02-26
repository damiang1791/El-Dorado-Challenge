# Bienvenido al coding-interview-backend-level-3 - Parte I

## Descripción
Eres el Senior Developer de tu equipo en El Dorado, y te han dado la responsabilidad de desarrollar un nuevo feature que nos pide el equipo de producto:

> API REST que permita realizar operaciones CRUD sobre una entidad de tipo `Item`.
>
> La entidad tiene 3 campos: `id`, `name` y `price`.
>
>

# Requisitos:
- Si el servicio se reinicia, los datos no se pueden perder.
- Tienes que implementar tu codigo como si estuvieses haciendo un servicio para El Dorado listo para produccion.
- Completar la implementación de toda la funcionalidad de forma tal de que los tests e2e pasen exitosamente.


### Que puedes hacer: 
- ✅ Modificar el código fuente y agregar nuevas clases, métodos, campos, etc.
- ✅ Cambiar dependencias, agregar nuevas, etc.
- ✅ Modificar la estructura del proyecto (/src/** es todo tuyo)
- ✅ Elegir una base de datos
- ✅ Elegir un framework web
- ✅ Crear tests
- ✅ Cambiar la definición del .devContainer


### Que **no** puedes hacer:
- ❌ No puedes modificar el archivo original /e2e/index.test.ts (pero puedes crear otros test si lo deseas)
- ❌ El proyecto debe usar Typescript 
- ❌ Estresarte 🤗


## Pasos para comenzar
1. Haz un fork usando este repositorio como template
2. Clona el repositorio en tu máquina
3. Realiza los cambios necesarios para que los tests pasen
4. Sube tus cambios a tu repositorio
5. Avísanos que has terminado
6. ???
7. PROFIT

### Cualquier duda contactarme a https://www.linkedin.com/in/andreujuan/


## 🚀 Configuración y Uso del Proyecto  

### 1️⃣ Configuración del Entorno  
Antes de iniciar el proyecto, crea un archivo `.env` a partir de `.env.template`:  
```bash
cp .env.template .env
```
Luego, configura las variables de entorno según sea necesario.  

---

### 2️⃣ Levantar el Proyecto  
Para iniciar el proyecto y crear los contenedores necesarios, ejecuta:  
```bash
npm run compose:up
```  
Esto iniciará los servicios definidos en Docker Compose.  

---

### 3️⃣ Detener los Contenedores  
Para bajar los contenedores y liberar los recursos, usa:  
```bash
npm run compose:down
```

---

### 4️⃣ Acceder a la Documentación (Swagger)  
Una vez que el proyecto esté en ejecución, accede a:  
```
http://localhost:<PUERTO>/documentation
```
Aquí encontrarás la documentación generada con Swagger.

---

### 5️⃣ Ejecutar los Tests  
Para correr los tests, usa:  
```bash
npm run test
```
Si es la primera vez, instala las dependencias primero:  
```bash
npm i
npm run test
```

