import angular from 'angular';
import template from './my-collection.jade';
import { name as ParseServiceModule } from 'services/parse';
import './my-collection.scss';

/* @ngInject */
function gsMyCollectionController (ParseService) {
  const dm = this;
  dm.myComicCollection = [];

  dm.testing = function () {
    console.log('ello!')
  }

  dm.getCollection = function () {
    ParseService.getCollection().success(function(data){
      dm.myComicCollection = data.results;
    });
  }; //GET NOT WORKING YET/GETTING UNAUTHORIZED

  dm.addComic = function (comicInfo) {
    ParseService.addComic(comicInfo).success(function(data){
      dm.myComicCollection.push(comicInfo);
    });
  }
  dm.myComicCollection.push(
{
           "ACL": {
               "*": {
                   "read": true,
                   "write": true
               }
           },
           "comment": "new",
           "createdAt": "2015-06-07T04:33:32.179Z",
           "description": "In a colony of thugs and criminals, there’s plenty of work in maintaining the “peace” of Knowhere. But a new power is rising, one that threatens to tear apart the threadbare fabric of the celestial head’s society. The mantle of a Guardian weighs heavily on its bearers shoulders. Will those destined to safeguard Battleworld’s moon accept that burden in time to save its citizens?",
           "image": "http://i.annihil.us/u/prod/marvel/i/mg/6/d0/5571de8ac7518/portrait_fantastic.jpg",
           "objectId": "IcKZrrPcCF",
           "title": "Guardians of Knowhere (2015) #2",
           "upc": "75960608285800211",
           "updatedAt": "2015-06-07T10:27:09.532Z"
       },
       {
           "comment": "Brand New",
           "createdAt": "2015-06-07T11:27:45.786Z",
           "description": "Miguel O’Hara finds himself in the middle of bidding war between Parker Industries and rival Alchemax! Not only that, but his traveling through time has put the people he cares about in the year 2014 in imminent danger! ",
           "image": "http://i.annihil.us/u/prod/marvel/i/mg/b/c0/554ccb0c7a2c5/portrait_fantastic.jpg",
           "objectId": "8LCRsfQPoO",
           "title": "Spider-Man 2099 (2014) #12",
           "upc": "75960608068701211",
           "updatedAt": "2015-06-07T11:27:45.786Z"
       },
       {
           "createdAt": "2015-06-07T11:30:00.422Z",
           "description": "It’s Spider-Man versus Beast in a knock-down, drag-out, no holds barred...science fair? Someone at the Jean Grey School knows Spider-Man’s secret identity! And it’s not someone who likes him! Plus, the incredibly short career of the All-New Sinister Six!",
           "image": "http://i.annihil.us/u/prod/marvel/i/mg/a/00/54fdd7a8755c4/portrait_fantastic.jpg",
           "objectId": "0dFxFrvZ3S",
           "title": "Spider-Man & the X-Men (2014) #4",
           "upc": "75960608174500411",
           "updatedAt": "2015-06-07T11:30:00.422Z"
       },
       {
           "createdAt": "2015-06-07T11:33:16.565Z",
           "description": "Revolution is over. The war has begun. Cyclops and his Uncanny X-Men are tired of the hunt. After another near-fatal Sentinel attack, they take the fight to S.H.I.E.L.D. Maria Hill claims she doesn’t know who’s building the Sentinels — but she hasn’t stopped them, either. She’s relying on Dazzler, S.H.I.E.L.D.’s mutant liaison, to help defuse the situation. But Dazzler lies incapacitated in Mystique’s headquarters — and Mystique makes a convincing imitation! And where is Magneto, the former head of the mutant movement? Then, it’s an Original Sin tie-in as Charles Xavier’s last will and testament is discovered, but what’s concealed within its pages might be the X-Men’s ultimate undoing! Could a previously unknown power now be their greatest threat? How will the Uncanny X-Men cope with the shadows of Xavier’s past? Collecting UNCANNY X-MEN (2013) #19-25. ",
           "image": "http://i.annihil.us/u/prod/marvel/i/mg/3/d0/555b96f62913a/portrait_fantastic.jpg",
           "objectId": "vDF3tXNfaT",
           "title": "Uncanny X-Men (Trade Paperback)",
           "upc": "",
           "updatedAt": "2015-06-07T11:33:16.565Z"
       },
       {
           "ACL": {
               "*": {
                   "read": true,
                   "write": true
               }
           },
           "comment": "new",
           "createdAt": "2015-06-07T04:33:32.179Z",
           "description": "In a colony of thugs and criminals, there’s plenty of work in maintaining the “peace” of Knowhere. But a new power is rising, one that threatens to tear apart the threadbare fabric of the celestial head’s society. The mantle of a Guardian weighs heavily on its bearers shoulders. Will those destined to safeguard Battleworld’s moon accept that burden in time to save its citizens?",
           "image": "http://i.annihil.us/u/prod/marvel/i/mg/6/d0/5571de8ac7518/portrait_fantastic.jpg",
           "objectId": "IcKZrrPcCF",
           "title": "Guardians of Knowhere (2015) #2",
           "upc": "75960608285800211",
           "updatedAt": "2015-06-07T10:27:09.532Z"
       },
       {
           "comment": "Brand New",
           "createdAt": "2015-06-07T11:27:45.786Z",
           "description": "Miguel O’Hara finds himself in the middle of bidding war between Parker Industries and rival Alchemax! Not only that, but his traveling through time has put the people he cares about in the year 2014 in imminent danger! ",
           "image": "http://i.annihil.us/u/prod/marvel/i/mg/b/c0/554ccb0c7a2c5/portrait_fantastic.jpg",
           "objectId": "8LCRsfQPoO",
           "title": "Spider-Man 2099 (2014) #12",
           "upc": "75960608068701211",
           "updatedAt": "2015-06-07T11:27:45.786Z"
       },
       {
           "comment": "Old",
           "createdAt": "2015-06-07T11:30:00.422Z",
           "description": "It’s Spider-Man versus Beast in a knock-down, drag-out, no holds barred...science fair? Someone at the Jean Grey School knows Spider-Man’s secret identity! And it’s not someone who likes him! Plus, the incredibly short career of the All-New Sinister Six!",
           "image": "http://i.annihil.us/u/prod/marvel/i/mg/a/00/54fdd7a8755c4/portrait_fantastic.jpg",
           "objectId": "0dFxFrvZ3S",
           "title": "Spider-Man & the X-Men (2014) #4",
           "upc": "75960608174500411",
           "updatedAt": "2015-06-07T11:30:00.422Z"
       },
       {
           "comment": "torn",
           "createdAt": "2015-06-07T11:33:16.565Z",
           "description": "Revolution is over. The war has begun. Cyclops and his Uncanny X-Men are tired of the hunt. After another near-fatal Sentinel attack, they take the fight to S.H.I.E.L.D. Maria Hill claims she doesn’t know who’s building the Sentinels — but she hasn’t stopped them, either. She’s relying on Dazzler, S.H.I.E.L.D.’s mutant liaison, to help defuse the situation. But Dazzler lies incapacitated in Mystique’s headquarters — and Mystique makes a convincing imitation! And where is Magneto, the former head of the mutant movement? Then, it’s an Original Sin tie-in as Charles Xavier’s last will and testament is discovered, but what’s concealed within its pages might be the X-Men’s ultimate undoing! Could a previously unknown power now be their greatest threat? How will the Uncanny X-Men cope with the shadows of Xavier’s past? Collecting UNCANNY X-MEN (2013) #19-25. ",
           "image": "http://i.annihil.us/u/prod/marvel/i/mg/3/d0/555b96f62913a/portrait_fantastic.jpg",
           "objectId": "vDF3tXNfaT",
           "title": "Uncanny X-Men (Trade Paperback)",
           "upc": "",
           "updatedAt": "2015-06-07T11:33:16.565Z"
       },
       {
           "ACL": {
               "*": {
                   "read": true,
                   "write": true
               }
           },
           "comment": "new",
           "createdAt": "2015-06-07T04:33:32.179Z",
           "description": "In a colony of thugs and criminals, there’s plenty of work in maintaining the “peace” of Knowhere. But a new power is rising, one that threatens to tear apart the threadbare fabric of the celestial head’s society. The mantle of a Guardian weighs heavily on its bearers shoulders. Will those destined to safeguard Battleworld’s moon accept that burden in time to save its citizens?",
           "image": "http://i.annihil.us/u/prod/marvel/i/mg/6/d0/5571de8ac7518/portrait_fantastic.jpg",
           "objectId": "IcKZrrPcCF",
           "title": "Guardians of Knowhere (2015) #2",
           "upc": "75960608285800211",
           "updatedAt": "2015-06-07T10:27:09.532Z"
       },
       {
           "comment": "Brand New",
           "createdAt": "2015-06-07T11:27:45.786Z",
           "description": "Miguel O’Hara finds himself in the middle of bidding war between Parker Industries and rival Alchemax! Not only that, but his traveling through time has put the people he cares about in the year 2014 in imminent danger! ",
           "image": "http://i.annihil.us/u/prod/marvel/i/mg/b/c0/554ccb0c7a2c5/portrait_fantastic.jpg",
           "objectId": "8LCRsfQPoO",
           "title": "Spider-Man 2099 (2014) #12",
           "upc": "75960608068701211",
           "updatedAt": "2015-06-07T11:27:45.786Z"
       },
       {
           "comment": "Old",
           "createdAt": "2015-06-07T11:30:00.422Z",
           "description": "It’s Spider-Man versus Beast in a knock-down, drag-out, no holds barred...science fair? Someone at the Jean Grey School knows Spider-Man’s secret identity! And it’s not someone who likes him! Plus, the incredibly short career of the All-New Sinister Six!",
           "image": "http://i.annihil.us/u/prod/marvel/i/mg/a/00/54fdd7a8755c4/portrait_fantastic.jpg",
           "objectId": "0dFxFrvZ3S",
           "title": "Spider-Man & the X-Men (2014) #4",
           "upc": "75960608174500411",
           "updatedAt": "2015-06-07T11:30:00.422Z"
       },
       {
           "comment": "Will Trade",
           "createdAt": "2015-06-07T11:33:16.565Z",
           "description": "Revolution is over. The war has begun. Cyclops and his Uncanny X-Men are tired of the hunt. After another near-fatal Sentinel attack, they take the fight to S.H.I.E.L.D. Maria Hill claims she doesn’t know who’s building the Sentinels — but she hasn’t stopped them, either. She’s relying on Dazzler, S.H.I.E.L.D.’s mutant liaison, to help defuse the situation. But Dazzler lies incapacitated in Mystique’s headquarters — and Mystique makes a convincing imitation! And where is Magneto, the former head of the mutant movement? Then, it’s an Original Sin tie-in as Charles Xavier’s last will and testament is discovered, but what’s concealed within its pages might be the X-Men’s ultimate undoing! Could a previously unknown power now be their greatest threat? How will the Uncanny X-Men cope with the shadows of Xavier’s past? Collecting UNCANNY X-MEN (2013) #19-25. ",
           "image": "http://i.annihil.us/u/prod/marvel/i/mg/3/d0/555b96f62913a/portrait_fantastic.jpg",
           "objectId": "vDF3tXNfaT",
           "title": "Uncanny X-Men (Trade Paperback)",
           "upc": "",
           "updatedAt": "2015-06-07T11:33:16.565Z"
       });
  // dm.addComic({"upc": "1234567890", "comment":"slightly used", "description": "test description", "image": "http://i.annihil.us/u/prod/marvel/i/mg/b/c0/554ccb0c7a2c5/portrait_fantastic.jpg", "title": "test title"});
  dm.getCollection();
  dm.testing();

}

function gsMyCollection () {
  return {
    scope : {
      title : '@'
    },
    template : template,
    controller : gsMyCollectionController,
    controllerAs : 'dm',
    bindToController : true
  };
}

export default angular.module('gstv.directives.my-collection', [
ParseServiceModule ])
  .directive('gsMyCollection', gsMyCollection);