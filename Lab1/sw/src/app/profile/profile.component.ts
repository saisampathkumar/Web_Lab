import { Component, OnInit } from '@angular/core';
import{ Profile } from '../profile/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile : Profile[] = [{
    name: 'Sai Sampath Kumar Raigiri',
    age: 24,
    Address: '5056 Baltimore',
    Contact: 912999999,
    profileLink:'https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-1/p240x240/29063485_1659424430807667_4337560930995883609_n.jpg?_nc_cat=105&_nc_oc=AQlazz4tbl4rS5O5Mc-tdKPzzWz5j8pINw6XjzN3sL8kply2Rg2H5k3MMLd0bZJXbLpnFX6FpdA_DLzfmN_dd1zo&_nc_ht=scontent.fmkc1-1.fna&oh=fb52eaac1cef2ae4faf99eff8660a1c2&oe=5E2D9010'
  },
  {
    name: 'Anvesh Mandadi',
    age: 24,
    Address: '5056 Baltimore',
    Contact: 9123299999,
    profileLink: 'https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-1/p240x240/28277216_988077894663709_5314593823858674544_n.jpg?_nc_cat=103&_nc_oc=AQkQIkeWyeMfp7rf_iNiBAcvwwQWYc5NAxIAaPoUATPXj7t4Qbry1RcVayViIaEUl_zNElzwfroo2omF8VAqoYZ5&_nc_ht=scontent.fmkc1-1.fna&oh=600a65c01173adc9f7a72537e0c06c50&oe=5E2895AE'
  },{
    name: 'Veersha THotigar',
    age: 24,
    Address: '5056 Baltimore',
    Contact: 910099999,
    profileLink: 'https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-1/p240x240/13428651_1017332701677081_8770196585138921115_n.jpg?_nc_cat=110&_nc_oc=AQmqSVRwVMVDmXfrRb9SATC52ROs-EomrGUdgbMlpGCgN8bXo0J8xMNrBsZpOAEvCUcWqxW7xLImPMr1yektPkxR&_nc_ht=scontent.fmkc1-1.fna&oh=6132949b63b7b59537d9cafcfcb69099&oe=5E3C43E0'
  },{
    name: 'Dwaraka Mohanty',
    age: 24,
    Address: '5056 Baltimore',
    Contact: 919999999,
    profileLink: 'https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-1/p240x240/11091486_692886500821994_2722523244771875430_n.jpg?_nc_cat=100&_nc_oc=AQlcz1oJpLh1b2QwwG5Z1qHtuhYubpQjoxPGJEaHWl4MLZuY9-PMl8se-kPaa1y_c9adxpX7nTxqLBstxQNhf7_-&_nc_ht=scontent.fmkc1-1.fna&oh=5493b59df666c2fa7c733e398b62a746&oe=5E399930'
  },{
    name: 'sireesha keesara',
    age: 24,
    Address: '5056 Baltimore',
    Contact: 912994499,
    profileLink:'https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240a/p240x240/48426242_1855189894589526_7298300615988346880_n.jpg?_nc_cat=108&_nc_oc=AQknrJWqyxy8Ra9Z0VVQqEhHfgiVtzRRxW7TGNkqGTsW2a9N5_2mhoKOQBBTCHsvn5VgI7dhKuyi1GCh40CEKAJ8&_nc_ht=scontent.fmkc1-1.fna&oh=dfdb805335b4ec36db588d42df31f02c&oe=5DF077AF',
  }];

  constructor() { }

  ngOnInit() {
  }

}

