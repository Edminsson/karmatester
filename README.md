## Some karma tests for a most basic Angular application 

- observe that mini.html is served by karma using http://localhost:9876/base/mini.html it also included and hence automatically fetched along the rest of the files in the files property in karma.conf.js.

- Observe that we have to have the services specified before the app.js in karma.conf.js in order for things to work. Otherwise services will not be found when declared.

- in bodytests.ts you can find a simple asynchronous test.

- the rest of the test files are angular test with injection and mocking of services.

- we also create a simple spy on $scope

Se även https://github.com/Edminsson/AngularKarmaTesting
