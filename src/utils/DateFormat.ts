import moment from "moment";

export class DateFormat {

    public static doFormat(date: string, format: string):string {
        return moment(date).format(format);
    }
}