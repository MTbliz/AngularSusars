import { Pipe, PipeTransform } from '@angular/core';
import {Susar} from 'src/app/susars/susar';
import {Type} from 'src/app/list-filters-type/type';
import {Country} from 'src/app/list-filters-countries/country';
import {Site} from 'src/app/list-filters-sites/site';


@Pipe({
  name: 'dashboardPipe'
})
export class DashboardPipe implements PipeTransform {
        transform(susars:Susar[], susarTypes:Type[], susarStudies:string[], susarCountries:string[], susarSites:string[]):number[] {
        var numberArray: number[] = [];
        for (let type of susarTypes){
         var resultArray: Susar[] = [];
                 if (susarTypes.length === 0 && susarStudies.length === 0 && susarCountries.length === 0 && susarSites.length === 0) {
                 resultArray = susars;
                 } else {
                 for (let susar of susars) {
                 if (susar.type != null && type.type === susar.type) {
                 if (susar.study != null && (susarStudies.indexOf(susar.study) !== -1 || susarStudies.length === 0)) {
                 if (susar.country != null && (susarCountries.indexOf(susar.country) !== -1 || susarCountries.length === 0)) {
                 if (susar.site != null && (susarSites.indexOf(susar.site) !== -1 || susarSites.length === 0 )) {
                                             const newSusar = new Susar(susar.iD, susar.study, susar.country, susar.site, susar.number, susar.type, susar.reciptDate, susar.sentDate, susar.aorDate);
                                                 resultArray.push(newSusar);
                                             }
        }
        }
        }
        }
        }
        if(resultArray.length>0){
           numberArray.push(resultArray.length);
         }
}
return numberArray;
}

      transformAoR(susars:Susar[], susarCountryTypes:Country[], susarStudies:string[], susarCountries:string[], susarSites:string[]):number[]{
      const numberAoRArray: number[] = [];
      for (let country of susarCountryTypes){
               var resultAoRArray: Susar[] = [];
                       if (susarCountryTypes.length === 0 && susarStudies.length === 0 && susarCountries.length === 0 && susarSites.length === 0) {
                       resultAoRArray = susars;
                       } else {
                       for (let susar of susars) {
                       if (susar.type != null) {
                       if (susar.study != null && (susarStudies.indexOf(susar.study) !== -1 || susarStudies.length === 0)) {
                       if (susar.country != null && country.country === susar.country && (susarCountries.indexOf(susar.country) !== -1 || susarCountries.length === 0)) {
                       if (susar.site != null && (susarSites.indexOf(susar.site) !== -1 || susarSites.length === 0 )) {

                                        if(susar.aorDate != null){
                                           const newSusar = new Susar(susar.iD, susar.study, susar.country, susar.site, susar.number, susar.type, susar.reciptDate, susar.sentDate, susar.aorDate);
                                                                        resultAoRArray.push(newSusar);
      }
      }
              }
              }
              }
              }
              }
               if(resultAoRArray.length>0){
                                          numberAoRArray.push(resultAoRArray.length);
                                          }
      }
      return numberAoRArray;
      }




 transformAoRSiteTrue(susars:Susar[], susarSiteTypes:Site[], susarStudies:string[], susarCountries:string[], susarSites:string[]):number[]{
      const numberAoRArray: number[] = [];
      for (let site of susarSiteTypes){
               var resultAoRSiteArrayTrue: Susar[] = [];
                       if (susarSiteTypes.length === 0 && susarStudies.length === 0 && susarCountries.length === 0 && susarSites.length === 0) {
                       resultAoRSiteArrayTrue = susars;
                       } else {
                       for (let susar of susars) {
                       if (susar.type != null) {
                       if (susar.study != null && (susarStudies.indexOf(susar.study) !== -1 || susarStudies.length === 0)) {
                       if (susar.country != null && (susarCountries.indexOf(susar.country) !== -1 || susarCountries.length === 0)) {
                       if (susar.site != null &&  site.site === susar.site && (susarSites.indexOf(susar.site) !== -1 || susarSites.length === 0 )) {

                                        if(susar.aorDate != null){
                                           const newSusar = new Susar(susar.iD, susar.study, susar.country, susar.site, susar.number, susar.type, susar.reciptDate, susar.sentDate, susar.aorDate);
                                                                        resultAoRSiteArrayTrue.push(newSusar);
      }
      }
              }
              }
              }
              }
              }

                            numberAoRArray.push(resultAoRSiteArrayTrue.length);

      }
      return numberAoRArray;
      }


 transformAoRSiteFalse(susars:Susar[], susarSiteTypes:Site[], susarStudies:string[], susarCountries:string[], susarSites:string[]):number[]{
      const numberAoRArray: number[] = [];
      for (let site of susarSiteTypes){
               var resultAoRSiteArrayFalse: Susar[] = [];
                       if (susarSiteTypes.length === 0 && susarStudies.length === 0 && susarCountries.length === 0 && susarSites.length === 0) {
                       resultAoRSiteArrayFalse = susars;
                       } else {
                       for (let susar of susars) {
                       if (susar.type != null) {
                       if (susar.study != null && (susarStudies.indexOf(susar.study) !== -1 || susarStudies.length === 0)) {
                       if (susar.country != null && (susarCountries.indexOf(susar.country) !== -1 || susarCountries.length === 0)) {
                       if (susar.site != null &&  site.site === susar.site && (susarSites.indexOf(susar.site) !== -1 || susarSites.length === 0 )) {

                                        if(susar.aorDate == null){
                                           const newSusar = new Susar(susar.iD, susar.study, susar.country, susar.site, susar.number, susar.type, susar.reciptDate, susar.sentDate, susar.aorDate);
                                                                        resultAoRSiteArrayFalse.push(newSusar);
      }
      }
              }
              }
              }
              }
              }

              numberAoRArray.push(resultAoRSiteArrayFalse.length);

      }
      return numberAoRArray;
      }

       transformOnlySelectedTypes(susars:Susar[], susarTypes:Type[], susarStudies:string[], susarCountries:string[], susarSites:string[]):Susar[] {
              var resultArray: Susar[] = [];
              for (let type of susarTypes){
                       if (susarTypes.length === 0 && susarStudies.length === 0 && susarCountries.length === 0 && susarSites.length === 0) {
                       resultArray = susars;
                       } else {
                       for (let susar of susars) {
                       if (susar.type != null && type.type === susar.type) {
                       if (susar.study != null && (susarStudies.indexOf(susar.study) !== -1 || susarStudies.length === 0)) {
                       if (susar.country != null && (susarCountries.indexOf(susar.country) !== -1 || susarCountries.length === 0)) {
                       if (susar.site != null && (susarSites.indexOf(susar.site) !== -1 || susarSites.length === 0 )) {
                                                   const newSusar = new Susar(susar.iD, susar.study, susar.country, susar.site, susar.number, susar.type, susar.reciptDate, susar.sentDate, susar.aorDate);
                                                       resultArray.push(newSusar);
                                                   }
              }
              }
              }
              }
              }
              }
      return resultArray;
      }



  transformOnlySelectedCountries(susars:Susar[], susarCountryTypes:Country[], susarStudies:string[], susarCountries:string[], susarSites:string[]):Susar[]{
      var resultArray: Susar[] = [];
      for (let country of susarCountryTypes){
                       if (susarCountryTypes.length === 0 && susarStudies.length === 0 && susarCountries.length === 0 && susarSites.length === 0) {
                       resultArray = susars;
                       } else {
                       for (let susar of susars) {
                       if (susar.type != null) {
                       if (susar.study != null && (susarStudies.indexOf(susar.study) !== -1 || susarStudies.length === 0)) {
                       if (susar.country != null && country.country === susar.country && (susarCountries.indexOf(susar.country) !== -1 || susarCountries.length === 0)) {
                       if (susar.site != null && (susarSites.indexOf(susar.site) !== -1 || susarSites.length === 0 )) {

                                        if(susar.aorDate != null){
                                           const newSusar = new Susar(susar.iD, susar.study, susar.country, susar.site, susar.number, susar.type, susar.reciptDate, susar.sentDate, susar.aorDate);
                                                                        resultArray.push(newSusar);
      }
      }
              }
              }
              }
              }
              }

      }
      return resultArray;
      }

transformOnlySelectedSites(susars:Susar[], susarSiteTypes:Site[], susarStudies:string[], susarCountries:string[], susarSites:string[]):Susar[]{
      var resultArray: Susar[] = [];
      for (let site of susarSiteTypes){
                       if (susarSiteTypes.length === 0 && susarStudies.length === 0 && susarCountries.length === 0 && susarSites.length === 0) {
                       resultArray = susars;
                       } else {
                       for (let susar of susars) {
                       if (susar.type != null) {
                       if (susar.study != null && (susarStudies.indexOf(susar.study) !== -1 || susarStudies.length === 0)) {
                       if (susar.country != null && (susarCountries.indexOf(susar.country) !== -1 || susarCountries.length === 0)) {
                       if (susar.site != null &&  site.site === susar.site && (susarSites.indexOf(susar.site) !== -1 || susarSites.length === 0 )) {

                                           const newSusar = new Susar(susar.iD, susar.study, susar.country, susar.site, susar.number, susar.type, susar.reciptDate, susar.sentDate, susar.aorDate);
                                                                        resultArray.push(newSusar);
      }
              }
              }
              }
              }
              }

      }
      return resultArray;
      }



}


