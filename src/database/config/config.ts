interface IConfig {
  URI: string;
  options: {
    useNewUrlParser: boolean;
    useUnifiedTopology: boolean;
  };
}

const config: IConfig = {
  URI: process.env.MONGO_URI || "",
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

export default config;
