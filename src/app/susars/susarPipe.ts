import { Pipe, PipeTransform } from '@angular/core';
import {Susar} from 'src/app/susars/susar';

@Pipe({
  name: 'susarPipe'
})
export class SusarPipe implements PipeTransform {
   transform(susars:Susar[], susarTypes:string[]):Susar[] {
   var resultArray: Susar[] = [];
   if (susarTypes.length === 0) {
   resultArray = susars;
   } else {
   for (let susar of susars) {
                      if (susar.type != null && susarTypes.indexOf(susar.type) !== -1) {
                      const newSusar = new Susar(susar.iD, susar.study, susar.country, susar.site, susar.number, susar.type, susar.reciptDate, susar.sentDate, susar.aorDate);
                          resultArray.push(newSusar);

                      }
                  }
   }
   return resultArray;
  }

  transformStudies(susars:Susar[], susarStudies:string[]):Susar[] {
     var resultArray: Susar[] = [];
     if (susarStudies.length === 0) {
     resultArray = susars;
     } else {
     for (let susar of susars) {
                        if (susar.study != null && susarStudies.indexOf(susar.study) !== -1) {
                        const newSusar = new Susar(susar.iD, susar.study, susar.country, susar.site, susar.number, susar.type, susar.reciptDate, susar.sentDate, susar.aorDate);
                            resultArray.push(newSusar);

                        }
                    }
     }
     return resultArray;
    }

    transformCountries(susars:Susar[], susarCountries:string[]):Susar[] {
       var resultArray: Susar[] = [];
       if (susarCountries.length === 0) {
       resultArray = susars;
       } else {
       for (let susar of susars) {
                          if (susar.country != null && susarCountries.indexOf(susar.country) !== -1) {
                          const newSusar = new Susar(susar.iD, susar.study, susar.country, susar.site, susar.number, susar.type, susar.reciptDate, susar.sentDate, susar.aorDate);
                              resultArray.push(newSusar);
                          }
                      }
       }
       return resultArray;
      }

      transformSites(susars:Susar[], susarSites:string[]):Susar[] {
         var resultArray: Susar[] = [];
         if (susarSites.length === 0) {
         resultArray = susars;
         } else {
         for (let susar of susars) {
                            if (susar.site != null && susarSites.indexOf(susar.site) !== -1) {
                            const newSusar = new Susar(susar.iD, susar.study, susar.country, susar.site, susar.number, susar.type, susar.reciptDate, susar.sentDate, susar.aorDate);
                                resultArray.push(newSusar);
                            }
                        }
         }
         return resultArray;
        }

        transformAll(susars:Susar[], susarTypes:string[], susarStudies:string[], susarCountries:string[], susarSites:string[]):Susar[] {
         var resultArray: Susar[] = [];
         console.log(susarTypes.length);
                 if (susarTypes.length === 0 && susarStudies.length === 0 && susarCountries.length === 0 && susarSites.length === 0) {
                 resultArray = susars;
                 } else {
                 for (let susar of susars) {
                 if (susar.type != null && (susarTypes.indexOf(susar.type) !== -1 || susarTypes.length === 0)) {
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
        return resultArray;
}
}
