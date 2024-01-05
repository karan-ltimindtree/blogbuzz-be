import app from './app.express';

const port = Number(process.env.PORT) || 3000;

app.listen(port, () => console.log(`server running on port :: ${port}`));

export default app;
