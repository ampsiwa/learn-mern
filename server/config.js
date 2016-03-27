const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://52.10.203.129:27017/mern',
  port: process.env.PORT || 8000,
};

export default config;
