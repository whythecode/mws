module.exports = function (name) {

  const value = process.env[name];

  if (!value) {

    console.log(`Missing environment variable "{name}"`);
    process.exit(1);
  }

  return value;
};
