export const allowedOrigins = ['http://localhost:5173', 'https://elegant-syrniki-f2876b.netlify.app/'];

export const corsOptions = {
  origin: (origin: any, callback: (err: Error | null, origin?: string | boolean) => void) => {
    if (allowedOrigins.indexOf(origin as string) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
  credentials: true,
};
