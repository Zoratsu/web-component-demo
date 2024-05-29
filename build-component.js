const fs = require('fs-extra');

const build = async () =>{
  const originPath = './dist/otp-web-component/browser/';
  const endingPath = './otp/';
  const files = [
    'main.js',
    'polyfills.js'
  ];
  await fs.ensureDir('dist');
  await fs.ensureDir('dist/otp-web-component');
  await fs.ensureDir('dist/otp-web-component/browser');
  await fs.ensureDir('otp');
  await Promise.all(
    files
      .map(file => ({origin: originPath+file, ending: endingPath+file}))
      .map(({origin, ending}) => fs.copy(origin, ending))
  );
}
build();
