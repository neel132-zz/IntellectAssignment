Installation Steps -
    1. `npm install`
    2. `npx pod-install ios`

##Answer 1 - 
Implemented stack navigator for user to parse to widget one and widget two respectively.
In total there are three screens - home, widget one and widget two

Have implemented three test cases. For excuting testing use following command -
`npm run`

##Answer 2 -
The code structure for reusing components and api calls will be as follow -

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

  ##Answer 3 -
  Libraries worked with are listed below :-
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
        moment.unix(result).format('LLL')
        ```