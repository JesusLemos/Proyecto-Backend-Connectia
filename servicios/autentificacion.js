const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const conSecreta = process.env.JWT_SECRET || 'ADLSNVLSNDLKNVSDFT';

