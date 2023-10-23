// I found an online API witch can get me the hypernym of a word then I'm using
// each element in the array of assets of generate the url to get the JSON file 
// then save the assets and its hypernym as key value pair in an Map object. 



import { Injectable } from '@nestjs/common';

let url1 : string = 'https://api.wordnik.com/v4/word.json/';
let url3 : string = '/relatedWords?useCanonical=false&relationshipTypes=hypernym&limitPerRelationshipType=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
let hypernym : string;
var map : Map<string, string> = new Map;
var map2 : Map<string, string>;

// Here is an array samples of assets
let assets : string[] = ['blue', 'pleas','human', 'savings'];

const fetch = require('node-fetch');
let settings = { method: "Get" };


assets.forEach(function (item){
  let url = url1 + item + url3;
  fetch(url, settings)
    .then(function(res){
      return res.json();
    })
    .then((json: any) => {
      if(typeof(json[0]) != 'undefined'){
        map.set(item,json[0].words[0] )
      }
      else
        map.set(item, 'null')
      console.log(map);
          
    });

});


console.log('shiowd');

map2 = map;
@Injectable()
export class AppService {
  getNull(): any {
    return null;
  }



}


