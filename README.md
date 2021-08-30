Installation Steps -

    1. `npm install`
    2. `npx pod-install ios`

## Answer 1 - 
Implemented stack navigator for user to parse to widget one and widget two respectively.
In total there are three screens - home, widget one and widget two

Have implemented three test cases. For excuting testing use following command -

`npm run`

## Answer 2 -
The code structure for reusing and api calls will be as follow -

```
src
 -assets
  --icons/
  --fonts/
 -components
  --Button.jsx
  --TextInput.jsx
 -config
  --axiosConfig.js
  --navigationConfig.js
 -constants
  --constants.js
 -screens
  -home
   -components
    --DailyFeeds.jsx
   --index.js
 -utilities
  --DateTimeUtils.js
  
```
## Answer 3 -
  Few Libraries worked with are listed below -

  1. lodash
      ```
      Example -
      const result = [`testone`];
      _.isEmpty(result)
      ```

  2. moment
      ```
      Example -
      const result = 1595007379;
      moment.unix(result).format(`LLL`)
      ```

  3. uuidv4
      ```
      Example -
      const { uuid } = require('uuidv4');
      console.log(uuid) // "11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000"
        ```
        
  4. react-qrcode-logo
      ```
      import { QRCode } from 'react-qrcode-logo';
      return <QRCode value="https://github.com/gcoro/react-qrcode-logo" />
      ```

  5. crypto-js
      ```
      var CryptoJS = require("crypto-js");
      // Encrypt
      var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();

      // Decrypt
      var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
      var originalText = bytes.toString(CryptoJS.enc.Utf8);

      console.log(originalText); // 'my message'
      ```

  6. pbkdf2
      ```
      var pbkdf2 = require('pbkdf2')
      var derivedKey = pbkdf2.pbkdf2Sync('password', 'salt', 1, 32, 'sha512')
      ```

  7. axios
      ```
      const axios = require('axios');
      const instance = axios.create({
            baseURL: 'https://domain.com/api',
            timeout: 1000,
            headers: {'Authentication': 'Bearer<token>'}
      });
      instance.get('/user/12345');
      ```

  8. react-native-error-boundary
      ```
      import ErrorBoundary from 'react-native-error-boundary'

      const App = () => (
            <ErrorBoundary>
                  <ChildrenThatCouldThrowEror />
            </ErrorBoundary>
      )
      ```

  9. react-native-snackbar
      ```
      import Snackbar from 'react-native-snackbar';
      Snackbar.show({
            text: 'Hello world',
            duration: Snackbar.LENGTH_SHORT,
      });
      ```

  10. joi
      ```
      const Joi = require('joi');

      const schema = Joi.object({
      username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),

      password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

      schema.validate({ username: 'abc' });
      // -> { value: { username: 'abc' } }

      schema.validate({});
      // -> { value: {}, error: '"username" is required' }

      ```

## Answer 4 -
#### Issue 1 - When audio starts playing and user minimize the app, user have no control to pause the audio.
#### Issue 2 - When internet is turned off before audio loads, and then when the internet is turned on after approx 15 seconds, the audio keeps on loading.
#### Issue 3 - When users system media volume is zero, app while playing audio does not consent user to increase the volume for better experience.
#### Issue 4 - In Journal, where users input is mandatory to proceed; user can skip by just adding space.
#### Issue 5 - On system notification, instead of intellect icon there is default notification bell icon.