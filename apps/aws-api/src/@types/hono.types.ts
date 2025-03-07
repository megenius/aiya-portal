export type Env = {
  Bindings: Bindings;
  Variables: Variables;
};

type Variables = {
  token: string;
};

type Bindings = {
  NODE_ENV: string
  LAMBDA_SECRET_KEY: string
}

