import {InMemoryDbService} from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb(){
    let TestData=[
      { email: 'ram@gmail.com', password: '0000000000', country:'india' },
      { email: 'sh@gmail.com', password: '1111111111', country:'india'  },
      { email: 'moh@live.in', password: '2222222222', country:'india'  },
     
    ];
    return {testdata:TestData};
  }
}