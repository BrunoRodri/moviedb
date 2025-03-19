interface ImportMetaEnv {
  readonly VITE_TMDB_API_KEY: string; // Defina suas variáveis de ambiente aqui
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}