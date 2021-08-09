import config from 'config';
import { dbConfig } from '@interfaces/db.interface';

const { host, port, database, username, password, cluster }: dbConfig = config.get('dbConfig');

export const dbConnection = {
  url: `mongodb://${host}:${port}/${database}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};

export const dbAtlasConnection = {
  url: `mongodb+srv://${username}:${password}@${cluster}.nv0hj.mongodb.net/${database}?retryWrites=true&w=majority`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
