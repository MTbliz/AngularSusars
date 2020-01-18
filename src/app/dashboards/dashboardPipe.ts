import { Pipe, PipeTransform } from '@angular/core';
import {Susar} from 'src/app/susars/susar';
import {Type} from 'src/app/list-filters-type/type';

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
        numberArray.push(resultArray.length);
}
return numberArray;
}
}
