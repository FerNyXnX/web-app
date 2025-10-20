# 🎬 MovieExplorer

Una aplicación web moderna para explorar películas usando React, Redux Toolkit, y la API de TMDB.

## 🚀 Características

- ✨ Exploración de películas populares, mejor valoradas y próximos estrenos
- 🔍 Búsqueda en tiempo real con debounce
- ❤️ Sistema de favoritos con persistencia en localStorage
- 📱 Diseño totalmente responsive
- 🎨 Interfaz moderna con styled-components
- 🧪 Tests completos con Jest (>85% cobertura)
- ⚡ Manejo de estado eficiente con Redux Toolkit

## 🛠️ Tecnologías

- **React 18** - Biblioteca de interfaz de usuario
- **Redux Toolkit** - Manejo de estado
- **React Router DOM** - Navegación
- **Axios** - Cliente HTTP
- **Styled Components** - Estilos en JS
- **Jest & React Testing Library** - Testing
- **TMDB API** - Datos de películas

## 📋 Requisitos Previos

- Node.js >= 14.0.0
- npm >= 6.0.0
- Cuenta en [TMDB](https://www.themoviedb.org/) para obtener API Key

## 🔧 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/movie-explorer.git
cd movie-explorer
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto:
```env
REACT_APP_TMDB_API_KEY=tu_api_key_aqui
REACT_APP_TMDB_BASE_URL=https://api.themoviedb.org/3
REACT_APP_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

4. Inicia la aplicación:
```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## 🧪 Ejecutar Tests
```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests con cobertura
npm run test:coverage
```

## 📦 Build para Producción
```bash
npm run build
```

## 🗂️ Estructura del Proyecto
```
movie-explorer/
├── public/
├── src/
│   ├── __tests__/          # Tests unitarios
│   ├── components/         # Componentes React
│   ├── hooks/             # Custom hooks
│   ├── pages/             # Páginas/vistas
│   ├── redux/             # Store y slices
│   ├── services/          # APIs y servicios
│   ├── styles/            # Estilos globales y tema
│   └── utils/             # Utilidades y helpers
└── package.json
```

## 🎨 Diseño UX/UI

El diseño se basa en:
- **User Persona**: María González, diseñadora de 28 años, amante del cine
- **Paleta de colores**: Negro, rojo (#e50914), y tonos grises
- **Tipografía**: Segoe UI para mejor legibilidad
- **Mobile-first**: Diseño responsive desde 320px

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:
1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'feat(scope): add amazing feature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

## 👤 Autor

Fernando - [@FerNyXnX](https://github.com/FerNyXnX)

## 🙏 Agradecimientos

- [TMDB](https://www.themoviedb.org/) por proporcionar la API
- Comunidad de React por las increíbles herramientas