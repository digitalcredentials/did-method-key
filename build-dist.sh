mkdir ./dist/esm
cat >dist/esm/index.js <<!EOF
import cjsModule from '../index.js';
export const DidKeyDriver = cjsModule.DidKeyDriver;
export const driver = cjsModule.driver;
export const createFromMultibase = cjsModule.createFromMultibase
!EOF

cat >dist/esm/package.json <<!EOF
{
  "type": "module"
}
!EOF
