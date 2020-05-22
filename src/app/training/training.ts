export class Training{
    constructor(
        public id: number,
        public name: string,
        public version: number,
        public effectiveDate: Date,
        public stopDate: Date,
        public file: File,
    ){}
}