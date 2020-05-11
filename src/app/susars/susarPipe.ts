import { Pipe, PipeTransform } from '@angular/core';
import { Susar } from 'src/app/susars/susar';

@Pipe({
    name: 'susarPipe'
})
export class SusarPipe implements PipeTransform {

    transform() { }

    transformAll(susars: Susar[], susarTypes: string[], susarStudies: string[], susarCountries: string[], susarSites: string[]): Susar[] {
        var resultArray: Susar[] = [];
        if (susarTypes.length === 0 && susarStudies.length === 0 && susarCountries.length === 0 && susarSites.length === 0) {
            resultArray = susars;
        } else {
            resultArray = susars.filter(susar => susarTypes.includes(susar.type) && susar.type != null || susarTypes.length === 0)
                .filter(susar => susarStudies.includes(susar.study) && susar.study != null || susarStudies.length === 0)
                .filter(susar => susarCountries.includes(susar.country) && susar.country != null || susarCountries.length === 0)
                .filter(susar => susarSites.includes(susar.site) && susar.site != null || susarSites.length === 0)
                .map(susar => new Susar(susar.iD, susar.study, susar.country, susar.site, susar.number, susar.type, susar.reciptDate, susar.sentDate, susar.aorDate));
        }
        return resultArray;
    }
}
