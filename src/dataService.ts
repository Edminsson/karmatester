namespace Dummy {
    interface IData {
        id: number;
        svenska: string;
        spanska: string;
    }
    export class DataService {
        data: IData[];
        constructor() {
            this.data = [
                {id: 1, svenska: "ett", spanska: "uno"},
                {id: 2, svenska: "två", spanska: "dos"},
                {id: 3, svenska: "tre", spanska: "tres"}
            ];
        }
        getData():IData[] {
            return this.data;
        }
    }
}